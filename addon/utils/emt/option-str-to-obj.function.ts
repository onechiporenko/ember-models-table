import { type SelectOption } from '../../interfaces/select-option.interface';

export const optionStrToObj = (option: string | number): SelectOption => ({
  value: option,
  label: option,
});
