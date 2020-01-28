import {layout as templateLayout} from '@ember-decorators/component';
import Component from '@ember/component';
import layout from '../templates/components/examples-nav-plain-html';

export default
@templateLayout(layout)
class ExamplesNavPlainHtmlComponent extends Component {
  routes = [];
}
