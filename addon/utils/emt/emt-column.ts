/**
 * @module ModelsTableColumn
 */
import { tracked, TrackedArray } from 'tracked-built-ins';
import { isArray } from '@ember/array';
import { typeOf, isNone } from '@ember/utils';
import { assert } from '@ember/debug';
import { get } from '@ember/object';
import { capitalize, dasherize } from '@ember/string';
import {
  ModelsTableDataItem,
  SelectOption,
} from '../../components/models-table';
import { SortConstants } from '../../constants/sort-constants';

const hasOwnProperty = Object.prototype.hasOwnProperty;

export type ColumnCustomFilterFn = (
  val: string,
  filterVal: string,
  row: ModelsTableDataItem
) => boolean;
export type ColumnCustomSortFn = (
  val1: string | number | boolean,
  val2: string | number | boolean,
  direction?: string
) => number;
export type IsColumnEditable = boolean | ((...args: any[]) => boolean);
/*
 * Default filter-function used in the filter by columns
 *
 * @param {string} cellValue value in the table cell
 * @param {string} filterString needed substring
 * @return boolean
 */
export const defaultFilter: ColumnCustomFilterFn = (
  cellValue: string,
  filterString: string
): boolean => cellValue.includes(filterString);

export interface ModelsTableColumnOptions {
  /**
   * Key of {@link Core.ModelsTableDataItem} used as title, filter and sort fields by default.
   *
   * Key for filtering can be overridden with {@link filteredBy}. Key for sorting can be overridden with {@link sortedBy}.
   *
   * Column title can be overridden with {@link title}.
   */
  propertyName?: keyof ModelsTableDataItem;
  /**
   * Shown instead of {@link propertyName} as a column name
   */
  title?: string;
  /**
   * Component-name that is rendered in the cell (NOT IN the edit-mode).
   * This name must be a key in the {@link Core.ModelsTableArgs.columnComponents | ModelsTableArgs.columnComponents}.
   */
  component?: string;
  /**
   * Component-name that is rendered in the cell (IN the edit-mode).
   * This name must be a key in the {@link Core.ModelsTableArgs.columnComponents | ModelsTableArgs.columnComponents}.
   */
  componentForEdit?: string;
  /**
   * Boolean or callback that determines if column is editable.
   *
   * `false` means that `componentForEdit` won't be rendered on row-edit.
   */
  editable?: IsColumnEditable;
  /**
   * Component-name that is rendered in the `thead` for this column (second row with filters by default).
   * This name must be a key in the {@link Core.ModelsTableArgs.columnComponents | ModelsTableArgs.columnComponents}.
   */
  componentForFilterCell?: string;
  /**
   * Component-name that is rendered in the `thead` for this column (first row with clickable column titles by default).
   * This name must be a key in the {@link Core.ModelsTableArgs.columnComponents | ModelsTableArgs.columnComponents}.
   */
  componentForSortCell?: string;
  /**
   * Component-name that is rendered in the `tfoot` for this column.
   * This name must be a key in the {@link Core.ModelsTableArgs.columnComponents | ModelsTableArgs.columnComponents}.
   */
  componentForFooterCell?: string;
  /**
   * Custom colspan for cell with column's title
   */
  colspanForSortCell?: number;
  /**
   * Custom colspan for cell with column's filter
   */
  colspanForFilterCell?: number;
  /**
   * One of the row's properties used to sort column.
   *
   * {@link propertyName} won't be used if `sortedBy` is provided
   */
  sortedBy?: string;
  sortDirection?: SortConstants;
  sortPrecedence?: number;
  /**
   * Is sorting disabled for column
   *
   * @default false
   */
  disableSorting?: boolean;
  /**
   * Is filtering disabled for column
   *
   * @default false
   */
  disableFiltering?: boolean;
  filterString?: string;
  /**
   * One of the row's properties used to filter column.
   *
   * {@link propertyName} won't be used if `filteredBy` is provided
   */
  filteredBy?: string;
  sorting?: SortConstants;
  /**
   * Is column hidden initially
   *
   * @default false
   */
  isHidden?: boolean;
  /**
   * Determines if column may be hidden
   *
   * @default true
   */
  mayBeHidden?: boolean;
  /**
   * Determines what filter should be used - input or select
   *
   * * `true` - for select
   * * `false` - for input
   *
   * @default false
   */
  filterWithSelect?: boolean;
  /**
   * Should filter options for `select` be sorted initially
   *
   * @default false
   */
  sortFilterOptions?: boolean;
  className?: string;
  /**
   * Placeholder for filter-input
   */
  filterPlaceholder?: string;
  routeName?: string;
  routeProperty?: string;
  /**
   * Should {@link predefinedFilterOptions} be used as filter options
   */
  usePredefinedFilterOptions?: boolean;
  /**
   * List of predefined filter options for filter-dropdown
   *
   * **IMPORTANT** {@link filterWithSelect} must be set to `true`
   */
  predefinedFilterOptions?: string[] | SelectOption[];
  /**
   * Custom function used when filtering on current column is done
   */
  filterFunction?: ColumnCustomFilterFn;
  /**
   * Custom function used to compare two values when current column is sorted
   */
  sortFunction?: ColumnCustomSortFn;
  [key: string]: any;
}

export const propertyNameToTitle = (name?: string): string | undefined =>
  name && capitalize(dasherize(name).replace(/-/g, ' '));

export const optionStrToObj = (option: string): SelectOption => ({
  value: option,
  label: option,
});

