import {layout as templateLayout} from '@ember-decorators/component';
import Component from '@ember/component';
import layout from '../templates/components/cell-component';

@templateLayout(layout)
export default class CellComponent extends Component {
}
