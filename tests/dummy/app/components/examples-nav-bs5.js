import { ensureSafeComponent } from '@embroider/util';
import Component from '@glimmer/component';
import { getBsNav } from 'ember-models-table/utils/emt/themes/ebs';

export default class ExamplesNavBs5 extends Component {
  get BsNav() {
    return ensureSafeComponent(getBsNav(), this);
  }
}
