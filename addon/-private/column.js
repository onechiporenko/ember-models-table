import Ember from 'ember';

const {
  observer,
  computed,
  isEmpty,
  Object: O,
  set,
  get,
  A
} = Ember;


/**
 * @typedef {object} ModelsTable~ModelsTableColumn
 * @property {string} propertyName data's property shown in the current column
 * @property {string} title column's title
 * @property {string} template custom template used in the column's cells
 * @property {string} component custom component used in the column's cells. It receives 4 attributes - table (this component), record, column (one of the processedColumns) and all data
 * @property {string} templateForFilterCell custom template used in the header cell with filter
 * @property {string} componentForFilterCell custom component used in the header cell with filter. It receives 4 attributes - table (this component), record, column (one of the processedColumns) and all data
 * @property {string} templateForSortCell custom template used in the header cell with sorting and column title
 * @property {string} componentForSortCell custom component used in the header cell with sorting and column title. It receives 4 attributes - table (this component), record, column (one of the processedColumns) and all data
 * @property {string} sortedBy custom data's property that is used to sort column
 * @property {string} sortDirection the default sorting direction of the column, asc or desc - only in effect if sortPrecedence is set!
 * @property {number} sortPrecedence the sort precedence for this column - needs to be larger than -1 for sortDirection to take effect
 * @property {boolean} disableSorting if sorting should be disabled for this column
 * @property {boolean} disableFiltering if filtering should be disabled for this column
 * @property {string} filterString a default filtering for this column
 * @property {string} filteredBy custom data's property that is used to filter column
 * @property {string} sorting is column sorted now
 * @property {boolean} isHidden is column hidden now
 * @property {boolean} mayBeHidden may this column be hidden
 * @property {boolean} filterWithSelect should select-box be used as filter for this column
 * @property {boolean} sortFilterOptions should options in the select-box be sorted (<code>false</code> by default)
 * @property {string[]|number[]} predefinedFilterOptions list of option to the filter-box (used if <code>filterWithSelect</code> is true)
 * @property {string} className custom classNames for column
 * @property {function} filterFunction custom function used to filter rows (used if <code>filterWithSelect</code> is false)
 * @property {string} filterPlaceholder placeholder for filter-input
 * @property {object} originalDefinition object containing the definition of the column passed into the component.
 */
export default O.extend({

  cssPropertyName: computed('propertyName', function () {
    return get(this, 'propertyName').replace(/\./g, '-');
  }),

  isVisible: computed.not('isHidden'),

  sortAsc: computed.equal('sorting', 'asc'),

  sortDesc: computed.equal('sorting', 'desc'),

  filterUsed: computed.notEmpty('filterString'),

  /**
   * If preselected option doesn't exist after <code>filterOptions</code> update,
   * <code>filterString</code> is reverted to empty string (basically, filtering for this column is dropped)
   */
  cleanFilterString: observer('filterWithSelect', 'filterOptions.[]', 'filterString', function () {
    let filterOptions = get(this, 'filterOptions');
    let filterWithSelect = get(this, 'filterWithSelect');
    let filterString = get(this, 'filterString');
    if (!filterWithSelect || isEmpty(filterOptions)) {
      return;
    }
    if (!A(filterOptions).findBy('value', filterString)) {
      set(this, 'filterString', '');
    }
  })

});
