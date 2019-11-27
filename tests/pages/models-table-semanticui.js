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

import {click} from '@ember/test-helpers';

import {definition as definitionBs} from './models-table-bs';

function getDataId(attributeName, selector, clb) {
  return {
    isDescriptor: true,
    get() {
      let elements = findElement(this, selector);
      return elements.length ? clb(elements[0].getAttribute(attributeName)) : '';
    }
  };
}

export const definition = Object.assign({}, definitionBs, {

  navigation: {
    scope: '.table-nav',
    text: text(''),
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
      icon: attribute('class', 'i')
    }),
    disabledNavigationLinksCount: count('button.disabled'),
    selectPageNumberExists: isPresent('.selection.compact.ui.dropdown'),
    async selectPageNumber(number) {
      await click('.selection.compact.ui.dropdown');
      await click(`.selection.compact.ui.dropdown .menu .item[data-id='${JSON.stringify(number)}']`);
    },
    selectedPageNumber: text('.selection.compact.ui.dropdown .text'),
    selectPageNumberDisabled: hasClass('disabled', '.selection.compact.ui.dropdown'),
  },
  async changePageSize(size) {
    await click('.selection.compact.ui.dropdown');
    await click(`.selection.compact.ui.dropdown .menu .item[data-id='${JSON.stringify(size)}']`);
  },
  pageSize: text('.selection.compact.ui.dropdown .text'),

  filters: collection('table thead tr:eq(1) th', {
    content: text(),
    inputFilter: fillable('input'),
    inputValue: value('input'),
    inputPlaceholder: attribute('placeholder', 'input'),
    inputFilterExists: isPresent('input'),
    clearFilter: clickable('.clearFilterIcon'),
    clearFilterExists: isPresent('.clearFilterIcon'),
    clearFilterDisabled: attribute('disabled', '.clearFilterIcon'),
    async selectFilter(value) {
      if (value === 'true') {
          value = true;
      }
      if (value === 'false') {
          value = false;
      }
      await click('.selection.ui.dropdown');
      await click(`.selection.ui.dropdown .menu .item[data-id='${JSON.stringify(value)}']`);
    },
    selectFilterExists: isPresent('.selection.ui.dropdown'),
    selectPlaceholder: text('.menu .item:eq(0)'),
    selectValue: getDataId('data-id', '.selection.ui.dropdown .selected', v => JSON.parse(v)),
    selectOptions: text('.selection.ui.dropdown .item', {multiple: true}),
    colspan: attribute('colspan'),
    label: text('label.emt-sr-only')
  }),

  columnsDropdownLabel: text('.ui.compact.menu.right.floated .text'),
  toggleColumnDropDown: clickable('.ui.compact.menu.right.floated .ui.simple.dropdown'),
  columnsDropDown: collection('.ui.compact.menu.right.floated .menu .item', {
    toggleLabel: text(),
    label: text()
  }),

  firstColumnIconSelector: '.ui.compact.menu.right.floated .menu .item:nth-child(5) i',
  secondColumnIconSelector: '.ui.compact.menu.right.floated .menu .item:nth-child(6) i',

  checkedIconClass: 'on',
  uncheckedIconClass: 'off',

  async changeGroupByField(value) {
    await click('.change-group-by-field');
    await click(`.change-group-by-field .menu .item[data-id='${JSON.stringify(value)}']`);
  },
  groupByFieldOptions: collection('.change-group-by-field .menu .item', {
    label: text()
  }),
  sortByGroupedBy: clickable('.data-group-by-wrapper button'),

  sorting: collection('table thead tr:eq(0) th', {
    title: text(),
    hasSortMarker: isPresent('i'),
    isSorted: hasClass('sort', 'i'),
    colspan: attribute('colspan')
  }),
});

export default create(definition);
