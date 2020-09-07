import {Factory} from 'ember-cli-mirage';
import faker from 'faker';

const {date, lorem} = faker;

export default Factory.extend({

  date() {
    return date.past();
  },

  text() {
    return lorem.sentence();
  }

});
