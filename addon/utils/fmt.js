import Ember from "ember";

export default function fmt(str, formats) {
  var cachedFormats = formats;

  if (!Ember.isArray(cachedFormats) || arguments.length > 2) {
    cachedFormats = new Array(arguments.length - 1);

    for (var i = 1, l = arguments.length; i < l; i++) {
      cachedFormats[i - 1] = arguments[i];
    }
  }

  // first, replace any ORDERED replacements.
  var idx  = 0; // the current index for non-numerical replacements
  return str.replace(/%@([0-9]+)?/g, function(s, argIndex) {
    argIndex = (argIndex) ? parseInt(argIndex, 10) - 1 : idx++;
    return cachedFormats[argIndex];
  });
}
