import {
  attribute,
  collection,
  create, hasClass, isPresent,
  text
} from 'ember-cli-page-object';

import {definition as definitionBs} from './models-table-bs';

export const definition = Object.assign({}, definitionBs, {
  columnsDropdownLabel: text('.columns-dropdown button'),
  columnsDropDown: collection('.columns-dropdown a', {
    toggleLabel: text('button'),
    label: text()
  }),
  sorting: collection('table thead tr:eq(0) th', {
    title: text(),
    hasSortMarker: isPresent('i'),
    isSorted: hasClass('fa', 'i'),
    colspan: attribute('colspan')
  }),
  firstColumnIconSelector: '.columns-dropdown a:nth-child(5) i',
  secondColumnIconSelector: '.columns-dropdown a:nth-child(6) i',
  checkedIconClass: 'fa fa-check-square-o',
  uncheckedIconClass: 'fa fa-square-o'
});

export default create(definition);
