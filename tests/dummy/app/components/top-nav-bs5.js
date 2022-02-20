import Component from '@glimmer/component';
import { ensureSafeComponent } from '@embroider/util';
import { getBsNavbar } from 'ember-models-table/utils/emt/themes/ebs';

export default class TopNavBS5 extends Component {
  get BsNavbar() {
    return ensureSafeComponent(getBsNavbar(), this);
  }
}
