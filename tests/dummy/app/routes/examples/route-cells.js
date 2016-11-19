import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.get('store').query('user', {pageSize: 1000});
  }

});
