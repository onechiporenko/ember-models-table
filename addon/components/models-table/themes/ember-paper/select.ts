import { ensureSafeComponent } from '@embroider/util';
import { action } from '@ember/object';
import Component from '@glimmer/component';
import { SelectArgs as DefaultSelectArgs } from '../default/select';
import { getPaperSelect } from '../../../../utils/emt/themes/ep';

type Val = number | string | boolean;

export interface SelectArgs extends DefaultSelectArgs {
  label?: string;
  wide?: boolean;
}

export default class Select extends Component<SelectArgs> {
  get PaperSelect(): unknown {
    return ensureSafeComponent(getPaperSelect(), this);
  }
  /**
   * @default true
   */
  protected get disabled(): boolean {
    return !this.args.options || !this.args.options.length;
  }

  /**
   * @default false
   */
  protected get clearable(): boolean {
    return this.wide ?? false;
  }
  /**
   * @default false
   */
  protected get wide(): boolean {
    return this.args.wide ?? false;
  }

  /**
   * @event updateValue
   */
  @action
  protected updateValue(val: Val | { value: Val }): void {
    let v = typeof val === 'object' ? val.value : val;
    if (this.args.type === 'number') {
      v = +v;
    }
    this.args.changeValue(v);
  }
}
