import ModelsTableBs3 from 'ember-models-table/test-support/pages/models-table-bs';
import ModelsTableBs4 from 'ember-models-table/test-support/pages/models-table-bs4';
import ModelsTablePaper from 'ember-models-table/test-support/pages/models-table-paper';
import ModelsTablePlainHtml from 'ember-models-table/test-support/pages/models-table-plain-html';

export default (testContext) => {
  const uiFramework = testContext.owner.application.uiFramework;
  return (
    {
      bs4: ModelsTableBs4,
      paper: ModelsTablePaper,
      'plain-html': ModelsTablePlainHtml,
    }[uiFramework] || ModelsTableBs3
  );
};
