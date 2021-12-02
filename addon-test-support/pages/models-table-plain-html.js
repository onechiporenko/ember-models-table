import {
  attribute,
  collection,
  create,
  hasClass,
  isPresent,
  text,
  clickable,
} from 'ember-cli-page-object';

import { definition as definitionBs } from './models-table-bs';
import { getter } from 'ember-cli-page-object/macros';

export const definition = Object.assign({}, definitionBs, {
  columnsDropdownLabel: text('.columns-dropdown button'),
  columnsDropDown: collection('.columns-dropdown a', {
    toggleLabel: text('button'),
    label: text(),
  }),
  sorting: collection('table thead tr:eq(0) th', {
    title: text(),
    hasSortMarker: isPresent('i'),
    isSorted: hasClass('fa', 'i'),
    colspan: attribute('colspan'),
    doSort: clickable('[role=button]'),
  }),
  firstColumnIconSelector: getter(function () {
    return '.columns-dropdown a:nth-child(5) i';
  }),
  secondColumnIconSelector: getter(function () {
    return '.columns-dropdown a:nth-child(6) i';
  }),
  checkedIconClass: getter(function () {
    return 'fa fa-check-square-o';
  }),
  uncheckedIconClass: getter(function () {
    return 'fa fa-square-o';
  }),
});

export default create(definition);
