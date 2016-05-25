import Ember from 'ember';

const {String: S} = Ember;

export default Ember.Route.extend({

  setupController(controller, model) {
    var names = this.get('router.currentState.routerJs.recognizer.names');
    var thisName = this.get('routeName');
    var routes = Object.keys(names).filter(k => {
      var segments = names[k].segments;
      var segment = segments[1];
      if (!segment) {
        return false;
      }
      var rName = segment.string;
      return rName === thisName && k !== rName && k.indexOf('loading') === -1 && k.indexOf('error') === -1 && k.indexOf('index') === -1;
    });
    routes = routes.map(r => {
      var name = r.replace(`${thisName}.`, '');
      name = S.capitalize(S.dasherize(name).replace(/\-/g, ' '));
      return {name: name, route: r};
    });
    controller.set('routes', routes);
    this._super(controller, model);
  }

});
