import Service, { inject as service } from '@ember/service';

export default class Fw extends Service {
  constructor(owner, args) {
    super(owner, args);
    this.owner = owner;
  }

  @service('emt-themes/plain-html')
  plainHtmlTheme;

  @service('emt-themes/ember-bootstrap-v4')
  ebs4Theme;

  @service('emt-themes/ember-bootstrap-v5')
  ebs5Theme;

  @service('emt-themes/bootstrap3')
  defaultTheme;
  get uiFramework() {
    return this.owner.application.uiFramework;
  }

  get isBs4() {
    return (
      window.location.href.includes('/v.4/bs4/') || this.uiFramework === 'bs4'
    );
  }

  get isBs5() {
    return (
      window.location.href.includes('/v.4/bs5/') || this.uiFramework === 'bs5'
    );
  }

  get isPlainHtml() {
    return (
      window.location.href.includes('/v.4/plain-html/') ||
      this.uiFramework === 'plain-html'
    );
  }
  get isDefault() {
    return !this.uiFramework;
  }

  get themeInstance() {
    if (this.isBs4) {
      return this.ebs4Theme;
    }
    if (this.isBs5) {
      return this.ebs5Theme;
    }
    if (this.isPlainHtml) {
      return this.plainHtmlTheme;
    }
    return this.defaultTheme;
  }
}
