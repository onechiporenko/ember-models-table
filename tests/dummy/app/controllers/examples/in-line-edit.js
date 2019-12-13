import Controller from '@ember/controller';
import {action, computed} from '@ember/object';
import {inject as service} from '@ember/service';

export default class InLineEditController extends Controller {

  @service() fw;

  @computed('fw.{isBs3,isBs4,isPaper,isSemanticUI}')
  get cellEditToggleComponent() {
    if (this.fw.isPaper) {
      return 'models-table/themes/ember-paper/cell-edit-toggle';
    }
    return 'models-table/cell-edit-toggle';
  }

  @action
  onSaveRow(param) {
    return param.record.save();
  }

  @action
  onCancelRow({record}) {
    record.rollbackAttributes();
    return true;
  }
}
