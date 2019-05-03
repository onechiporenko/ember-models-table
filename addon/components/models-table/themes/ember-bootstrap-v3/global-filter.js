import { layout as templateLayout } from '@ember-decorators/component';
import DefaultGlobalFilter from '../../global-filter';
import layout from '../../../../templates/components/models-table/themes/ember-bootstrap-v3/global-filter';

@templateLayout(layout)
export default class GlobalFilterComponent extends DefaultGlobalFilter {}
