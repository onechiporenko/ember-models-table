export function initialize(appInstance) {
  appInstance.inject('component:models-table', 'themeInstance', 'theme:ember-bootstrap-v4');
  appInstance.inject('component:models-table-server-paginated', 'themeInstance', 'theme:ember-bootstrap-v4');
}

export default {
  name: 'emt-inject',
  initialize
};
