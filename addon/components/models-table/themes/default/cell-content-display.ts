import Component from '@glimmer/component';
import { type CellContentDisplaySignature } from '../../../../interfaces/components/models-table/themes/default/cell-content-display-signature.interface';

/**
 * Default cell-component. Used to print property-value (`row` - source, `column.propertyName` - key).
 *
 * Properties and event-handlers from {@link DefaultTheme.Cell} are bound here
 */
export default class CellContentDisplay extends Component<CellContentDisplaySignature> {}
