import Component from '@glimmer/component';
import { action, get } from '@ember/object';
import { isNone } from '@ember/utils';

/**
 * Table cell used within [models-table/table-row](Components.ModelsTableTableRow.html).
 *
 * Cell types:
 *
 * * Text. Shows some property value
 * * Route link with record id
 * * Route link with record property value
 * * Custom component
 *
 * See properties [routeName](Utils.ModelsTableColumn.html#property_routeName), [propertyName](Utils.ModelsTableColumn.html#property_propertyName), [component](Utils.ModelsTableColumn.html#property_component) for ModelsTableColumn.
 *
 * Usage example:
 *
 * ```hbs
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
 *
 * @namespace Components
 * @class ModelsTableCell
 * @extends Glimmer.Component
 */
export default class CellComponent extends Component {
  /**
   * Is this column editable
   *
   * @protected
   * @property isColumnEditable
   * @type boolean
   * @default false
   */
  get isColumnEditable() {
    let isEditable = this.args.isEditRow;
    if (isEditable === true) {
      let columnEditable = this.args.column.editable;
      if (typeof columnEditable === 'function') {
        isEditable = columnEditable() || false;
      } else if (columnEditable === false) {
        isEditable = false;
      }
    }
    return isEditable;
  }

  /**
   * Given the mode for a cell (Edit or not) will determine which component to render
   *
   * @property componentToRender
   * @default null
   * @type ?string
   * @protected
   */
  get componentToRender() {
    if (isNone(this.args.column.propertyName)) {
      return undefined;
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

  @action
  onClick(e) {
    if (this.args.isEditRow) {
      e?.stopPropagation?.();
    }
  }
}
