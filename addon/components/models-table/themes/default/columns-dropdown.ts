import Component from '@glimmer/component';
import { action } from '@ember/object';
import ModelsTableColumn from '../../../../utils/emt/emt-column';
import { ColumnDropdownOptions, ColumnSet } from '../../../models-table';
import DefaultTheme from '../../../../services/emt-themes/default';

export interface ColumnsDropdownArgs {
  /**
   * Bound from {@link Core.ModelsTable.processedColumns | ModelsTable.processedColumns}
   */
  processedColumns: ModelsTableColumn[];
  /**
   * Bound from {@link Core.ModelsTable.columnDropdownOptions | ModelsTable.columnDropdownOptions}
   */
  columnDropdownOptions: ColumnDropdownOptions;
  /**
   * Bound from {@link Core.ModelsTable.themeInstance | ModelsTable.themeInstance}
   */
  themeInstance: DefaultTheme;
  /**
   * Bound from {@link Core.ModelsTable.showAllColumns | ModelsTable.showAllColumns}
   *
   * @event showAllColumns
   */
  showAllColumns: () => void;
  /**
   * Bound from {@link Core.ModelsTable.hideAllColumns | ModelsTable.hideAllColumns}
   *
   * @event hideAllColumns
   */
  hideAllColumns: () => void;
  /**
   * Bound from {@link Core.ModelsTable.restoreDefaultVisibility | ModelsTable.restoreDefaultVisibility}
   *
   * @event restoreDefaultVisibility
   */
  restoreDefaultVisibility: () => void;
  /**
   * Bound from {@link Core.ModelsTable.toggleColumnSetVisibility | ModelsTable.toggleColumnSetVisibility}
   *
   * @event toggleColumnSetVisibility
   */
  toggleColumnSetVisibility: (v: ColumnSet) => void;
  /**
   * Bound from {@link Core.ModelsTable.toggleColumnVisibility | ModelsTable.toggleColumnVisibility}
   *
   * @event toggleColumnVisibility
   */
  toggleColumnVisibility: (v: ModelsTableColumn) => void;
}

/**
 * Dropdown with list of table's columns used within {@link Core.ModelsTable | ModelsTable}.
 *
 * It allows to toggle visibility for column sets or single column.
 *
 * Columns that should not be hidden must have property {@link Core.ModelsTableColumn.mayBeHidden} set to `false`.
 *
 * Usage example:
 *
 * ```html
 * <ModelsTable @data={{this.data}} @columns={{this.columns}} as |MT|>
 *   <MT.ColumnsDropdown />
 *   {{! .... }}
 * </ModelsTable>
 * ```
 *
 * Block usage example:
 *
 * ```html
 * <ModelsTable @data={{this.data}} @columns={{this.columns}} as |MT|>
 *   <MT.ColumnsDropdown as |CD|>
 *     {{#if MT.columnDropdownOptions.showAll}}
 *       <button {{on "click" MT.showAllColumns}}>Show all</button>
 *     {{/if}}
 *     {{#if MT.columnDropdownOptions.hideAll}}
 *       <button {{on "click" MT.hideAllColumns}}>Hide all</button>
 *     {{/if}}
 *     {{#if MT.columnDropdownOptions.restoreDefaults}}
 *       <button {{on "click" MT.restoreDefaultVisibility}}>Restore default visibility</button>
 *     {{/if}}
 *     {{#each MT.columnDropdownOptions.columnSets as |columnSet|}}
 *       <button {{on "click" (fn MT.toggleColumnSetVisibility columnSet)}}>{{columnSet.label}}</button>
 *     {{/each}}
 *     {{#each MT.processedColumns as |column|}}
 *       {{#if column.mayBeHidden}}
 *         <button {{on "click" (fn MT.toggleColumnVisibility column)}}>
 *           <i class={{if column.toggleColumnVisibility MT.themeInstance.columnVisibleIcon MT.themeInstance.columnHiddenIcon}}></i>
 *           {{column.columnTitle}}
 *         </button>
 *       {{/if}}
 *     {{/each}}
 *   </MT.ColumnsDropdown>
 *   {{! .... }}
 * </ModelsTable>
 * ```
 */
export default class ColumnsDropdown extends Component<ColumnsDropdownArgs> {
  /**
   * @event doShowAllColumns
   */
  @action
  protected doShowAllColumns(e: Event): boolean {
    this.args.showAllColumns();
    e?.stopPropagation?.();
    e?.preventDefault?.();
    return false;
  }

  /**
   * @event doHideAllColumns
   */
  @action
  protected doHideAllColumns(e: Event): boolean {
    this.args.hideAllColumns();
    e?.stopPropagation?.();
    e?.preventDefault?.();
    return false;
  }

  /**
   * @event doRestoreDefaultVisibility
   */
  @action
  protected doRestoreDefaultVisibility(e: Event): boolean {
    this.args.restoreDefaultVisibility();
    e?.stopPropagation?.();
    e?.preventDefault?.();
    return false;
  }

  /**
   * @event doToggleColumnSet
   */
  @action
  protected doToggleColumnSet(columnSet: ColumnSet, e: Event): boolean {
    this.args.toggleColumnSetVisibility(columnSet);
    e?.stopPropagation?.();
    e?.preventDefault?.();
    return false;
  }

  /**
   * @event doToggleHidden
   */
  @action
  protected doToggleHidden(column: ModelsTableColumn, e: Event): boolean {
    this.args.toggleColumnVisibility(column);
    e?.stopPropagation?.();
    e?.preventDefault?.();
    return false;
  }
}
