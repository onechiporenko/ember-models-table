// BEGIN-SNIPPET server-side-filter-component
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { debounceTask } from 'ember-lifeline';
import RSVP from 'rsvp';

export default class ServerSideFilterComponent extends Component {
  @service() store;

  @tracked
  instances = null;

  @tracked
  selectedInstance = null;

  @action
  searchInstances(userInput) {
    return new RSVP.Promise((resolve, reject) =>
      debounceTask(
        this,
        () => this._performSearchInstances(userInput, resolve, reject),
        100,
      ),
    );
  }

  @action
  updateColumnFilter(instance) {
    this.selectedInstance = instance;
    this.args.changeColumnFilter(instance ? instance.id : '', this.args.column);
  }

  columnsFilterStringIsDropped() {
    if (!this.args.column.filterString) {
      this.selectedInstance = null;
    }
  }

  formatQuery(query, userInput) {
    query.firstName = userInput;
    return query;
  }

  _performSearchInstances(userInput, resolve, reject) {
    let query = this.instances ? this.instances.query : { page: 1 };
    query = this.formatQuery(query, userInput);
    return this.store
      .query('user', query)
      .then((instances) => {
        this.instances = instances;
        resolve(instances);
      })
      .catch((e) => reject(e));
  }
}
// END-SNIPPET
