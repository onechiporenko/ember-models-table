import {get} from '@ember/object';
import ModelsTableBs3 from 'ember-models-table/test-support/pages/models-table-bs';
import ModelsTableEmberBs3 from 'ember-models-table/test-support/pages/models-table-ebs3';
import ModelsTableBs4 from 'ember-models-table/test-support/pages/models-table-bs4';
import ModelsTablePaper from 'ember-models-table/test-support/pages/models-table-paper';
import ModelsTablePlainHtml from 'ember-models-table/test-support/pages/models-table-plain-html';

export default testContext => {
  const uiFramework = get(testContext, 'owner.application.uiFramework');
  return {
      bs3: ModelsTableEmberBs3,
      bs4: ModelsTableBs4,
      paper: ModelsTablePaper,
      'plain-html': ModelsTablePlainHtml
    }[uiFramework] || ModelsTableBs3;
}
