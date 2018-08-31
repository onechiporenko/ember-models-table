function createSub(num) {
  let sub = [];
  for (let i = 0; i < num; i++) {
    sub.push('..');
  }
  return sub.join('/');
}

module.exports = {
  description: 'Generates a theme for ember-models-table',

  locals(options) {
    const path = options.entity.name.split('/');
    const subTheme = path.length === 1 ? '.' : createSub(path.length - 1);
    return {subTheme, subInitializer: createSub(path.length)};
  }

};
