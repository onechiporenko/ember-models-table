import {layout as templateLayout} from '@ember-decorators/component';
import Component from '@ember/component';
import layout from '../templates/components/examples-nav-bs4';

export default
@templateLayout(layout)
class ExamplesNavBs4Component extends Component {
  routes = [];
}
