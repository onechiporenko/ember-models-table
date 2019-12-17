import {isEmpty} from '@ember/utils';
import EmberObject, {get, set, computed} from '@ember/object';
import {not, equal, notEmpty, readOnly} from '@ember/object/computed';
import {observes} from '@ember-decorators/object';
import {A} from '@ember/array';
import {capitalize, dasherize} from '@ember/string';

/*
 * Convert some string to the human readable one
 *
 * @param {string} name value to convert
 * @return string
 */
export function propertyNameToTitle(name) {
  return capitalize(dasherize(name).replace(/-/g, ' '));
}

/**
 * Column definition class for ModelsTable columns
 *
 * Check its public properties
 *
 * @class ModelsTableColumn
 * @extends Ember.Object
 * @namespace Utils
 */
export default class ModelsTableColumn extends EmberObject {

  /**
   * Value inverted to the [isHidden](Utils.ModelsTableColumn.html#property_isHidden) initial value
   *
   * It set on column init and not changed any more
   *
   * @property defaultVisible
   * @type boolean
   * @private
   * @readOnly
   */

  /**
   * Field-name of the data's object shown in the current column. If it isn't provided, sorting and filtering options for current column are ignored
   *
   * @property propertyName
   * @default ''
   * @type string
   */
  propertyName = '';

  /**
   * Header for column. If it isn't provided, capitalized `propertyName` is used
   *
   * @property title
   * @default ''
   * @type string
   */
  title = null;

  /**
   * If `true` only `propertyName` will be shown in the column's cells and no components etc. Edit-mode won't affect such column.
   *
   * If `false` column's cells will be processed as usual (components will be used to display data and for edit-mode)
   *
   * @property simple
   * @type boolean
   * @default false
   */
  simple = false;

  /**
   * Custom component used in the column's cells.
   *
   * It will receive several options:
   *
   *  * `data` - whole dataset passed to the `models-table`
   *  * `record` - current row
   *  * `index` - current row index
   *  * `column` - current column (one of the [processedColumns](Components.ModelsTable.html#property_processedColumns))
   *  * `expandRow` - closure action [ModelsTable.expandRow](Components.ModelsTable.html#event_expandRow)
   *  * `collapseRow` - closure action [ModelsTable.collapseRow](Components.ModelsTable.html#event_collapseRow)
   *  * `expandAllRows` - closure action [ModelsTable.expandAllRows](Components.ModelsTable.html#event_expandAllRows)
   *  * `collapseAllRows` - closure action [ModelsTable.collapseAllRows](Components.ModelsTable.html#event_collapseAllRows)
   *  * `clickOnRow` - closure action [ModelsTable.clickOnRow](Components.ModelsTable.html#event_clickOnRow)
   *  * `editRow` - closure action [ModelsTable.editRow](Components.ModelsTableRow.html#event_editRow)
   *  * `cancelEditRow` - closure action [ModelsTable.cancelEditRow](Components.ModelsTableRow.html#event_cancelEditRow)
   *  * `themeInstance` - bound from [ModelsTable.themeInstance](Components.ModelsTable.html#property_themeInstance)
   *  * `isExpanded` - is current row expanded
   *  * `isSelected` - is current row selected
   *  * `isEditRow` - is the row editable (one of the [processedColumns](Components.ModelsTableRow.html#property_isEditRow))
   *  * `isColumnEditable` - is the column currently editable
   *
   * @property component
   * @type string
   * @default ''
   */
  component = '';

