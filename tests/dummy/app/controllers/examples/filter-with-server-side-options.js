import { action } from '@ember/object';

import ExampleController from './example';

export default class FilterWithServerSideOptionsController extends ExampleController {
  @action
  doQuery(query) {
    console.error(query);
    return this.store.query('comment', query).then((newData) => {
      this.model = newData;
      this.itemsCount = newData.meta.itemsCount;
      this.pagesCount = newData.meta.pagesCount;
    });
  }
}
