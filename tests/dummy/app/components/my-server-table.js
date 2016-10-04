import ServerModelsTable from 'ember-models-table/components/models-table-server-paginated';

export default ServerModelsTable.extend({

  filterQueryParameters: {
    globalFilter: 'globalSearch',
    sort: 'sort',
    sortDirection: 'sortDirection',
    page: 'page',
    pageSize: 'pageSize'
  }

});
