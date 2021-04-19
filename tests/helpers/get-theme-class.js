import { get } from '@ember/object';

export default (testContext) => {
  const owner = get(testContext, 'owner');
  const uiFramework = get(owner, 'application.uiFramework');
  const lookup = owner.factoryFor ? 'factoryFor' : '_lookupFactory';
  const defaultThemeClass = owner[lookup]('service:emt-theme/bootstrap3');
  const bs3 = owner[lookup]('service:emt-theme/ember-bootstrap-v3');
  const bs4 = owner[lookup]('service:emt-theme/ember-bootstrap-v4');
  const paper = owner[lookup]('service:emt-theme/ember-paper');
  const plainHtml = owner[lookup]('service:emt-theme/plain-html');
  return (
    {
      bs3,
      bs4,
      paper,
      'plain-html': plainHtml,
    }[uiFramework] || defaultThemeClass
  );
};
