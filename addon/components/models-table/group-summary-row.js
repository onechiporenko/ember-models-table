import {classNames, layout as templateLayout, tagName} from '@ember-decorators/component';
import Component from '@ember/component';
import layout from '../../templates/components/models-table/group-summary-row';

/**
 * @class GroupSummaryRow
 * @namespace Components
 * @extends Ember.Component
 */
@templateLayout(layout)
@classNames('group-summary-row')
@tagName('tr')
export default class GroupSummaryRowComponent extends Component {
  /**
   * Bound from {{#crossLink "Components.ModelsTable/visibleProcessedColumns:property"}}ModelsTable.visibleProcessedColumns{{/crossLink}}
   *
   * @property visibleProcessedColumns
   * @type ModelsTableColumn[]
   * @default null
   */
  visibleProcessedColumns = null;

  /**
   * @type object[]
   * @property groupedItems
   * @default null
   * @private
   */
  groupedItems = null;

  /**
   * @type object[]
   * @property visibleGroupedItems
   * @default null
   * @private
   */
  visibleGroupedItems = null;

  /**
   * @type object[]
   * @property selectedGroupedItems
   * @default null
   * @private
   */
  selectedGroupedItems = null;

  /**
   * @type object[]
   * @property expandedGroupedItems
   * @default null
   * @private
   */
  expandedGroupedItems = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/themeInstance:property"}}ModelsTable.themeInstance{{/crossLink}}
   *
   * @property themeInstance
   * @type object
   * @default null
   */
  themeInstance = null;
}
