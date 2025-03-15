import Helper from '@ember/component/helper';
import { inject as service } from '@ember/service';

export default class Substring extends Helper {
  @service() route;

  compute([routeName]) {
    return this.route.urlFor(routeName);
  }
}
