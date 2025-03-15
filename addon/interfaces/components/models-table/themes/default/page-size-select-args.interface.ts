import { TrackedArray } from 'tracked-built-ins';

import DefaultTheme from '../../../../../services/emt-themes/default';
import { type SelectOption } from '../../../../select-option.interface';

export interface PageSizeSelectArgs {
  /**
   * Type of select-value. Used to force set value as a `number`
   */
  type: string;
  /**
   * Bound from {@link Core.ModelsTable.pageSizeOptions | ModelsTable.pageSizeOptions}
   */
  pageSizeOptions: TrackedArray<SelectOption>;
  /**
   * Bound from {@link Core.ModelsTable.pageSize | ModelsTable.pageSize}
   */
  pageSize: number;
  /**
   * Bound from {@link Core.ModelsTable.themeInstance | ModelsTable.themeInstance}
   */
  themeInstance: DefaultTheme;
  /**
   * Bound from {@link Core.ModelsTable.changePageSize | ModelsTable.changePageSize}
   *
   * @event changePageSize
   */
  changePageSize: (e: string) => void;
}
