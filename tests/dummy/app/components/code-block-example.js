import {layout as templateLayout, classNames} from '@ember-decorators/component';
import {action, set} from '@ember/object';
import {getOwner} from '@ember/application';
import Component from '@ember/component';
import layout from '../templates/components/code-block-example';

export default
@classNames('code-block-example')
@templateLayout(layout)
class CodeBlockExampleComponent extends Component {

  snippetName = '';

  opened = true;

  get btnClass() {
    return getOwner(this).lookup('component:models-table').themeInstance.buttonDefault;
  }

  @action
  toggleCodeVisibility() {
    set(this, 'opened', !this.opened);
  }
}
