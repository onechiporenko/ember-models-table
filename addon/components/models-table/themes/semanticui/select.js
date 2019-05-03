import DefaultSelect from 'ember-models-table/components/models-table/select';
import layout from '../../../../templates/components/models-table/select';

export default class SelectComponent extends DefaultSelect {
  layout = layout;

  classNames = ['ui', 'fluid', 'dropdown'];

}
