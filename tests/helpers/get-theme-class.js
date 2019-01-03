import {get} from '@ember/object';

export default testContext => {
  const owner = get(testContext, 'owner');
  const uiFramework = get(owner, 'application.uiFramework') || 'bs3';
  const bs3 = owner.factoryFor('theme:bootstrap3');
  const bs4 = owner.factoryFor('theme:bootstrap4');
  const semanticUi = owner.factoryFor('theme:semanticui');
  return {
      bs3,
      bs4,
      'semantic-ui': semanticUi
    }[uiFramework] || bs3;
};