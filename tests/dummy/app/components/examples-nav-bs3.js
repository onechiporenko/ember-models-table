import {layout as templateLayout} from '@ember-decorators/component';
import Component from '@ember/component';
import layout from '../templates/components/examples-nav-bs3';

export default
@templateLayout(layout)
class ExamplesNavBs3Component extends Component {
  routes = [];
}
