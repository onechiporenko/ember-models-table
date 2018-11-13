import Controller from '@ember/controller';

export default Controller.extend({
  showComponentFooter: true,
  showColumnsDropdown: true,
  useFilteringByColumns: true,
  showGlobalFilter: true,
  useNumericPagination: true,
  doFilteringByHiddenColumns: false,
  filteringIgnoreCase: false,
  multipleColumnsSorting: true,
  showPageSize: true,
  collapseNumPaginationForPagesCount: 1,
});