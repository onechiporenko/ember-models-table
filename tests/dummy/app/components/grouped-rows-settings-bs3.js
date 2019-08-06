import Component from '@ember/component';
import layout from '../templates/components/grouped-rows-settings-bs3';
import {layout as templateLayout} from '@ember-decorators/component';

@templateLayout(layout)
export default class GroupedRowsSettingsBs3Component extends Component {
  displayGroupedValueAsToggle = false;
}
