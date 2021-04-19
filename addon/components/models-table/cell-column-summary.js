import Component from '@glimmer/component';
import { get } from '@ember/object';

function sumBy(collection) {
  return collection ? collection.reduce((a, b) => a + b, 0) : 0;
}

function avgBy(collection, avgBy) {
  const count = get(this, `${collection}.length`);
  return count ? get(this, avgBy) / count : 0;
}

function minBy(collection) {
  return collection ? Math.min.apply(Math, collection) : null;
}

function maxBy(collection) {
  return collection ? Math.max.apply(Math, collection) : null;
}

function medianBy(collection) {
  if (!collection.length) {
    return null;
  }
  collection = collection.slice().sort((a, b) => a - b);
  let lowMiddle = Math.floor((collection.length - 1) / 2);
  let highMiddle = Math.ceil((collection.length - 1) / 2);
  return (collection[lowMiddle] + collection[highMiddle]) / 2;
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
 * @extends Glimmer.Component
 */
export default class CellColumnSummaryComponent extends Component {
  /**
   * @property minSelected
   * @type number
   * @protected
   */
  get minSelected() {
    return minBy(this.args.mappedSelectedItems);
  }

  /**
   * @property minData
   * @type number
   * @protected
   */
  get minData() {
    return minBy(this.args.mappedData);
  }

  /**
   * @property maxSelected
   * @type number
   * @protected
   */
  get maxSelected() {
    return maxBy(this.args.mappedSelectedItems);
  }

  /**
   * @property maxData
   * @type number
   * @protected
   */
  get maxData() {
    return maxBy(this.args.mappedData);
  }

  /**
   * @property sumSelected
   * @type number
   * @protected
   */
  get sumSelected() {
    return sumBy(this.args.mappedSelectedItems);
  }

  /**
   * @property sumData
   * @type number
   * @protected
   */
  get sumData() {
    return sumBy(this.args.mappedData);
  }

  /**
   * @property avgSelected
   * @type number
   * @protected
   */
  get avgSelected() {
    return avgBy(this.args.mappedSelectedItems, 'sumSelected');
  }

  /**
   * @property avgData
   * @type number
   * @protected
   */
  get avgData() {
    return avgBy(this.args.mappedData, 'sumData');
  }

  /**
   * @property medianSelected
   * @type number
   * @protected
   */
  get medianSelected() {
    return medianBy(this.args.mappedSelectedItems);
  }

  /**
   * @property medianData
   * @type number
   * @protected
   */
  get medianData() {
    return medianBy(this.args.mappedData);
  }
}
