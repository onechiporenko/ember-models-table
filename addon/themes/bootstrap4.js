import Bootstrap3Theme from './bootstrap3';
import {computed, get} from '@ember/object';

/**
 * @class Bootstrap4
 * @namespace Themes
 * @extends Themes.Bootstrap3
 */
export default Bootstrap3Theme.extend({
  components: {
    'columns-dropdown': 'models-table/themes/bootstrap4/columns-dropdown',
    'global-filter': 'models-table/themes/bootstrap4/global-filter',
    'data-group-by-select': 'models-table/themes/bootstrap4/data-group-by-select',
    'row-filtering-cell': 'models-table/themes/bootstrap4/row-filtering-cell'
  },
  table: 'table table-striped table-bordered table-condensed table-sm',
  globalFilterWrapper: 'float-left',
  columnsDropdown: 'dropdown-menu dropdown-menu-right',
  columnsDropdownWrapper: 'float-right columns-dropdown dropdown',
  columnsDropdownDivider: 'dropdown-divider',
  buttonDefault: 'btn btn-secondary',
  buttonDefaultSmall: computed('buttonDefault', function () {
    return `${get(this, 'buttonDefault')} btn-sm`;
  }),
  buttonLink: 'btn btn-link',

  footerSummaryNumericPagination: 'col-4',
  footerSummaryDefaultPagination: 'col-5',
  pageSizeWrapper: 'col-2',
  pageSizeSelectWrapper: 'float-right',
  paginationInternalWrapper: 'btn-toolbar float-right',
  paginationWrapperNumeric: 'col-6',
  paginationWrapperDefault: 'col-5',

  // font-awesome is used by default. Feel free to override with any font-icons library
  clearFilterIcon: 'fa fa-times form-control-feedback',
  clearAllFiltersIcon: 'fa fa-times',
  sortGroupedPropertyBtn: 'btn',
  input: 'form-control',
  inputGroup: 'input-group',
  'sort-asc': 'fa fa-sort-asc',
  'sort-desc': 'fa fa-sort-desc',
  'column-visible': 'fa fa-check-square-o',
  'column-hidden': 'fa fa-square-o',
  'nav-first': 'fa fa-angle-double-left',
  'nav-prev': 'fa fa-angle-left',
  'nav-next': 'fa fa-angle-right',
  'nav-last': 'fa fa-angle-double-right',
  'caret': 'caret',
  'expand-row': 'fa fa-plus',
  'expand-all-rows': 'fa fa-plus',
  'collapse-row': 'fa fa-minus',
  'collapse-all-rows': 'fa fa-minus',
  'select-all-rows': 'fa fa-check-square-o',
  'deselect-all-rows': 'fa fa-square-o',
  'select-row': 'fa fa-check-square-o',
  'deselect-row': 'fa fa-square-o'
});
