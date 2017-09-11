import { Factory, faker } from 'ember-cli-mirage';

const {name, random, address} = faker;

export default Factory.extend({

  index(i) {
    return i + 1;
  },

  'first-name'() {
    return name.firstName();
  },

  'last-name'() {
    return name.lastName();
  },

  age() {
    return 18 + random.number(42);
  },

  city() {
    return address.city();
  }

});
