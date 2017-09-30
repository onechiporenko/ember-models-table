import {
  create,
  text,
  fillable,
  clickable,
  count,
  hasClass,
  findElement,
  value,
  attribute,
  collection
} from 'ember-cli-page-object';

// https://github.com/san650/ember-cli-page-object/pull/323 is not in the any release yet
function exists(selector, options) {
  return {
    isDescriptor: true,
    get() {
      return !!findElement(this, selector, options).length;
    }
  };
}
function notExists(selector, options) {
  return {
    isDescriptor: true,
    get() {
      return !findElement(this, selector, options).length;
    }
  };
}

export default create({
  scope: '.models-table-wrapper',
  tablesCount: count('table'),
  summary: text('.table-summary'),
  globalFilterLabel: text('.globalSearch label'),
  doGlobalFilter: fillable('.filterString'),
  clearGlobalFilter: clickable('.filterString~.clearFilterIcon'),
  clearGlobalFilterExists: exists('.filterString~.clearFilterIcon'),
  tableFooterCount: count('.table-footer'),
  clearAllFilters: clickable('a.clearFilters'),
  clearAllFiltersExists: exists('a.clearFilters'),
  changePageSize: fillable('select.changePageSize'),
  pageSize: value('select.changePageSize'),
  expandAllRows: clickable('thead .expand-all-rows'),
  collapseAllRows: clickable('thead .collapse-all-rows'),
  expandRowButtons: count('a.expand-row'),
  collapseRowButtons: count('a.collapse-row'),
  filters: collection({
    itemScope: 'table thead tr:eq(1) th',
    item: {
      inputFilter: fillable('input'),
      inputValue: value('input'),
      inputPlaceholder: attribute('placeholder', 'input'),
      inputFilterExists: exists('input'),
      clearFilter: clickable('.clearFilterIcon'),
      clearFilterExists: exists('.clearFilterIcon'),
      selectFilter: fillable('select'),
      selectFilterExists: exists('select'),
      selectValue: value('select'),
      selectOptions: text('select option', {multiple: true})
    }
  }),
  sorting: collection({
    itemScope: 'table thead tr:eq(0) th',
    item: {
      title: text(),
      isSorted: hasClass('glyphicon', 'i'),
    }
  }),
  headers: collection({
    scope: 'thead',
    itemScope: 'tr',
    item: {
      cells: text('th', {multiple: true}),
      colspans: attribute('colspan', 'th', {multiple: true}),
    }
  }),
  navigation: {
    scope: '.table-nav',
    text: text(''),
    goToLastPage: clickable('a:eq(3)'),
    goToLastPageDisabled: hasClass('disabled', 'a:eq(3)'),
    goToNextPage: clickable('a:eq(2)'),
    goToNextPageDisabled: hasClass('disabled', 'a:eq(2)'),
    goToPrevPage: clickable('a:eq(1)'),
    goToPrevPageDisabled: hasClass('disabled', 'a:eq(1)'),
    goToFirstPage: clickable('a:eq(0)'),
    goToFirstPageDisabled: hasClass('disabled', 'a:eq(0)'),
    navigationButtons: text('button', {multiple: true}),
    disabledNavigationLinksCount: count('a.disabled')
  },
  numericNavigation: collection({
    scope: '.table-nav',
    itemScope: 'button',
    item: {
      label: text()
    }
  }),
  rows: collection({
    scope: 'tbody',
    itemScope: 'tr:not(.expand-row)',
    item: {
      expand: clickable('a.expand-row'),
      collapse: clickable('a.collapse-row'),
      expanded: notExists('a.expand-row'),
      collapsed: notExists('a.collapse-row'),
      selected: hasClass('selected-row'),
      getCellColspans() {
        return this.cells().mapBy('colspan');
      },
      cells: collection({
        itemScope: 'td',
        item: {
          content: text(),
          colspan: attribute('colspan')
        }
      })
    }
  }),
  rowExpands: collection({
    scope: 'tbody',
    itemScope: 'tr.expand-row',
    item: {
      selected: hasClass('selected-expand'),
      id: text('.id')
    }
  }),
  getCellsCount() {
    return this.rows().map(row => row.cells().count).reduce((a, b) => a + b, 0);
  },
  getColumnCells(index) {
    return this.rows().map(row => row.cells(index).content);
  },
  columnsDropDown: collection({
    scope: '.columns-dropdown',
    toggleLabel: text('button'),
    itemScope: 'li a',
    item: {
      label: text()
    }
  })
});
