import {layout as templateLayout} from '@ember-decorators/component';
import DefaultPageSizeSelectComponent from '../../page-size-select';
import layout from '../../../../templates/components/models-table/themes/ember-paper/page-size-select';

@templateLayout(layout)
export default class PageSizeSelectComponent extends DefaultPageSizeSelectComponent {
}
