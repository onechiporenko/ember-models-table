import Route from '@ember/routing/route';

export default class UserRoute extends Route {

  model(user) {
    return this.get('store').findRecord('user', user.user_id);
  }

}
