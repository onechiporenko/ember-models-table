import Mixin from '@ember/object/mixin';

/**
 * @class HoverSupport
 * @namespace Mixins
 */
export default Mixin.create({

  enter() {
  },
  leave() {
  },

  didInsertElement() {
    this._enter = this.enter.bind(this);
    this._leave = this.leave.bind(this);
    this.element.addEventListener('mouseenter', this._enter);
    this.element.addEventListener('mouseleave', this._leave);
    this._super(...arguments);
  },

  willDestroyElement() {
    this.element.removeEventListener('mouseenter', this._enter);
    this.element.removeEventListener('mouseleave', this._leave);
    this._super(...arguments);
  }

});
