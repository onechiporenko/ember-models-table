import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { guidFor } from '@ember/object/internals';
import { action } from '@ember/object';

/**
 * Select-dropdown with a list of options. Used as page-size select and for select-filters.
 *
 * @class ModelsTableSelect
 * @namespace Components
 * @extends Glimmer.Component
 */
export default class SelectComponent extends Component {
  @tracked
  _id = guidFor(this);

  get id() {
    return this.args.id ?? this._id;
  }

  /**
   * @property disabled
   * @type boolean
   * @protected
   */
  get isDisabled() {
    return !this.args.options || !this.args.options.length;
  }

  @action
  onChange(e) {
    e.stopPropagation();
    let val = e.target.value;
    if (this.args.type === 'number') {
      val = +val;
    }
    this.args.changeValue(val);
    return false;
  }

  @action
  onClick(e) {
    e?.stopPropagation();
  }
}
