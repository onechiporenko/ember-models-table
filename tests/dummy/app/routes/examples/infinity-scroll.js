// BEGIN-SNIPPET infinity-scroll
import { inject as service } from '@ember/service';
import { set } from '@ember/object';
import ExampleRoute from './example';

export default class InfinityScrollRoute extends ExampleRoute {
  @service infinity;

  model() {
    return this.infinity.model('user', {
      perPage: 10,
      startingPage: 1,
      perPageParam: 'pageSize',
      pageParam: 'page',
      totalPagesParam: 'meta.pagesCount',
      countParam: 'meta.itemsCount',
    });
  }

  setupController(controller) {
    super.setupController(...arguments);
    controller.columns.forEach((c) => set(c, 'disableSorting', true));
  }
}
// END-SNIPPET
