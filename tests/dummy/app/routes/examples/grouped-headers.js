// BEGIN-SNIPPET table-with-grouped-headers
import ExampleRoute from './example';

export default class GroupedHeadersRoute extends ExampleRoute {
  setupController(controller) {
    super.setupController(...arguments);
    controller.set('groupedHeaders', [
      [{ title: 'Big Title', colspan: 5 }],
      [
        { title: 'Subtitle 1', colspan: 3 },
        { title: 'Subtitle 2', colspan: 2 },
      ],
    ]);
  }
}
// END-SNIPPET
