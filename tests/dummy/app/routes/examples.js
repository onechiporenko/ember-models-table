import Route from '@ember/routing/route';
import { capitalize } from '@ember/string';
import { dasherize } from '@ember/string';
import {inject as service} from '@ember/service';

export default Route.extend({

  router: service(),

  setupController(controller, model) {
    const names = this.get('router._router.currentState.router.recognizer.names') || this.get('router.currentState.routerJs.recognizer.names');
    const thisName = this.get('routeName');
    let routes = Object.keys(names).filter(k => {
      let segments = names[k].segments;
      let segment = segments[1];
      if (!segment) {
        return false;
      }
      const rName = segment.value;
      return rName === thisName &&
        k !== rName &&
        k.indexOf('loading') === -1 &&
        k.indexOf('error') === -1 &&
        k.indexOf('index') === -1 &&
        k !== 'examples.example';
    });
    routes = routes.map(r => {
      let name = r.replace(`${thisName}.`, '');
      name = capitalize(dasherize(name).replace(/-/g, ' '));
      return {name: name, route: r};
    });
    controller.set('routes', routes);
    this._super(controller, model);
  }

});
