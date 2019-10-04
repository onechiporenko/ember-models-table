self.deprecationWorkflow = self.deprecationWorkflow || {};
self.deprecationWorkflow.config = {
  workflow: [
    {handler: 'silence', matchId: 'ember-views.curly-components.jquery-element'},
    {handler: 'silence', matchId: 'ember-test-helpers.rendering-context.jquery-element'},
    {handler: 'silence', matchId: 'ember-views.event-dispatcher.mouseenter-leave-move'},
    {handler: 'silence', matchId: 'computed-property.override'}
  ]
};
