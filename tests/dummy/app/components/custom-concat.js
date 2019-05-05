import {layout as templateLayout} from '@ember-decorators/component';
import Component from '@ember/component';
import layout from '../templates/components/custom-concat';

@templateLayout(layout)
export default class CustomConcatComponent extends Component {
}
