import DefaultSelect from 'ember-models-table/components/models-table/select';
import layout from '../../../../templates/components/models-table/select';

export default DefaultSelect.extend({

  layout,

  classNames: ['ui fluid dropdown'],

  classNameBindings: ['options.length::disabled']

});
