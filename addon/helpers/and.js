import {helper} from '@ember/component/helper';

export function and(params/*, hash*/) {
  for (let i = 0, len = params.length; i < len; i++) {
    if (!params[i]) {
      return false;
    }
  }
  return true;
}

export default helper(and);
