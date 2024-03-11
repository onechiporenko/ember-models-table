import { Factory } from 'miragejs';
import { faker } from '@faker-js/faker';
const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
const { person, helpers, location, number } = faker;

export default Factory.extend({
  index(i) {
    return i + 1;
  },

  'first-name'(i) {
    return `${person.firstName()}_${i + 1}`;
  },

  'last-name'(i) {
    return `${person.lastName()}_${i + 1}`;
  },

  age() {
    return 11 + number.int(42);
  },

  city() {
    return location.city();
  },

  country() {
    return helpers.arrayElement(
      faker.definitions.location.country.filter((c) => c[0] === 'B'),
    );
  },

  afterCreate(user, server) {
    server.createList('comment', getRandomInt(1, 3), { author: user });
  },
});
