import Mixin from '@ember/object/mixin';

/**
 * @class Noop
 * @namespace Mixins
 */
export default Mixin.create({
  actions: {
    noop() {}
  }
});
