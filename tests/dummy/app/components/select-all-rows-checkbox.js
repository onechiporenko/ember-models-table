import Component from '@ember/component';
import {get} from '@ember/object';
import layout from '../templates/components/select-all-rows-checkbox';

export default Component.extend({
  layout,
  actions: {
    toggleAllSelection() {
      get(this, 'toggleAllSelection')();
    }
  }
});