  /**
   * Custom component used in the column's cells when the row is in edit mode
   *
   * It will receive several options:
   *
   *  * `data` - whole dataset passed to the `models-table`
   *  * `record` - current row
   *  * `index` - current row index
   *  * `column` - current column (one of the [processedColumns](Components.ModelsTable.html#property_processedColumns))
   *  * `expandRow` - closure action [ModelsTable.expandRow](Components.ModelsTable.html#event_expandRow)
   *  * `collapseRow` - closure action [ModelsTable.collapseRow](Components.ModelsTable.html#event_collapseRow)
   *  * `expandAllRows` - closure action [ModelsTable.expandAllRows](Components.ModelsTable.html#event_expandAllRows)
   *  * `collapseAllRows` - closure action [ModelsTable.collapseAllRows](Components.ModelsTable.html#event_collapseAllRows)
   *  * `clickOnRow` - closure action [ModelsTable.clickOnRow](Components.ModelsTable.html#event_clickOnRow)
   *  * `editRow` - closure action [ModelsTableRow.editRow](Components.ModelsTableRow.html#event_editRow)
   *  * `cancelEditRow` - closure action [ModelsTableRow.cancelEditRow](Components.ModelsTableRow.html#event_cancelEditRow)
   *  * `themeInstance` - bound from [ModelsTable.themeInstance](Components.ModelsTable.html#property_themeInstance)
   *  * `isExpanded` - is current row expanded
   *  * `isSelected` - is current row selected
   *  * `isEditRow` - is the row editable (one of the [processedColumns](Components.ModelsTableRow.html#property_isEditRow))
   *  * `isColumnEditable` - is the column currently editable
   *
   * @property componentForEdit
   * @type string
   * @default ''
   */
  componentForEdit = '';

  /**
   * Is this column allowed to be editable
   *
   * @property editable
   * @type boolean
   * @default true
   */
  editable = true;

  /**
   * Custom component used in the header cell with filter
   *
   * It will receive several options:
   *
   * * `column` - current column (one of the [processedColumns](Components.ModelsTable.html#property_processedColumns))
   * * `data` - whole dataset passed to the `models-table`
   * * `selectedItems` - bound from [ModelsTable.selectedItems](Components.ModelsTable.html#property_selectedItems)
   * * `expandedItems` - bound from [ModelsTable.expandedItems](Components.ModelsTable.html#property_expandedItems)
   * * `themeInstance` - bound from [ModelsTable.themeInstance](Components.ModelsTable.html#property_themeInstance)
   * * `expandAllRows` - closure action [ModelsTable.expandAllRows](Components.ModelsTable.html#event_expandAllRows)
   * * `collapseAllRows` - closure action [ModelsTable.collapseAllRows](Components.ModelsTable.html#event_collapseAllRows)
   * * `toggleAllSelection` - closure action [ModelsTable.toggleAllSelection](Components.ModelsTable.html#event_toggleAllSelection)
   *
   * @property componentForFilterCell
   * @type string
   * @default ''
   */
  componentForFilterCell = '';

  /**
   * Custom component used in the header cell with sorting and column title
   *
   * It will receive several options:
   *
   * * `column` - current column (one of the [processedColumns](Components.ModelsTable.html#property_processedColumns))
   * * `data` - whole dataset passed to the `models-table`
   * * `selectedItems` - bound from [ModelsTable.selectedItems](Components.ModelsTable.html#property_selectedItems)
   * * `expandedItems` - bound from [ModelsTable.expandedItems](Components.ModelsTable.html#property_expandedItems)
   * * `themeInstance` - bound from [ModelsTable.themeInstance](Components.ModelsTable.html#property_themeInstance)
   * * `expandAllRows` - closure action [ModelsTable.expandAllRows](Components.ModelsTable.html#event_expandAllRows)
   * * `collapseAllRows` - closure action [ModelsTable.collapseAllRows](Components.ModelsTable.html#event_collapseAllRows)
   * * `toggleAllSelection` - closure action [ModelsTable.toggleAllSelection](Components.ModelsTable.html#event_toggleAllSelection)
   *
   * @property componentForSortCell
   * @type string
   * @default ''
   */
  componentForSortCell = '';

