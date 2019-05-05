import {get} from '@ember/object';
import ModelsTableBs3 from '../pages/models-table-bs';
import ModelsTableEmberBs3 from '../pages/models-table-ebs3';
import ModelsTableBs4 from '../pages/models-table-bs4';
import ModelsTableSemanticUi from '../pages/models-table-semanticui';

export default testContext => {
  const uiFramework = get(testContext, 'owner.application.uiFramework') || 'bs3';
  return {
      bs3: ModelsTableEmberBs3,
      bs4: ModelsTableBs4,
      'semantic-ui': ModelsTableSemanticUi
    }[uiFramework] || ModelsTableBs3;
}
