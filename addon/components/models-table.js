import {assign} from '@ember/polyfills';
import {typeOf, compare, isBlank, isNone, isPresent} from '@ember/utils';
import {run} from '@ember/runloop';
import Component from '@ember/component';
import {assert, warn} from '@ember/debug';
import EmberObject, {
  action,
  computed,
  getProperties,
  setProperties,
  set,
  get
} from '@ember/object';
import {classNames, layout as templateLayout} from '@ember-decorators/component';
import {observes} from '@ember-decorators/object';
import {alias, readOnly, filterBy, notEmpty} from '@ember/object/computed';
import {isArray, A} from '@ember/array';
import betterCompare from '../utils/better-compare';
import layout from '../templates/components/models-table';
import ModelsTableColumn, {propertyNameToTitle} from '../utils/column';

/**
 * @typedef {object} groupedHeader
 * @property {string} title header for grouped columns
 * @property {number} colspan HTML colspan attr
 * @property {number} rowspan HTML rowspan attr
 */

const {
  keys
} = Object;

const NOT_SORTED = -1;

/**
 * @ignore
 * @param {ModelsTableColumn} column
 * @returns {boolean}
 */
function isSortedByDefault(column) {
  return column.sortPrecedence > NOT_SORTED;
}

/**
 * Default filter-function used in the filter by columns
 *
 * @param {string} cellValue value in the table cell
 * @param {string} filterString needed substring
 * @returns {boolean}
 * @ignore
 */
function defaultFilter(cellValue, filterString) {
  return -1 !== cellValue.indexOf(filterString);
}

/**
 * @ignore
 * @param {string} option
 * @returns {{value: *, label: *}}
 */
function optionStrToObj(option) {
  return {value: option, label: option};
}

/**
 * Updates <code>filterOptions</code> for column which use <code>filterWithSelect</code>
 * and don't have <code>predefinedFilterOptions</code>
 * <code>filterOptions</code> are calculated like <code>data.mapBy(column.propertyName).uniq()</code>,
 * where data is component's <code>data</code>
 *
 * @param {string} propertyName
 * @returns {object[]}
 * @ignore
 */
function getFilterOptionsCP(propertyName) {
  return computed(`data.@each.${propertyName}`, function () {
    if (this.filterWithSelect && 'array' !== typeOf(this.predefinedFilterOptions)) {
      let _data = A(A(this.data).compact());
      let options = A(_data.mapBy(propertyName)).compact();
      if (this.sortFilterOptions) {
        options = options.sort();
      }
      return A(A(['', ...options]).uniq().map(optionStrToObj));
    }
    return [];
  });
}

function chunkBy(collection, propertyName, sortOrder) {
  const doSort = arguments.length === 3;
  const chunks = A([]);
  const values = [];
  if (!isArray(collection)) {
    return chunks;
  }
  collection.forEach(item => {
    const value = get(item, propertyName);
    if (values.indexOf(value) === -1) {
      values.push(value);
      chunks.push(A([]));
    }
    const index = values.indexOf(value);
    chunks[index].pushObject(item);
  });
  if (doSort) {
    const sortedValues = values.slice().sort((v1, v2) => {
      let result = betterCompare(v1, v2);
      if (result !== 0) {
        return (sortOrder === 'desc') ? (-1 * result) : result;
      }
      return 0;
    });
    return sortedValues.map(v => chunks[values.indexOf(v)]);
  }
  return chunks;
}

function objToArray(map) {
  let ret = [];
  if (isArray(map)) {
    map.forEach(m => {
      ret = [...ret, ...m];
    });
    return ret;
  }
  keys(map).forEach(k => {
    if (isArray(map[k])) {
      ret = [...ret, ...map[k]];
    }
  });
  return ret;
}

/**
 * Table-component with pagination, sorting and filtering.
 *
 * It should be used when whole dataset is already loaded. For server-side pagination, filtering and sorting
 * [models-table-server-paginated](Components.ModelsTableServerPaginated.html) should be used.
 *
 * Basic usage example:
 *
 * ```hbs
 * <ModelsTable @data={{model}} @columns={{columns}} />
 * ```
 *
 * Usage with block context:
 *
 * ```hbs
 * <ModelsTable @data={{data}} @columns={{columns}} as |MT|>
 *   <MT.GlobalFilter />
 *   <MT.DataGroupBySelect />
 *   <MT.ColumnsDropdown />
 *   <MT.Table />
 *   <MT.Footer />
 * </ModelsTable>
 * ```
 *
 * ModelsTable yields references to the following contextual components:
 *
 * * [models-table/global-filter](Components.ModelsTableGlobalFilter.html) - global filter used for table data
 * * [models-table/columns-dropdown](Components.ModelsTableColumnsDropdown.html) - dropdown with list of options to toggle columns and column-sets visibility
 * * [models-table/data-group-by-select](Components.ModelsTableDataGroupBySelect.html) - dropdown to select property for table-rows grouping
 * * [models-table/table](Components.ModelsTableTable.html) - table with a data
 * * [models-table/footer](Components.ModelsTableFooter.html) - summary and pagination
 *
 * Check own docs for each component to get detailed info.
 *
 * ModelsTable has a lot of options you may configure, but there are two required properties called `data` and `columns`. First one contains data (e.g. list of records from the store). Second one is a list of table's columns (check [models-table-column](Utils.ModelsTableColumn.html) for available options).
 *
 * @namespace Components
 * @class ModelsTable
 * @extends Ember.Component
 */
export default
@templateLayout(layout)
@classNames('models-table-wrapper')
class ModelsTableComponent extends Component {
  /**
   * Number of records shown on one table-page
   *
   * @type number
   * @property pageSize
   * @default 10
   */
  pageSize = 10;

  /**
   * Currently shown page number. It may be set initially
   *
   * @type number
   * @property currentPageNumber
   * @default 1
   */
  currentPageNumber = 1;

  /**
   * Order of sorting for each columns. Unsorted column firstly become sorted ASC, then DESC, then sorting is dropped again
   *
   * @property sortMap
   * @type object
   * @default {{ none: 'asc', asc: 'desc', desc: 'none' }}
   */
  sortMap = {
    none: 'asc',
    asc: 'desc',
    desc: 'none'
  };

  /**
   * List of properties to sort table rows
   *
   * Each value is like 'propertyName:sortDirection'
   *
   * @type string[]
   * @property sortProperties
   * @default []
   * @protected
   */
  sortProperties = A([]);

  /**
   * Hash of custom functions to sort table rows
   *
   * @type Object
   * @property sortFunctions
   * @default {}
   * @private
   */
  sortFunctions = Object.create(null);

  /**
   * @type string[]
   * @default ['processedColumns.@each.filterString', 'filterString', 'pageSize']
   * @private
   * @readonly
   */
  forceToFirstPageProps = A(['processedColumns.@each.filterString', 'filterString', 'pageSize']);

  /**
   * Determines if multi-columns sorting should be used
   *
   * @type boolean
   * @property multipleColumnsSorting
   * @default true
   */
  multipleColumnsSorting = true;

  /**
   * Determines if component footer should be shown on the page
   *
   * @type boolean
   * @property showComponentFooter
   * @default true
   */
  showComponentFooter = true;

  /**
   * Determines if dropdown for current page number should be shown near the pagination block
   *
   * @property showCurrentPageNumberSelect
   * @type boolean
   * @default true
   */
  showCurrentPageNumberSelect = true;

  /**
   * Determines if numeric pagination should be used
   *
   * @type boolean
   * @property useNumericPagination
   * @default false
   */
  useNumericPagination = false;

  /**
   * Determines if columns-dropdown should be shown
   *
   * @type boolean
   * @property showColumnsDropdown
   * @default true
   */
  showColumnsDropdown = true;

  /**
   * Determines if filtering by columns should be available to the user
   *
   * @type boolean
   * @property useFilteringByColumns
   * @default true
   */
  useFilteringByColumns = true;

  /**
   * Global filter value
   *
   * @type string
   * @property filterString
   * @default ''
   */
  filterString = '';

  /**
   * Determines if filtering (global and by column) should ignore case
   *
   * @type boolean
   * @property filteringIgnoreCase
   * @default false
   */
  filteringIgnoreCase = false;

  /**
   * Determines if filtering should be done by hidden columns
   *
   * **Notice:** after changing this value filtering results will be updated only after filter options are changed
   *
   * @type boolean
   * @property doFilteringByHiddenColumns
   * @default true
   */
  doFilteringByHiddenColumns = true;

  /**
   * Determines if 'Global filter'-field should be shown
   *
   * @type boolean
   * @property showGlobalFilter
   * @default true
   */
  showGlobalFilter = true;

  /**
   * Determines if focus should be on the 'Global filter'-field on component render
   *
   * @type boolean
   * @property focusGlobalFilter
   * @default false
   */
  focusGlobalFilter = false;

