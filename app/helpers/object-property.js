import Ember from "ember";

export default Ember.Handlebars.makeBoundHelper(function(obj, prop) {
  return Ember.get(obj, prop);
});