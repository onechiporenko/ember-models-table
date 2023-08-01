export default (testContext) => {
  const owner = testContext.owner;
  const uiFramework = owner.application.uiFramework;
  const lookup = owner.factoryFor ? 'factoryFor' : '_lookupFactory';
  const defaultThemeClass = owner[lookup]('service:emt-theme/bootstrap3');
  const bs4 = owner[lookup]('service:emt-theme/ember-bootstrap-v4');
  const bs5 = owner[lookup]('service:emt-theme/ember-bootstrap-v5');
  const plainHtml = owner[lookup]('service:emt-theme/plain-html');
  return (
    {
      bs4,
      bs5,
      'plain-html': plainHtml,
    }[uiFramework] || defaultThemeClass
  );
};
