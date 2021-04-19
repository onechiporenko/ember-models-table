import Model, { attr } from '@ember-data/model';
import { A } from '@ember/array';
import { typeOf } from '@ember/utils';
import { assert } from '@ember/debug';
import { propertyNameToTitle } from '../utils/emt/column';

function optionStrToObj(option) {
  return { value: option, label: option };
}

export default class EmtColumnModel extends Model {
  @attr('string', { defaultValue: '' }) propertyName;
  @attr('string') title;
  @attr('boolean', { defaultValue: false }) simple;
  @attr('string', { defaultValue: '' }) component;
  @attr('string', { defaultValue: '' }) componentForEdit;
  @attr('boolean', { defaultValue: false }) editable;
  @attr('string', { defaultValue: '' }) componentForFilterCell;
  @attr('string', { defaultValue: '' }) componentForSortCell;
  @attr('string', { defaultValue: '' }) componentForFooterCell;
  @attr('number', { defaultValue: 1 }) colspanForSortCell;
  @attr('number', { defaultValue: 1 }) realColspanForSortCell;
  @attr('number', { defaultValue: 1 }) colspanForFilterCell;
  @attr('number', { defaultValue: 1 }) realColspanForFilterCell;
  @attr('string') sortedBy;
  @attr('string', { defaultValue: '' }) sortDirection;
  @attr('number') sortPrecedence;
  @attr('boolean', { defaultValue: false }) disableSorting;
  @attr('boolean', { defaultValue: false }) disableFiltering;
  @attr('string', { defaultValue: '' }) filterString;
  @attr('string') filteredBy;
  @attr('string', { defaultValue: '' }) sorting;
  @attr('boolean', { defaultValue: false }) isHidden;
  @attr('boolean', { defaultValue: true }) mayBeHidden;
  @attr('boolean', { defaultValue: false }) filterWithSelect;
  @attr('boolean', { defaultValue: false }) sortFilterOptions;
  @attr('string', { defaultValue: '' }) className;
  @attr('string', { defaultValue: '' }) filterPlaceholder;
  @attr('string', { defaultValue: '' }) routeName;
  @attr('string', { defaultValue: 'id' }) routeProperty;
  @attr('boolean', { defaultValue: false }) usePredefinedFilterOptions;
  @attr predefinedFilterOptions;
  @attr filterFunction;
  @attr sortFunction;
  @attr originalDefinition;
  @attr data;
  @attr('boolean', {
    defaultValue() {
      return !this.isHidden;
    },
  })
  defaultVisible;

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
            { value: '', label: '' },
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
      return A(
        A(['', ...options])
          .uniq()
          .map(optionStrToObj)
      );
    }
    return null;
  }
}
