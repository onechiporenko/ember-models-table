import DefaultTheme from './default';

import {alias} from '@ember/object/computed';

export default DefaultTheme.extend({

  components: {
    'columns-dropdown': 'models-table/themes/semanticui/columns-dropdown',
    'global-filter': 'models-table/themes/semanticui/global-filter',
    'pagination-simple': 'models-table/themes/semanticui/pagination-simple',
    'pagination-numeric': 'models-table/themes/semanticui/pagination-numeric',
    'select': 'models-table/themes/semanticui/select',
    'row-filtering-cell': 'models-table/themes/semanticui/row-filtering-cell',
  },
  buttonDefault: 'ui button',
  globalFilterWrapper: 'ui labeled icon input',
  columnsDropdownWrapper: 'ui compact menu right floated',
  columnsDropdownDivider: 'divider',
  buttonsGroup: 'ui compact menu right floated',
  clearFilterIcon: 'remove circle link icon',
  caret: 'dropdown icon',
  table: 'ui selectable striped celled sortable table',
  'column-visible': 'toggle on icon',
  'column-hidden': 'toggle off icon',
  'sort-asc': 'sort ascending icon',
  'sort-desc': 'sort descending icon',
  clearAllFiltersIcon: 'remove circle icon',
  footerSummaryNumericPagination: 'nine wide column',
  footerSummaryDefaultPagination: alias('footerSummaryNumericPagination'),
  pageSizeWrapper: 'two wide column',
  paginationWrapperNumeric: 'five wide column',
  paginationWrapperDefault: alias('paginationWrapperNumeric'),
  tfooterInternalWrapper: 'ui grid',
  'nav-first': 'angle double left icon',
  'nav-prev': 'angle left icon',
  'nav-next': 'angle right icon',
  'nav-last': 'angle double right icon',
  paginationBlock: 'ui icon buttons right floated',

});