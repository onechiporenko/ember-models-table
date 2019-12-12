import {className, layout as templateLayout, tagName} from '@ember-decorators/component';
import Component from '@ember/component';
import layout from '../../templates/components/models-table/cell';
import {computed, get} from '@ember/object';
import {alias} from '@ember/object/computed';
import {isPresent, isNone} from '@ember/utils';

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
 * <ModelsTable @data={{data}} @columns={{columns}} as |MT|>
 *   <MT.Table as |Table|>
 *     <Table.Body as |Body|>
 *       {{#each Body.visibleContent as |record index|}}
 *         <Body.Row @record={{record}} @index={{index}} as |Row|>
 *           {{#each Row.visibleProcessedColumns as |column|}}
 *             <Row.Cell @column={{column}} @index={{index}} as |Cell|/>
 *               {{#if Cell.componentToRender}}
 *                 {{component Cell.componentToRender}}
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
 * @extends Ember.Component
 */
export default
@templateLayout(layout)
@tagName('td')
class CellComponent extends Component {

  /**
   * @property columnClassName
   * @type string
   * @default ''
   * @protected
   */
  @className
  @alias('column.className') columnClassName;

  /**
   * One of the [data](Components.ModelsTable.html#property_data)
   *
   * @default null
   * @property record
   * @type object
   */
  record = null;

  /**
   * Row's index where current cell is
   *
   * @property index
   * @default null
   * @type number
   */
  index = null;

  /**
   * @property column
   * @default null
   * @type Utils.ModelsTableColumn
   */
  column = null;

  /**
   * @property isEditRow
   * @default null
   * @protected
   * @type boolean
   */
  isEditRow = null;

  /**
   * @property groupedLength
   * @type number
   * @default null
   */
  groupedLength = null;

  /**
   * Closure action [ModelsTable.expandRow](Components.ModelsTable.html#event_expandRow)
   *
   * @event expandRow
   */
  expandRow = null;

  /**
   * Closure action [ModelsTable.collapseRow](Components.ModelsTable.html#event_collapseRow)
   *
   * @event collapseRow
   */
  collapseRow = null;

  /**
   * Closure action [ModelsTable.expandAllRows](Components.ModelsTable.html#event_expandAllRows)
   *
   * @event expandAllRows
   */
  expandAllRows = null;

  /**
   * Closure action [ModelsTable.collapseAllRows](Components.ModelsTable.html#event_collapseAllRows)
   *
   * @event collapseAllRows
   */
  collapseAllRows = null;

  /**
   * Closure action [ModelsTableRow.editRow](Components.ModelsTableRow.html#event_editRow)
   *
   * @event editRow
   */
  editRow = null;

  /**
   * Closure action [ModelsTableRow.saveRow](Components.ModelsTableRow.html#event_saveRow)
   *
   * @event saveRow
   */
  saveRow = null;

  /**
   * Closure action [ModelsTableRow.cancelEditRow](Components.ModelsTableRow.html#event_cancelEditRow)
   *
   * @event cancelEditRow
   */
  cancelEditRow = null;

  /**
   * Bound from [ModelsTable.themeInstance](Components.ModelsTable.html#property_themeInstance)
   *
   * @property themeInstance
   * @type object
   * @default null
   */
  themeInstance = null;

  /**
   * Is current row expanded or not
   *
   * @default null
   * @property isExpanded
   * @type boolean
   */
  isExpanded = null;

  /**
   * Is current row selected or not
   *
   * @default null
   * @property isSelected
   * @type boolean
   */
  isSelected = null;

  /**
   * Is this column editable
   *
   * @protected
   * @property isColumnEditable
   * @type boolean
   * @default false
   */
  @computed('column.editable', 'isEditRow')
  get isColumnEditable() {
    let isEditable = this.isEditRow;
    if (isEditable === true) {
      let columnEditable = get(this, 'column.editable');
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
  @computed('isColumnEditable', 'isEditRow', 'column.{propertyName,component,componentForEdit}')
  get componentToRender() {
    if (isNone(get(this, 'column.propertyName'))) {
      return undefined;
    }
    let editComponent = undefined;
    if (this.isColumnEditable) {
      editComponent = get(this, 'column.componentForEdit');
      editComponent = isPresent(editComponent) ? editComponent : get(this, 'themeInstance.cellContentEditComponent');
    }
    let cellDisplayComponent = get(this, 'column.component') || get(this, 'themeInstance.cellContentDisplayComponent');
    return editComponent || cellDisplayComponent;
  }

  click(e) {
    if (this.isEditRow) {
      e.stopPropagation();
    }
  }
}
