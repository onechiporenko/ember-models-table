import { getOwner } from '@ember/application';

export default (context) => {
  const owner = getOwner(context);
  const uiFramework = owner.application.uiFramework;
  const lookup = owner.factoryFor ? 'factoryFor' : '_lookupFactory';
  const defaultThemeClass = owner[lookup]('theme:bootstrap3');
  const bs4 = owner[lookup]('theme:ember-bootstrap-v4');
  const bs5 = owner[lookup]('theme:ember-bootstrap-v5');
  const plainHtml = owner[lookup]('theme:plain-html');
  return (
    {
      bs4,
      bs5,
      'plain-html': plainHtml,
    }[uiFramework] || defaultThemeClass
  );
};
