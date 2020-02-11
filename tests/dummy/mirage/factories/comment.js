import {Factory, faker} from 'ember-cli-mirage';

const {date, lorem} = faker;

export default Factory.extend({

  date() {
    return date.past();
  },

  text() {
    return lorem.sentence();
  }

});
