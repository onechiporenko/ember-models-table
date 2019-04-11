import Component from '@ember/component';
import {computed, get} from '@ember/object';
import layout from '../../templates/components/models-table/cell-column-summary';

function sumBy(collection) {
  return computed(`${collection}.[]`, function () {
    const c = get(this, collection);
    return c ? c.reduce((a, b) => a + b, 0) : 0;
  }).readOnly();
}

function avgBy(collection, sumBy) {
  return computed(sumBy, function () {
    const count = get(this, `${collection}.length`);
    return count ? get(this, sumBy) / count : 0;
  }).readOnly();
}

function minBy(collection) {
  return computed(`${collection}.[]`, function () {
    return Math.min.apply(Math, get(this, collection));
  }).readOnly();
}

function maxBy(collection) {
  return computed(`${collection}.[]`, function () {
    return Math.max.apply(Math, get(this, collection));
  }).readOnly();
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
  }).readOnly();
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
export default Component.extend({
  layout,
  tagName: 'td',

  /**
   * Bound from {{#crossLink "Components.ModelsTable/selectedItems:property"}}ModelsTable.selectedItems{{/crossLink}}
   *
   * @property selectedItems
   * @type object[]
   * @default null
   */
  selectedItems: null,

  /**
   * Bound from {{#crossLink "Components.ModelsTable/expandedItems:property"}}ModelsTable.expandedItems{{/crossLink}}
   *
   * @property expandedItems
   * @type number[]
   * @default null
   */
  expandedItems: null,

  /**
   * Bound from {{#crossLink "Components.ModelsTable/data:property"}}ModelsTable.data{{/crossLink}}
   *
   * @property data
   * @type object[]
   * @default null
   */
  data: null,

  /**
   * `selectedItems.mapBy(column.propertyName)`
   *
   * @property mappedSelectedItems
   * @default []
   * @type array
   */
  mappedSelectedItems: computed({
    get() {
      return [];
    },
    set(k, v) {
      return v;
    }
  }),

  /**
   * `expandedItems.mapBy(column.propertyName)`
   *
   * @property mappedExpandedItems
   * @default []
   * @type array
   */
  mappedExpandedItems: computed({
    get() {
      return [];
    },
    set(k, v) {
      return v;
    }
  }),

  /**
   * `data.mapBy(column.propertyName)`
   *
   * @property mappedData
   * @default []
   * @type array
   */
  mappedData: computed({
    get() {
      return [];
    },
    set(k, v) {
      return v;
    }
  }),

  /**
   * @property minSelected
   * @type number
   */
  minSelected: minBy('mappedSelectedItems'),

  /**
   * @property minData
   * @type number
   */
  minData: minBy('mappedData'),

  /**
   * @property maxSelected
   * @type number
   */
  maxSelected: maxBy('mappedSelectedItems'),

  /**
   * @property maxData
   * @type number
   */
  maxData: maxBy('mappedData'),

  /**
   * @property sumSelected
   * @type number
   */
  sumSelected: sumBy('mappedSelectedItems'),

  /**
   * @property sumData
   * @type number
   */
  sumData: sumBy('mappedData'),

  /**
   * @property avgSelected
   * @type number
   */
  avgSelected: avgBy('mappedSelectedItems', 'sumSelected'),

  /**
   * @property avgData
   * @type number
   */
  avgData: avgBy('mappedData', 'sumData'),

  /**
   * @property medianSelected
   * @type number
   */
  medianSelected: medianBy('mappedSelectedItems'),

  /**
   * @property medianData
   * @type number
   */
  medianData: medianBy('mappedData')

});
