import {
  create,
  text,
  fillable,
  clickable,
  count,
  hasClass,
  value,
  attribute,
  collection,
  notHasClass,
  triggerable,
  property,
  isPresent,
} from 'ember-cli-page-object';
import { findOne } from 'ember-cli-page-object/extend';
import { getter } from 'ember-cli-page-object/macros';

export const definition = {
  scope: '.models-table-wrapper',
  tablesCount: count('table'),
  summary: text('.table-summary'),
  globalFilterLabel: text('.globalSearch label'),
  globalFilterFocused: getter(function () {
    return document.activeElement === findOne(document, '.globalSearch input');
  }),
  clickGlobalFilterLabel: clickable('.globalSearch label'),
  doGlobalFilter: fillable('.filterString'),
  clearGlobalFilter: clickable('.globalSearch .clearFilterIcon'),
  clearGlobalFilterExists: isPresent('.globalSearch .clearFilterIcon'),
  clearGlobalFilterDisabled: attribute(
    'disabled',
    '.globalSearch .clearFilterIcon'
  ),
  tableFooterCount: count('.table-footer'),
  clearAllFilters: clickable('.clearFilters'),
  clearAllFiltersExists: isPresent('.clearFilters'),
  clearAllFiltersDisabled: attribute('disabled', '.clearFilters'),
  changePageSize: fillable('select.changePageSize'),
  pageSize: value('select.changePageSize'),
  expandAllRows: clickable('thead .expand-all-rows'),
  collapseAllRows: clickable('thead .collapse-all-rows'),
  toggleAllSelection: clickable('thead .toggle-all'),
  expandRowButtons: count('button.expand-row'),
  collapseRowButtons: count('button.collapse-row'),
  filters: collection('table thead tr:eq(1) th', {
    content: text(),
    inputFilter: fillable('input'),
    inputValue: value('input'),
    inputPlaceholder: attribute('placeholder', 'input'),
    inputFilterExists: isPresent('input'),
    clearFilter: clickable('.clearFilterIcon'),
    clearFilterExists: isPresent('.clearFilterIcon'),
    clearFilterDisabled: attribute('disabled', '.clearFilterIcon'),
    selectFilter: fillable('select'),
    focusSelectFilter: clickable('select'),
    selectFilterExists: isPresent('select'),
    selectPlaceholder: text('select option:eq(0)'),
    selectValue: value('select'),
    selectOptions: collection('select option', {
      text: text(),
    }),
    colspan: attribute('colspan'),
    label: text('label.emt-sr-only'),
  }),
  sorting: collection('table thead tr:eq(0) th', {
    title: text(),
    hasSortMarker: isPresent('i'),
    isSorted: hasClass('glyphicon', 'i'),
    colspan: attribute('colspan'),
    doSort: clickable('[role=button]'),
  }),
  headers: collection('thead tr', {
    cells: collection('th', {
      text: text(),
      colspan: attribute('colspan'),
    }),
  }),
  footer: {
    scope: 'tfoot',
    cells: collection('tr td', {
      isComponent: hasClass('ember-view'),
    }),
  },
  navigation: {
    scope: '.table-nav',
    text: text(''),
    selectPageNumberExists: isPresent('select'),
    selectPageNumber: fillable('select'),
    selectPageNumberDisabled: property('disabled', 'select'),
    selectedPageNumber: value('select'),
    goToLastPage: clickable('button:eq(3)'),
    goToLastPageDisabled: hasClass('disabled', 'button:eq(3)'),
    goToNextPage: clickable('button:eq(2)'),
    goToNextPageDisabled: hasClass('disabled', 'button:eq(2)'),
    goToPrevPage: clickable('button:eq(1)'),
    goToPrevPageDisabled: hasClass('disabled', 'button:eq(1)'),
    goToFirstPage: clickable('button:eq(0)'),
    goToFirstPageDisabled: hasClass('disabled', 'button:eq(0)'),
    navigationButtons: collection('button', {
      text: text(),
    }),
    btns: collection('button', {
      icon: attribute('class', 'i'),
    }),
    disabledNavigationLinksCount: count('button.disabled'),
  },
  numericNavigation: collection('.table-nav button', {
    label: text(),
  }),
  allRows: collection('tbody tr:not(.expand-row)', {
    isGroupingRow: getter(function () {
      return !!this.cells.toArray().find((c) => c.isGroupingRowCell);
    }),
    cells: collection('td', {
      isGroupingRowCell: hasClass('grouping-cell'),
    }),
  }),
  rows: collection('tbody tr:not(.expand-row):not(.grouping-row)', {
    expand: clickable('button.expand-row'),
    collapse: clickable('button.collapse-row'),
    expanded: hasClass('expanded-row'),
    collapsed: notHasClass('expanded-row'),
    selected: hasClass('selected-row'),
    dbClick: triggerable('dblclick'),
    hover: triggerable('mouseenter'),
    out: triggerable('mouseleave'),
    getSelf() {
      return findOne(document, this.scope);
    },
    getCellColspans() {
      return this.cells.mapBy('colspan');
    },
    cells: collection('td', {
      content: text(),
      colspan: attribute('colspan'),
      groupSummaryVisible: text('.visible'),
      groupSummaryExpanded: text('.expanded'),
      groupSummarySelected: text('.selected'),
    }),
  }),
  rowExpands: collection('tbody tr.expand-row', {
    selected: hasClass('selected-expand'),
    id: text('.id'),
  }),
  groupByFieldExists: isPresent('.change-group-by-field'),
  focusGroupByField: clickable('.change-group-by-field'),
  changeGroupByField: fillable('.change-group-by-field'),
  groupByFieldOptions: collection('.change-group-by-field option', {
    label: text(),
  }),
  sortByGroupedBy: clickable('.data-group-by-wrapper button'),

  /**
   * Use only when group-value is shown in the separated row!
   */
  groupingRowsByRow: collection('tbody tr.grouping-row', {
    cell: {
      scope: 'td:eq(0)',
      content: text(),
      colspan: attribute('colspan'),
      toggleGroup: clickable('button:eq(0)'),
      toggleSelection: clickable('.toggle-selection-group'),
      toggleExpands: clickable('.toggle-expands-group'),
      toggleText: text('button.toggle-grouped-group'),
      expandedCountText: text('.expanded-count'),
      selectedCountText: text('.selected-count'),
    },
  }),

  getIndexOfFirstRowGroupedByRow(groupIndex) {
    let index = 0;
    let groupedCount = 0;
    this.allRows.forEach((row, i) => {
      if (row.isGroupingRow) {
        groupedCount++;
      }
      if (groupedCount === groupIndex) {
        index = i + 1;
      }
    });
    return index;
  },

  /*
   * Use only when group-value is shown in the separated row!
   */
  getRowsIndexesFromGroupRow(groupIndex) {
    const first = this.getIndexOfFirstRowGroupedByRow(groupIndex) - groupIndex;
    let last = 0;
    if (this.groupingRowsByRow.length > groupIndex + 1) {
      last =
        this.getIndexOfFirstRowGroupedByRow(groupIndex + 1) - groupIndex - 1;
    } else {
      last = this.rows.length;
    }
    return { first: parseInt(first, 10), last: parseInt(last, 10) };
  },

  /*
   * Use only when group-value is shown in the separated row!
   */
  getRowsFromGroupRow(groupIndex) {
    const { first, last } = this.getRowsIndexesFromGroupRow(groupIndex);
    return this.rows.toArray().slice(first, last);
  },

  /**
   * Use only when group-value is shown in the separated column!
   */
  groupingRowsByColumn: collection('tbody td.grouping-cell', {
    content: text(),
    rowspan: attribute('rowspan'),
    toggleGroup: clickable('button:eq(0)'),
    toggleSelection: clickable('.toggle-selection-group'),
    toggleExpands: clickable('.toggle-expands-group'),
    toggleText: text('button.toggle-grouped-group'),
    expandedCountText: text('.expanded-count'),
    selectedCountText: text('.selected-count'),
  }),

  getIndexOfFirstRowGroupedByColumn(groupIndex) {
    let index = 0;
    let groupedCount = 0;
    this.allRows.forEach((row, i) => {
      if (row.isGroupingRow) {
        groupedCount++;
      }
      if (groupedCount === groupIndex) {
        index = i + 1;
      }
    });
    return index;
  },

  /*
   * Use only when group-value is shown in the separated column!
   */
  getRowsIndexesFromGroupColumn(groupIndex) {
    const first = this.getIndexOfFirstRowGroupedByColumn(groupIndex);
    let last = 0;
    if (this.groupingRowsByColumn.length > groupIndex + 1) {
      last = this.getIndexOfFirstRowGroupedByColumn(groupIndex + 1) - 1;
    } else {
      last = this.rows.length - 1;
    }
    return { first: parseInt(first, 10), last: parseInt(last, 10) };
  },

  /*
   * Use only when group-value is shown in the separated column!
   */
  getRowsFromGroupColumn(groupIndex) {
    const { first, last } = this.getRowsIndexesFromGroupColumn(groupIndex);
    return this.rows.toArray().slice(first, last);
  },

  getCellsCount() {
    return this.rows.map((row) => row.cells.length).reduce((a, b) => a + b, 0);
  },
  getColumnCells(columnIndex, startRow = 0, endRow = Number.POSITIVE_INFINITY) {
    return this.rows
      .toArray()
      .slice(startRow, endRow)
      .map((row) => {
        const index =
          columnIndex < 0 ? row.cells.length + columnIndex : columnIndex;
        return row.cells.objectAt(index).content;
      });
  },
  columnsDropdownLabel: text('.columns-dropdown .btn'),
  toggleColumnDropDown: clickable('.columns-dropdown .dropdown-toggle'),
  columnsDropdownListExists: isPresent('.columns-dropdown .dropdown-menu'),
  columnsDropDown: collection('.columns-dropdown li a', {
    toggleLabel: text('button'),
    label: text(),
  }),
  async openColumnsDropDown() {
    if (!this.columnsDropdownListExists) {
      return await this.toggleColumnDropDown();
    }
  },

  firstColumnIconSelector: getter(function () {
    return '.columns-dropdown li:nth-child(5) a i';
  }),
  secondColumnIconSelector: getter(function () {
    return '.columns-dropdown li:nth-child(6) a i';
  }),
  checkedIconClass: getter(function () {
    return 'glyphicon-check';
  }),
  uncheckedIconClass: getter(function () {
    return 'glyphicon-unchecked';
  }),
};

export default create(definition);
