import ExampleRoute from './example';

export default ExampleRoute.extend({
  setupController(controller) {
    this._super(...arguments);
    controller.set('groupedHeaders', [
      [
        {title: 'Big Title', colspan: 5}
      ],
      [
        {title: 'Subtitle 1', colspan: 3},
        {title: 'Subtitle 2', colspan: 2}
      ]
    ]);
  }
});