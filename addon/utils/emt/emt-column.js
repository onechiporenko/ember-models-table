import { tracked } from '@glimmer/tracking';
import { A } from '@ember/array';
import { typeOf } from '@ember/utils';
import { assert } from '@ember/debug';
import { capitalize, dasherize } from '@ember/string';

const hasOwnProperty = Object.prototype.hasOwnProperty;

export const propertyNameToTitle = (name) =>
  capitalize(dasherize(name).replace(/-/g, ' '));

export const optionStrToObj = (option) => ({ value: option, label: option });

export default class ModelsTableColumn {
  @tracked propertyName = '';
  @tracked title;
  @tracked simple = false;
  @tracked component = '';
  @tracked componentForEdit = '';
  @tracked editable = true;
  @tracked componentForFilterCell = '';
  @tracked componentForSortCell = '';
  @tracked componentForFooterCell = '';
  @tracked colspanForSortCell = 1;
  @tracked realColspanForSortCell = 1;
  @tracked colspanForFilterCell = 1;
  @tracked realColspanForFilterCell = 1;
  @tracked sortedBy;
  @tracked sortDirection = '';
  @tracked sortPrecedence;
  @tracked disableSorting = false;
  @tracked disableFiltering = false;
  @tracked filterString = '';
  @tracked filteredBy;
  @tracked sorting = '';
  @tracked isHidden = false;
  @tracked mayBeHidden = true;
  @tracked filterWithSelect = false;
  @tracked sortFilterOptions = false;
  @tracked className = '';
  @tracked filterPlaceholder = '';
  @tracked routeName = '';
  @tracked routeProperty = 'id';
  @tracked usePredefinedFilterOptions = false;
  @tracked predefinedFilterOptions;
  @tracked filterFunction;
  @tracked sortFunction;
  @tracked originalDefinition;
  @tracked data;
  @tracked defaultVisible;

  get columnTitle() {
    return this.title || propertyNameToTitle(this.filterField);
  }

  get cssPropertyName() {
    return this.propertyName.replace(/\./g, '-');
  }

  get isVisible() {
    return !this.isHidden;
  }

  get sortAsc() {
    return this.sorting === 'asc';
  }

  get sortDesc() {
    return this.sorting === 'desc';
  }

  get filterUsed() {
    return !!this.filterString;
  }

  get useSorting() {
    return this.sortField && !this.disableSorting;
  }

  get sortField() {
    return this.sortedBy || this.propertyName;
  }

  get useFilter() {
    const useFilter = this.filterField && !this.disableFiltering;
    if (this.filterWithSelect) {
      return this.usePredefinedFilterOptions
        ? !!this.mappedPredefinedFilterOptions
        : useFilter;
    }
    return useFilter;
  }

  get filterField() {
    return this.filteredBy || this.propertyName;
  }

  get mappedPredefinedFilterOptions() {
    if (this.filterWithSelect && this.filterField && !this.disableFiltering) {
      let predefinedFilterOptions = this.predefinedFilterOptions;
      let usePredefinedFilterOptions =
        'array' === typeOf(predefinedFilterOptions);
      if (usePredefinedFilterOptions && predefinedFilterOptions.length) {
        const types = A(['object', 'instance']);
        const allObjects = A(predefinedFilterOptions).every(
          (option) =>
            types.includes(typeOf(option)) &&
            hasOwnProperty.call(option, 'label') &&
            hasOwnProperty.call(option, 'value')
        );
        const allPrimitives = A(predefinedFilterOptions).every(
          (option) => !types.includes(typeOf(option))
        );
        assert(
          '`predefinedFilterOptions` should be an array of objects or primitives and not mixed',
          allObjects || allPrimitives
        );
        if (allPrimitives) {
          predefinedFilterOptions = predefinedFilterOptions.map(optionStrToObj);
        }
        if ('' !== predefinedFilterOptions[0].value) {
          predefinedFilterOptions = [
            { value: '', label: this.filterPlaceholder ?? '' },
            ...predefinedFilterOptions,
          ];
        }
        return usePredefinedFilterOptions ? A(predefinedFilterOptions) : [];
      }
    }
    return null;
  }

  get filterOptions() {
    if (!this.filterField) {
      return null;
    }
    if (this.usePredefinedFilterOptions) {
      return this.mappedPredefinedFilterOptions
        ? A(this.mappedPredefinedFilterOptions)
        : null;
    }
    if (
      this.filterWithSelect &&
      'array' !== typeOf(this.mappedPredefinedFilterOptions)
    ) {
      const _data = A(A(this.data).compact());
      let options = A(_data.mapBy(this.filterField)).compact();
      if (this.sortFilterOptions) {
        options = options.sort();
      }
      const filterOptions = A(
        A(['', ...options])
          .uniq()
          .map(optionStrToObj)
      );
      if (this.filterPlaceholder && !filterOptions[0].label) {
        filterOptions[0].label = this.filterPlaceholder;
      }
      return filterOptions;
    }
    return null;
  }

  constructor(options) {
    for (let k in options) {
      if (hasOwnProperty.call(options, k)) {
        this[k] = options[k];
      }
    }
    this.defaultVisible = !this.isHidden;
  }
}
