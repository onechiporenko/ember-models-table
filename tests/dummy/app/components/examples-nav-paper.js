import { ensureSafeComponent } from '@embroider/util';
import { action } from '@ember/object';
import Component from '@glimmer/component';
import { getPaperTabs } from 'ember-models-table/utils/emt/themes/ep';

export default class ExamplesNavPaper extends Component {
  get PaperTabs() {
    return ensureSafeComponent(getPaperTabs(), this);
  }

  @action
  noop() {
    // do nothing.
  }
}
