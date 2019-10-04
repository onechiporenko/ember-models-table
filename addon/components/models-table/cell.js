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
 *             <Row.Cell @column={{column}} />
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

  @className
  @alias('column.className') columnClassName;

  /**
   * One of the {{#crossLink "Components.ModelsTable/data:property"}}data{{/crossLink}}
   *
   * @property record
   * @default null
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
   * @type ModelsTableColumn
   */
  column = null;

  /**
   * @property isEditRow
   * @default null
   * @type boolean
   * @private
   */
  isEditRow = null;

  /**
   * Closure action {{#crossLink "Components.ModelsTable/actions.expandRow:method"}}ModelsTable.actions.expandRow{{/crossLink}}
   *
   * @event expandRow
   */
  expandRow = null;

  /**
   * Closure action {{#crossLink "Components.ModelsTable/actions.collapseRow:method"}}ModelsTable.actions.collapseRow{{/crossLink}}
   *
   * @event collapseRow
   */
  collapseRow = null;

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
   * Closure action {{#crossLink "Components.ModelsTableRow/actions.editRow:method"}}ModelsTableRow.actions.editRow{{/crossLink}}
   *
   * @event editRow
   */
  editRow = null;

  /**
   * Closure action {{#crossLink "Components.ModelsTableRow/actions.saveRow:method"}}ModelsTableRow.actions.saveRow{{/crossLink}}
   *
   * @event saveRow
   */
  saveRow = null;

  /**
   * Closure action {{#crossLink "Components.ModelsTableRow/actions.cancelEditRow:method"}}ModelsTableRow.actions.cancelEditRow{{/crossLink}}
   *
   * @event cancelEditRow
   */
  cancelEditRow = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/themeInstance:property"}}ModelsTable.themeInstance{{/crossLink}}
   *
   * @property themeInstance
   * @type object
   * @default null
   */
  themeInstance = null;

  /**
   * Is current row expanded or not
   *
   * @type boolean
   * @default null
   * @property isExpanded
   */
  isExpanded = null;

  /**
   * Is this column editable
   *
   * @type boolean
   * @default true
   * @property isColumnEditable
   * @private
   */
  @computed('column.editable', 'isEditRow')
  get isColumnEditable() {
    let isEditable = get(this, 'isEditRow');
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
   * @private
   */
  @computed('isColumnEditable', 'isEditRow', 'column.{propertyName,component,componentForEdit}')
  get componentToRender() {
    if (isNone(get(this, 'column.propertyName'))) {
      return undefined;
    }
    let editComponent = undefined;
    if (get(this, 'isColumnEditable')) {
      editComponent = get(this, 'column.componentForEdit');
      editComponent = isPresent(editComponent) ? editComponent : get(this, 'themeInstance.components.cell-content-edit');
    }
    let cellDisplayComponent = get(this, 'column.component') || get(this, 'themeInstance.components.cell-content-display');
    return editComponent || cellDisplayComponent;
  }

  click(e) {
    if (get(this, 'isEditRow')) {
      e.stopPropagation();
    }
  }
}
