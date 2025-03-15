import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class UserRoute extends Route {
  @service() store;

  model(user) {
    return this.store.findRecord('user', user.user_id);
  }
}
