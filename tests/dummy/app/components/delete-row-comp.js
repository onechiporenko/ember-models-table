import Component from '@ember/component';
import {get} from '@ember/object';
import layout from '../templates/components/delete-row-comp';

export default class DeleteRowComponent extends Component {
  layout = layout;

  record = null;

  click(event) {
    let onClick = get(this, 'onClick');
    if (onClick) {
      onClick(get(this, 'record'));
      event.stopPropagation();
    }
  }

}