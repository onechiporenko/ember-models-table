import Component from '@glimmer/component';
import { type ColumnsHiddenSignature } from '../../../../interfaces/components/models-table/themes/default/columns-hidden-signature.interface';

/**
 * Table row used within {@link DefaultTheme.TableBody}.
 *
 * Component used when all columns are hidden and no data items are shown. Usually it contains a simple message.
 *
 * Usage example:
 *
 * ```html
 * <ModelsTable @data={{this.data}} @columns={{this.columns}} as |MT|>
 *   <MT.Table as |Table|>
 *     <Table.Body as |Body|>
 *       {{#if Body.allColumnsAreHidden}}
 *         <Body.ColumnsHidden as |CH|>
 *           Any message here
 *         </Body.ColumnsHidden>
 *       {{else}}
 *         {{! ... }}
 *       {{/if}}
 *     </Table.Body>
 *     {{! ... }}
 *   </MT.Table>
 *   {{! .... }}
 * </ModelsTable>
 * ```
 */
export default class ColumnsHidden extends Component<ColumnsHiddenSignature> {}
