export function initialize(appInstance) {
  const {application: {uiFramework}} = appInstance;
  const theme = {
    'bs3': 'ember-bootstrap-v3',
    'bs4': 'ember-bootstrap-v4',
    'paper': 'ember-paper',
    'semantic-ui': 'ember-semanticui',
  }[uiFramework] || 'bootstrap3';
  appInstance.inject('component:models-table', 'themeInstance', `theme:${theme}`);
  appInstance.inject('component:models-table-server-paginated', 'themeInstance', `theme:${theme}`);
}

export default {
  name: 'emt-inject',
  initialize
};