  /**
   * Value for development purposes. Used to check translation issues like:
   *
   * * Auto generated titles for columns
   *
   * @property checkTextTranslations
   * @type boolean
   * @default false
   */
  checkTextTranslations = false;

  /**
   * Determines if <code>processedColumns</code> will be updated if <code>columns</code> are changed (<code>propertyName</code> and
   * <code>template</code> are observed)
   * <b>IMPORTANT</b> All filter, sort and visibility options will be dropped to the default values while updating
   *
   * @type boolean
   * @property columnsAreUpdateable
   * @default false
   */
  columnsAreUpdateable = false;

  /**
   * Determines if rows should be grouped for some property
   *
   * Grouped value may be shown in the separated row on the top of the group or in the first column (in the cell with rowspan) in the each group (see {{#crossLink 'Components.ModelsTable/displayGroupedValueAs:property'}}displayGroupedValueAs{{/crossLink}})
   *
   * Generally you should not show column with property which is used for grouping (but it's up to you)
   *
   * @property useDataGrouping
   * @type boolean
   * @default false
   */
  useDataGrouping = false;

  /**
   * Property name used now for grouping rows
   *
   * **IMPORTANT** It should be set initially if {{#crossLink 'Components.ModelsTable/useDataGrouping:property'}}useDataGrouping{{/crossLink}} is set to `true`
   *
   * @property currentGroupingPropertyName
   * @type string
   * @default null
   */
  currentGroupingPropertyName = null;

  /**
   * Sort direction for grouped property values
   *
   * @property sortByGroupedFieldDirection
   * @type string
   * @default 'asc'
   * @private
   */
  sortByGroupedFieldDirection = 'asc';

  /**
   * Determines how grouped value will be displayed - as a row or column
   *
   * Allowed values are `row` and `column`
   *
   * @property displayGroupedValueAs
   * @type string
   * @default 'row'
   */
  displayGroupedValueAs = 'row';

  /**
   * Used in numeric pagination. If pages count is less than `collapseNumPaginationForPagesCount`, all pages will be shown.
   * E.g. for `collapseNumPaginationForPagesCount = 4` and `pagesCount = 4` pagination will be `1 2 3 4`, however for
   * `collapseNumPaginationForPagesCount = 1` and `pagesCount = 4` pagination will be `1 2 ... 4`
   *
   * @property collapseNumPaginationForPagesCount
   * @type number
   * @default 1
   */
  collapseNumPaginationForPagesCount = 1;

  /**
   * <code>columns</code> fields which are observed to update shown table-columns
   * It is used only if <code>columnsAreUpdateable</code> is <code>true</code>
   *
   * @type string[]
   * @property columnFieldsToCheckUpdate
   * @default ['propertyName', 'component']
   */
  columnFieldsToCheckUpdate = A(['propertyName', 'component']);

  /**
   * `themeInstance` is an instance of [DefaultTheme](Themes.Default.html) or it's children.
   * By default `models-table` uses [BootstrapTheme](Themes.Bootstrap3.html) instance.
   *
   * You may create your own theme-class and set `themeInstance` to it's instance. Check Theme properties you may define in your own theme.
   *
   * @type Themes.Bootstrap3
   * @property themeInstance
   */

  /**
   * All table records
   *
   * It's a first of the two attributes you must set to the component
   *
   * @type object[]
   * @property data
   * @default []
   */
  data = A([]);

  /**
   * Table columns. Check [ModelsTableColumn](Utils.ModelsTableColumn.html) for available properties
   *
   * It's a second of the two attributes you must set to the component
   *
   * @type object[]
   * @property columns
   * @default []
   */
  columns = A([]);

  /**
   * Hash of components to be used for columns.
   *
   * See [ModelsTableColumn](Utils.ModelsTableColumn.html), property component
   *
   * @type Object
   * @property columnComponents
   * @default {}
   */
  columnComponents = {};

  /**
   * Sets of columns that can be toggled together.
   * Each object should have:
   *  * `label` (string) - The label for the set. This will be displayed in the columns dropdown.
   *  * `showColumns` (array|Function) - This should either be an array of `propertyNames` to show, or a function. If it is a function, the function will be called with the `processedColumns` as attribute.
   *  * `hideOtherColumns` (boolean) -  If this is true (default), all columns not specified in <code>showColumns</code> will be hidden. If this is set to false, other columns will be left at whatever visibility they were before.
   *  * `toggleSet` (boolean) - If this is true (default is false), the set columns will be shown if one of them is currently hidden,
   else they will all be hidden. Settings this will result in a default of `hideOtherColumns=false`
   *
   * @type Object[]
   * @property columnSets
   * @default []
   */
  columnSets = A([]);

  /**
   * List of columns shown in the table. It's created from the {{#crossLink 'Components.ModelsTable/columns:property'}}columns{{/crossLink}} provided to the component
   *
   * @type Object[]
   * @property processedColumns
   * @default []
   * @private
   */
  processedColumns = A([]);

  /**
   * List of the additional headers. Used to group columns.
   *
   * Each object may have such fields:
   *
   * * `title` (string) - Header for grouped column
   * * `colspan` (number) - HTML colspan attr
   * * `rowspan` (number) - HTML rowspan attr
   *
   * @property groupedHeaders
   * @type groupedHeader[][]
   * @default []
   */
  groupedHeaders = A([]);

  /**
   * Determines if page size should be shown
   *
   * @type boolean
   * @property showPageSize
   * @default true
   */
  showPageSize = true;

  /**
   * Expanded row items.
   *
   * It's set to the initial value when current page or page size is changed
   *
   * @type object[]
   * @property expandedItems
   * @default null
   */
  @computed()
  get expandedItems() {
    return A([]);
  }
  set expandedItems(v) {
    return A(v);
  }

  /**
   * true - allow to expand more than 1 row,
   * false - only 1 row may be expanded in the same time
   *
   * @type boolean
   * @property multipleExpand
   * @default false
   */
  multipleExpand = false;

  /**
   * List of grouped property values where the groups are collapsed
   *
   * @type array
   * @property collapsedGroupValues
   * @default []
   */
  @computed()
  get collapsedGroupValues() {
    return A([]);
  }
  set collapsedGroupValues(v) {
    return A(v);
  }

  /**
   * Allow or disallow to select rows on click.
   * If `false` - no row can be selected
   *
   * @type boolean
   * @property selectRowOnClick
   * @default true
   */
  selectRowOnClick = true;

  /**
   * Allow or disallow to select multiple rows.
   * If `false` - only one row may be selected in the same time
   *
   * @type boolean
   * @property multipleSelect
   * @default false
   */
  multipleSelect = false;

  /**
   * Component used in the 'expanded' row
   *
   * It will receive several options:
   * * `record` - current row value
   * * `processedColumns` - current column (one of the {{#crossLink 'Components.ModelsTable/processedColumns:property'}}processedColumns{{/crossLink}})
   * * `index` - current row index
   * * `selectedItems` - bound from {{#crossLink 'Components.ModelsTable/selectedItems:property'}}selectedItems{{/crossLink}}
   * * `visibleProcessedColumns` - bound from {{#crossLink 'Components.ModelsTable/visibleProcessedColumns:property'}}visibleProcessedColumns{{/crossLink}}
   * * `clickOnRow` - closure action {{#crossLink 'Components.ModelsTable/actions.clickOnRow:method'}}ModelsTable.actions.clickOnRow{{/crossLink}}
   * * `themeInstance` - bound from {{#crossLink 'Components.ModelsTable/themeInstance:property'}}themeInstance{{/crossLink}}
   *
   * Usage:
   *
   * ```hbs
   * <ModelsTable @data={{model}} @columns={{columns}} @expandedRowComponent={{component "expanded-row"}} />
   * ```
   *
   * @type object
   * @property expandedRowComponent
   * @default null
   */
  expandedRowComponent = null;

