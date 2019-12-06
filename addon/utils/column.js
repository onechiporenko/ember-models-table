import {isEmpty} from '@ember/utils';
import EmberObject, {get, set, computed} from '@ember/object';
import {not, equal, notEmpty, readOnly} from '@ember/object/computed';
import {observes} from '@ember-decorators/object';
import {A} from '@ember/array';
import {capitalize, dasherize} from '@ember/string';

/**
 * Convert some string to the human readable one
 *
 * @param {string} name value to convert
 * @returns {string}
 * @ignore
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
 * @private
 */
export default class Column extends EmberObject {

  /**
   * Value inverted to the {{#crossLink "Utils.ModelsTableColumn/isHidden:property"}}isHidden{{/crossLink}} initial value
   *
   * It set on column init and not changed any more
   *
   * @private
   * @readOnly
   */

  /**
   * Field-name of the data's object shown in the current column. If it isn't provided, sorting and filtering options for current column are ignored
   *
   * @default ''
   * @type string
   */
  propertyName = '';

  /**
   * Header for column. If it isn't provided, capitalized `propertyName` is used
   *
   * @default ''
   * @type string
   */
  title = null;

  /**
   * If `true` only `propertyName` will be shown in the column's cells and no components etc. Edit-mode won't affect such column.
   *
   * If `false` column's cells will be processed as usual (components will be used to display data and for edit-mode)
   *
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
   *  * `column` - current column (one of the {{#crossLink "Components.ModelsTable/processedColumns:property"}}processedColumns{{/crossLink}})
   *  * `expandRow` - closure action {{#crossLink "Components.ModelsTable/actions.expandRow:method"}}ModelsTable.actions.expandRow{{/crossLink}}
   *  * `collapseRow` - closure action {{#crossLink "Components.ModelsTable/actions.collapseRow:method"}}ModelsTable.actions.collapseRow{{/crossLink}}
   *  * `expandAllRows` - closure action {{#crossLink "Components.ModelsTable/actions.expandAllRows:method"}}ModelsTable.actions.expandAllRows{{/crossLink}}
   *  * `collapseAllRows` - closure action {{#crossLink "Components.ModelsTable/actions.collapseAllRows:method"}}ModelsTable.actions.collapseAllRows{{/crossLink}}
   *  * `clickOnRow` - closure action {{#crossLink "Components.ModelsTable/actions.clickOnRow:method"}}ModelsTable.actions.clickOnRow{{/crossLink}}
   *  * `editRow` - closure action {{#crossLink "Components.ModelsTableRow/actions.editRow:method"}}ModelsTable.actions.editRow{{/crossLink}}
   *  * `cancelEditRow` - closure action {{#crossLink "Components.ModelsTableRow/actions.cancelEditRow:method"}}ModelsTable.actions.cancelEditRow{{/crossLink}}
   *  * `themeInstance` - bound from {{#crossLink "Components.ModelsTable/themeInstance:property"}}ModelsTable.themeInstance{{/crossLink}}
   *  * `isExpanded` - is current row expanded
   *  * `isSelected` - is current row selected
   *  * `isEditRow` - is the row editable (one of the {{#crossLink "Components.ModelsTableRow/isEditRow:property"}}processedColumns{{/crossLink}})
   *  * `isColumnEditable` - is the column currently editable
   *
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
   *  * `column` - current column (one of the {{#crossLink "Components.ModelsTable/processedColumns:property"}}processedColumns{{/crossLink}})
   *  * `expandRow` - closure action {{#crossLink "Components.ModelsTable/actions.expandRow:method"}}ModelsTable.actions.expandRow{{/crossLink}}
   *  * `collapseRow` - closure action {{#crossLink "Components.ModelsTable/actions.collapseRow:method"}}ModelsTable.actions.collapseRow{{/crossLink}}
   *  * `expandAllRows` - closure action {{#crossLink "Components.ModelsTable/actions.expandAllRows:method"}}ModelsTable.actions.expandAllRows{{/crossLink}}
   *  * `collapseAllRows` - closure action {{#crossLink "Components.ModelsTable/actions.collapseAllRows:method"}}ModelsTable.actions.collapseAllRows{{/crossLink}}
   *  * `clickOnRow` - closure action {{#crossLink "Components.ModelsTable/actions.clickOnRow:method"}}ModelsTable.actions.clickOnRow{{/crossLink}}
   *  * `editRow` - closure action {{#crossLink "Components.ModelsTableRow/actions.editRow:method"}}ModelsTable.actions.editRow{{/crossLink}}
   *  * `cancelEditRow` - closure action {{#crossLink "Components.ModelsTableRow/actions.cancelEditRow:method"}}ModelsTable.actions.cancelEditRow{{/crossLink}}
   *  * `themeInstance` - bound from {{#crossLink "Components.ModelsTable/themeInstance:property"}}ModelsTable.themeInstance{{/crossLink}}
   *  * `isExpanded` - is current row expanded
   *  * `isSelected` - is current row selected
   *  * `isEditRow` - is the row editable (one of the {{#crossLink "Components.ModelsTableRow/isEditRow:property"}}processedColumns{{/crossLink}})
   *  * `isColumnEditable` - is the column currently editable
   *
   * @type string
   * @default ''
   */
  componentForEdit = '';

