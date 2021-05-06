import { get } from '@ember/object';
import Service, { inject as service } from '@ember/service';

export default class Fw extends Service {
  constructor(owner, args) {
    super(owner, args);
    this.owner = owner;
  }

  @service('emt-themes/ember-paper')
  emberPaperTheme;

  @service('emt-themes/plain-html')
  plainHtmlTheme;

  @service('emt-themes/ember-bootstrap-v3')
  ebs3Theme;

  @service('emt-themes/ember-bootstrap-v4')
  ebs4Theme;

  @service('emt-themes/bootstrap3')
  defaultTheme;
  get uiFramework() {
    return get(this.owner, 'application.uiFramework');
  }

  get isBs3() {
    return (
      window.location.href.includes('/v.3/bs3/') || this.uiFramework === 'bs3'
    );
  }

  get isBs4() {
    return (
      window.location.href.includes('/v.3/bs4/') || this.uiFramework === 'bs4'
    );
  }

  get isPaper() {
    return (
      window.location.href.includes('/v.3/paper/') ||
      this.uiFramework === 'paper'
    );
  }

  get isPlainHtml() {
    return (
      window.location.href.includes('/v.3/plain-html/') ||
      this.uiFramework === 'plain-html'
    );
  }
  get isDefault() {
    return !this.uiFramework;
  }

  get themeInstance() {
    if (this.isBs3) {
      return this.ebs3Theme;
    }
    if (this.isBs4) {
      return this.ebs4Theme;
    }
    if (this.isPlainHtml) {
      return this.plainHtmlTheme;
    }
    if (this.isPaper) {
      return this.emberPaperTheme;
    }
    return this.defaultTheme;
  }
}
