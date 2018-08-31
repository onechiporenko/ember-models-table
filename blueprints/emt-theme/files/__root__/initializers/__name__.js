import <%= classifiedModuleName %> from '<%= subInitializer %>/themes/<%= dasherizedModuleName %>';

export function initialize(application) {
  application.register('emt-theme:<%= dasherizedModuleName %>', <%= classifiedModuleName %>, {singleton: false});
}

export default {
  name: 'emt-theme-<%= dasherizedModuleName %>',
  initialize
};
