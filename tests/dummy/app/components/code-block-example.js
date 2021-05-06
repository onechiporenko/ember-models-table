import { action, set } from '@ember/object';
import { inject as service } from '@ember/service';
import Component from '@glimmer/component';

export default class CodeBlockExampleComponent extends Component {
  @service() fw;

  opened = true;

  constructor(owner, args) {
    super(owner, args);
    this.owner = owner;
  }

  get btnClass() {
    if (this.fw.isPlainHtml) {
      return this.owner.lookup('emt-theme:plain-html').buttonDefault;
    }
    if (this.fw.isBs3) {
      return this.owner.lookup('emt-theme:ember-bootstrap-v3').buttonDefault;
    }
    if (this.fw.isBs4) {
      return this.owner.lookup('emt-theme:ember-bootstrap-v4').buttonDefault;
    }
    if (this.fw.isPaper) {
      return this.owner.lookup('emt-theme:ember-paper').buttonDefault;
    }
    return '';
  }

  @action
  toggleCodeVisibility() {
    set(this, 'opened', !this.opened);
  }
}