  /**
   * Component used in the row with a grouped value
   *
   * This component won't be used if {{#crossLink 'Component.ModelsTable/useDataGrouping:property'}}useDataGrouping{{/crossLink}} is not `true`
   *
   * Component will receive several options:
   *
   * * `groupedValue` - grouped property value
   * * `currentGroupingPropertyName` - bound from {{#crossLink 'Components.ModelsTable/currentGroupingPropertyName:property'}}currentGroupingPropertyName{{/crossLink}}
   * * `displayGroupedValueAs` - bound from {{#crossLink 'Components.ModelsTable/displayGroupedValueAs:property'}}ModelsTable.displayGroupedValueAs{{/crossLink}}
   * * `toggleGroupedRows` - closure action {{#crossLink 'Components.ModelsTable/actions.toggleGroupedRows:method'}}ModelsTable.actions.toggleGroupedRows{{/crossLink}}
   * * `toggleGroupedRowsExpands` - closure action {{#crossLink 'Components.ModelsTable/actions.toggleGroupedRowsExpands:method'}}ModelsTable.actions.toggleGroupedRowsExpands{{/crossLink}}
   * * `toggleGroupedRowsSelection` - closure action {{#crossLink 'Components.ModelsTable/actions.toggleGroupedRowsSelection:method'}}ModelsTable.actions.toggleGroupedRowsSelection{{/crossLink}}
   * * `visibleProcessedColumns` - bound from {{#crossLink 'Components.ModelsTable/visibleProcessedColumns:property'}}ModelsTable.visibleProcessedColumns{{/crossLink}}
   * * `themeInstance` - bound from {{#crossLink 'Components.ModelsTable/themeInstance:property'}}ModelsTable.themeInstance{{/crossLink}}
   * * `groupedItems` - list of all rows group items
   * * `visibleGroupedItems` - list of rows group items shown on the current table page
   * * `selectedGroupedItems` - list of selected rows group items
   * * `expandedGroupedItems` - list of expanded rows group items
   *
   * Usage:
   *
   * ```hbs
   * <ModelsTable @data={{model}} @columns={{columns}} @groupingRowComponent={{component "grouping-row"}} />
   * ```
   *
   * @type object
   * @property groupingRowComponent
   * @default null
   */
  groupingRowComponent = null;

  /**
   * This component won't be used if {{#crossLink 'Component.ModelsTable/useDataGrouping:property'}}useDataGrouping{{/crossLink}} is not `true`
   *
   * Component will receive several options:
   *
   * * `visibleProcessedColumns` - bound from {{#crossLink 'Components.ModelsTable/visibleProcessedColumns:property'}}ModelsTable.visibleProcessedColumns{{/crossLink}}
   * * `themeInstance` - bound from {{#crossLink 'Components.ModelsTable/themeInstance:property'}}ModelsTable.themeInstance{{/crossLink}}
   * * `groupedItems` - list of all rows group items
   * * `visibleGroupedItems` - list of rows group items shown on the current table page
   * * `selectedGroupedItems` - list of selected rows group items
   * * `expandedGroupedItems` - list of expanded rows group items
   *
   * Usage:
   *
   * ```hbs
   * <ModelsTable @data={{model}} @columns={{columns}} @groupSummaryRowComponent={{component "group-summary-row"}} />
   * ```
   *
   * @type object
   * @property groupSummaryRowComponent
   * @default null
   */
  groupSummaryRowComponent = null;

  /**
   * Component for header cell for column with grouping value
   *
   * This component won't be used if {{#crossLink 'Component.ModelsTable/useDataGrouping:property'}}useDataGrouping{{/crossLink}} is not `true` and
   * {{#crossLink 'Component.ModelsTable/displayGroupedValueAs:property'}}displayGroupedValueAs{{/crossLink}} is not `columns`
   *
   * Usage:
   *
   * ```hbs
   * <ModelsTable @data={{model}} @columns={{columns}} @groupHeaderCellComponent={{component "group-header-cell"}} />
   * ```
   *
   * Component will receive such options:
   *
   * * `currentGroupingPropertyName` - property name used to group rows in the current moment
   *
   * @property groupHeaderCellComponent
   * @type object
   * @default null
   */
  groupHeaderCellComponent = null;

  /**
   * Closure action sent on user interaction
   *
   * Action will send one parameter - object with fields:
   *
   * * `sort` - list with sort value `propertyName:sortDirection`
   * * `currentPageNumber` - currently shown page number
   * * `pageSize` - current page size
   * * `filterString` - global filter value
   * * `filteredContent` - filtered data
   * * `selectedItems` - list with selected row items
   * * `expandedItems` - list with expanded row items
   * * `columnFilters` - hash with fields equal to filtered propertyName and values equal to filter values
   *
   * Usage:
   *
   * ```hbs
   * <ModelsTable @data={{model}} @columns={{columns}} @displayDataChangedAction={{action "someAction"}} />
   * ```
   *
   * @event displayDataChangedAction
   */
  displayDataChangedAction = null;

  /**
   * Action sent on init to give access to the Public API
   *
   * @default null
   * @property registerAPI
   * @type closureFunction
   */
  registerAPI = null;

  /**
   * Closure action sent on change of visible columns
   *
   * The action will receive an array of objects as parameter, where every object looks like this: `{ propertyName: 'firstName', isHidden: true, mayBeHidden: false }`
   *
   * * Usage:
   *
   * ```hbs
   * <ModelsTable @data={{model}} @columns={{columns}} @columnsVisibilityChangedAction={{action "someAction"}} />
   * ```
   *
   * @event columnsVisibilityChangedAction
   */
  columnsVisibilityChangedAction = null;

  /**
   * Closure action sent on row double-click
   *
   * Usage
   *
   * ```hbs
   * <ModelsTable @data={{model}} @columns={{columns}} @rowDoubleClickAction={{action "someAction"}} />
   * ```
   *
   * @event rowDoubleClickAction
   */
  rowDoubleClickAction = null;

  /**
   * Closure action sent on row hover
   *
   * Usage
   *
   * ```hbs
   * <ModelsTable @data={{model}} @columns={{columns}} @rowHoverAction={{action "someAction"}} />
   * ```
   *
   * @event rowHoverAction
   */
  rowHoverAction = null;

  /**
   * Closure action sent on row out
   *
   * Usage
   *
   * ```hbs
   * <ModelsTable @data={{model}} @columns={{columns}} @rowOutAction={{action "someAction"}} />
   * ```
   *
   * @event rowOutAction
   */
  rowOutAction = null;

  /**
   * List of currently selected row items
   *
   * Row may be selected by clicking on it, if {{#crossLink 'Components.ModelsTable/selectRowOnClick:property'}}selectRowOnClick{{/crossLink}} is set to `true`
   *
   * @default null
   * @property selectedItems
   * @type object[]
   */
  @computed()
  get selectedItems() {
    return A([]);
  }
  set selectedItems(v) {
    return A(v);
  }

  /**
   * List of the currently visible columns
   *
   * @type Object[]
   * @property visibleProcessedColumns
   * @default []
   * @private
   */
  @filterBy('processedColumns', 'isVisible', true) visibleProcessedColumns;

  /**
   * True if all processedColumns are hidden by <code>isHidden</code>
   *
   * @type boolean
   * @property allColumnsAreHidden
   * @readonly
   * @private
   */
  @computed('processedColumns.@each.isHidden')
  get allColumnsAreHidden() {
    return this.processedColumns && this.processedColumns.length > 0 && this.processedColumns.isEvery('isHidden', true);
  }

  /**
   * List of property names can be used for grouping
   *
   * It may be a list of strings of list of objects. In first case label and value in the select-box will be the same.
   * In the second case you must set `label` and `value` properties for each list item
   *
   * **IMPORTANT** It must contain {{#crossLink 'Components.ModelsTable/currentGroupingPropertyName:property'}}currentGroupingPropertyName{{/crossLink}}-value
   *
   * @property dataGroupProperties
   * @type string[]|object[]
   * @default []
   */
  dataGroupProperties = A([]);

  /**
   * @property dataGroupOptions
   * @type object[]
   * @private
   * @readonly
   */
  @computed('dataGroupProperties.[]')
  get dataGroupOptions() {
    return this.dataGroupProperties.map(value => {
      return 'object' === typeOf(value) || 'instance' === typeOf(value) ? value : {
        label: propertyNameToTitle(value),
        value
      };
    });
  }

  /**
   * `true` if some value is set to the global filter
   *
   * @type boolean
   * @property globalFilterUsed
   * @readonly
   * @private
   */
  @notEmpty('filterString') globalFilterUsed;

  /**
   * `true` if global filter or filter by any column is used
   *
   * @type boolean
   * @property anyFilterUsed
   * @readonly
   * @private
   */
  @computed('globalFilterUsed', 'processedColumns.@each.filterUsed')
  get anyFilterUsed() {
    return this.globalFilterUsed || this.processedColumns.isAny('filterUsed');
  }

  /**
   * `true` if all processedColumns don't use filtering and sorting
   *
   * @type boolean
   * @property noHeaderFilteringAndSorting
   * @readonly
   * @private
   */
  @computed('processedColumns.@each.{useSorting,useFilter}')
  get noHeaderFilteringAndSorting() {
    return this.processedColumns.isEvery('useFilter', false) && this.processedColumns.isEvery('useSorting', false);
  }

  /**
   * Number of pages
   *
   * @type number
   * @property pagesCount
   * @readonly
   * @private
   */
  @computed('arrangedContent.[]', 'pageSize')
  get pagesCount() {
    const pagesCount = get(this, 'arrangedContent.length') / this.pageSize;
    return (0 === pagesCount % 1) ? pagesCount : (Math.floor(pagesCount) + 1);
  }

