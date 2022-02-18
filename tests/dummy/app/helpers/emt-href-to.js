import { inject as service } from '@ember/service';
import Helper from '@ember/component/helper';

export default class Substring extends Helper {
  @service() route;

  compute([routeName]) {
    return this.route.urlFor(routeName);
  }
}