  /**
   * Custom component used in the footer cell
   *
   * It will receive several options:
   *
   * * `selectedItems` - bound from [ModelsTable.selectedItems](Components.ModelsTable.html#property_selectedItems)
   * * `expandedItems` - bound from [ModelsTable.expandedItems](Components.ModelsTable.html#property_expandedItems)
   * * `data` - whole dataset passed to the `models-table`
   * * `mappedSelectedItems` - `selectedItems` mapped by `propertyName`
   * * `mappedExpandedItems` - `expandedItems` mapped by `propertyName`
   * * `mappedData` - `data` mapped by `propertyName`
   *
   * @property componentForFooterCell
   * @type string
   * @default ''
   */
  componentForFooterCell = '';

  /**
   * Colspan for cell in the sorting-row
   *
   * @property colspanForSortCell
   * @type number
   * @default 1
   */
  colspanForSortCell = 1;

  /**
   * @property realColspanForSortCell
   * @type number
   * @default 1
   * @protected
   */
  realColspanForSortCell = 1;

  /**
   * Colspan for cell in the filters-row
   *
   * @property colspanForFilterCell
   * @type number
   * @default 1
   */
  colspanForFilterCell = 1;

  /**
   * @property realColspanForFilterCell
   * @type number
   * @default 1
   * @protected
   */
  realColspanForFilterCell = 1;

  /**
   * Field-name for sorting by current column. If it isn't provided, `propertyName` is used
   *
   * @property sortedBy
   * @type string
   * @default null
   */
  sortedBy = null;

  /**
   * The default sorting for this column. Can be either `asc` or `desc`. Needs to be set in conjunction with `sortPrecedence`,
   otherwise it will not have any effect
   *
   * @property sortDirection
   * @type string
   * @default ''
   */
  sortDirection = '';

  /**
   * Sort precedence for this column - needs to be larger than -1 for sortDirection to take effect
   *
   * @property sortPrecedence
   * @type number
   * @default null
   */
  sortPrecedence = null;

  /**
   * If sorting should be disabled for this column
   *
   * @property disableSorting
   * @type boolean
   * @default false
   */
  disableSorting = false;

  /**
   * If filtering should be disabled for this column
   *
   * @property disableFiltering
   * @type boolean
   * @default false
   */
  disableFiltering = false;

  /**
   * FilterString a default filtering for this column
   *
   * @property filterString
   * @type string
   * @default ''
   */
  filterString = '';

  /**
   * Custom data's property that is used to filter column. If it isn't provided, `propertyName` is used
   *
   * @property filteredBy
   * @type string
   * @default null
   */
  filteredBy = null;

  /**
   * Sort direction for column
   *
   * @property sorting
   * @type string
   * @default ''
   */
  sorting = '';

  /**
   * Is current column hidden by default
   *
   * @property isHidden
   * @type boolean
   * @default false
   */
  isHidden = false;

  /**
   * Can current column be hidden. This field determines, if column appears in the columns-dropdown. If `mayBeHidden` is `true` and `isHidden` is also `true` for column, this column always be hidden
   *
   * @property mayBeHidden
   * @type boolean
   * @default true
   */
  mayBeHidden = true;

  /**
   * If `true` select-dropdown will be used for filtering by current column. Options are unique values for `data.@each.${propertyName}`
   *
   * @property filterWithSelect
   * @type boolean
   * @default false
   */
  filterWithSelect = false;

  /**
   * Should options in the select-box be sorted
   *
   * @property sortFilterOptions
   * @type boolean
   * @default false
   */
  sortFilterOptions = false;

  /**
   * List of option to the filter-box (used if [filterWithSelect](Utils.ModelsTableColumn.html#property_filterWithSelect) is true)
   *
   * @property predefinedFilterOptions
   * @type string[]|number[]|boolean[]
   * @default null
   */
  predefinedFilterOptions = null;

  /**
   * Custom class-name for cells in the current column. This class-name will also be added to the header and filter of the column
   *
   * @property className
   * @default ''
   * @type string
   */
  className = '';

  /**
   * Custom function used to filter rows (used if [filterWithSelect](Utils.ModelsTableColumn.html#property_filterWithSelect) is false)
   *
   * @property filterFunction
   * @type function
   * @default null
   */
  filterFunction = null;