  /**
   * {{#crossLink 'Components.ModelsTable/data:property'}}data{{/crossLink}} filtered with a global filter and columns filters
   *
   * Filtering by columns is ignored if {{#crossLink 'Components.ModelsTable/useFilteringByColumns:property'}}useFilteringByColumns{{/crossLink}} is set to `false`
   *
   * @type Object[]
   * @property filteredContent
   * @readonly
   * @private
   */
  @computed('filterString', 'data.[]', 'useFilteringByColumns', 'processedColumns.@each.filterString')
  get filteredContent() {
    const {processedColumns, data, filteringIgnoreCase} = this;
    if (!isArray(data)) {
      return [];
    }
    if (!this.anyFilterUsed) {
      return data.slice();
    }
    let filterString = this.filterString;
    if (filteringIgnoreCase) {
      filterString = filterString.toLowerCase();
    }

    let _processedColumns = A(processedColumns.filterBy('useFilter'));
    if (!this.doFilteringByHiddenColumns) {
      _processedColumns = A(_processedColumns.filterBy('isHidden', false));
    }
    if (!get(_processedColumns, 'length')) {
      return data.slice();
    }

    // global search
    const filtersFor = A(A(_processedColumns.mapBy('filterField')).compact());
    let globalSearch = data.filter(row => {
      return filtersFor.any(filterFor => {
        let cellValue = '' + get(row, filterFor);
        if (filteringIgnoreCase) {
          cellValue = cellValue.toLowerCase();
        }
        return -1 !== cellValue.indexOf(filterString);
      });
    });

    if (!this.useFilteringByColumns) {
      return globalSearch;
    }

    // search by each column
    _processedColumns = _processedColumns.filterBy('filterField').filter(c => !((get(c, 'filterWithSelect') && '' === get(c, 'filterString'))));
    return globalSearch.filter(row => {
      return _processedColumns.every(c => {
        const filterFor = get(c, 'filterField');
        let cellValue = '' + get(row, filterFor);
        let filterString = get(c, 'filterString');
        if (filteringIgnoreCase) {
          cellValue = typeOf(cellValue) === 'string' ? cellValue.toLowerCase() : cellValue;
          filterString = typeOf(filterString) === 'string' ? filterString.toLowerCase() : filterString;
        }
        return 'function' === typeOf(c.filterFunction) ? c.filterFunction(cellValue, filterString, row) : 0 === compare(cellValue, filterString);
      });
    });
  }

  set filteredContent(v) {
    return v;
  }

  /**
   * {{#crossLink 'Components.ModelsTable/filteredContent:property'}}filteredContent{{/crossLink}} sorted by needed properties
   *
   * @type Object[]
   * @property arrangedContent
   * @readonly
   * @private
   */
  @computed('filteredContent.[]', 'sortProperties.[]', 'sortFunctions.[]')
  get arrangedContent() {
    let sortProperties = this.sortProperties.map(p => {
      let [prop, direction] = p.split(':');
      direction = direction || 'asc';

      return [prop, direction];
    });

    let _filteredContent = this.filteredContent.slice();
    return sortProperties.length ? _filteredContent.sort((row1, row2) => {
      for (let i = 0; i < sortProperties.length; i++) {
        let [prop, direction] = sortProperties[i];
        let sortFunction = get(this, `sortFunctions.${prop}`) || betterCompare;
        let result = prop ? sortFunction(get(row1, prop), get(row2, prop)) : 0;
        if (result !== 0) {
          return (direction === 'desc') ? (-1 * result) : result;
        }
      }

      return 0;
    }) : _filteredContent;
  }

  set arrangedContent(v) {
    return v;
  }

  filteredContentObserver() {
    run.once(this, this.filteredContentObserverOnce);
  }

  filteredContentObserverOnce() {
    this.updateState({recordsCount: this.get('filteredContent.length')});
  }

  /**
   * {{#crossLink 'Components.ModelsTable/filteredContent:property'}}filteredContent{{/crossLink}} grouped by {{#crossLink 'Components.ModelsTable/currentGroupingPropertyName:property'}}currentGroupingPropertyName{{/crossLink}} sorted by needed properties
   *
   * @property groupedArrangedContent
   * @type object[]
   * @private
   * @readonly
   */
  @computed('filteredContent.[]', 'sortProperties.[]', 'sortFunctions.[]', 'useDataGrouping', 'currentGroupingPropertyName', 'sortByGroupedFieldDirection')
  get groupedArrangedContent() {
    const {useDataGrouping, currentGroupingPropertyName, filteredContent, sortByGroupedFieldDirection} = this;
    let grouped = {};
    if (!useDataGrouping || !isArray(filteredContent)) {
      return grouped;
    }
    let sortProperties = this.sortProperties.map(p => {
      let [prop, direction] = p.split(':');
      direction = direction || 'asc';
      return [prop, direction];
    });

    grouped = chunkBy(filteredContent, currentGroupingPropertyName, sortByGroupedFieldDirection);

    grouped = grouped.map(group => {
      return sortProperties.length ? A(group.sort((row1, row2) => {
        for (let i = 0; i < sortProperties.length; i++) {
          let [prop, direction] = sortProperties[i];
          let sortFunction = get(this, `sortFunctions.${prop}`) || betterCompare;
          let result = prop ? sortFunction(get(row1, prop), get(row2, prop)) : 0;
          if (result !== 0) {
            return (direction === 'desc') ? (-1 * result) : result;
          }
        }
        return 0;
      })) : group;
    });
    return grouped.reduce((result, group) => A([...result, ...group]), []);
  }

  /**
   * Content of the current table page
   *
   * {{#crossLink 'Components.ModelsTable/arrangedContent:property'}}arrangedContent{{/crossLink}} sliced for currently shown page
   *
   * @type Object[]
   * @property visibleContent
   * @readonly
   * @private
   */
  @computed('arrangedContent.[]', 'pageSize', 'currentPageNumber')
  get visibleContent() {
    const {arrangedContent, pageSize, currentPageNumber} = this;
    const startIndex = pageSize * (currentPageNumber - 1);
    if (arrangedContent.length < pageSize) {
      return arrangedContent;
    }
    return arrangedContent.slice(startIndex, startIndex + pageSize);
  }

  /**
   * Content of the current table page when rows grouping is used
   *
   * {{#crossLink 'Components.ModelsTable/groupedVisibleContent:property'}}groupedVisibleContent{{/crossLink}} sliced for currently shown page
   *
   * @property groupedVisibleContent
   * @default {}
   * @type object
   * @private
   * @readonly
   */
  @computed('groupedArrangedContent', 'pageSize', 'currentPageNumber', 'useDataGrouping', 'currentGroupingPropertyName')
  get groupedVisibleContent() {
    const {useDataGrouping, currentGroupingPropertyName, groupedArrangedContent, pageSize, currentPageNumber} = this;
    if (!useDataGrouping) {
      return [];
    }
    const startIndex = pageSize * (currentPageNumber - 1);
    return get(groupedArrangedContent, 'length') < pageSize ?
      chunkBy(groupedArrangedContent, currentGroupingPropertyName) :
      chunkBy(groupedArrangedContent.slice(startIndex, startIndex + pageSize), currentGroupingPropertyName);
  }

  /**
   * List of grouped property values in order to show groups in the table
   *
   * @type array
   * @property groupedVisibleContentValuesOrder
   * @private
   * @readonly
   */
  @computed('groupedVisibleContent.[]', 'currentGroupingPropertyName')
  get groupedVisibleContentValuesOrder() {
    return this.groupedVisibleContent.map(group => get(group, `firstObject.${this.currentGroupingPropertyName}`));
  }

  /**
   * Is user on the last page
   *
   * @type boolean
   * @property isLastPage
   * @readonly
   * @private
   */
  @computed('currentPageNumber', 'pagesCount')
  get isLastPage() {
    return this.currentPageNumber >= this.pagesCount;
  }

  /**
   * Alias to <code>arrangedContent.length</code>
   *
   * @type number
   * @property arrangedContentLength
   * @readonly
   * @private
   */
  @alias('arrangedContent.length') arrangedContentLength;

  /**
   * Index of the first currently shown record
   *
   * @type number
   * @property firstIndex
   * @private
   * @readonly
   */
  @computed('arrangedContentLength', 'pageSize', 'currentPageNumber')
  get firstIndex() {
    return 0 === this.arrangedContentLength ? 0 : this.pageSize * (this.currentPageNumber - 1) + 1;
  }

  /**
   * Index of the last currently shown record
   *
   * @type number
   * @property lastIndex
   * @readonly
   * @private
   */
  @computed('isLastPage', 'arrangedContentLength', 'currentPageNumber', 'pageSize')
  get lastIndex() {
    return this.isLastPage ? this.arrangedContentLength : this.currentPageNumber * this.pageSize;
  }

  /**
   * List of possible <code>pageSize</code> values. Used to change size of <code>visibleContent</code>
   *
   * @type number[]
   * @default [10, 25, 50]
   * @property pageSizeValues
   */
  pageSizeValues = A([10, 25, 50]);

