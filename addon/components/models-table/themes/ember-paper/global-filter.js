import {classNames, layout as templateLayout} from '@ember-decorators/component';
import DefaultGlobalFilter from '../../global-filter';
import layout from '../../../../templates/components/models-table/themes/ember-paper/global-filter';
import {alias} from '@ember/object/computed';
import {className} from '@ember-decorators/component';

export default
@templateLayout(layout)
@classNames('globalSearch')
class GlobalFilterComponent extends DefaultGlobalFilter {
  @className
  @alias('themeInstance.globalFilterWrapper')
  globalFilterWrapper;
}
