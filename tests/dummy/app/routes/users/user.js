import Ember from 'ember';

export default Ember.Route.extend({

  model(user) {
    return this.get('store').findRecord('user', user.user_id);
  }

});
