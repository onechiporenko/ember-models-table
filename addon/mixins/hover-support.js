import Mixin from '@ember/object/mixin';

/**
 * @class HoverSupport
 * @namespace Mixins
 */
export default Mixin.create({

  enter(){},
  leave(){},

  mouseEnter() {
    this.enter();
  },

  focusIn() {
    this.enter();
  },

  mouseLeave() {
    this.leave();
  },

  focusOut() {
    this.leave();
  }

});
