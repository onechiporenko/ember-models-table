import { helper } from '@ember/component/helper';
import { typeOf } from '@ember/utils';

export default helper(function optionIsObject([val]/*, hash*/) {
  return typeOf(val) === 'instance' || typeOf(val) === 'object';
});
