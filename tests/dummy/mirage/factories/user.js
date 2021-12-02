import { Factory } from 'ember-cli-mirage';
import faker from 'faker';
const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
const { name, random, address, datatype } = faker;

export default Factory.extend({
  index(i) {
    return i + 1;
  },

  'first-name'(i) {
    return `${name.firstName()}_${i + 1}`;
  },

  'last-name'(i) {
    return `${name.lastName()}_${i + 1}`;
  },

  age() {
    return 11 + datatype.number(42);
  },

  city() {
    return address.city();
  },

  country() {
    return random.arrayElement(
      faker.definitions.address.country.filter((c) => c[0] === 'B')
    );
  },

  afterCreate(user, server) {
    server.createList('comment', getRandomInt(1, 3), { author: user });
  },
});
