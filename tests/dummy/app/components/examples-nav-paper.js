import {layout as templateLayout} from '@ember-decorators/component';
import {action} from '@ember/object';
import Component from '@ember/component';
import layout from '../templates/components/examples-nav-paper';

@templateLayout(layout)
export default class ExamplesNavPaper extends Component {
  routes = [];

  @action
  noop() {}
}