  /**
   * List of options for pageSize-selectBox
   * It's mapped from <code>pageSizeValues</code>
   * This value should not be set manually!
   *
   * @type [{value: string|number, label: string|number}]
   * @property pageSizeOptions
   * @default []
   * @private
   */
  pageSizeOptions = A([]);

  /**
   * List of options for pageNumber-selectBox
   *
   * @property currentPageNumberOptions
   * @type [{value: string|number, label: string|number}]
   * @default []
   * @private
   */
  @computed('pagesCount')
  get currentPageNumberOptions() {
    return Array.apply(null, {length: this.pagesCount}).map((v, i) => optionStrToObj(i + 1));
  }

  /**
   * These are options for the columns dropdown.
   * By default, the 'Show All', 'Hide All' and 'Restore Defaults' buttons are displayed.
   *
   * @type { showAll: boolean, hideAll: boolean, restoreDefaults: boolean, columnSets: object[] }
   * @property columnDropdownOptions
   * @readonly
   * @private
   */
  @computed('columnSets.{label,showColumns,hideOtherColumns}')
  get columnDropdownOptions() {
    return EmberObject.create({
      showAll: true,
      hideAll: true,
      restoreDefaults: true,
      columnSets: A(this.columnSets || [])
    });
  }

  /**
   * Public API that allows for programmatic interaction with the component
   *
   * {
   *  refilter() - Invalidates the filteredContent property, causing the table to be re-filtered.
   *  recordsCount - Size of the current arranged content
   * }
   *
   * @type object
   * @property publicAPI
   *
   */
  publicAPI = null;

  updateState(changes) {
    let newState = set(this, 'publicAPI', assign({}, this.publicAPI, changes));
    let registerAPI = this.registerAPI;
    if (registerAPI) {
      registerAPI(newState);
    }
    return newState;
  }

  /**
   * Show first page if for some reasons there is no content for current page, but table data exists
   *
   * @method visibleContentObserver
   * @returns {undefined}
   * @private
   */
  visibleContentObserver() {
    run.once(this, this.visibleContentObserverOnce);
  }

  /**
   * @method visibleContentObserverOnce
   * @returns {undefined}
   * @private
   */
  visibleContentObserverOnce() {
    const visibleContentLength = get(this, 'visibleContent.length');
    const dataLength = get(this, 'data.length');
    if (!visibleContentLength && dataLength && this.currentPageNumber !== 1) {
      set(this, 'currentPageNumber', 1);
    }
  }

  init() {
    super.init(...arguments);
    this.setup();
  }

  didReceiveAttrs() {
    this.updateColumns();
  }

  didInsertElement() {
    this.focus();
    super.didInsertElement(...arguments);
    if (this.checkTextTranslations) {
      this._checkColumnTitles();
    }
  }

  /**
   * @method checkColumnTitles
   * @private
   * @returns {undefined}
   */
  _checkColumnTitles() {
    this.columns.forEach((c, index) => {
      warn(`#${this.elementId}. No title. Column #${index}. ${c.propertyName}`, !(!c.hasOwnProperty('title') && c.propertyName), {id: '#emt-column-no-title'});
    });
  }

  /**
   * Component init
   *
   * Set visibility and filtering attributes for each column
   *
   * @method setup
   * @returns {undefined}
   */
  setup() {
    this._setupSelectedRows();
    this._setupColumns();
    this._setupPageSizeOptions();

    if (this.columnsAreUpdateable) {
      assert('`columnFieldsToCheckUpdate` should be an array of strings', 'array' === typeOf(this.columnFieldsToCheckUpdate));
      this.columnFieldsToCheckUpdate.forEach(propertyName => this.addObserver(`columns.@each.${propertyName}`, this, this._setupColumnsOnce));
    }
    this.addObserver('visibleContent.length', this, this.visibleContentObserver);
    this.addObserver('filteredContent.length', this, this.filteredContentObserver);

    set(this, 'publicAPI', {});

    this.updateState({
      recordsCount: this.get('filteredContent.length') || 0,
      refilter: this.refilter.bind(this)
    });
  }

  refilter() {
    this.notifyPropertyChange('filteredContent');
  }

  /**
   * Recalculate processedColumns when the columns attr changes
   *
   * @method updateColumns
   * @returns {undefined}
   */
  updateColumns() {
    if (this.columnsAreUpdateable) {
      this._setupColumns();
    }
  }

  /**
   * Focus on 'Global filter' on component render
   *
   * @method focus
   * @returns {undefined}
   */
  focus() {
    if (this.showGlobalFilter && this.focusGlobalFilter) {
      this.element.querySelector('.filterString').focus();
    }
  }

  /**
   * Preselect table rows if `selectedItems` is provided
   *
   * `multipleSelected` may be set `true` if `selectedItems` has more than 1 item
   *
   * @private _setupSelectedRows
   * @returns {undefined}
   * @method
   */
  _setupSelectedRows() {
    if (isArray(this.selectedItems) && this.selectedItems.length > 1 && !this.multipleSelected) {
      warn('`multipleSelected` is set `true`, because you have provided multiple `selectedItems`.', false, {id: '#emt-multipleSelected_autoset'});
      set(this, 'multipleSelected', true);
    }
  }

  /**
   * Wrapper for <code>_setupColumns</code> to call it only once when observer is fired
   *
   * @method _setupColumnsOnce
   * @returns {undefined}
   * @private
   */
  _setupColumnsOnce() {
    run.once(this, this._setupColumns);
  }

  /**
   * Generate hash for column-`extend`
   *
   * @method _createColumnHash
   * @param {object} options
   * @returns {object}
   * @private
   */
  _createColumnHash(options) {
    const hash = {
      __mt: this,
      data: readOnly('__mt.data')
    };
    const {propertyName} = options;
    if (options.filterWithSelect && (get(options, 'filteredBy') || get(options, 'propertyName')) && !get(options, 'disableFiltering')) {
      let predefinedFilterOptions = get(options, 'predefinedFilterOptions');
      let usePredefinedFilterOptions = 'array' === typeOf(predefinedFilterOptions);
      if (usePredefinedFilterOptions && get(predefinedFilterOptions, 'length')) {
        const types = A(['object', 'instance']);
        const allObjects = A(predefinedFilterOptions).every(option => types.includes(typeOf(option)) && option.hasOwnProperty('label') && option.hasOwnProperty('value'));
        const allPrimitives = A(predefinedFilterOptions).every(option => !types.includes(typeOf(option)));
        assert('`predefinedFilterOptions` should be an array of objects or primitives and not mixed', allObjects || allPrimitives);
        if (allPrimitives) {
          predefinedFilterOptions = predefinedFilterOptions.map(optionStrToObj);
        }
        if ('' !== predefinedFilterOptions[0].value) {
          predefinedFilterOptions = [{value: '', label: ''}, ...predefinedFilterOptions];
        }
        hash.filterOptions = usePredefinedFilterOptions ? A(predefinedFilterOptions) : [];
      }
      else if (usePredefinedFilterOptions) {
        // Empty array as predefined filter
        hash.useFilter = false;
      }
      else {
        if (propertyName) {
          hash.filterOptions = getFilterOptionsCP(propertyName);
        }
      }
    }
    return hash;
  }

  /**
   * Set values for some column-properties after its creation
   *
   * @method _postProcessColumn
   * @param {object} column
   * @returns {object}
   * @private
   */
  _postProcessColumn(column) {
    const filterOptions = get(column, 'filterOptions');
    const placeholder = get(column, 'filterPlaceholder');
    if (isArray(filterOptions) && placeholder && !filterOptions[0].label) {
      set(column, 'filterOptions.firstObject.label', placeholder);
    }
    return column;
  }

  /**
   * Create a column.
   * This can be overwritten if you need to use your own column object.
   *
   * Override must something like:
   *
   * ```js
   * _createColumn(options) {
   *   const hash = this._createColumnHash(options);
   *   const column = ModelsTableColumn.extend(hash).create(options);
   *   return this._postProcessColumn(column);
   * }
   * ```
   *
   * @method _createColumn
   * @param {object} options
   * @returns {Object}
   */
  _createColumn(options) {
    const hash = this._createColumnHash(options);
    // eslint-disable-next-line ember-es6-class/no-object-extend
    const column = ModelsTableColumn.extend(hash).create(options);
    return this._postProcessColumn(column);
  }

