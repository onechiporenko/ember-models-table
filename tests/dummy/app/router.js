import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('examples', function () {
    this.route('common-table');
    this.route('custom-components-in-cell');
    this.route('custom-messages');
    this.route('custom-column-classes');
    this.route('grouped-headers');
    this.route('route-cells');
    this.route('expandable-rows');
    this.route('display-data-changed-action');
    this.route('select-rows-with-checkboxes');
    this.route('column-sets');
    this.route('example');
    this.route('sort-by-filter-by');
    this.route('filtering');
    this.route('grouped-rows');
    this.route('in-line-edit');
    this.route('block-usage');
    this.route('nested-table');
    this.route('query-params');
    this.route('filter-with-server-side-options');
  });

  this.route('users', function() {
    this.route('user', {path: '/:user_id'});
  });
});
