import { action } from '@ember/object';
import Component from '@glimmer/component';
import { SelectArgs as DefaultSelectArgs } from '../default/select';
import {
  macroCondition,
  dependencySatisfies,
  importSync,
} from '@embroider/macros';
import { ensureSafeComponent } from '@embroider/util';
import { assert } from '@ember/debug';

let PaperSelectComponent: unknown;
let hasEmberPaper = false;
if (macroCondition(dependencySatisfies('ember-paper', '*'))) {
  PaperSelectComponent = importSync('ember-paper/components/paper-select');
  hasEmberPaper = true;
}

type Val = number | string | boolean;

export interface SelectArgs extends DefaultSelectArgs {
  label?: string;
  wide?: boolean;
}

export default class Select extends Component<SelectArgs> {
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

  get PaperSelect(): unknown {
    assert('ember-paper not found', hasEmberPaper);
    return ensureSafeComponent((PaperSelectComponent as any).default, this);
  }
}
