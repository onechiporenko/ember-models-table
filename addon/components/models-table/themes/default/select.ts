import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { guidFor } from '@ember/object/internals';
import { action } from '@ember/object';
import { SelectOption } from '../../../models-table';
import DefaultTheme from '../../../../services/emt-themes/default';

export interface SelectArgs {
  /**
   * Bound from {@link Core.ModelsTableArgs.themeInstance}
   */
  themeInstance: DefaultTheme;
  /**
   * List of options for select-component
   */
  options: SelectOption[];
  /**
   * Extra class added for `select`-tag
   */
  cssPropertyName: string;
  /**
   * Selected value
   */
  value: string | number | boolean;
  /**
   * Type of values
   */
  type?: string;
  /**
   * Custom `id`-tag
   */
  id?: string;
  /**
   * Action-handler called when select-value is changed
   *
   * @event changeValue
   */
  changeValue: (v: string | number | boolean) => void;
}

/**
 * Select-dropdown with a list of options. Used as page-size select and for select-filters.
 */
export default class Select extends Component<SelectArgs> {
  @tracked
  protected _id = guidFor(this);

  protected get id(): string {
    return this.args.id ?? this._id;
  }

  protected get isDisabled(): boolean {
    return !this.args.options || !this.args.options.length;
  }

  @action
  protected onChange(e: Event): boolean {
    e.stopPropagation();
    const value = (<HTMLInputElement>e.target)?.value;
    let valueToUse: number | string | boolean = value;
    if (this.args.type === 'number') {
      valueToUse = +value;
    }
    this.args.changeValue(valueToUse);
    return false;
  }

  @action
  protected onClick(e: Event): void {
    e?.stopPropagation?.();
  }
}
