import { isEmpty } from '@ember/utils';
import O, { get, set, computed, observer } from '@ember/object';
import { A } from '@ember/array';
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
export default O.extend({

  /**
   * Value inverted to the {{#crossLink "Utils.ModelsTableColumn/isHidden:property"}}isHidden{{/crossLink}} initial value
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
   * @default ''
   * @property propertyName
   * @type string
   */
  propertyName: '',

  /**
   * Header for column. If it isn't provided, capitalized `propertyName` is used
   *
   * @default ''
   * @property title
   * @type string
   */
  title: null,

  /**
   * If `true` only `propertyName` will be shown in the column's cells and no components etc. Edit-mode won't affect such column.
   *
   * If `false` column's cells will be processed as usual (components will be used to display data and for edit-mode)
   *
   * @property simple
   * @type boolean
   * @default false
   */
  simple: false,

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
   * @property component
   * @default ''
   */
  component: '',

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
   * @property componentForEdit
   * @default ''
   */
  componentForEdit: '',

  /**
   * Is this column allowed to be editable
   *
   * @default true
   * @property editable
   * @type boolean
   */
  editable: true,

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
   * @property componentForFilterCell
   * @default ''
   */
  componentForFilterCell: '',

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
   * @property componentForSortCell
   * @default ''
   */
  componentForSortCell: '',

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
   * @property componentForFooterCell
   * @default ''
   */
  componentForFooterCell: '',

  /**
   * Colspan for cell in the sorting-row
   *
   * @property colspanForSortCell
   * @type number
   * @default 1
   */
  colspanForSortCell: 1,

  /**
   * @property realColspanForSortCell
   * @type number
   * @default 1
   * @private
   */
  realColspanForSortCell: 1,

  /**
   * Colspan for cell in the filters-row
   *
   * @property colspanForSortCell
   * @type number
   * @default 1
   */
  colspanForFilterCell: 1,

  /**
   * @property realColspanForFilterCell
   * @type number
   * @default 1
   * @private
   */
  realColspanForFilterCell: 1,

  /**
   * Field-name for sorting by current column. If it isn't provided, `propertyName` is used
   *
   * @type string
   * @property sortedBy
   * @default null
   */
  sortedBy: null,

  /**
   * The default sorting for this column. Can be either `asc` or `desc`. Needs to be set in conjunction with `sortPrecedence`,
   otherwise it will not have any effect
   *
   * @type string
   * @property sortDirection
   * @default ''
   */
  sortDirection: '',

  /**
   * Sort precedence for this column - needs to be larger than -1 for sortDirection to take effect
   *
   * @type number
   * @property sortPrecedence
   * @default ''
   */
  sortPrecedence: null,

  /**
   * If sorting should be disabled for this column
   *
   * @property disableSorting
   * @type boolean
   * @default false
   */
  disableSorting: false,

  /**
   * If filtering should be disabled for this column
   *
   * @property disableFiltering
   * @type boolean
   * @default false
   */
  disableFiltering: false,

  /**
   * FilterString a default filtering for this column
   *
   * @property filterString
   * @type string
   * @default ''
   */
  filterString: '',

  /**
   * Custom data's property that is used to filter column. If it isn't provided, `propertyName` is used
   *
   * @type string
   * @property filteredBy
   * @default null
   */
  filteredBy: null,

  /**
   * Sorting is column sorted now
   *
   * @property sorting
   * @type boolean
   * @default false
   */
  sorting: false,

  /**
   * Is current column hidden by default
   *
   * @property isHidden
   * @default false
   * @type boolean
   */
  isHidden: false,

  /**
   * Can current column be hidden. This field determines, if column appears in the columns-dropdown. If `mayBeHidden` is `true` and `isHidden` is also `true` for column, this column always be hidden
   *
   * @property mayBeHidden
   * @default true
   * @type boolean
   */
  mayBeHidden: true,

  /**
   * If `true` select-dropdown will be used for filtering by current column. Options are unique values for <code>data.@each.${propertyName}</code>
   *
   * @property filterWithSelect
   * @type boolean
   * @default false
   */
  filterWithSelect: false,

  /**
   * Should options in the select-box be sorted
   *
   * @property sortFilterOptions
   * @default false
   * @type boolean
   */
  sortFilterOptions: false,

  /**
   * List of option to the filter-box (used if {{#crossLink "Utils.ModelsTableColumn/filterWithSelect:property"}}filterWithSelect{{/crossLink}} is true)
   *
   * @type string[]|number[]|boolean[]
   * @property predefinedFilterOptions
   * @default null
   */
  predefinedFilterOptions: null,

  /**
   * Custom class-name for cells in the current column. This class-name will also be added to the header and filter of the column
   *
   * @property className
   * @default ''
   * @type string
   */
  className: '',

  /**
   * Custom function used to filter rows (used if {{#crossLink "Utils.ModelsTableColumn/filterWithSelect:property"}}filterWithSelect{{/crossLink}} is false)
   *
   * @property filterFunction
   * @type function
   */
  filterFunction: null,

  /**
   * Optional custom function used to sort rows
   *
   * @property sortFunction
   * @type function
   */
  sortFunction: null,

  /**
   * Placeholder for filter-input
   *
   * @property filterPlaceholder
   * @type string
   * @default ''
   */
  filterPlaceholder: '',

  /**
   * If this property is defined, link to the route will be rendered in the cell. {{#crossLink "Utils.ModelsTableColumn/propertyName:property"}}propertyName{{/crossLink}} is used as an anchor. If it's not declared, `id` will be used. <br /> Main idea for `routeName` is to provide a simple way to generate links for each model in the `data`. It should not be used for any other purposes
   *
   * @property routeName
   * @type string
   * @default ''
   */
  routeName: '',
  /**
   * If this property is defined, link to the route will be rendered in the cell. {{#crossLink "Utils.ModelsTableColumn/routeProperty:property"}}routeProperty{{/crossLink}} is used as an anchor. If it's not declared, `id` will be used. <br /> Main idea for `routeName` is to provide a simple way to generate links for each model in the `data`. It should not be used for any other purposes
   *
   * @property routeProperty
   * @type string
   * @default ''
   */
  routeProperty: 'id',
  /**
   * Object containing the definition of the column passed into the component
   *
   * @property originalDefinition
   * @type object
   * @default null
   * @readOnly
   * @private
   */
  originalDefinition: null,

  /**
   * @type string
   * @property cssPropertyName
   * @private
   * @readOnly
   */
  cssPropertyName: computed('propertyName', function () {
    return this.propertyName.replace(/\./g, '-');
  }),

  /**
   * @type boolean
   * @property isVisible
   * @private
   * @readOnly
   */
  isVisible: computed.not('isHidden'),

  /**
   * @type boolean
   * @property sortAsc
   * @private
   * @readOnly
   */
  sortAsc: computed.equal('sorting', 'asc'),

  /**
   * @type boolean
   * @property sortDesc
   * @private
   * @readOnly
   */
  sortDesc: computed.equal('sorting', 'desc'),

  /**
   * @type boolean
   * @property filterUsed
   * @private
   * @readOnly
   */
  filterUsed: computed.notEmpty('filterString'),

  /**
   * Allow sorting for column or not
   *
   * @type boolean
   * @property useSorting
   * @private
   * @readOnly
   */
  useSorting: computed('sortField', 'disableSorting', function () {
    return this.sortField && !this.disableSorting;
  }),

  /**
   * @property sortField
   * @type string
   * @readonly
   */
  sortField: computed('sortedBy', 'propertyName', {
    get() {
    return this.sortedBy || this.propertyName;
    },
    set(k, v) {
      return v;
    }
  }),

  /**
   * Allow filtering for column or not
   *
   * @type boolean
   * @property useFilter
   * @private
   */
  useFilter: computed('filterField', 'disableFiltering', {
    get() {
      return this.filterField && !this.disableFiltering;
    },
    set(k, v) {
      return v;
    }
  }),

  /**
   * @type string
   * @property filterField
   * @readonly
   */
  filterField: computed('filteredBy', 'propertyName', function() {
    return this.filteredBy || this.propertyName;
  }),

  /**
   * If preselected option doesn't exist after <code>filterOptions</code> update,
   * <code>filterString</code> is reverted to empty string (basically, filtering for this column is dropped)
   *
   * @method cleanFilterString
   * @private
   */
  cleanFilterString: observer('filterWithSelect', 'filterOptions.[]', 'filterString', function () {
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
  })

});
