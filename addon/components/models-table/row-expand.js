import {className, classNames, layout as templateLayout, tagName} from '@ember-decorators/component';
import Component from '@ember/component';
import {computed, get} from '@ember/object';
import layout from '../../templates/components/models-table/row-expand';

/**
 * Extra row with additional information for original row. Component used within [models-table/table-body](Components.ModelsTableTableBody.html).
 *
 * Row expand is a table-row with a single cell. This cell has a `colspan` equal to the shown columns count. You should provide an [ModelsTable.expandedRowComponent](Components.ModelsTable.html#property_expandedRowComponent). It will be rendered inside ModelsTableRowExpand.
 *
 * Usage example:
 *
 * ```hbs
 * {{#models-table data=data columns=columns as |mt|}}
 *   {{#mt.table as |table|}}
 *     {{#table.body as |body|}}
 *       {{#each body.visibleContent as |record index|}}
 *         {{body.row record=record index=index}}
 *         {{#if (exists-in body.expandedItems record)}}
 *           {{body.row-expand record=record index=index}}
 *         {{/if}}
 *       {{/each}}
 *     {{/table.header}}
 *     {{! ... }}
 *   {{/mt.table}}
 *   {{! .... }}
 * {{/models-table}}
 * ```
 *
 * @class ModelsTableRowExpand
 * @namespace Components
 * @extends Ember.Component
 */
@templateLayout(layout)
@tagName('tr')
@classNames('expand-row')
export default class RowExpandComponent extends Component {

  /**
   * @property indexedClass
   * @type string
   * @default ''
   */
  @className
  @computed('index')
  get indexedClass() {
    return `expand-${get(this, 'index')}`;
  }

  /**
   * @property isSelected
   * @type boolean
   * @default false
   */
  @className('selected-expand')
  isSelected = null;

  /**
   * Row's index
   *
   * @property index
   * @type number
   * @default null
   */
  index = null;

  /**
   * One of the {{#crossLink "Components.ModelsTable/data:property"}}data{{/crossLink}}
   *
   * @property record
   * @type object
   * @default null
   */
  record = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/expandedRowComponent:property"}}ModelsTable.expandedRowComponent{{/crossLink}}
   *
   * @property expandedRowComponent
   * @type string
   * @default null
   */
  expandedRowComponent = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/visibleProcessedColumns:property"}}ModelsTable.visibleProcessedColumns{{/crossLink}}
   *
   * @property visibleProcessedColumns
   * @type ModelsTableColumn[]
   * @default null
   */
  visibleProcessedColumns = null;

  /**
   * Closure action {{#crossLink "Components.ModelsTable/actions.clickOnRow:method"}}ModelsTable.actions.clickOnRow{{/crossLink}}
   *
   * @event clickOnRow
   */
  clickOnRow = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/themeInstance:property"}}ModelsTable.themeInstance{{/crossLink}}
   *
   * @property themeInstance
   * @type object
   * @default null
   */
  themeInstance = null;

  click() {
    get(this, 'clickOnRow')(get(this, 'index'), get(this, 'record'));
  }
}
