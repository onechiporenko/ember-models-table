var selectors = {
  firstColumn: 'tbody tr td:nth-child(1)',
  secondColumn: 'tbody tr td:nth-child(2)',
  allRows: 'tbody tr',
  summary: '.table-summary',
  filterString: '.filterString',
  navigationLinks: '.table-nav a',
  navigationButtons: '.table-nav button',
  theadSecondRowCells: 'thead tr:eq(1) th',
  theadSecondRowFirstColumnFilter: 'thead tr:eq(1) th:eq(0) input',
  theadSecondRowSecondColumnFilter: 'thead tr:eq(1) th:eq(1) input',
  theadFirstRowFirstCell: 'thead tr th:eq(0)',
  theadFirstRowFirstCellSort: 'thead tr th:eq(0) span',
  theadFirstRowSecondCell: 'thead tr th:eq(1)',
  theadFirstRowCells: 'thead tr:eq(0) th',
  tbodyFirstRowCells: 'tbody tr:eq(0) td',
  tbodyFirstColumnCells: 'tbody td:first-child',
  tbodySecondColumnCells: 'tbody td:nth-child(2)',
  tbodyAllCells: 'tbody tr td',
  columnsDropdown: '.columns-dropdown li',
  tableNavBtnLast: '.table-nav a:eq(3)',
  tableNavBtnNext: '.table-nav a:eq(2)',
  tableNavBtnBack: '.table-nav a:eq(1)',
  tableNavBtnFirst: '.table-nav a:eq(0)',
  pageSizeDropdown: 'select.changePageSize'
};

export {selectors};

/**
 * Usage from tests: <code>getEachAsString.call(this, 'selector');</code>
 * @param {string} selector
 * @param {string} [delimiter]
 * @returns {string}
 */
export function getEachAsString (selector, delimiter) {
  delimiter = delimiter || '';
  return this
    .$(selector)
    .map((index, cell) => $(cell).text().trim())
    .get()
    .join(delimiter);
}

/**
 * Usage from tests: <code>getEachClassAsString.call(this, 'selector');</code>
 * @param {string} selector
 * @param {string} [delimiter]
 * @returns {string}
 */
export function getEachClassAsString (selector, delimiter) {
  delimiter = delimiter || '';
  return this
    .$(selector)
    .map((index, cell) => $(cell).prop('class').trim())
    .get()
    .join(delimiter);
}

/**
 * Usage from tests: <code>getEachValueAsString.call(this, 'selector');</code>
 * @param {string} selector
 * @param {string} [delimiter]
 * @returns {string}
 */
export function getEachValueAsString (selector, delimiter) {
  return this
    .$(selector)
    .map((index, cell) => $(cell).val())
    .get()
    .join(delimiter);
}

/**
 * Usage from tests: <code>getCount.call(this, 'selector');</code>
 * @param {string} selector
 * @returns {number}
 */
export function getCount(selector) {
  return this
    .$(selector)
    .length;
}

export function nextPage() {
  this.$(selectors.tableNavBtnNext).click();
}

export function globalFilter(str) {
  this.$(selectors.filterString).val(str);
  this.$(selectors.filterString).change();
}

export function filterFirstColumn(str) {
  this.$(selectors.theadSecondRowFirstColumnFilter).val(str);
  this.$(selectors.theadSecondRowFirstColumnFilter).change();
}

export function filterSecondColumn(str) {
  this.$(selectors.theadSecondRowSecondColumnFilter).val(str);
  this.$(selectors.theadSecondRowSecondColumnFilter).change();
}

export function sortFirstColumn() {
  this.$(selectors.theadFirstRowFirstCell).click();
}

export function sortSecondColumn() {
  this.$(selectors.theadFirstRowSecondCell).click();
}

export function changePageSize(val) {
  this.$(selectors.pageSizeDropdown).val(val);
  this.$(selectors.pageSizeDropdown).change();
}

function _columnsDropdownClick (index) {
  this.$(`${selectors.columnsDropdown}:eq(${index}) a`).click();
}

export function toggleFirstColumnVisibility() {
  _columnsDropdownClick(4);
}

export function toggleSecondColumnVisibility() {
  _columnsDropdownClick(5);
}

export function hideAllColumns() {
  _columnsDropdownClick(1);
}

export function showAllColumns() {
  _columnsDropdownClick(0);
}