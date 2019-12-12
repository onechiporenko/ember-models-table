import {classNames, layout as templateLayout} from '@ember-decorators/component';
import ModelsTableGlobalFilterComponent from '../../global-filter';
import layout from '../../../../templates/components/models-table/themes/ember-paper/global-filter';
import {alias} from '@ember/object/computed';
import {className} from '@ember-decorators/component';

/**
 * @class EpModelsTableGlobalFilter
 * @namespace Components
 * @extends Components.ModelsTableGlobalFilter
 */
export default
@templateLayout(layout)
@classNames('globalSearch')
class EpModelsTableGlobalFilterComponent extends ModelsTableGlobalFilterComponent {

  /**
   * @property globalFilterWrapper
   * @type string
   * @protected
   */
  @className
  @alias('themeInstance.globalFilterWrapper')
  globalFilterWrapper;
}
