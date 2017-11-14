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
  collection,
  notHasClass
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
      content: text(),
      inputFilter: fillable('input'),
      inputValue: value('input'),
      inputPlaceholder: attribute('placeholder', 'input'),
      inputFilterExists: exists('input'),
      clearFilter: clickable('.clearFilterIcon'),
      clearFilterExists: exists('.clearFilterIcon'),
      selectFilter: fillable('select'),
      selectFilterExists: exists('select'),
      selectPlaceholder: text('select option:eq(0)'),
      selectValue: value('select'),
      selectOptions: text('select option', {multiple: true})
    }
  }),
  sorting: collection({
    itemScope: 'table thead tr:eq(0) th',
    item: {
      title: text(),
      hasSortMarker: exists('i'),
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
    itemScope: 'tr:not(.expand-row):not(.grouping-row)',
    item: {
      expand: clickable('a.expand-row'),
      collapse: clickable('a.collapse-row'),
      expanded: hasClass('expanded-row'),
      collapsed: notHasClass('expanded-row'),
      selected: hasClass('selected-row'),
      dbClick() {
        return $(this.scope).dblclick();
      },
      hover() {
        return $(this.scope).trigger('mouseenter');
      },
      out() {
        return $(this.scope).trigger('mouseleave');
      },
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
  groupByFieldExists: exists('.change-group-by-field'),
  changeGroupByField: fillable('.change-group-by-field'),
  groupByFieldOptions: collection({
    scope: '.change-group-by-field',
    itemScope: 'option',
    item: {
      label: text()
    }
  }),
  sortByGroupedBy: clickable('.data-group-by-wrapper button'),

  /**
   * Use only when group-value is shown in the separated row!
   */
  groupingRowsByRow: collection({
    scope: 'tbody',
    itemScope: 'tr.grouping-row',
    item: {
      getIndex() {
        const rows = $('table tbody tr:not(.expand-row)').toArray();
        const thisRow = $(this.scope)[0];
        for (let i = 0; i < rows.length; i++) {
          if (rows[i] === thisRow) {
            return i;
          }
        }
      },
      cell: {
        scope: 'td:eq(0)',
        content: text(),
        colspan: attribute('colspan'),
        toggleGroup: clickable('a'),
        toggleSelection: clickable('.toggle-selection-group'),
        toggleExpands: clickable('.toggle-expands-group'),
        toggleText: text('a')
      }
    }
  }),

  /*
   * Use only when group-value is shown in the separated row!
   */
  getRowsIndexesFromGroupRow(groupIndex) {
    const first = this.groupingRowsByRow(groupIndex).getIndex() - groupIndex;
    const nextGroup = this.groupingRowsByRow().count > groupIndex + 1 ? this.groupingRowsByRow(groupIndex + 1) : null;
    const last = nextGroup ? nextGroup.getIndex() - groupIndex - 1 : this.rows().count;
    return {first: parseInt(first, 10), last: parseInt(last, 10)};
  },

  /*
   * Use only when group-value is shown in the separated row!
   */
  getRowsFromGroupRow(groupIndex) {
    const {first, last} = this.getRowsIndexesFromGroupRow(groupIndex);
    return this.rows().toArray().slice(first, last);
  },

  /**
   * Use only when group-value is shown in the separated column!
   */
  groupingRowsByColumn: collection({
    scope: 'tbody',
    itemScope: 'td.grouping-cell',
    item: {
      getIndex() {
        const rows = $('table tbody tr:not(.expand-row)').toArray();
        const thisRow = $(this.scope).parent()[0];
        for (let i = 0; i < rows.length; i++) {
          if (rows[i] === thisRow) {
            return i;
          }
        }
      },
      content: text(),
      rowspan: attribute('rowspan'),
      toggleGroup: clickable('a'),
      toggleSelection: clickable('.toggle-selection-group'),
      toggleExpands: clickable('.toggle-expands-group'),
      toggleText: text('a')
    }
  }),

  /*
   * Use only when group-value is shown in the separated column!
   */
  getRowsIndexesFromGroupColumn(groupIndex) {
    const first = this.groupingRowsByColumn(groupIndex).getIndex();
    const nextGroup = this.groupingRowsByColumn().count > groupIndex + 1 ? this.groupingRowsByColumn(groupIndex + 1) : null;
    const last = nextGroup ? nextGroup.getIndex() - 1 : this.rows().count - 1;
    return {first: parseInt(first, 10), last: parseInt(last, 10)};
  },

  /*
   * Use only when group-value is shown in the separated column!
   */
  getRowsFromGroupColumn(groupIndex) {
    const {first, last} = this.getRowsIndexesFromGroupColumn(groupIndex);
    return this.rows().toArray().slice(first, last);
  },

  getCellsCount() {
    return this.rows().map(row => row.cells().count).reduce((a, b) => a + b, 0);
  },
  getColumnCells(columnIndex, startRow = 0, endRow = Number.POSITIVE_INFINITY) {
    return this.rows().toArray().slice(startRow, endRow).map(row => {
      const index = columnIndex < 0 ? row.cells().count + columnIndex : columnIndex;
      return row.cells(index).content;
    });
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
