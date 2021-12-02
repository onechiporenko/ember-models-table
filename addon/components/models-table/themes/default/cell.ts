import Component from '@glimmer/component';
import { action, get } from '@ember/object';
import { isNone } from '@ember/utils';
import {
  ColumnComponents,
  ModelsTableDataItem,
  RowInteractionClb,
} from '../../../models-table';
import DefaultTheme from '../../../../services/emt-themes/default';
import ModelsTableColumn from '../../../../utils/emt/emt-column';

export interface CellArgs {
  /**
   * Bound from [[DefaultTheme.RowArgs.columnComponents | RowArgs.columnComponents]]
   */
  columnComponents?: ColumnComponents;
  /**
   * Current column. One item from [[DefaultTheme.RowArgs.visibleProcessedColumns | RowArgs.visibleProcessedColumns]]
   */
  column: ModelsTableColumn;
  /**
   * One item of [[Core.ModelsTable.data | ModelsTable.data]]
   */
  record: ModelsTableDataItem;
  /**
   * Bound from [[DefaultTheme.RowArgs.index | RowArgs.index]]
   */
  index: number;
  /**
   * Bound from [[DefaultTheme.Row.isExpanded | Row.isExpanded]]
   */
  isExpanded: boolean;
  /**
   * Bound from [[DefaultTheme.Row.isSelected | Row.isSelected]]
   */
  isSelected: boolean;
  /**
   * Bound from [[DefaultTheme.RowArgs.themeInstance | RowArgs.themeInstance]]
   */
  themeInstance: DefaultTheme;
  /**
   * Length of `groupedItems`
   */
  groupedLength: number;
  /**
   * Bound from [[DefaultTheme.Row.isEditRow | Row.isEditRow]]
   */
  isEditRow: boolean;
  /**
   * Bound from [[DefaultTheme.RowArgs.collapseRow | RowArgs.collapseRow]]
   *
   * @event collapseRow
   */
  collapseRow: RowInteractionClb;
  /**
   * Bound from [[DefaultTheme.RowArgs.expandRow | RowArgs.expandRow]]
   *
   * @event expandRow
   */
  expandRow: RowInteractionClb;
  /**
   * Bound from [[DefaultTheme.RowArgs.expandAllRows | RowArgs.expandAllRows]]
   *
   * @event expandAllRows
   */
  expandAllRows: () => void;
  /**
   * Bound from [[DefaultTheme.RowArgs.collapseAllRows | RowArgs.collapseAllRows]]
   *
   * @event collapseAllRows
   */
  collapseAllRows: () => void;
  /**
   * Bound from [[DefaultTheme.RowArgs.clickOnRow | RowArgs.clickOnRow]]
   *
   * @event clickOnRow
   */
  clickOnRow: RowInteractionClb;
  /**
   * Bound from [[DefaultTheme.Row.editRow | Row.editRow]]
   *
   * @event editRow
   */
  editRow: () => void;
  /**
   * Bound from [[DefaultTheme.Row.saveRow | Row.saveRow]]
   *
   * @event saveRow
   */
  saveRow: () => void;
  /**
   * Bound from [[DefaultTheme.Row.cancelEditRow | Row.cancelEditRow]]
   *
   * @event cancelEditRow
   */
  cancelEditRow: () => void;
}

/**
 * Table cell used within [[Row]].
 *
 * Cell types:
 *
 * * Text. Shows some property value
 * * Route link with record id
 * * Route link with record property value
 * * Custom component
 *
 * See properties [[Core.ModelsTableColumn.routeName]], [[Core.ModelsTableColumn.propertyName]], [[Core.ModelsTableColumn.component]].
 *
 * Usage example:
 *
 * ```html
 * <ModelsTable @data={{this.data}} @columns={{this.columns}} as |MT|>
 *   <MT.Table as |Table|>
 *     <Table.Body as |Body|>
 *       {{#each MT.visibleContent as |record index|}}
 *         <Body.Row @record={{record}} @index={{index}} as |Row|>
 *           {{#each MT.visibleProcessedColumns as |column|}}
 *             <Row.Cell @column={{column}} @index={{index}} as |Cell|/>
 *               {{#if Cell.componentToRender}}
 *                 {{component Cell.componentToRender record=Cell.record column=column index=index}}
 *               {{/if}}
 *               {{! ... }}
 *             </Row.Cell>
 *           {{/each}}
 *         </Body.Row>
 *       {{/each}}
 *       {{! ... }}
 *     </Table.Header>
 *     {{! ... }}
 *   </MT.Table>
 *   {{! .... }}
 * </ModelsTable>
 * ```
 */
export default class Cell extends Component<CellArgs> {
  /**
   * Is this column editable
   *
   * @default false
   */
  get isColumnEditable(): boolean {
    let isEditable = this.args.isEditRow;
    if (isEditable) {
      const columnEditable = this.args.column.editable;
      if (typeof columnEditable === 'function') {
        isEditable = columnEditable() || false;
      } else if (!columnEditable) {
        isEditable = false;
      }
    }
    return isEditable;
  }

  /**
   * Given the mode for a cell (Edit or not) will determine which component to render
   */
  get componentToRender(): Component | string | null {
    if (isNone(this.args.column.propertyName)) {
      return null;
    }
    let cellEditComponent;
    if (this.isColumnEditable) {
      if (this.args.columnComponents) {
        cellEditComponent = this.args.column.componentForEdit
          ? get(this.args.columnComponents, this.args.column.componentForEdit)
          : this.args.themeInstance.cellContentEditComponent;
      } else {
        cellEditComponent =
          this.args.column.componentForEdit ||
          this.args.themeInstance.cellContentEditComponent;
      }
    }
    let cellDisplayComponent;
    if (this.args.columnComponents) {
      cellDisplayComponent = this.args.column.component
        ? get(this.args.columnComponents, this.args.column.component)
        : this.args.themeInstance.cellContentDisplayComponent;
    } else {
      cellDisplayComponent =
        this.args.column.component ||
        this.args.themeInstance.cellContentDisplayComponent;
    }

    return cellEditComponent || cellDisplayComponent;
  }

  /**
   * @event onClick
   */
  @action
  protected onClick(e: Event): void {
    if (this.args.isEditRow) {
      e?.stopPropagation?.();
    }
  }
}
