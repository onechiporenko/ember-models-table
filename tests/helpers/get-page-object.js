import ModelsTableBs3 from 'ember-models-table/test-support/pages/models-table-bs';
import ModelsTableBs4 from 'ember-models-table/test-support/pages/models-table-bs4';
import ModelsTableBs5 from 'ember-models-table/test-support/pages/models-table-bs5';
import ModelsTablePlainHtml from 'ember-models-table/test-support/pages/models-table-plain-html';

export default (testContext) => {
  const uiFramework = testContext.owner.application.uiFramework;
  return (
    {
      bs4: ModelsTableBs4,
      bs5: ModelsTableBs5,
      'plain-html': ModelsTablePlainHtml,
    }[uiFramework] || ModelsTableBs3
  );
};
