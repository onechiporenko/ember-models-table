import { type SelectOption } from '../../interfaces/select-option.interface';

const {
  prototype: { hasOwnProperty },
} = Object;

export const isSelectOption = (val: unknown): val is SelectOption =>
  hasOwnProperty.call(val, 'value') && hasOwnProperty.call(val, 'label');
