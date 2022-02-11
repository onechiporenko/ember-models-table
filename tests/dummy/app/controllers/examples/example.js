import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Controller from '@ember/controller';

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
  currentPageNumber = 1;

  @tracked
  pageSize;

  @action
  doQuery(query) {
    console.error(query);
    return this.store.query('user', query).then((newData) => {
      this.model = newData;
    });
  }

  @action
  onDisplayDataChanged(displayData) {
    this.currentPageNumber = displayData.currentPageNumber;
    this.pageSize = displayData.pageSize;
    this.currentGroupingPropertyName = displayData.currentGroupingPropertyName;
  }
}
