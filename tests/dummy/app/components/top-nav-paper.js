import Component from '@glimmer/component';
import { ensureSafeComponent } from '@embroider/util';
import {
  getPaperButton,
  getPaperIcon,
  getPaperMenu,
  getPaperToolbar,
} from 'ember-models-table/utils/emt/themes/ep';

export default class TopNavPaper5 extends Component {
  get PaperButton() {
    return ensureSafeComponent(getPaperButton(), this);
  }

  get PaperToolbar() {
    return ensureSafeComponent(getPaperToolbar(), this);
  }

  get PaperMenu() {
    return ensureSafeComponent(getPaperMenu(), this);
  }

  get PaperIcon() {
    return ensureSafeComponent(getPaperIcon(), this);
  }
}
