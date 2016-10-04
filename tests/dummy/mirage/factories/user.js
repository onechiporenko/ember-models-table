import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({

  index(i) {
    return i + 1;
  },

  'first-name'() {
    return faker.name.firstName();
  },

  'last-name'() {
    return faker.name.lastName();
  },

  age() {
    return 18 + faker.random.number(42);
  },

  city() {
    return faker.address.city();
  }

});
