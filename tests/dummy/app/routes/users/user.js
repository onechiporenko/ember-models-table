import Route from '@ember/routing/route';

export default Route.extend({

  model(user) {
    return this.get('store').findRecord('user', user.user_id);
  }

});
