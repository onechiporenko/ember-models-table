import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

export default Router.map(function() {
  this.route('perf');
  this.route('examples', function () {
    this.route('common-table');
    this.route('without-footer');
    this.route('sort-by');
    this.route('cell-template');
    this.route('numeric-pagination');
    this.route('custom-pagination');
    this.route('custom-actions');
    this.route('custom-messages');
    this.route('custom-column-classes');
    this.route('filtering-ignore-case');
    this.route('filtering-select-box');
    this.route('add-remove-column');
    this.route('grouped-headers');
    this.route('server-table');
    this.route('route-cells');
    this.route('expandable-rows');
    this.route('display-data-changed-action');
    this.route('select-rows-with-checkboxes');
  });

  this.route('users', function() {
    this.route('user', {path: '/:user_id'});
  });
});

export default Router;
