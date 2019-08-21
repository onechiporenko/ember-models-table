import Mixin from '@ember/object/mixin';
import {action} from '@ember/object';

/**
 * @class HoverSupport
 * @namespace Mixins
 */
export default Mixin.create({

  enter(){},
  leave(){},

  @action
  handleMouseEnter() {
    this.enter();
  },

  @action
  handleMouseLeave() {
    this.leave();
  },

  didInsertElement() {
    this.element.addEventListener('mouseenter', this.handleMouseEnter);
    this.element.addEventListener('mouseleave', this.handleMouseLeave);
    this._super(...arguments);
  },

  willDestroyElement() {
    this.element.removeEventListener('mouseenter', this.handleMouseEnter);
    this.element.removeEventListener('mouseleave', this.handleMouseLeave);
    this._super(...arguments);
  }

});
