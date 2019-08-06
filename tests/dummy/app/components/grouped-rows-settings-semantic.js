import Component from '@ember/component';
import layout from '../templates/components/grouped-rows-settings-semantic';
import {layout as templateLayout} from '@ember-decorators/component';

@templateLayout(layout)
export default class GroupedRowsSettingsSemanticComponent extends Component {
  displayGroupedValueAsToggle = false;
}
