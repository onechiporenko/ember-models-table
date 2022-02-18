import { ensureSafeComponent } from '@embroider/util';
import { inject as service } from '@ember/service';
import Controller from '@ember/controller';
import { getPaperCard } from 'ember-models-table/utils/emt/themes/ep';

export default class ExamplesController extends Controller {
  get PaperCard() {
    return ensureSafeComponent(getPaperCard(), this);
  }

  @service() fw;

  routes = [
    { name: 'Common table', route: 'examples.common-table' },
    {
      name: 'Custom components in cell',
      route: 'examples.custom-components-in-cell',
    },
    { name: 'Custom column classes', route: 'examples.custom-column-classes' },
    { name: 'Grouped headers', route: 'examples.grouped-headers' },
    { name: 'Route cells', route: 'examples.route-cells' },
    { name: 'Expandable rows', route: 'examples.expandable-rows' },
    {
      name: 'Display data changed action',
      route: 'examples.display-data-changed-action',
    },
    {
      name: 'Select rows with checkboxes',
      route: 'examples.select-rows-with-checkboxes',
    },
    { name: 'Column sets', route: 'examples.column-sets' },
    { name: 'Sort by / Filter by', route: 'examples.sort-by-filter-by' },
    { name: 'Filtering', route: 'examples.filtering' },
    { name: 'Grouped rows', route: 'examples.grouped-rows' },
    { name: 'Inline edit', route: 'examples.in-line-edit' },
    { name: 'Block usage', route: 'examples.block-usage' },
    { name: 'Nested table', route: 'examples.nested-table' },
    { name: 'Query params', route: 'examples.query-params' },
    {
      name: 'Filter with server side options',
      route: 'examples.filter-with-server-side-options',
    },
    { name: 'Infinity scroll', route: 'examples.infinity-scroll' },
  ];
}
