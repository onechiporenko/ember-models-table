import {
  create,
  attribute,
  text,
  count,
  collection,
  clickable,
  hasClass,
  value,
  fillable,
  findElement,
  isPresent
} from 'ember-cli-page-object';

import {getter} from 'ember-cli-page-object/macros';

import {definition as definitionBs} from './models-table-bs';
import {selectChoose} from 'ember-power-select/test-support/helpers';

const getValueToUse = (value, cnt, opts) => opts && 'valueToUse' in opts ? opts.valueToUse : value;

function textWithoutIcon() {
  const icon = findElement(document, `${this.scope} md-icon`)[0];
  const textToReplace = icon ? icon.innerText : '';
  return this.text.replace(textToReplace, '').trim();
}

export const definition = Object.assign({}, definitionBs, {
  doGlobalFilter: fillable('.filterString input'),
  filters: collection('table thead tr:eq(1) th', {
    content: text(),
    inputFilter: fillable('input'),
    inputValue: value('input'),
    inputPlaceholder: attribute('placeholder', 'input'),
    inputFilterExists: isPresent('input'),
    clearFilter: clickable('.clearFilterIcon'),
    clearFilterExists: isPresent('.clearFilterIcon'),
    clearFilterDisabled: attribute('disabled', '.clearFilterIcon'),
    async selectFilter() {
      return await selectChoose(findElement(document, `${this.scope} md-select`)[0], getValueToUse(...arguments));
    },
    selectFilterExists: isPresent('md-select'),
    focusSelectFilter: clickable('md-select'),
    selectPlaceholder: text('.ember-power-select-placeholder'),
    selectValue: text('.ember-power-select-selected-item'),
    selectValueExists: isPresent('.ember-power-select-selected-item'),
    selectOptions: getter(function () {
      return findElement(document, 'md-option', {multiple: true}).toArray().map(node => node.innerText);
    }),
    colspan: attribute('colspan'),
    label: text('label.emt-sr-only')
  }),
  navigation: {
    scope: '.table-nav',
    text: text(''),
    selectPageNumberExists: isPresent('md-select'),
    async selectPageNumber (value) {
      return await selectChoose(findElement(document, `${this.scope} md-select`)[0], value);
    },
    selectPageNumberDisabled: attribute('aria-disabled', 'md-select'),
    selectedPageNumber: text('md-select-value'),
    goToLastPage: clickable('button:eq(3)'),
    goToLastPageDisabled: hasClass('disabled', 'button:eq(3)'),
    goToNextPage: clickable('button:eq(2)'),
    goToNextPageDisabled: hasClass('disabled', 'button:eq(2)'),
    goToPrevPage: clickable('button:eq(1)'),
    goToPrevPageDisabled: hasClass('disabled', 'button:eq(1)'),
    goToFirstPage: clickable('button:eq(0)'),
    goToFirstPageDisabled: hasClass('disabled', 'button:eq(0)'),
    navigationButtons: text('button', {multiple: true}),
    btns: collection('button', {
      icon: attribute('class', 'md-icon')
    }),
    disabledNavigationLinksCount: count('button.disabled')
  },
  async changePageSize(pageSize) {
    return await selectChoose('.changePageSize md-select', pageSize);
  },
  pageSize: text('.changePageSize .ember-power-select-selected-item'),
  toggleColumnDropDown: clickable('.columns-dropdown button'),
  columnsDropdownLabel: text('.columns-dropdown .ember-basic-dropdown-trigger'),
  columnsDropdownListExists: isPresent('md-menu-content'),
  columnsDropDown: collection('md-menu-item button', {
    label: getter(textWithoutIcon)
  }),
  firstColumnIconSelector: '.columns-dropdown md-menu-item:nth-child(5) md-icon',
  secondColumnIconSelector: '.columns-dropdown md-menu-item:nth-child(6) md-icon',
  checkedIconClass: 'check_box',
  uncheckedIconClass: 'check_box_outline_blank',

  sorting: collection('table thead tr:eq(0) th', {
    title: getter(textWithoutIcon),
    hasSortMarker: isPresent('md-icon'),
    isSorted: getter(function () {
      return this.hasSortMarker && !!findElement(document, `${this.scope} md-icon`)[0].innerText;
    }),
    colspan: attribute('colspan')
  }),
  async changeGroupByField() {
    return await selectChoose(findElement(document, `${this.scope} .data-group-by-wrapper md-select`)[0], getValueToUse(...arguments));
  },
  focusGroupByField: clickable('.change-group-by-field md-select'),
  groupByFieldOptions: getter(function () {
    return findElement(document, 'md-option', {multiple: true}).toArray().map(node => ({label: node.innerText}));
  }),
});

export default create(definition);