export default class ModelsTableColumn {
  @tracked propertyName?: keyof ModelsTableDataItem = '';
  @tracked title?: string;
  @tracked simple = false;
  @tracked component = '';
  @tracked componentForEdit = '';
  @tracked editable: IsColumnEditable = true;
  @tracked componentForFilterCell = '';
  @tracked componentForSortCell = '';
  @tracked componentForFooterCell = '';
  @tracked colspanForSortCell = 1;
  @tracked realColspanForSortCell = 1;
  @tracked colspanForFilterCell = 1;
  @tracked realColspanForFilterCell = 1;
  @tracked sortedBy?: string;
  @tracked sortDirection?: SortConstants = SortConstants.none;
  @tracked sortPrecedence?: number;
  @tracked disableSorting = false;
  @tracked disableFiltering = false;
  @tracked filterString = '';
  @tracked filteredBy?: keyof ModelsTableDataItem;
  @tracked sorting?: SortConstants = SortConstants.none;
  @tracked isHidden = false;
  @tracked mayBeHidden = true;
  @tracked filterWithSelect = false;
  @tracked sortFilterOptions = false;
  @tracked className = '';
  @tracked filterPlaceholder = '';
  @tracked routeName = '';
  @tracked routeProperty = 'id';
  @tracked usePredefinedFilterOptions = false;
  @tracked predefinedFilterOptions?: string[] | SelectOption[];
  @tracked filterFunction?: ColumnCustomFilterFn;
  @tracked sortFunction?: ColumnCustomSortFn;
  @tracked originalDefinition: ModelsTableColumnOptions;
  @tracked data: TrackedArray = new TrackedArray([]);
  @tracked defaultVisible: boolean;

  get columnTitle(): string | undefined {
    return this.title || propertyNameToTitle(this.filterField);
  }

  get cssPropertyName(): string {
    return this.propertyName ? this.propertyName.replace(/\./g, '-') : '';
  }

  get isVisible(): boolean {
    return !this.isHidden;
  }

  get sortAsc(): boolean {
    return this.sorting === SortConstants.asc;
  }

  get sortDesc(): boolean {
    return this.sorting === SortConstants.desc;
  }

  get filterUsed(): boolean {
    return !!this.filterString;
  }

  get useSorting(): boolean {
    return !!this.sortField && !this.disableSorting;
  }

  get sortField(): keyof ModelsTableDataItem | undefined {
    return this.sortedBy || this.propertyName;
  }

  get useFilter(): boolean {
    const useFilter = !!this.filterField && !this.disableFiltering;
    if (this.filterWithSelect) {
      return this.usePredefinedFilterOptions
        ? !!this.mappedPredefinedFilterOptions
        : useFilter;
    }
    return useFilter;
  }

  get filterField(): keyof ModelsTableDataItem | undefined {
    return this.filteredBy || this.propertyName;
  }

  get mappedPredefinedFilterOptions(): SelectOption[] | null {
    if (this.filterWithSelect && this.filterField && !this.disableFiltering) {
      const predefinedFilterOptions: any[] = isArray(
        this.predefinedFilterOptions
      )
        ? this.predefinedFilterOptions
        : [];
      const usePredefinedFilterOptions = isArray(predefinedFilterOptions);
      if (usePredefinedFilterOptions && predefinedFilterOptions.length) {
        const allOptionsAreObjects = predefinedFilterOptions.every(
          (option) =>
            typeof option === 'object' &&
            hasOwnProperty.call(option, 'label') &&
            hasOwnProperty.call(option, 'value')
        );
        const allOptionsArePrimitives = predefinedFilterOptions.every(
          (option) => typeof option !== 'object'
        );
        assert(
          '`predefinedFilterOptions` should be an array of objects or primitives and not mixed',
          allOptionsAreObjects || allOptionsArePrimitives
        );
        let mappedPredefinedFilterOptions: SelectOption[];
        if (allOptionsArePrimitives) {
          mappedPredefinedFilterOptions = predefinedFilterOptions.map(
            (opt: string | SelectOption) =>
              typeof opt === 'object' ? opt : optionStrToObj(opt)
          );
        } else {
          mappedPredefinedFilterOptions =
            predefinedFilterOptions as SelectOption[];
        }
        if (
          isArray(mappedPredefinedFilterOptions) &&
          '' !== mappedPredefinedFilterOptions[0]?.value
        ) {
          mappedPredefinedFilterOptions = [
            { value: '', label: this.filterPlaceholder ?? '' },
            ...mappedPredefinedFilterOptions,
          ];
        }
        return usePredefinedFilterOptions
          ? mappedPredefinedFilterOptions || []
          : [];
      }
    }
    return null;
  }

  get filterOptions(): SelectOption[] | null {
    if (!this.filterField) {
      return null;
    }
    if (this.usePredefinedFilterOptions) {
      return this.mappedPredefinedFilterOptions
        ? this.mappedPredefinedFilterOptions
        : null;
    }
    if (
      this.filterWithSelect &&
      'array' !== typeOf(this.mappedPredefinedFilterOptions)
    ) {
      const _data = new TrackedArray(this.data.filter((d) => !!d));
      let options = new TrackedArray(
        _data.map((d) => get(d, this.filterField || '') as any)
      ).filter((opt) => !isNone(opt));
      if (this.sortFilterOptions) {
        options = options.sort();
      }
      const filterOptions = new TrackedArray<SelectOption>(
        new TrackedArray(['', ...options])
          .filter((value, index, arr) => arr.indexOf(value) === index)
          .map(optionStrToObj)
      );
      if (
        this.filterPlaceholder &&
        filterOptions[0] &&
        !filterOptions[0].label
      ) {
        filterOptions[0].label = this.filterPlaceholder;
      }
      return filterOptions;
    }
    return null;
  }

  constructor(options: ModelsTableColumnOptions) {
    for (const k in options) {
      if (hasOwnProperty.call(options, k)) {
        this[k as keyof this] = options[k];
      }
    }
    this.defaultVisible = !this.isHidden;
    this.originalDefinition = options;
  }
}
