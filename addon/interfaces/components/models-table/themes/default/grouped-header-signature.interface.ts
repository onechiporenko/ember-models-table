import { GroupedHeaderArgs } from '../../../../../interfaces/components/models-table/themes/default/grouped-header-args.interface';
import { GroupedHeader } from '../../../../../interfaces/grouped-header.interface';

export interface GroupedHeaderSignature {
  Element: HTMLTableRowElement;
  Args: GroupedHeaderArgs;
  Blocks: {
    default: [
      {
        groupedHeader: GroupedHeader[];
        shouldAddExtraColumn: boolean;
      }
    ];
  };
}
