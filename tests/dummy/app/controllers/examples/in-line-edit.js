import Controller from '@ember/controller';
import {action} from '@ember/object';

export default class InLineEditController extends Controller {

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