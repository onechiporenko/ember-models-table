import {layout as templateLayout} from '@ember-decorators/component';
import Component from '@ember/component';
import {action} from '@ember/object';
import layout from '../../templates/components/models-table/expand-all-toggle';

/**
 * Component to expand or collapse all rows
 *
 * Usage example:
 *
 * ```js
 * const columns = [
 *   {
 *     component: 'models-table/expand-toggle',
 *     componentForFilterCell: 'models-table/expand-all-toggle',
 *     mayBeHidden: false
 *   },
 *   {propertyName: 'firstName'},
 *   {propertyName: 'lastName'}
 * ];
 *
 * const data = [ ... ];
 * ```
 *
 * ```hbs
 * <ModelsTable
 *   @data={{data}}
 *   @columns={{columns}}
 *   @multipleExpand={{true}}
 *   @expandedRowComponent={{component "path/to/your-component"}}
 * />
 * ```
 *
 * @class ModelsTableExpandAllToggle
 * @extends Ember.Component
 * @namespace Components
 */
export default
@templateLayout(layout)
class ExpandAllToggleComponent extends Component {

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
   * @event doCollapseAllRows
   * @protected
   */
  @action
  doCollapseAllRows() {
    this.collapseAllRows();
    return false;
  }

  /**
   * @event doExpandAllRows
   * @protected
   */
  @action
  doExpandAllRows() {
    this.expandAllRows();
    return false;
  }
}
