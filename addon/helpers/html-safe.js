import {htmlSafe as _htmlSafe} from '@ember/string';
import {helper} from '@ember/component/helper';

export function htmlSafe([str]/*, hash*/) {
  return _htmlSafe(str || '');
}

export default helper(htmlSafe);
