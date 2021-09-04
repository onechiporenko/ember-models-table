import { getOwner } from '@ember/application';

export default (context) => {
  const owner = getOwner(context);
  const uiFramework = owner.application.uiFramework;
  const lookup = owner.factoryFor ? 'factoryFor' : '_lookupFactory';
  const defaultThemeClass = owner[lookup]('theme:bootstrap3');
  const bs3 = owner[lookup]('theme:ember-bootstrap-v3');
  const bs4 = owner[lookup]('theme:ember-bootstrap-v4');
  const paper = owner[lookup]('theme:ember-paper');
  const plainHtml = owner[lookup]('theme:plain-html');
  return (
    {
      bs3,
      bs4,
      paper,
      'plain-html': plainHtml,
    }[uiFramework] || defaultThemeClass
  );
};
