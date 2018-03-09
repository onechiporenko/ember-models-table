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
import $ from 'jquery';

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
  toggleAllSelection: clickable('thead .toggle-all'),
  expandRowButtons: count('a.expand-row'),
  collapseRowButtons: count('a.collapse-row'),
  filters: collection('table thead tr:eq(1) th', {
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
  }),
  sorting: collection('table thead tr:eq(0) th', {
    title: text(),
    hasSortMarker: exists('i'),
    isSorted: hasClass('glyphicon', 'i')
  }),
  headers: collection('thead tr', {
    cells: text('th', {multiple: true}),
    colspans: attribute('colspan', 'th', {multiple: true})
  }),
  footer: {
    scope: 'tfoot',
    cells: collection('tr td', {
      isComponent: hasClass('ember-view')
    })
  },
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
  numericNavigation: collection('.table-nav button', {
    label: text()
  }),
  rows: collection('tbody tr:not(.expand-row):not(.grouping-row)', {
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
      return this.cells.mapBy('colspan');
    },
    cells: collection('td', {
      content: text(),
      colspan: attribute('colspan'),
      groupSummaryVisible: text('.visible'),
      groupSummaryExpanded: text('.expanded'),
      groupSummarySelected: text('.selected')
    })
  }),
  rowExpands: collection('tbody tr.expand-row', {
    selected: hasClass('selected-expand'),
    id: text('.id')
  }),
  groupByFieldExists: exists('.change-group-by-field'),
  changeGroupByField: fillable('.change-group-by-field'),
  groupByFieldOptions: collection('.change-group-by-field option', {
    label: text()
  }),
  sortByGroupedBy: clickable('.data-group-by-wrapper button'),

  /**
   * Use only when group-value is shown in the separated row!
   */
  groupingRowsByRow: collection('tbody tr.grouping-row', {
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
      toggleText: text('a'),
      expandedCountText: text('.expanded-count'),
      selectedCountText: text('.selected-count')
    }
  }),

  /*
   * Use only when group-value is shown in the separated row!
   */
  getRowsIndexesFromGroupRow(groupIndex) {
    const first = this.groupingRowsByRow.objectAt(groupIndex).getIndex() - groupIndex;
    const nextGroup = this.groupingRowsByRow.length > groupIndex + 1 ? this.groupingRowsByRow.objectAt(groupIndex + 1) : null;
    const last = nextGroup ? nextGroup.getIndex() - groupIndex - 1 : this.rows.length;
    return {first: parseInt(first, 10), last: parseInt(last, 10)};
  },

  /*
   * Use only when group-value is shown in the separated row!
   */
  getRowsFromGroupRow(groupIndex) {
    const {first, last} = this.getRowsIndexesFromGroupRow(groupIndex);
    return this.rows.toArray().slice(first, last);
  },

  /**
   * Use only when group-value is shown in the separated column!
   */
  groupingRowsByColumn: collection('tbody td.grouping-cell', {
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
    toggleText: text('a'),
    expandedCountText: text('.expanded-count'),
    selectedCountText: text('.selected-count')
  }),

  /*
   * Use only when group-value is shown in the separated column!
   */
  getRowsIndexesFromGroupColumn(groupIndex) {
    const first = this.groupingRowsByColumn.objectAt(groupIndex).getIndex();
    const nextGroup = this.groupingRowsByColumn.length > groupIndex + 1 ? this.groupingRowsByColumn.objectAt(groupIndex + 1) : null;
    const last = nextGroup ? nextGroup.getIndex() - 1 : this.rows.length - 1;
    return {first: parseInt(first, 10), last: parseInt(last, 10)};
  },

  /*
   * Use only when group-value is shown in the separated column!
   */
  getRowsFromGroupColumn(groupIndex) {
    const {first, last} = this.getRowsIndexesFromGroupColumn(groupIndex);
    return this.rows.toArray().slice(first, last);
  },

  getCellsCount() {
    return this.rows.map(row => row.cells.length).reduce((a, b) => a + b, 0);
  },
  getColumnCells(columnIndex, startRow = 0, endRow = Number.POSITIVE_INFINITY) {
    return this.rows.toArray().slice(startRow, endRow).map(row => {
      const index = columnIndex < 0 ? row.cells.length + columnIndex : columnIndex;
      return row.cells.objectAt(index).content;
    });
  },
  columnsDropdownLabel: text('.columns-dropdown button'),
  columnsDropDown: collection('.columns-dropdown li a', {
    toggleLabel: text('button'),
    label: text()
  })
});