  /**
   * Create new properties for `columns`
   *
   * @method _setupColumns
   * @returns {undefined}
   * @private
   */
  _setupColumns() {
    let self = this;

    let nColumns = A(this.columns.map(column => {
      let filterFunction = get(column, 'filterFunction');
      filterFunction = 'function' === typeOf(filterFunction) ? filterFunction : defaultFilter;

      let c = this._createColumn(column);

      ['colspanForSortCell', 'colspanForFilterCell'].forEach(prop => {
        const val = get(c, prop);
        assert(`"${prop}" must be 1 or greater. You passed "${val}"`, typeOf(val) === 'number' && val >= 1);
      });

      setProperties(c, {
        filterString: get(c, 'filterString') || '',
        originalDefinition: column
      });

      this._setupColumnsComponent(c, column);

      set(c, 'filterFunction', filterFunction);

      if (isNone(get(c, 'mayBeHidden'))) {
        set(c, 'mayBeHidden', true);
      }

      const {sortDirection, sortPrecedence} = column;
      const hasSortPrecedence = !isNone(sortPrecedence) && sortPrecedence > NOT_SORTED;
      const defaultSortPrecedence = hasSortPrecedence ? sortPrecedence : NOT_SORTED;
      const defaultSorting = sortDirection && (sortPrecedence > NOT_SORTED) ? sortDirection.toLowerCase() : 'none';

      setProperties(c, {
        defaultVisible: !get(c, 'isHidden'),
        sorting: defaultSorting,
        sortPrecedence: defaultSortPrecedence
      });
      return c;
    }));
    nColumns.filterBy('propertyName').forEach(column => {
      let propertyName = get(column, 'propertyName');
      if (isNone(get(column, 'title'))) {
        set(column, 'title', propertyNameToTitle(propertyName));
      }
    });
    set(this, 'processedColumns', nColumns);

    set(this, 'sortProperties', A());
    const filteredOrderedColumns = nColumns.sortBy('sortPrecedence').filter(col => isSortedByDefault(col));
    filteredOrderedColumns.forEach(column => {
      self.send('sort', column);
      const defaultSortedBy = column.sortedBy || column.propertyName;
      let sortingArgs = [column, defaultSortedBy, column.sortDirection.toLowerCase()];
      if (this.multipleColumnsSorting) {
        this._multiColumnsSorting(...sortingArgs);
      }
      else {
        this._singleColumnSorting(...sortingArgs);
      }
    });
    this.updateHeaderCellsColspanOnce();
  }

  /**
   * Create new properties for `columns` for components
   *
   * @method _setupColumnsComponent
   * @param {ModelsTableColumn} c
   * @param {object} column raw column
   * @returns {undefined}
   * @private
   */
  _setupColumnsComponent(c, column) {
    if (isPresent(this.columnComponents)) {

      // display component
      let componentName = get(column, 'component');
      if (isPresent(componentName)) {
        let hashComponent = get(this.columnComponents, componentName);
        if (isPresent(hashComponent)) {
          set(c, 'component', hashComponent);
        }
      }

      // edit component
      componentName = get(column, 'componentForEdit');
      if (isPresent(componentName)) {
        let hashComponent = get(this.columnComponents, componentName);
        if (isPresent(hashComponent)) {
          set(c, 'componentForEdit', hashComponent);
        }
      }

    }
  }

  /**
   * Provide backward compatibility with <code>pageSizeValues</code> equal to an array with numbers and not objects
   * <code>pageSizeValues</code> is live as is, <code>pageSizeOptions</code> is used in the templates
   *
   * @method _setupPageSizeOptions
   * @returns {undefined}
   * @private
   */
  _setupPageSizeOptions() {
    let pageSizeOptions = this.pageSizeValues.map(optionStrToObj);
    set(this, 'pageSizeOptions', pageSizeOptions);
  }

  /**
   * Set <code>sortProperties</code> when single-column sorting is used
   *
   * @param {ModelsTableColumn} column
   * @param {string} sortedBy
   * @param {string} newSorting 'asc|desc|none'
   * @method _singleColumnSorting
   * @returns {undefined}
   * @protected
   */
  _singleColumnSorting(column, sortedBy, newSorting) {
    this.processedColumns.setEach('sorting', 'none');
    set(column, 'sorting', newSorting);
    let sortFunctions = Object.create(null);
    sortFunctions[sortedBy] = get(column, 'sortFunction');
    set(this, 'sortFunctions', sortFunctions);
    set(this, 'sortProperties', 'none' === newSorting ? [] : [`${sortedBy}:${newSorting}`]);
  }

  /**
   * Set <code>sortProperties</code> when multi-columns sorting is used
   *
   * @param {ModelsTableColumn} column
   * @param {string} sortedBy
   * @param {string} newSorting 'asc|desc|none'
   * @method _multiColumnsSorting
   * @returns {undefined}
   * @protected
   */
  _multiColumnsSorting(column, sortedBy, newSorting) {
    set(column, 'sorting', newSorting);
    let sortPropertiesMap = {};
    this.sortProperties.forEach(p => {
      let [propertyName, order] = p.split(':');
      sortPropertiesMap[propertyName] = order;
    });
    delete sortPropertiesMap[sortedBy];

    let newSortProperties = A([]);
    let newSortFunctions = Object.create(null);
    keys(sortPropertiesMap).forEach(propertyName => {
      if (propertyName !== sortedBy) {
        newSortProperties.pushObject(`${propertyName}:${sortPropertiesMap[propertyName]}`);
      }
      set(newSortFunctions, propertyName, get(column, 'sortFunction'));
    });
    if ('none' !== newSorting) {
      newSortProperties.pushObject(`${sortedBy}:${newSorting}`);
      newSortFunctions[sortedBy] = get(column, 'sortFunction');
    }
    set(this, 'sortProperties', newSortProperties);
    set(this, 'sortFunctions', newSortFunctions);
  }

  /**
   * Send `displayDataChangedAction`-action when user does sort of filter.
   * Action is sent if `displayDataChangedAction` is a closure-action
   *
   * @method userInteractionObserver
   * @returns {undefined}
   * @protected
   */
  userInteractionObserver() {
    run.once(this, this.userInteractionObserverOnce);
  }

  /**
   * @method userInteractionObserverOnce
   * @returns {undefined}
   * @private
   */
  userInteractionObserverOnce() {
    let actionIsFunction = typeof this.displayDataChangedAction === 'function';

    if (actionIsFunction) {
      let settings = EmberObject.create({
        sort: this.sortProperties,
        currentPageNumber: this.currentPageNumber,
        pageSize: this.pageSize,
        filterString: this.filterString,
        filteredContent: this.filteredContent,
        selectedItems: this.selectedItems,
        expandedItems: this.expandedItems,
        columns: this.processedColumns.map(c => getProperties(c, ['filterString', 'filterField', 'sortField', 'sorting', 'propertyName'])),
        columnFilters: {}
      });
      this.processedColumns.forEach(column => {
        if (!isBlank(get(column, 'filterString'))) {
          settings.columnFilters[get(column, 'propertyName')] = get(column, 'filterString');
        }
      });
      this.displayDataChangedAction(settings);
    }
  }

  /**
   * Send `columnsVisibilityChangedAction`-action when user changes which columns are visible.
   * Action is sent if `columnsVisibilityChangedAction` is a closure action
   *
   * @returns {undefined}
   * @method _sendColumnsVisibilityChangedAction
   * @private
   */
  _sendColumnsVisibilityChangedAction() {
    let actionIsFunction = typeof this.columnsVisibilityChangedAction === 'function';

    if (actionIsFunction) {
      const columnsVisibility = this.processedColumns.map(column => {
        const options = getProperties(column, 'isHidden', 'mayBeHidden', 'propertyName');
        options.isHidden = !!options.isHidden;
        return options;
      });
      this.columnsVisibilityChangedAction(columnsVisibility);
    }
  }

  /**
   * Handler for global filter and filter by each column
   *
   * @method forceToFirstPage
   * @returns {undefined}
   * @private
   */
  forceToFirstPage() {
    set(this, 'currentPageNumber', 1);
    this.userInteractionObserver();
  }

  /**
   * Collapse open rows when user change page size or moved to the another page
   *
   * @method collapseRowOnNavigate
   * @returns {undefined}
   * @private
   */
  @observes('currentPageNumber', 'pageSize')
  collapseRowOnNavigate() {
    this.expandedItems.clear();
  }

  /**
   * Rebuild the whole table.
   * This can be called to force a complete re-render of the table.
   *
   * @method rebuildTable
   * @returns {undefined}
   */
  rebuildTable() {
    set(this, 'currentPageNumber', 1);
    this._clearFilters();
    this.setup();
  }

  /**
   * Update colspans for table header cells
   *
   * @method updateHeaderCellsColspan
   * @returns {undefined}
   * @private
   */
  @observes('processedColumns.@each.{isVisible,colspanForSortCell,colspanForFilterCell}')
  updateHeaderCellsColspan() {
    run.once(this, this.updateHeaderCellsColspanOnce);
  }

