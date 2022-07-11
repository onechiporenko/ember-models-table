import Component from '@glimmer/component';
import { SelectOption } from '../../../models-table';
import DefaultTheme from '../../../../services/emt-themes/default';

export interface PageSizeSelectArgs {
  /**
   * Type of select-value. Used to force set value as a `number`
   */
  type: string;
  /**
   * Bound from [[Core.ModelsTable.pageSizeOptions | ModelsTable.pageSizeOptions]]
   */
  pageSizeOptions: SelectOption[];
  /**
   * Bound from [[Core.ModelsTable.pageSize | ModelsTable.pageSize]]
   */
  pageSize: number;
  /**
   * Bound from [[Core.ModelsTable.themeInstance | ModelsTable.themeInstance]]
   */
  themeInstance: DefaultTheme;
  /**
   * Bound from [[Core.ModelsTable.changePageSize | ModelsTable.changePageSize]]
   *
   * @event changePageSize
   */
  changePageSize: (v: number) => void;
}

/**
 * Dropdown with page size values used within [[DefaultTheme.TableFooter | TableFooter]].
 *
 * Value from [[Core.ModelsTable.pageSizeOptions | ModelsTable.pageSizeOptions]] is used as a list of dropdown-options.
 *
 * Usage example:
 *
 * ```html
 * <ModelsTable @data={{this.data}} @columns={{this.columns}} as |MT|>
 *   <MT.Footer as |Footer|>
 *     <Footer.PageSizeSelect />
 *     {{! ... }}
 *   </MT.Footer>
 *   {{! .... }}
 * </ModelsTable>
 * ```
 * Block usage example:
 *
 * ```html
 * <ModelsTable @data={{this.data}} @columns={{this.columns}} as |MT|>
 *   <MT.Footer as |Footer|>
 *     <Footer.PageSizeSelect as |SizeSelectBlock|>
 *       <SizeSelectBlock.Select />
 *     </Footer.PageSizeSelect>
 *   </MT.Footer>
 * </ModelsTable>
 * ```
 * References to the following contextual components are yielded:
 *
 * * [[DefaultTheme.Select | Select]] - selectbox with list of available page size options
 */
export default class PageSizeSelect extends Component<PageSizeSelectArgs> {
  // no-op
}
