import {layout as templateLayout, tagName} from '@ember-decorators/component';
import Component from '@ember/component';
import {computed, get} from '@ember/object';
import layout from '../../templates/components/models-table/no-data';

/**
 * Table row shown when no data provided to the ModelsTable. Component used within [models-table/table-body](Components.ModelsTableTableBody.html).
 *
 * This component is a table-row with a single cell. This cell has a `colspan` equal to the shown columns count.
 *
 * Usage example:
 *
 * ```hbs
 * {{#models-table data=data columns=columns as |mt|}}
 *   {{#mt.table as |table|}}
 *     {{#table.body as |body|}}
 *       {{#if body.visibleContent.length}}
 *         {{! ... }}
 *       {{else}}
 *         {{body.no-data}}
 *       {{/if}}
 *     {{/table.header}}
 *     {{! ... }}
 *   {{/mt.table}}
 *   {{! .... }}
 * {{/models-table}}
 * ```
 *
 * Usage with a block context:
 *
 * ```hbs
 * {{#models-table data=data columns=columns as |mt|}}
 *   {{#mt.table as |table|}}
 *     {{#table.body as |body|}}
 *       {{#if body.visibleContent.length}}
 *         {{! ... }}
 *       {{else}}
 *         {{#body.no-data as |nd|}}
 *            Any message here
 *         {{/body.no-data}}
 *       {{/if}}
 *     {{/table.header}}
 *     {{! ... }}
 *   {{/mt.table}}
 *   {{! .... }}
 * {{/models-table}}
 * ```
 *
 * @class ModelsTableNoData
 * @namespace Components
 * @extends Ember.Component
 */
@templateLayout(layout)
@tagName('tr')
export default class NoDataComponent extends Component {
  /**
   * @property realColumnsCount
   * @type {number}
   * @private
   */
  @computed('columnsCount')
  get realColumnsCount () {
    return get(this, 'columnsCount') + (get(this, 'displayGroupedValueAs') === 'column' ? 1 : 0);
  }

  /**
   * Bound from {{#crossLink "Components.ModelsTable/processedColumns:property"}}ModelsTable.processedColumns{{/crossLink}}
   *
   * @property processedColumns
   * @type object[]
   * @default null
   */
  columnsCount = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/themeInstance:property"}}ModelsTable.themeInstance{{/crossLink}}
   *
   * @property themeInstance
   * @type object
   * @default null
   */
  themeInstance = null;
}