  /**
   * Optional custom function used to sort rows
   *
   * @property sortFunction
   * @type function
   * @default null
   */
  sortFunction = null;

  /**
   * Placeholder for filter-input
   *
   * @property filterPlaceholder
   * @type string
   * @default ''
   */
  filterPlaceholder = '';

  /**
   * If this property is defined, link to the route will be rendered in the cell. [propertyName](Utils.ModelsTableColumn.html#property_propertyName) is used as an anchor. If it's not declared, `id` will be used. <br /> Main idea for `routeName` is to provide a simple way to generate links for each model in the `data`. It should not be used for any other purposes
   *
   * @property routeName
   * @type string
   * @default ''
   */
  routeName = '';

  /**
   * If this property is defined, link to the route will be rendered in the cell. [routeProperty](Utils.ModelsTableColumn.html#property_routeProperty) is used as an anchor. If it's not declared, `id` will be used. <br /> Main idea for `routeName` is to provide a simple way to generate links for each model in the `data`. It should not be used for any other purposes
   *
   * @property routeProperty
   * @type string
   * @default ''
   */
  routeProperty = 'id';

  /**
   * Object containing the definition of the column passed into the component
   *
   * @property originalDefinition
   * @type object
   * @default null
   * @protected
   */
  originalDefinition = null;

  /**
   * @property __mt
   * @type Components.ModelsTable
   * @private
   */
  __mt = null;

  /**
   * @property data
   * @type object[]
   * @default []
   * @protected
   */
  @readOnly('__mt.data')
  data;

  /**
   * @property cssPropertyName
   * @type string
   * @protected
   */
  @computed('propertyName')
  get cssPropertyName() {
    return this.propertyName.replace(/\./g, '-');
  }

  /**
   * @property isVisible
   * @protected
   * @type boolean
   * @default true
   */
  @not('isHidden')
  isVisible;

  /**
   * @property sortAsc
   * @protected
   * @type boolean
   * @default true
   */
  @equal('sorting', 'asc')
  sortAsc;

  /**
   * @property sortDesc
   * @protected
   * @type boolean
   * @default false
   */
  @equal('sorting', 'desc')
  sortDesc;

  /**
   * @property filterUsed
   * @protected
   * @type boolean
   * @default false
   */
  @notEmpty('filterString')
  filterUsed;

  /**
   * Allow sorting for column or not
   *
   * @property useSorting
   * @protected
   * @type boolean
   * @default true
   */
  @computed('sortField', 'disableSorting')
  get useSorting () {
    return this.sortField && !this.disableSorting;
  }

  /**
   * @property sortField
   * @protected
   * @type string
   */
  @computed('sortedBy', 'propertyName')
  get sortField() {
    return this.sortedBy || this.propertyName;
  }
  set sortField(v) {
    return v;
  }

  /**
   * Allow filtering for column or not
   *
   * @protected
   * @property useFilter
   * @type boolean
   * @default true
   */
  @computed('filterField', 'disableFiltering')
  get useFilter() {
    return this.filterField && !this.disableFiltering;
  }
  set useFilter(v) {
    return v;
  }

  /**
   * @protected
   * @property filterField
   * @type string
   */
  @computed('filteredBy', 'propertyName')
  get filterField() {
    return this.filteredBy || this.propertyName;
  }

  /**
   * If preselected option doesn't exist after `filterOptions` update,
   * `filterString` is reverted to empty string (basically, filtering for this column is dropped)
   *
   * @method cleanFilterString
   * @protected
   */
  @observes('filterWithSelect', 'filterOptions.[]', 'filterString')
  cleanFilterString () {
    const {filterOptions, filterWithSelect, filterString} = this;
    if (!filterWithSelect || isEmpty(filterOptions)) {
      return;
    }
    const filterOptionExists = A(filterOptions).find(option => {
      const value = get(option, 'value');
      return [value, '' + value].indexOf(filterString) !== -1;
    });
    if (!filterOptionExists) {
      set(this, 'filterString', '');
    }
  }

}
