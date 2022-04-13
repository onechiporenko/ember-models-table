// Types for compiled templates
declare module 'ember-models-table/templates/*' {
  import TemplateFactory from 'htmlbars-inline-precompile';
  const tmpl: typeof TemplateFactory;
  export default tmpl;
}