  /**
   * @method updateHeaderCellsColspanOnce
   * @returns {undefined}
   * @private
   */
  updateHeaderCellsColspanOnce() {
    this.processedColumns.forEach((column, index, columns) => {
      const colspanForSortCell = get(column, 'colspanForSortCell');
      const colspanForFilterCell = get(column, 'colspanForFilterCell');
      const nextColumnsForSortCell = columns.slice(index, index + colspanForSortCell).filter(c => get(c, 'isHidden'));
      const nextColumnsForFilterCell = columns.slice(index, index + colspanForFilterCell).filter(c => get(c, 'isHidden'));
      set(column, 'realColspanForSortCell', colspanForSortCell - get(nextColumnsForSortCell, 'length'));
      set(column, 'realColspanForFilterCell', colspanForFilterCell - get(nextColumnsForFilterCell, 'length'));
    });
  }

  /**
   * Clear all filters.
   *
   * @method _clearFilters
   * @returns {undefined}
   * @private
   */
  _clearFilters() {
    set(this, 'filterString', '');
    this.processedColumns.setEach('filterString', '');
  }

  willInsertElement() {
    this.forceToFirstPageProps.forEach(propertyName => this.addObserver(propertyName, this, 'forceToFirstPage'));
    return super.willInsertElement(...arguments);
  }

  willDestroyElement() {
    this.forceToFirstPageProps.forEach(propertyName => this.removeObserver(propertyName, this, 'forceToFirstPage'));
    if (this.registerAPI) {
      this.registerAPI(null);
    }
    this.processedColumns.invoke('destroy');
    return super.willDestroyElement(...arguments);
  }

  /**
   * Toggle visibility for provided column
   *
   * It doesn't do nothing if column can't be hidden (see {{#crossLink 'Utils.ModelsTableColumn/mayBeHidden:property'}}mayBeHidden{{/crossLink}}). May trigger sending {{#crossLink 'Components.ModelsTable/columnsVisibilityChangedAction:property'}}columnsVisibilityChangedAction{{/crossLink}}
   *
   * @method actions.toggleHidden
   * @param {ModelsTableColumn} column
   * @returns {undefined}
   */
  @action
  toggleHidden(column) {
    if (get(column, 'mayBeHidden')) {
      column.toggleProperty('isHidden');
      this._sendColumnsVisibilityChangedAction();
    }
  }

  /**
   * Show all columns
   *
   * Set each column `isHidden` value to `false`. May trigger sending {{#crossLink 'Components.ModelsTable/columnsVisibilityChangedAction:property'}}columnsVisibilityChangedAction{{/crossLink}}
   *
   * @method actions.showAllColumns
   * @returns {undefined}
   */
  @action
  showAllColumns() {
    this.processedColumns.setEach('isHidden', false);
    this._sendColumnsVisibilityChangedAction();
  }

  /**
   * Hide all columns that may be hidden (see {{#crossLink 'Utils.ModelsTableColumn/mayBeHidden:property'}}mayBeHidden{{/crossLink}})
   *
   * May trigger sending {{#crossLink 'Components.ModelsTable/columnsVisibilityChangedAction:property'}}columnsVisibilityChangedAction{{/crossLink}}
   *
   * @method actions.hideAllColumns
   * @returns {undefined}
   */
  @action
  hideAllColumns() {
    A(this.processedColumns.filterBy('mayBeHidden')).setEach('isHidden', true);
    this._sendColumnsVisibilityChangedAction();
  }

  /**
   * Restore columns visibility values according to their default visibility settings (see {{#crossLink 'Utils.ModelsTableColumn/defaultVisible:property'}}defaultVisible{{/crossLink}})
   *
   * May trigger sending {{#crossLink 'Components.ModelsTable/columnsVisibilityChangedAction:property'}}columnsVisibilityChangedAction{{/crossLink}}
   *
   * @method actions.restoreDefaultVisibility
   * @returns {undefined}
   */
  @action
  restoreDefaultVisibility() {
    this.processedColumns.forEach(c => {
      set(c, 'isHidden', !get(c, 'defaultVisible'));
      this._sendColumnsVisibilityChangedAction();
    });
  }

  /**
   * Toggle visibility for every column in the selected columns set
   *
   * It ignore columns that can't be hidden (see {{#crossLink 'Utils.ModelsTableColumn/mayBeHidden:property'}}mayBeHidden{{/crossLink}}). May trigger sending {{#crossLink 'Components.ModelsTable/columnsVisibilityChangedAction:property'}}columnsVisibilityChangedAction{{/crossLink}}
   *
   * @method actions.toggleColumnSet
   * @returns {undefined}
   */
  @action
  toggleColumnSet({showColumns = [], hideOtherColumns, toggleSet = false} = {}) {
    // If hideOtherColumns is not set, default to true if toggleSet=false, else to false
    hideOtherColumns = isNone(hideOtherColumns) ? !toggleSet : hideOtherColumns;

    // If showColumns is a function, call it
    if (typeOf(showColumns) === 'function') {
      return run(this, showColumns, this.processedColumns);
    }

    let setColumns = A([]);
    let otherColumns = A([]);

    this.processedColumns.forEach((column) => {
      let columnId = get(column, 'propertyName');

      if (!columnId || !get(column, 'mayBeHidden')) {
        return;
      }

      showColumns = A(showColumns);
      if (showColumns.includes(columnId)) {
        setColumns.pushObject(column);
      } else {
        otherColumns.pushObject(column);
      }
    });

    // By default, all columns should always be set to visible
    // However, if `toggleSet=true`, then the set should be toggled between visible/hidden
    // In this case, if one of the set columns is hidden, make them all visible, else hide them
    let targetVisibility = true;
    if (toggleSet) {
      targetVisibility = !!setColumns.findBy('isVisible', false);
    }

    setColumns.forEach((column) => {
      let columnId = get(column, 'propertyName');
      if (showColumns.includes(columnId) && get(column, 'isVisible') !== targetVisibility) {
        this.send('toggleHidden', column);
      }
    });

    if (hideOtherColumns) {
      otherColumns.forEach((column) => {
        let columnId = get(column, 'propertyName');

        if (!showColumns.includes(columnId) && get(column, 'isVisible')) {
          this.send('toggleHidden', column);
        }
      });
    }
  }

  /**
   * Pagination click-handler
   *
   * It moves user to the selected page. Check [models-table/pagination-numeric](Components.ModelsTablePaginationNumeric.html) and [models-table/pagination-simple](Components.ModelsTablePaginationSimple.html) for usage examples. May trigger sending {{#crossLink 'Components.ModelsTable/displayDataChangedAction:property'}}displayDataChangedAction{{/crossLink}}
   *
   * @param {number} pageNumber
   * @method actions.gotoCustomPage
   * @returns {undefined}
   */
  @action
  gotoCustomPage(pageNumber) {
    set(this, 'currentPageNumber', pageNumber);
    this.userInteractionObserver();
  }

  /**
   * Sort selected column by {{#crossLink 'Utils.ModelsTableColumn/sortedBy:property'}}sortedBy{{/crossLink}} or {{#crossLink 'Utils.ModelsTableColumn/propertyName:property'}}propertyName{{/crossLink}}
   *
   * It will drop sorting for other columns if {{#crossLink 'Components.ModelsTable/multipleColumnsSorting:property'}}multipleColumnsSorting{{/crossLink}} is set to `false`. It will add new sorting if {{#crossLink 'Components.ModelsTable/multipleColumnsSorting:property'}}multipleColumnsSorting{{/crossLink}} is set to `true`. May trigger sending {{#crossLink 'Components.ModelsTable/displayDataChangedAction:property'}}displayDataChangedAction{{/crossLink}}. Table will be dropped to the first page if sorting is done
   *
   * For multiColumns-sorting calling sort will change sort-order. E.g.:
   *
   * ```js
   * sortProperties = ['a:asc', 'b:asc', 'c:desc'];
   * sort({propertyName: 'b'}); // sortProperties now is ['a:asc', 'c:desc', 'b:desc']
   * ```
   *
   * @method actions.sort
   * @param {ModelsTableColumn} column
   * @returns {undefined}
   */
  @action
  sort(column) {
    let sortedBy = get(column, 'sortedBy') || get(column, 'propertyName');
    if (!sortedBy) {
      return;
    }
    let currentSorting = get(column, 'sorting') || 'none';
    let newSorting = this.sortMap[currentSorting.toLowerCase()];
    if (sortedBy === this.currentGroupingPropertyName) {
      newSorting = this.sortByGroupedFieldDirection === 'asc' ? 'desc' : 'asc';
      set(this, 'sortByGroupedFieldDirection', newSorting);
      return;
    }
    let sortingArgs = [column, sortedBy, newSorting];
    if (this.multipleColumnsSorting) {
      this._multiColumnsSorting(...sortingArgs);
    }
    else {
      this._singleColumnSorting(...sortingArgs);
    }
    set(this, 'currentPageNumber', 1);
    this.userInteractionObserver();
  }

