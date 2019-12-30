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
 * Component for table-footer cells. Used as column-summary.
 *
 * It yields several properties:
 *
 * * [minSelected](Components.ModelsTableCellColumnSummary.html#property_minSelected) - min of selected items
 * * [maxSelected](Components.ModelsTableCellColumnSummary.html#property_maxSelected) - max of selected items
 * * [sumSelected](Components.ModelsTableCellColumnSummary.html#property_sumSelected) - sum of selected items
 * * [avgSelected](Components.ModelsTableCellColumnSummary.html#property_avgSelected) - average of selected items
 * * [medianSelected](Components.ModelsTableCellColumnSummary.html#property_medianSelected) - median of selected items
 * * [minData](Components.ModelsTableCellColumnSummary.html#property_minData) - min of data
 * * [maxData](Components.ModelsTableCellColumnSummary.html#property_maxData) - max of data
 * * [sumData](Components.ModelsTableCellColumnSummary.html#property_sumData) - sum of data
 * * [avgData](Components.ModelsTableCellColumnSummary.html#property_avgData) - average of data
 * * [medianData](Components.ModelsTableCellColumnSummary.html#property_medianData) - median of data
 *
 * Here `selectedItems` and `data` are bound from `models-table` and are mapped by `column.propertyName`.
 *
 * Component should be used only for column with set `propertyName`.
 *
 * Component should be extended or its template should be overridden.
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
   * @property tagName
   * @type string
   * @default 'td'
   */

  /**
   * Bound from [ModelsTable.selectedItems](Components.ModelsTable.html#property_selectedItems)
   *
   * @property selectedItems
   * @type object[]
   * @default null
   */
  selectedItems = null;

  /**
   * Bound from [ModelsTable.expandedItems](Components.ModelsTable.html#property_expandedItems)
   *
   * @property expandedItems
   * @type object[]
   * @default null
   */
  expandedItems = null;

  /**
   * Bound from [ModelsTable.data](Components.ModelsTable.html#property_data)
   *
   * @property data
   * @type object[]
   * @default null
   */
  data = null;

  /**
   * `selectedItems.mapBy(column.propertyName)`
   *
   * @property mappedSelectedItems
   * @default []
   * @type array
   */
  mappedSelectedItems = [];

  /**
   * `expandedItems.mapBy(column.propertyName)`
   *
   * @property mappedExpandedItems
   * @default []
   * @type array
   */
  mappedExpandedItems = [];

  /**
   * `data.mapBy(column.propertyName)`
   *
   * @property mappedData
   * @default []
   * @type object[]
   */
  mappedData = [];

  /**
   * @property minSelected
   * @type number
   * @protected
   */
  @minBy('mappedSelectedItems') minSelected;

  /**
   * @property minData
   * @type number
   * @protected
   */
  @minBy('mappedData') minData;

  /**
   * @property maxSelected
   * @type number
   * @protected
   */
  @maxBy('mappedSelectedItems') maxSelected;

  /**
   * @property maxData
   * @type number
   * @protected
   */
  @maxBy('mappedData') maxData;

  /**
   * @property sumSelected
   * @type number
   * @protected
   */
  @sumBy('mappedSelectedItems') sumSelected;

  /**
   * @property sumData
   * @type number
   * @protected
   */
  @sumBy('mappedData') sumData;

  /**
   * @property avgSelected
   * @type number
   * @protected
   */
  @avgBy('mappedSelectedItems', 'sumSelected') avgSelected;

  /**
   * @property avgData
   * @type number
   * @protected
   */
  @avgBy('mappedData', 'sumData') avgData;

  /**
   * @property medianSelected
   * @type number
   * @protected
   */
  @medianBy('mappedSelectedItems') medianSelected;

  /**
   * @property medianData
   * @type number
   * @protected
   */
  @medianBy('mappedData') medianData;

}
