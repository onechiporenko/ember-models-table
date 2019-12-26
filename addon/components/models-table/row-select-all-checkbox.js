import {layout as templateLayout} from '@ember-decorators/component';
import Component from '@ember/component';
import {action} from '@ember/object';
import layout from '../../templates/components/models-table/row-select-all-checkbox';

/**
 * Component with checkbox to select or deselect all rows
 *
 * Usage example:
 *
 * ```js
 * const columns = [
 *   {
 *     component: 'models-table/row-select-checkbox',
 *     useFilter: false,
 *     mayBeHidden: false,
 *     componentForSortCell: 'models-table/row-select-all-checkbox'
 *   },
 *   {propertyName: 'firstName'},
 *   {propertyName: 'lastName'}
 * ];
 * const data = [ ... ];
 * ```
 *
 * ```hbs
 * <ModelsTable
 *   @data={{data}}
 *   @columns={{columns}}
 *   @multipleSelect={{true}}
 * />
 * ```
 *
 * @class ModelsTableRowSelectAllCheckbox
 * @extends Ember.Component
 * @namespace Components
 */
export default
@templateLayout(layout)
class RowSelectAllCheckboxComponent extends Component {

  /**
   * @property column
   * @type Utils.ModelsTableColumn
   * @default null
   */
  column = null;

  /**
   * Bound from [ModelsTable.data](Components.ModelsTable.html#property_data)
   *
   * @property data
   * @default null
   * @type object[]
   */
  data = null;

  /**
   * Bound from [ModelsTable.selectedItems](Components.ModelsTable.html#property_selectedItems)
   *
   * @property selectedItems
   * @type object[]
   * @default null
   */
  selectedItems = null;

  /**
   * Bound from [ModelsTable.expandedItems](Components.ModelsTable.html#property_expandedItems)
   *
   * @property expandedItems
   * @default null
   * @type object[]
   */
  expandedItems = null;

  /**
   * Bound from [ModelsTable.themeInstance](Components.ModelsTable.html#property_themeInstance)
   *
   * @property themeInstance
   * @type object
   * @default null
   */
  themeInstance = null;

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
   * Closure action [ModelsTable.toggleAllSelection](Components.ModelsTable.html#event_toggleAllSelection)
   *
   * @event toggleAllSelection
   */
  toggleAllSelection = null;

  /**
   * @event doToggleAllSelection
   * @protected
   */
  @action
  doToggleAllSelection() {
    this.toggleAllSelection();
  }
}
