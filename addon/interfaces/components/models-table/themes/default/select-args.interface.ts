import DefaultTheme from 'ember-models-table/services/emt-themes/default';
import { type SelectOption } from 'ember-models-table/interfaces/select-option.interface';

export interface SelectArgs {
  /**
   * Bound from {@link Core.ModelsTableArgs.themeInstance}
   */
  themeInstance: DefaultTheme;
  /**
   * List of options for select-component
   */
  options: SelectOption[] | null;
  /**
   * Extra class added for `select`-tag
   */
  cssPropertyName?: string;
  /**
   * Selected value
   */
  value: string | number | boolean;
  /**
   * Type of values
   */
  type?: string;
  /**
   * Label for select
   */
  label?: string;
  /**
   * Custom `id`-tag
   */
  id?: string;
  /**
   * Action-handler called when select-value is changed
   *
   * @event changeValue
   */
  changeValue: (e: string) => void;
}
