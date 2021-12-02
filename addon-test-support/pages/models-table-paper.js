import { A } from '@ember/array';
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
  isPresent,
} from 'ember-cli-page-object';

import { findOne, findMany } from 'ember-cli-page-object/extend';
import { getter } from 'ember-cli-page-object/macros';

import { definition as definitionBs } from './models-table-bs';
import { selectChoose } from 'ember-power-select/test-support/helpers';

const getValueToUse = (value, cnt, opts) =>
  opts && 'valueToUse' in opts ? opts.valueToUse : value;

function textWithoutIcon() {
  const icon = findMany(document, `${this.scope} md-icon`)[0];
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
      return await selectChoose(
        findOne(document, `${this.scope} md-select`),
        getValueToUse(...arguments)
      );
    },
    selectFilterExists: isPresent('md-select'),
    focusSelectFilter: clickable('md-select'),
    selectPlaceholder: text('.ember-power-select-placeholder'),
    selectValue: text('.ember-power-select-selected-item'),
    selectValueExists: isPresent('.ember-power-select-selected-item'),
    selectOptions: getter(function () {
      return A(
        findMany(document, 'md-option').map((node) => ({
          text: node.innerText.trim(),
        }))
      );
    }),
    colspan: attribute('colspan'),
    label: text('label.emt-sr-only'),
  }),
  navigation: {
    scope: '.table-nav',
    text: text(''),
    selectPageNumberExists: isPresent('md-select'),
    async selectPageNumber(value) {
      return await selectChoose(
        findOne(document, `${this.scope} md-select`),
        value
      );
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
    navigationButtons: collection('button', {
      text: text(),
    }),
    btns: collection('button', {
      icon: attribute('class', 'md-icon'),
    }),
    disabledNavigationLinksCount: count('button.disabled'),
  },
  async changePageSize(pageSize) {
    return await selectChoose('.changePageSize md-select', pageSize);
  },
  pageSize: text('.changePageSize .ember-power-select-selected-item'),
  toggleColumnDropDown: clickable('.columns-dropdown button'),
  columnsDropdownLabel: text('.columns-dropdown .ember-basic-dropdown-trigger'),
  columnsDropdownListExists: isPresent('md-menu-content', { resetScope: true }),
  columnsDropDown: collection('md-menu-item button', {
    resetScope: true,
    label: getter(textWithoutIcon),
  }),
  firstColumnIconSelector: getter(function () {
    return 'md-menu-item:nth-child(5) md-icon';
  }),
  secondColumnIconSelector: getter(function () {
    return 'md-menu-item:nth-child(6) md-icon';
  }),
  checkedIconClass: getter(function () {
    return 'check_box';
  }),
  uncheckedIconClass: getter(function () {
    return 'check_box_outline_blank';
  }),

  sorting: collection('table thead tr:eq(0) th', {
    title: getter(textWithoutIcon),
    hasSortMarker: isPresent('md-icon'),
    isSorted: getter(function () {
      return (
        this.hasSortMarker &&
        !!findOne(document, `${this.scope} md-icon`).innerText
      );
    }),
    colspan: attribute('colspan'),
    doSort: clickable('[role=button]'),
  }),
  async changeGroupByField() {
    return await selectChoose(
      findOne(document, `${this.scope} .data-group-by-wrapper md-select`),
      getValueToUse(...arguments)
    );
  },
  focusGroupByField: clickable('.change-group-by-field md-select'),
  groupByFieldOptions: getter(function () {
    return findMany(document, 'md-option').map((node) => ({
      label: node.innerText.trim(),
    }));
  }),
});

export default create(definition);
