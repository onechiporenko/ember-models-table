import {layout as templateLayout} from '@ember-decorators/component';
import Component from '@ember/component';
import layout from '../templates/components/examples-nav-semantic';

@templateLayout(layout)
export default class ExamplesNavSemanticComponent extends Component {
  routes = [];
}
