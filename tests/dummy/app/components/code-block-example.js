import { action, set } from '@ember/object';
import { inject as service } from '@ember/service';
import Component from '@glimmer/component';

export default class CodeBlockExampleComponent extends Component {
  @service() fw;

  get showToggle() {
    return this.args.showToggle ?? true;
  }

  opened = true;

  constructor(owner, args) {
    super(owner, args);
    this.owner = owner;
  }

  @action
  toggleCodeVisibility() {
    set(this, 'opened', !this.opened);
  }
}
