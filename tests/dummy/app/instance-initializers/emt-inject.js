export function initialize(appInstance) {
  appInstance.inject('controller', 'fw', 'service:fw');
}

export default {
  name: 'emt-inject',
  initialize,
};
