import {attribute, className, layout as templateLayout, tagName} from '@ember-decorators/component';
import Component from '@ember/component';
import {get} from '@ember/object';
import {alias, readOnly} from '@ember/object/computed';
import layout from '../../templates/components/models-table/row-sorting-cell';

/**
 * Sort-row cell used within [models-table/row-sorting](Components.ModelsTableRowSorting.html).
 *
 * ```hbs
 * {{#models-table data=data columns=columns as |mt|}}
 *   {{#mt.table as |table|}}
 *     {{#table.header as |header|}}
 *       {{#header.row-sorting as |rs|}}
 *         {{#each rs.visibleProcessedColumns as |column|}}
 *           {{rs.row-sorting-cell column=column}}
 *         {{/each}}
 *       {{/header.row-sorting}}
 *       {{! ... }}
 *     {{/table.header}}
 *     {{! ... }}
 *   {{/mt.table}}
 *   {{! .... }}
 * {{/models-table}}
 * ```
 *
 * @namespace Components
 * @class ModelsTableRowSortingCell
 * @extends Ember.Component
 */
@templateLayout(layout)
@tagName('th')
export default class RowSortingCellComponent extends Component {

  @className
  @alias('themeInstance.theadCell') themeTheadCellClass;

  @className
  @alias('column.className') columnClassName;

  @attribute
  @readOnly('column.realColspanForSortCell') colspan;

  click() {
    const column = get(this, 'column');
    if (get(column, 'useSorting')) {
      get(this, 'sort')(column);
    }
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
   * Bound from {{#crossLink "Components.ModelsTable/expandedItems:property"}}ModelsTable.data{{/crossLink}}
   *
   * @property data
   * @default null
   * @type object[]
   */
  data = null;

  /**
   * Closure action {{#crossLink "Components.ModelsTable/actions.sort:method"}}ModelsTable.actions.sort{{/crossLink}}
   *
   * @event sort
   */
  sort = null;

  /**
   * @property column
   * @default null
   * @type ModelsTableColumn
   */
  column = null;

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
