import {attribute, className, layout as templateLayout, tagName} from '@ember-decorators/component';
import Component from '@ember/component';
import {get, computed} from '@ember/object';
import {alias, readOnly} from '@ember/object/computed';
import layout from '../../templates/components/models-table/row-filtering-cell';
import Noop from '../../mixins/no-op';

/**
 * Filter-row cell used within [models-table/row-filtering](Components.ModelsTableRowFiltering.html).
 *
 * ```hbs
 * {{#models-table data=data columns=columns as |mt|}}
 *   {{#mt.table as |table|}}
 *     {{#table.header as |header|}}
 *       {{#header.row-filtering as |rf|}}
 *         {{#each rs.visibleProcessedColumns as |column|}}
 *           {{rf.row-filtering-cell column=column}}
 *         {{/each}}
 *       {{/header.row-filtering}}
 *       {{! ... }}
 *     {{/table.header}}
 *     {{! ... }}
 *   {{/mt.table}}
 *   {{! .... }}
 * {{/models-table}}
 * ```
 *
 * @namespace Components
 * @class ModelsTableRowFilteringCell
 * @extends Ember.Component
 * @uses Mixins.Noop
 */
@templateLayout(layout)
@tagName('th')
export default class RowFilteringCellComponent extends Component.extend(Noop) { // eslint-disable-line ember-es6-class/no-object-extend

  @className
  @alias('themeInstance.theadCell') themeTheadCellClass;

  @className
  @alias('column.className') columnClassName;

  @attribute
  @readOnly('column.realColspanForFilterCell') colspan;

  @className
  @computed('column.useFilter', 'themeInstance.theadCellNoFiltering')
  get filteringClassName () {
    return get(this, 'column.useFilter') ? '' : get(this, 'themeInstance.theadCellNoFiltering');
  }

  /**
   * Bound from {{#crossLink "Components.ModelsTable/themeInstance:property"}}ModelsTable.themeInstance{{/crossLink}}
   *
   * @property themeInstance
   * @type object
   * @default null
   */
  themeInstance = null;

  /**
   * @property column
   * @default null
   * @type ModelsTableColumn
   */
  column = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/selectedItems:property"}}ModelsTable.selectedItems{{/crossLink}}
   *
   * @property selectedItems
   * @default null
   * @type object[]
   */
  selectedItems = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/expandedItems:property"}}ModelsTable.expandedItems{{/crossLink}}
   *
   * @property expandedItems
   * @default null
   * @type object[]
   */
  expandedItems = null;

  /**
   * Closure action {{#crossLink "Components.ModelsTable/actions.expandAllRows:method"}}ModelsTable.actions.expandAllRows{{/crossLink}}
   *
   * @event expandAllRows
   */
  expandAllRows = null;

  /**
   * Closure action {{#crossLink "Components.ModelsTable/actions.collapseAllRows:method"}}ModelsTable.actions.collapseAllRows{{/crossLink}}
   *
   * @event collapseAllRows
   */
  collapseAllRows = null;

  /**
   * Closure action {{#crossLink "Components.ModelsTable/actions.toggleAllSelection:method"}}ModelsTable.actions.toggleAllSelection{{/crossLink}}
   *
   * @event toggleAllSelection
   */
  toggleAllSelection = null;
}
