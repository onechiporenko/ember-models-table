import { isEmpty } from '@ember/utils';
import O, { get, set, computed, observer } from '@ember/object';
import { A } from '@ember/array';


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
   * Custom component used in the column's cells
   *
   * @type string
   * @property component
   * @default ''
   */
  component: '',

  /**
   * Custom component used in the header cell with filter
   *
   * @type string
   * @property componentForFilterCell
   * @default ''
   */
  componentForFilterCell: '',

  /**
   * Custom component used in the header cell with sorting and column title
   *
   * @type string
   * @property componentForSortCell
   * @default ''
   */
  componentForSortCell: '',

  /**
   * Field-name for sorting by current column. If it isn't provided, `propertyName` is used
   *
   * @type string
   * @property sortedBy
   * @default ''
   */
  sortedBy: '',

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
   * @default ''
   */
  filteredBy: '',

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
    return get(this, 'propertyName').replace(/\./g, '-');
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
   * If preselected option doesn't exist after <code>filterOptions</code> update,
   * <code>filterString</code> is reverted to empty string (basically, filtering for this column is dropped)
   *
   * @method cleanFilterString
   * @private
   */
  cleanFilterString: observer('filterWithSelect', 'filterOptions.[]', 'filterString', function () {
    let filterOptions = get(this, 'filterOptions');
    let filterWithSelect = get(this, 'filterWithSelect');
    let filterString = get(this, 'filterString');
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
