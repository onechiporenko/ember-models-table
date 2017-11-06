import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('perf');
  this.route('examples', function () {
    this.route('common-table');
    this.route('custom-actions');
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
  });

  this.route('users', function() {
    this.route('user', {path: '/:user_id'});
  });
});

export default Router;
