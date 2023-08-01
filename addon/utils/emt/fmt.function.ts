import { isArray } from '@ember/array';
import { isHTMLSafe } from '@ember/template';

export default function fmt(...args: any[]): string {
  let str = args[0] || '';
  let cachedFormats = args[1];

  if (!isArray(cachedFormats) || args.length > 2) {
    cachedFormats = new Array(args.length - 1);

    for (let i = 1, l = args.length; i < l; i++) {
      cachedFormats[i - 1] = args[i];
    }
  }

  // first, replace any ORDERED replacements.
  let idx = 0; // the current index for non-numerical replacements
  if (isHTMLSafe(str)) {
    str = str.toString();
  }
  return str.replace(/%@([0-9]+)?/g, function (_: string, argIndex: string) {
    const argIndexNumeric = argIndex ? parseInt(argIndex, 10) - 1 : idx++;
    return cachedFormats[argIndexNumeric];
  });
}