  /**
   * Is this column allowed to be editable
   *
   */
  editable = true;

  /**
   * Custom component used in the header cell with filter
   *
   * It will receive several options:
   *
   * * `column` - current column (one of the {{#crossLink "Components.ModelsTable/processedColumns:property"}}processedColumns{{/crossLink}})
   * * `data` - whole dataset passed to the `models-table`
   * * `selectedItems` - bound from {{#crossLink "Components.ModelsTable/selectedItems:property"}}ModelsTable.selectedItems{{/crossLink}}
   * * `expandedItems` - bound from {{#crossLink "Components.ModelsTable/expandedItems:property"}}ModelsTable.expandedItems{{/crossLink}}
   * * `themeInstance` - bound from {{#crossLink "Components.ModelsTable/themeInstance:property"}}ModelsTable.themeInstance{{/crossLink}}
   * * `expandAllRows` - closure action {{#crossLink "Components.ModelsTable/actions.expandAllRows:method"}}ModelsTable.actions.expandAllRows{{/crossLink}}
   * * `collapseAllRows` - closure action {{#crossLink "Components.ModelsTable/actions.collapseAllRows:method"}}ModelsTable.actions.collapseAllRows{{/crossLink}}
   * * `toggleAllSelection` - closure action {{#crossLink "Components.ModelsTable/actions.toggleAllSelection:method"}}ModelsTable.actions.toggleAllSelection{{/crossLink}}
   *
   * @type string
   * @default ''
   */
  componentForFilterCell = '';

  /**
   * Custom component used in the header cell with sorting and column title
   *
   * It will receive several options:
   *
   * * `column` - current column (one of the {{#crossLink "Components.ModelsTable/processedColumns:property"}}processedColumns{{/crossLink}})
   * * `data` - whole dataset passed to the `models-table`
   * * `selectedItems` - bound from {{#crossLink "Components.ModelsTable/selectedItems:property"}}ModelsTable.selectedItems{{/crossLink}}
   * * `expandedItems` - bound from {{#crossLink "Components.ModelsTable/expandedItems:property"}}ModelsTable.expandedItems{{/crossLink}}
   * * `themeInstance` - bound from {{#crossLink "Components.ModelsTable/themeInstance:property"}}ModelsTable.themeInstance{{/crossLink}}
   * * `expandAllRows` - closure action {{#crossLink "Components.ModelsTable/actions.expandAllRows:method"}}ModelsTable.actions.expandAllRows{{/crossLink}}
   * * `collapseAllRows` - closure action {{#crossLink "Components.ModelsTable/actions.collapseAllRows:method"}}ModelsTable.actions.collapseAllRows{{/crossLink}}
   * * `toggleAllSelection` - closure action {{#crossLink "Components.ModelsTable/actions.toggleAllSelection:method"}}ModelsTable.actions.toggleAllSelection{{/crossLink}}
   *
   * @type string
   * @default ''
   */
  componentForSortCell = '';

  /**
   * Custom component used in the footer cell
   *
   * It will receive several options:
   *
   * * `selectedItems` - bound from {{#crossLink "Components.ModelsTable/selectedItems:property"}}ModelsTable.selectedItems{{/crossLink}}
   * * `expandedItems` - bound from {{#crossLink "Components.ModelsTable/expandedItems:property"}}ModelsTable.expandedItems{{/crossLink}}
   * * `data` - whole dataset passed to the `models-table`
   * * `mappedSelectedItems` - `selectedItems` mapped by `propertyName`
   * * `mappedExpandedItems` - `expandedItems` mapped by `propertyName`
   * * `mappedData` - `data` mapped by `propertyName`
   *
   * @type string
   * @default ''
   */
  componentForFooterCell = '';

  /**
   * Colspan for cell in the sorting-row
   *
   * @type number
   * @default 1
   */
  colspanForSortCell = 1;

  /**
   * @type number
   * @default 1
   * @private
   */
  realColspanForSortCell = 1;

  /**
   * Colspan for cell in the filters-row
   *
   * @type number
   * @default 1
   */
  colspanForFilterCell = 1;

  /**
   * @type number
   * @default 1
   * @private
   */
  realColspanForFilterCell = 1;

  /**
   * Field-name for sorting by current column. If it isn't provided, `propertyName` is used
   *
   * @type string
   * @default null
   */
  sortedBy = null;

  /**
   * The default sorting for this column. Can be either `asc` or `desc`. Needs to be set in conjunction with `sortPrecedence`,
   otherwise it will not have any effect
   *
   * @type string
   * @default ''
   */
  sortDirection = '';

