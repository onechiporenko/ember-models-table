import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { guidFor } from '@ember/object/internals';
import { action } from '@ember/object';
import { SelectSignature } from '../../../../interfaces/components/models-table/themes/default/select-signature.interface';

/**
 * Select-dropdown with a list of options. Used as page-size select and for select-filters.
 */
export default class Select extends Component<SelectSignature> {
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
    const value: number | string | boolean = (<HTMLInputElement>e.target)
      ?.value;
    this.args.changeValue(value);
    return false;
  }

  @action
  protected onClick(e: Event): void {
    e?.stopPropagation?.();
  }
}
