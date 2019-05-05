import {get} from '@ember/object';

export default testContext => {
  const owner = get(testContext, 'owner');
  const uiFramework = get(owner, 'application.uiFramework');
  const lookup = owner.factoryFor ? 'factoryFor' : '_lookupFactory';
  const defaultThemeClass = owner[lookup]('theme:bootstrap3');
  const bs3 = owner[lookup]('theme:ember-bootstrap-v3');
  const bs4 = owner[lookup]('theme:ember-bootstrap-v4');
  const semanticUi = owner[lookup]('theme:ember-semanticui');
  return {
      bs3,
      bs4,
      'semantic-ui': semanticUi
    }[uiFramework] || defaultThemeClass;
};
