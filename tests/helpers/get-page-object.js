import {get} from '@ember/object';
import ModelsTableBs3 from 'ember-models-table/test-support/pages/models-table-bs';
import ModelsTableEmberBs3 from 'ember-models-table/test-support/pages/models-table-ebs3';
import ModelsTableBs4 from 'ember-models-table/test-support/pages/models-table-bs4';
import ModelsTableSemanticUi from 'ember-models-table/test-support/pages/models-table-semanticui';
import ModelsTablePaper from 'ember-models-table/test-support/pages/models-table-paper';

export default testContext => {
  const uiFramework = get(testContext, 'owner.application.uiFramework');
  return {
      bs3: ModelsTableEmberBs3,
      bs4: ModelsTableBs4,
      'semantic-ui': ModelsTableSemanticUi,
      paper: ModelsTablePaper
    }[uiFramework] || ModelsTableBs3;
}
