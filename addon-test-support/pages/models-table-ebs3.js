import {
  create,
  text
} from 'ember-cli-page-object';

import {definition as definitionBs} from './models-table-bs';

export const definition = Object.assign({}, definitionBs, {
  globalFilterLabel: text('.globalSearch .input-group-addon')
});

export default create(definition);
