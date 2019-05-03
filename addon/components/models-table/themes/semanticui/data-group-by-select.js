import { layout as templateLayout } from '@ember-decorators/component';
import layout from '../../../../templates/components/models-table/themes/semanticui/data-group-by-select';
import DefaultDataGroupBySelect from '../../data-group-by-select';

@templateLayout(layout)
export default class DataGroupBySelectComponent extends DefaultDataGroupBySelect {}
