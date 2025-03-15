import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class ExampleController extends Controller {
  @service() store;

  @service() fw;

  get itemsCount() {
    return this.model.meta.itemsCount;
  }

  get pagesCount() {
    return this.model.meta.pagesCount;
  }

  @tracked
  queuedModel;

  @tracked
  currentPageNumber = 1;

  @tracked
  pageSize;

  @action
  doQuery(query) {
    console.error(query);
    return this.store.query('user', query).then((newData) => {
      // we can't override `this.model`, so going to use another field
      this.queuedModel = newData;
    });
  }

  @action
  onDisplayDataChanged(displayData) {
    this.currentPageNumber = displayData.currentPageNumber;
    this.pageSize = displayData.pageSize;
    this.currentGroupingPropertyName = displayData.currentGroupingPropertyName;
  }
}
