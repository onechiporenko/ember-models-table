// BEGIN-SNIPPET table-with-floating-filters
import { tracked } from '@glimmer/tracking';
import { ensureSafeComponent } from '@embroider/util';
import ExampleController from './example';
import {
  FloatingFilterType,
  columnNumberFloatingFilterFunction,
  columnStringFloatingFilterFunction,
  columnListFloatingFilterFunction,
} from 'ember-models-table-floating-filter/components/models-table/themes/default/floating-filter';
import DefaultFloatingFilter from 'ember-models-table-floating-filter/components/models-table/themes/default/floating-filter';
import PlainHtmlFloatingFilter from 'ember-models-table-floating-filter/components/models-table/themes/plain-html/floating-filter';
import EmberBootstrapV4FloatingFilter from 'ember-models-table-floating-filter/components/models-table/themes/ember-bootstrap-v4/floating-filter';
import EmberBootstrapV5FloatingFilter from 'ember-models-table-floating-filter/components/models-table/themes/ember-bootstrap-v5/floating-filter';

export default class FloatingFilterController extends ExampleController {
  @tracked
  columns = [
    { propertyName: 'index' },
    {
      propertyName: 'firstName',
      filterFunction: columnStringFloatingFilterFunction,
      componentForFilterCell: this.floatingFilterComponent,
      'emt-addons': {
        floatingFilter: {
          floatingFilterType: FloatingFilterType.STRING,
        },
      },
    },
    {
      propertyName: 'lastName',
      componentForFilterCell: this.floatingFilterComponent,
      filterFunction: columnStringFloatingFilterFunction,
      'emt-addons': {
        floatingFilter: {
          floatingFilterType: FloatingFilterType.STRING,
        },
      },
    },
    {
      propertyName: 'age',
      filterFunction: columnNumberFloatingFilterFunction,
      componentForFilterCell: this.floatingFilterComponent,
      'emt-addons': {
        floatingFilter: {
          floatingFilterType: FloatingFilterType.NUMBER,
        },
      },
    },
    {
      propertyName: 'city',
      filterWithSelect: true,
      filterFunction: columnListFloatingFilterFunction,
      componentForFilterCell: this.floatingFilterComponent,
      'emt-addons': {
        floatingFilter: {
          floatingFilterType: FloatingFilterType.LIST,
        },
      },
    },
  ];

  get floatingFilterComponent() {
    if (this.fw.isBs4) {
      return ensureSafeComponent(EmberBootstrapV4FloatingFilter, this);
    }
    if (this.fw.isBs5) {
      return ensureSafeComponent(EmberBootstrapV5FloatingFilter, this);
    }
    if (this.fw.isPlainHtml) {
      return ensureSafeComponent(PlainHtmlFloatingFilter, this);
    }
    return ensureSafeComponent(DefaultFloatingFilter, this);
  }
}
// END-SNIPPET
