import {layout as templateLayout, tagName} from '@ember-decorators/component';
import Component from '@ember/component';
import {get, computed} from '@ember/object';
import layout from '../../templates/components/models-table/cell-column-summary';

function sumBy(collection) {
  return computed(`${collection}.[]`, function () {
    const c = get(this, collection);
    return c ? c.reduce((a, b) => a + b, 0) : 0;
  });
}

function avgBy(collection, sumBy) {
  return computed(sumBy, function () {
    const count = get(this, `${collection}.length`);
    return count ? get(this, sumBy) / count : 0;
  });
}

function minBy(collection) {
  return computed(`${collection}.[]`, function () {
    return Math.min.apply(Math, get(this, collection));
  });
}

function maxBy(collection) {
  return computed(`${collection}.[]`, function () {
    return Math.max.apply(Math, get(this, collection));
  });
}

function medianBy(collection) {
  return computed(`${collection}.[]`, function () {
    let c = get(this, collection);
    if (!get(c, 'length')) {
      return null;
    }
    c = c.slice().sort((a, b) => a - b);
    let lowMiddle = Math.floor((c.length - 1) / 2);
    let highMiddle = Math.ceil((c.length - 1) / 2);
    return (c[lowMiddle] + c[highMiddle]) / 2;
  });
}

/**
 * Component for table-footer cells. Used as column-summary. It provides several metrics like:
 *
 * * min of selected items
 * * max of selected items
 * * sum of selected items
 * * average of selected items
 * * median of selected items
 * * min of data
 * * max of data
 * * sum of data
 * * average of data
 * * median of data
 *
 * Here `selectedItems` and `data` are bound from `models-table` and are mapped by `column.propertyName`.
 *
 * Component should be used only for column with set `propertyName`.
 *
 * Component should be extended or it's template should be overridden.
 *
 * @namespace Components
 * @class ModelsTableCellColumnSummary
 * @extends Ember.Component
 */
export default
@templateLayout(layout)
@tagName('td')
class CellColumnSummaryComponent extends Component {
  /**
   * Bound from {{#crossLink "Components.ModelsTable/selectedItems:property"}}ModelsTable.selectedItems{{/crossLink}}
   *
   * @type object[]
   * @default null
   */
  selectedItems = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/expandedItems:property"}}ModelsTable.expandedItems{{/crossLink}}
   *
   * @type number[]
   * @default null
   */
  expandedItems = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/data:property"}}ModelsTable.data{{/crossLink}}
   *
   * @type object[]
   * @default null
   */
  data = null;

  /**
   * `selectedItems.mapBy(column.propertyName)`
   *
   * @default []
   * @type array
   */
  mappedSelectedItems = [];

  /**
   * `expandedItems.mapBy(column.propertyName)`
   *
   * @default []
   * @type array
   */
  mappedExpandedItems = [];

  /**
   * `data.mapBy(column.propertyName)`
   *
   * @default []
   * @type array
   */
  mappedData = [];

  /**
   * @type number
   */
  @minBy('mappedSelectedItems') minSelected;

  /**
   * @type number
   */
  @minBy('mappedData') minData;

  /**
   * @type number
   */
  @maxBy('mappedSelectedItems')maxSelected;

  /**
   * @type number
   */
  @maxBy('mappedData') maxData;

  /**
   * @type number
   */
  @sumBy('mappedSelectedItems') sumSelected;

  /**
   * @type number
   */
  @sumBy('mappedData') sumData;

  /**
   * @type number
   */
  @avgBy('mappedSelectedItems', 'sumSelected') avgSelected;

  /**
   * @type number
   */
  @avgBy('mappedData', 'sumData') avgData;

  /**
   * @type number
   */
  @medianBy('mappedSelectedItems') medianSelected;

  /**
   * @type number
   */
  @medianBy('mappedData') medianData;

}