  /**
   * Expand selected row
   *
   * It will cause expandedRowComponent to be used for it. It will collapse already expanded row if {{#crossLink 'Components.ModelsTable/multipleExpand:property'}}multipleExpand{{/crossLink}} is set to `false`. Expanding is assigned to the record itself and not their index. So, if page #1 has first row expanded and user is moved to any another page, first row on new page won't be expanded. But when user will be back to the first page, first row will be expanded. May trigger sending {{#crossLink 'Components.ModelsTable/displayDataChangedAction:property'}}displayDataChangedAction{{/crossLink}}
   *
   * @param {number} index
   * @param {object} dataItem
   * @returns {undefined}
   * @method actions.expandRow
   */
  @action
  expandRow(index, dataItem) {
    assert('row index should be numeric', typeOf(index) === 'number');
    const {multipleExpand, expandedItems} = this;
    if (!multipleExpand && get(expandedItems, 'length') === 1) {
      expandedItems.clear();
    }
    expandedItems.pushObject(dataItem);
    this.userInteractionObserver();
  }

  /**
   * Collapse selected row
   *
   * May trigger sending {{#crossLink 'Components.ModelsTable/displayDataChangedAction:property'}}displayDataChangedAction{{/crossLink}}
   *
   * @param {number} index
   * @param {object} dataItem
   * @returns {undefined}
   * @method actions.collapseRow
   */
  @action
  collapseRow(index, dataItem) {
    assert('row index should be numeric', typeOf(index) === 'number');
    this.expandedItems.removeObject(dataItem);
    this.userInteractionObserver();
  }

  /**
   * Expand all rows in the current page
   *
   * It works only if {{#crossLink 'Components.ModelsTable/multipleExpand:property'}}multipleExpand{{/crossLink}} is set to `true`. May trigger sending {{#crossLink 'Components.ModelsTable/displayDataChangedAction:property'}}displayDataChangedAction{{/crossLink}}
   *
   * @method actions.expandAllRows
   * @returns {undefined}
   */
  @action
  expandAllRows() {
    const {multipleExpand, visibleContent} = this;
    if (multipleExpand) {
      if (this.useDataGrouping) {
        this.expandedItems.pushObjects(A(objToArray(this.groupedVisibleContent)));
      }
      else {
        this.expandedItems.pushObjects(A(visibleContent.slice()));
      }
      this.userInteractionObserver();
    }
  }

  /**
   * Collapse all rows in the current page
   *
   * May trigger sending {{#crossLink 'Components.ModelsTable/displayDataChangedAction:property'}}displayDataChangedAction{{/crossLink}}
   *
   * @method actions.collapseAllRows
   * @returns {undefined}
   */
  @action
  collapseAllRows() {
    this.expandedItems.clear();
    this.userInteractionObserver();
  }

  /**
   * Handler for row-click
   *
   * Toggle <code>selected</code>-state for row. Select only one or multiple rows depends on {{#crossLink 'Components.ModelsTable/multipleSelect:property'}}multipleSelect{{/crossLink}} value. May trigger sending {{#crossLink 'Components.ModelsTable/displayDataChangedAction:property'}}displayDataChangedAction{{/crossLink}}
   *
   * @param {number} index
   * @param {object} dataItem
   * @returns {undefined}
   * @method actions.clickOnRow
   */
  @action
  clickOnRow(index, dataItem) {
    assert('row index should be numeric', typeOf(index) === 'number');
    if (this.selectRowOnClick) {
      const {multipleSelect, selectedItems} = this;
      if (selectedItems.includes(dataItem)) {
        selectedItems.removeObject(dataItem);
      }
      else {
        if (!multipleSelect && get(selectedItems, 'length') === 1) {
          selectedItems.clear();
        }
        selectedItems.pushObject(dataItem);
      }
    }
    this.userInteractionObserver();
  }

  /**
   * Handler for double-click on row
   *
   * May trigger sending {{#crossLink 'Components.ModelsTable/rowDoubleClickAction:property'}}rowDoubleClickAction{{/crossLink}}
   *
   * @param {number} index
   * @param {object} dataItem
   * @returns {undefined}
   * @method actions.doubleClickOnRow
   */
  @action
  doubleClickOnRow(index, dataItem) {
    assert('row index should be numeric', typeOf(index) === 'number');
    let actionIsFunction = typeof this.rowDoubleClickAction === 'function';
    if (actionIsFunction) {
      this.rowDoubleClickAction(index, dataItem);
    }
  }

  /**
   * Handler for row-hover
   *
   * May trigger sending {{#crossLink 'Components.ModelsTable/rowHoverAction:property'}}rowHoverAction{{/crossLink}}
   *
   * @param {number} index
   * @param {object} dataItem
   * @returns {undefined}
   * @method actions.hoverOnRow
   */
  @action
  hoverOnRow(index, dataItem) {
    assert('row index should be numeric', typeOf(index) === 'number');
    let actionIsFunction = typeof this.rowHoverAction === 'function';
    if (actionIsFunction) {
      this.rowHoverAction(index, dataItem);
    }
  }

  /**
   * Handler for row-hover
   *
   * May trigger sending {{#crossLink 'Components.ModelsTable/rowHoverAction:property'}}rowOutAction{{/crossLink}}
   *
   * @param {number} index
   * @param {object} dataItem
   * @returns {undefined}
   * @method actions.outRow
   */
  @action
  outRow(index, dataItem) {
    assert('row index should be numeric', typeOf(index) === 'number');
    let actionIsFunction = typeof this.rowOutAction === 'function';
    if (actionIsFunction) {
      this.rowOutAction(index, dataItem);
    }
  }

  /**
   * Clear all column filters and global filter
   *
   * May trigger sending {{#crossLink 'Components.ModelsTable/displayDataChangedAction:property'}}displayDataChangedAction{{/crossLink}}
   *
   * @returns {undefined}
   * @method actions.clearFilters
   */
  @action
  clearFilters() {
    this._clearFilters();
  }

  /**
   * Select/deselect all rows
   *
   * May trigger sending {{#crossLink 'Components.ModelsTable/displayDataChangedAction:property'}}displayDataChangedAction{{/crossLink}}
   *
   * @method actions.toggleAllSelection
   * @returns {undefined}
   */
  @action
  toggleAllSelection() {
    const {selectedItems, data} = this;
    const allSelectedBefore = get(selectedItems, 'length') === get(data, 'length');
    selectedItems.clear();
    if (!allSelectedBefore) {
      const toSelect = data.slice ? data.slice() : data;
      selectedItems.pushObjects(toSelect);
    }
    this.userInteractionObserver();
  }

  /**
   * Expand or collapse all rows in the rows group
   *
   * **IMPORTANT** `multipleExpand` should be set to `true` otherwise this action won't do anything
   *
   * @method actions.toggleGroupedRowsExpands
   * @param {*} groupedValue
   * @returns {undefined}
   */
  @action
  toggleGroupedRowsExpands(groupedValue) {
    if (!this.multipleExpand) {
      return;
    }
    const {expandedItems, currentGroupingPropertyName} = this;
    const groupedItems = this.groupedArrangedContent.filterBy(currentGroupingPropertyName, groupedValue);
    const notExpandedGroupItems = groupedItems.filter(record => expandedItems.indexOf(record) === -1);
    if (get(notExpandedGroupItems, 'length')) {
      const toPush = notExpandedGroupItems.filter(record => expandedItems.indexOf(record) === -1);
      expandedItems.pushObjects(toPush);
    }
    else {
      groupedItems.forEach(record => expandedItems.removeObject(record));
    }
    this.userInteractionObserver();
  }

  /**
   * Select/deselect rows from the rows group
   *
   * **IMPORTANT** `multipleSelect` should be set to `true` otherwise this action won't do anything
   *
   * May trigger sending {{#crossLink 'Components.ModelsTable/displayDataChangedAction:property'}}displayDataChangedAction{{/crossLink}}
   *
   * @method actions.toggleGroupedRowsSelection
   * @param {*} groupedValue
   * @returns {undefined}
   */
  @action
  toggleGroupedRowsSelection(groupedValue) {
    if (!this.multipleSelect) {
      return;
    }
    const {selectedItems, currentGroupingPropertyName} = this;
    const groupedItems = this.groupedArrangedContent.filterBy(currentGroupingPropertyName, groupedValue);
    const notSelectedGroupItems = groupedItems.filter(record => selectedItems.indexOf(record) === -1);
    if (get(notSelectedGroupItems, 'length')) {
      const toPush = notSelectedGroupItems.filter(record => selectedItems.indexOf(record) === -1);
      selectedItems.pushObjects(toPush);
    }
    else {
      groupedItems.forEach(record => selectedItems.removeObject(record));
    }
    this.userInteractionObserver();
  }

  /**
   * Collapse or expand rows group
   *
   * @method actions.toggleGroupedRows
   * @param {*} groupedValue
   * @returns {undefined}
   */
  @action
  toggleGroupedRows(groupedValue) {
    if (this.collapsedGroupValues.includes(groupedValue)) {
      this.collapsedGroupValues.removeObject(groupedValue);
    }
    else {
      this.collapsedGroupValues.pushObject(groupedValue);
    }
  }

}
