export interface DisplaySettingsColumnStateSnapshot {
  /**
   * Current column filter value
   */
  filterString?: string;
  /**
   * Current column property name used to filter by this column
   */
  filterField?: string;
  /**
   * Current column property name used to sort by this column
   */
  sortField?: string;
  /**
   * Current sorting order for this column
   */
  sorting?: string;
  /**
   * Current column property name
   */
  propertyName?: string;
}
