import {layout as templateLayout} from '@ember-decorators/component';
import Component from '@ember/component';
import {action} from '@ember/object';
import layout from '../../templates/components/models-table/columns-dropdown';

/**
 * Dropdown with list of table's columns used within [models-table](Components.ModelsTable.html).
 *
 * It allows to toggle visibility for column sets or single column.
 *
 * Columns that should not be hidden must have property [mayBeHidden](Utils.ModelsTableColumn.html#property_mayBeHidden) set to `false`.
 *
 * Usage example:
 *
 * ```hbs
 * <ModelsTable @data={{data}} @columns={{columns}} as |MT|>
 *   <MT.ColumnsDropdown />
 *   {{! .... }}
 * </ModelsTable>
 * ```
 *
 * Component yields next properties and actions:
 *
 * * Action `showAllColumns`
 * * Action `hideAllColumns`
 * * Action `restoreDefaultVisibility`
 * * Action `toggleColumnSet`
 * * Action `toggleHidden`
 * * Property `columnDropdownOptions`
 * * Property `processedColumns`
 * * Property `themeInstance`
 *
 * Block usage example:
 *
 * ```hbs
 * <ModelsTable @data={{data}} @columns={{columns}} as |MT|>
 *   <MT.ColumnsDropdown as |CD|>
 *     {{#if CD.columnDropdownOptions.showAll}}
 *       <button {{action CD.showAllColumns}}>Show all</button>
 *     {{/if}}
 *     {{#if CD.columnDropdownOptions.hideAll}}
 *       <button {{action CD.hideAllColumns}}>Hide all</button>
 *     {{/if}}
 *     {{#if CD.columnDropdownOptions.restoreDefaults}}
 *       <button {{action CD.restoreDefaultVisibility}}>Restore default visibility</button>
 *     {{/if}}
 *     {{#each CD.columnDropdownOptions.columnSets as |columnSet|}}
 *       <button {{action CD.toggleColumnSet columnSet}}>{{columnSet.label}}</button>
 *     {{/each}}
 *     {{#each CD.processedColumns as |column|}}
 *       {{#if column.mayBeHidden}}
 *         <button {{action CD.toggleHidden column}}>
 *           <i class={{if column.isVisible CD.themeInstance.columnVisibleIcon CD.themeInstance.columnHiddenIcon}}></i>
 *           {{column.title}}
 *         </button>
 *       {{/if}}
 *     {{/each}}
 *   </MT.ColumnsDropdown>
 *   {{! .... }}
 * </ModelsTable>
 * ```
 *
 * @namespace Components
 * @class ModelsTableColumnsDropdown
 * @extends Ember.Component
 */
export default
@templateLayout(layout)
class ColumnsDropdownComponent extends Component {

  /**
   * Bound from [ModelsTable.processedColumns](Components.ModelsTable.html#property_processedColumns)
   *
   * @property processedColumns
   * @type Utils.ModelsTableColumn[]
   * @default null
   */
  processedColumns = null;

  /**
   * Bound from [ModelsTable.columnDropdownOptions](Components.ModelsTable.html#property_columnDropdownOptions)
   *
   * @property columnDropdownOptions
   * @type ColumnDropdownOptions
   * @default null
   */
  columnDropdownOptions = null;

  /**
   * Bound from [ModelsTable.themeInstance](Components.ModelsTable.html#property_themeInstance)
   *
   * @property themeInstance
   * @type object
   * @default null
   */
  themeInstance = null;

  /**
   * Closure action [ModelsTable.showAllColumns](Components.ModelsTable.html#event_showAllColumns)
   *
   * @event showAllColumns
   */
  showAllColumns = null;

  /**
   * Closure action [ModelsTable.hideAllColumns](Components.ModelsTable.html#event_hideAllColumns)
   *
   * @event hideAllColumns
   */
  hideAllColumns = null;

  /**
   * Closure action [ModelsTable.restoreDefaultVisibility](Components.ModelsTable.html#event_restoreDefaultVisibility)
   *
   * @event restoreDefaultVisibility
   */
  restoreDefaultVisibility = null;

  /**
   * Closure action [ModelsTable.toggleColumnSet](Components.ModelsTable.html#event_toggleColumnSet)
   *
   * @event toggleColumnSet
   */
  toggleColumnSet = null;

  /**
   * Closure action [ModelsTable.toggleHidden](Components.ModelsTable.html#event_toggleHidden)
   *
   * @event toggleHidden
   */
  toggleHidden = null;

  /**
   * @event doShowAllColumns
   * @protected
   */
  @action
  doShowAllColumns() {
    this.showAllColumns();
  }

  /**
   * @event doHideAllColumns
   * @protected
   */
  @action
  doHideAllColumns() {
    this.hideAllColumns();
  }

  /**
   * @event doRestoreDefaultVisibility
   * @protected
   */
  @action
  doRestoreDefaultVisibility() {
    this.restoreDefaultVisibility();
  }

  /**
   * @event doToggleColumnSet
   * @param {ColumnSet} columnSet
   * @protected
   */
  @action
  doToggleColumnSet(columnSet) {
    this.toggleColumnSet(columnSet);
  }

  /**
   * @event doToggleHidden
   * @param {Utils.ModelsTableColumn} column
   * @protected
   */
  @action
  doToggleHidden(column) {
    this.toggleHidden(column);
  }

}
