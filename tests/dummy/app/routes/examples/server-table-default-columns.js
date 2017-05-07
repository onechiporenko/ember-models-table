import Ember from 'ember';
import generateContent from '../../utils/c';

export default Ember.Route.extend({

  model() {
    return this.get('store').query('user', {});
  },

  setupController(controller) {

    controller.set('otherData', generateContent(10));
    controller.set('defaultColumns', [
        //id
        'index',
        'firstName',
        {propertyName: 'lastName', title: 'Family Name', className: 'text-success'},
    ]);

    return this._super(...arguments);
  }

});
