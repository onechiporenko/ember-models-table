import { faker } from '@faker-js/faker';
import { Factory } from 'miragejs';

const { date, lorem } = faker;

export default Factory.extend({
  date() {
    return date.past();
  },

  text() {
    return lorem.sentence();
  },
});
