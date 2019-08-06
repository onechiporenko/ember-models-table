import {layout as templateLayout} from '@ember-decorators/component';
import Component from '@ember/component';
import layout from '../templates/components/examples-nav-bs3';

@templateLayout(layout)
export default class ExamplesNavBs3Component extends Component {
  routes = [];
}
