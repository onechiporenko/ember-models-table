export function initialize(appInstance) {
  appInstance.inject('component:models-table', 'themeInstance', 'theme:bootstrap3');
  appInstance.inject('component:models-table-server-paginated', 'themeInstance', 'theme:bootstrap3');
}

export default {
  name: 'emt-inject',
  initialize
};
