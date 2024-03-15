import { type ComponentLike } from '@glint/template';
import { ensureSafeComponent } from '@embroider/util';
import Component from '@glimmer/component';
import { action, get } from '@ember/object';
import { isNone } from '@ember/utils';
import { type CellSignature } from '../../../../interfaces/components/models-table/themes/default/cell-signature.interface';
import { type CellContentEditSignature } from '../../../../interfaces/components/models-table/themes/default/cell-content-edit-signature.interface';
import { type CellContentDisplaySignature } from '../../../../interfaces/components/models-table/themes/default/cell-content-display-signature.interface';

/**
 * Table cell used within {@link Row}.
 *
 * Cell types:
 *
 * * Text. Shows some property value
 * * Route link with record id
 * * Route link with record property value
 * * Custom component
 *
 * See properties {@link Core.ModelsTableColumn.routeName}, {@link Core.ModelsTableColumn.propertyName}, {@link Core.ModelsTableColumn.component}.
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
export default class Cell extends Component<CellSignature> {
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
  get componentToRender():
    | ComponentLike<CellContentEditSignature>
    | ComponentLike<CellContentDisplaySignature>
    | ComponentLike
    | null {
    if (isNone(this.args.column.propertyName)) {
      return null;
    }
    let cellEditComponent;
    if (this.isColumnEditable) {
      if (this.args.columnComponents) {
        cellEditComponent = this.args.column.componentForEdit
          ? typeof this.args.column.componentForEdit === 'string'
            ? get(this.args.columnComponents, this.args.column.componentForEdit)
            : this.args.column.componentForEdit
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
        ? typeof this.args.column.component === 'string'
          ? get(this.args.columnComponents, this.args.column.component)
          : this.args.column.component
        : this.args.themeInstance.cellContentDisplayComponent;
    } else {
      cellDisplayComponent =
        this.args.column.component ||
        this.args.themeInstance.cellContentDisplayComponent;
    }

    return cellEditComponent
      ? ensureSafeComponent(cellEditComponent, this)
      : ensureSafeComponent(cellDisplayComponent, this);
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