  /**
   * Sort precedence for this column - needs to be larger than -1 for sortDirection to take effect
   *
   * @type number
   * @default ''
   */
  sortPrecedence = null;

  /**
   * If sorting should be disabled for this column
   *
   */
  disableSorting = false;

  /**
   * If filtering should be disabled for this column
   *
   */
  disableFiltering = false;

  /**
   * FilterString a default filtering for this column
   *
   * @type string
   * @default ''
   */
  filterString = '';

  /**
   * Custom data's property that is used to filter column. If it isn't provided, `propertyName` is used
   *
   * @type string
   * @default null
   */
  filteredBy = null;

  /**
   * Sorting is column sorted now
   *
   */
  sorting = false;

  /**
   * Is current column hidden by default
   *
   */
  isHidden = false;

  /**
   * Can current column be hidden. This field determines, if column appears in the columns-dropdown. If `mayBeHidden` is `true` and `isHidden` is also `true` for column, this column always be hidden
   *
   */
  mayBeHidden = true;

  /**
   * If `true` select-dropdown will be used for filtering by current column. Options are unique values for <code>data.@each.${propertyName}</code>
   *
   */
  filterWithSelect = false;

  /**
   * Should options in the select-box be sorted
   *
   */
  sortFilterOptions = false;

  /**
   * List of option to the filter-box (used if {{#crossLink "Utils.ModelsTableColumn/filterWithSelect:property"}}filterWithSelect{{/crossLink}} is true)
   *
   * @type string[]|number[]|boolean[]
   * @default null
   */
  predefinedFilterOptions = null;

  /**
   * Custom class-name for cells in the current column. This class-name will also be added to the header and filter of the column
   *
   * @default ''
   * @type string
   */
  className = '';

  /**
   * Custom function used to filter rows (used if {{#crossLink "Utils.ModelsTableColumn/filterWithSelect:property"}}filterWithSelect{{/crossLink}} is false)
   *
   * @type function
   */
  filterFunction = null;

  /**
   * Optional custom function used to sort rows
   *
   * @type function
   */
  sortFunction = null;

  /**
   * Placeholder for filter-input
   *
   * @type string
   * @default ''
   */
  filterPlaceholder = '';

  /**
   * If this property is defined, link to the route will be rendered in the cell. {{#crossLink "Utils.ModelsTableColumn/propertyName:property"}}propertyName{{/crossLink}} is used as an anchor. If it's not declared, `id` will be used. <br /> Main idea for `routeName` is to provide a simple way to generate links for each model in the `data`. It should not be used for any other purposes
   *
   * @type string
   * @default ''
   */
  routeName = '';
  /**
   * If this property is defined, link to the route will be rendered in the cell. {{#crossLink "Utils.ModelsTableColumn/routeProperty:property"}}routeProperty{{/crossLink}} is used as an anchor. If it's not declared, `id` will be used. <br /> Main idea for `routeName` is to provide a simple way to generate links for each model in the `data`. It should not be used for any other purposes
   *
   * @type string
   * @default ''
   */
  routeProperty = 'id';
  /**
   * Object containing the definition of the column passed into the component
   *
   * @type object
   * @default null
   * @readOnly
   * @private
   */
  originalDefinition = null;

  __mt = null;

  /**
   * @type object[]
   * @readonly
   * @private
   */
  @readOnly('__mt.data')
  data;

  /**
   * @type string
   * @private
   * @readOnly
   */
  @computed('propertyName')
  get cssPropertyName() {
    return this.propertyName.replace(/\./g, '-');
  }

  /**
   * @private
   * @readOnly
   */
  @not('isHidden')
  isVisible;

  /**
   * @private
   * @readOnly
   */
  @equal('sorting', 'asc')
  sortAsc;

  /**
   * @private
   * @readOnly
   */
  @equal('sorting', 'desc')
  sortDesc;

  /**
   * @private
   * @readOnly
   */
  @notEmpty('filterString')
  filterUsed;

  /**
   * Allow sorting for column or not
   *
   * @private
   * @readOnly
   */
  @computed('sortField', 'disableSorting')
  get useSorting () {
    return this.sortField && !this.disableSorting;
  }

  /**
   * @type string
   * @readonly
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
   * @private
   */
  @computed('filterField', 'disableFiltering')
  get useFilter() {
    return this.filterField && !this.disableFiltering;
  }
  set useFilter(v) {
    return v;
  }

  /**
   * @type string
   * @readonly
   */
  @computed('filteredBy', 'propertyName')
  get filterField() {
    return this.filteredBy || this.propertyName;
  }

  /**
   * If preselected option doesn't exist after <code>filterOptions</code> update,
   * <code>filterString</code> is reverted to empty string (basically, filtering for this column is dropped)
   *
   * @method cleanFilterString
   * @private
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
