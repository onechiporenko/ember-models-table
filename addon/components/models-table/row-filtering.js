import Component from '@ember/component';
import layout from '../../templates/components/models-table/row-filtering';
import {shownColumns} from '../../utils/macros';

/**
 * Table header item used within [models-table/table-header](Components.ModelsTableTableHeader.html).
 *
 * Component generates tr with filter inputs in the separated cells. Filter for column may be as an input or select. Second one may have predefined set of options or may calculate list of options from table data. Last scenario doesn't work with [models-table-server-paginated](Components.ModelsTableServerPaginated.html). Check properties [disableFiltering](Utils.ModelsTableColumn.html#property_disableFiltering), [filteredBy](Utils.ModelsTableColumn.html#property_filteredBy), [filterFunction](Utils.ModelsTableColumn.html#property_filterFunction), [filterPlaceholder](Utils.ModelsTableColumn.html#property_filterPlaceholder), [filterWithSelect](Utils.ModelsTableColumn.html#property_filterWithSelect), [predefinedFilterOptions](Utils.ModelsTableColumn.html#property_predefinedFilterOptions) for ModelsTableColumn.
 *
 * Usage example:
 *
 * ```hbs
 * {{#models-table data=data columns=columns as |mt|}}
 *   {{#mt.table as |table|}}
 *     {{#table.header as |header|}}
 *       {{header.row-filtering}}
 *       {{! ... }}
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
 * ModelsTableRowFiltering yields references to the following contextual components:
 *
 * * [models-table/row-filtering-cell](Components.ModelsTableRowFilteringCell.html) - component used as filter row cell. It shows input or select or custom component. Check filter-options for columns
 *
 * Check own docs for each component to get detailed info.
 *
 * @class ModelsTableRowFiltering
 * @namespace Components
 * @extends Ember.Component
 */
export default Component.extend({
  layout,
  tagName: 'tr',

  /**
   * Bound from {{#crossLink "Components.ModelsTable/visibleProcessedColumns:property"}}ModelsTable.visibleProcessedColumns{{/crossLink}}
   *
   * @property visibleProcessedColumns
   * @type ModelsTableColumn[]
   * @default null
   */
  visibleProcessedColumns: null,

  /**
   * Bound from {{#crossLink "Components.ModelsTable/processedColumns:property"}}ModelsTable.processedColumns{{/crossLink}}
   *
   * @property processedColumns
   * @type ModelsTableColumn[]
   * @default null
   */
  processedColumns: null,

  /**
   * Bound from {{#crossLink "Components.ModelsTable/themeInstance:property"}}ModelsTable.themeInstance{{/crossLink}}
   *
   * @property themeInstance
   * @type object
   * @default null
   */
  themeInstance: null,

  /**
   * Bound from {{#crossLink "Components.ModelsTable/selectedItems:property"}}ModelsTable.selectedItems{{/crossLink}}
   *
   * @property selectedItems
   * @default null
   * @type object[]
   */
  selectedItems: null,

  /**
   * Bound from {{#crossLink "Components.ModelsTable/expandedItems:property"}}ModelsTable.expandedItems{{/crossLink}}
   *
   * @property expandedItems
   * @default null
   * @type object[]
   */
  expandedItems: null,

  /**
   * Bound from {{#crossLink "Components.ModelsTable/useDataGrouping:property"}}ModelsTable.useDataGrouping{{/crossLink}}
   *
   * @property useDataGrouping
   * @default null
   * @type boolean
   */
  useDataGrouping: null,

  /**
   * Bound from {{#crossLink "Components.ModelsTable/displayGroupedValueAs:property"}}ModelsTable.displayGroupedValueAs{{/crossLink}}
   *
   * @property displayGroupedValueAs
   * @default null
   * @type string
   */
  displayGroupedValueAs: null,

  /**
   * Closure action {{#crossLink "Components.ModelsTable/actions.sort:method"}}ModelsTable.actions.sort{{/crossLink}}
   *
   * @event sort
   */
  sort: null,

  /**
   * Closure action {{#crossLink "Components.ModelsTable/actions.expandAllRows:method"}}ModelsTable.actions.expandAllRows{{/crossLink}}
   *
   * @event expandAllRows
   */
  expandAllRows: null,

  /**
   * Closure action {{#crossLink "Components.ModelsTable/actions.collapseAllRows:method"}}ModelsTable.actions.collapseAllRows{{/crossLink}}
   *
   * @event collapseAllRows
   */
  collapseAllRows: null,

  /**
   * Closure action {{#crossLink "Components.ModelsTable/actions.toggleAllSelection:method"}}ModelsTable.actions.toggleAllSelection{{/crossLink}}
   *
   * @event toggleAllSelection
   */
  toggleAllSelection: null,


  /**
   * @property shownColumns
   * @type object[]
   * @private
   * @readonly
   */
  shownColumns: shownColumns('colspanForFilterCell'),

});
