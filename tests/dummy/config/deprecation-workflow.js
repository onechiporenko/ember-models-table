self.deprecationWorkflow = self.deprecationWorkflow || {};
self.deprecationWorkflow.config = {
  workflow: [
    { handler: "log", matchId: "ember-views.curly-components.jquery-element" },
    { handler: "log", matchId: "ember-test-helpers.rendering-context.jquery-element" }
  ]
};