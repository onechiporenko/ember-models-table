import {get} from '@ember/object';

export default testContext => {
  const owner = get(testContext, 'owner');
  const uiFramework = get(owner, 'application.uiFramework') || 'bs3';
  const lookup = owner.factoryFor ? 'factoryFor' : '_lookupFactory';
  const bs3 = owner[lookup]('theme:bootstrap3');
  const bs4 = owner[lookup]('theme:bootstrap4');
  const semanticUi = owner[lookup]('theme:semanticui');
  return {
      bs3,
      bs4,
      'semantic-ui': semanticUi
    }[uiFramework] || bs3;
};