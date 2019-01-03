import { helper } from '@ember/component/helper';

export function stringify([val]/*, hash*/) {
  return JSON.stringify(val);
}

export default helper(stringify);
