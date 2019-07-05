import Component from '@ember/component';
import layout from '../templates/components/grouped-rows-settings-bs4';
import {layout as templateLayout} from '@ember-decorators/component';

@templateLayout(layout)
export default class GroupedRowsSettingsBs4Component extends Component {
  displayGroupedValueAsToggle = false;
}
