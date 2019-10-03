import {layout as templateLayout} from '@ember-decorators/component';
import Component from '@ember/component';
import layout from '../templates/components/custom-concat';

export default
@templateLayout(layout)
class CustomConcatComponent extends Component {
}
