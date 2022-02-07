import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Controller from '@ember/controller';

export default class ExampleController extends Controller {
  @service() store;

  @service() fw;

  @tracked
  itemsCount = 0;

  @tracked
  pagesCount = 0;

  @tracked
  currentPageNumber = 1;

  @tracked
  pageSize;

  @action
  doQuery(query) {
    console.error(query);
    return this.store.query('user', query).then((newData) => {
      this.model = newData;
      this.itemsCount = newData.meta.itemsCount;
      this.pagesCount = newData.meta.pagesCount;
    });
  }

  @action
  onDisplayDataChanged(displayData) {
    this.currentPageNumber = displayData.currentPageNumber;
    this.pageSize = displayData.pageSize;
  }
}
