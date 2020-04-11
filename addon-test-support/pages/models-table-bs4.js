import {
  create,
  attribute,
  text,
  collection,
  hasClass,
  isPresent
} from 'ember-cli-page-object';

import {getter} from 'ember-cli-page-object/macros';
import {definition as definitionBs} from './models-table-bs';

export const definition = Object.assign({}, definitionBs, {
  globalFilterLabel: text('.globalSearch .input-group-text'),
  sorting: collection('table thead tr:eq(0) th', {
    title: text(),
    hasSortMarker: isPresent('i'),
    isSorted: hasClass('fa', 'i'),
    colspan: attribute('colspan')
  }),
  columnsDropDown: collection('.columns-dropdown a', {
    toggleLabel: text('button'),
    label: text()
  }),
  firstColumnIconSelector: getter(function() {
    return '.columns-dropdown a:nth-child(5) i';
  }),
  secondColumnIconSelector: getter(function() {
    return '.columns-dropdown a:nth-child(6) i';
  }),

  checkedIconClass: getter(function() {
    return 'fa fa-check-square-o';
  }),
  uncheckedIconClass: getter(function() {
    return 'fa fa-square-o';
  })
});

export default create(definition);
