// BEGIN-SNIPPET filter-with-server-side-options
import ExampleRoute from './example';
import { inject as service } from '@ember/service';
import { set } from '@ember/object';

export default class FilterWithServerSideOptionsRoute extends ExampleRoute {
  @service store;

  model() {
    return this.store.query('comment', {});
  }

  setupController(controller) {
    super.setupController(...arguments);
    set(controller, 'commentsColumns', [
      {
        propertyName: 'author.fullName',
        filteredBy: 'authorId',
        title: 'Author Full Name',
        componentForFilterCell: 'server-side-filter',
        disableSorting: true,
      },
      { propertyName: 'date', disableSorting: true, disableFiltering: true },
      { propertyName: 'text', disableSorting: true, disableFiltering: true },
    ]);
  }
}
// END-SNIPPET
