import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

export default class UserRoute extends Route {
  @service() store;

  model(user) {
    return this.store.findRecord('user', user.user_id);
  }
}
