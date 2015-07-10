import Ember from 'ember';

var names = ("Ingeborg Jim Rigoberto Ian Wei Otilia Wendell Chasity " +
"Billi Chester Omer Paulene Hiram Laurice Deneen Chuck Petrina Lamonica " +
"Roy Ai Marsha Kiana Tamar Fabiola Travis Mazie Dawna Fe Tommye Jene").split(' ');

var surnames = ("Brown Smith Patel Jones Williams Johnson Taylor Thomas " +
"Roberts Khan Lewis Jackson Clarke James Phillips Wilson Ali Mason " +
"Mitchell Rose Davis Davies Rodríguez Cox Alexander " +
"Stewart Quinn Robinson Murphy Graham").split(' ');

var cities = ["Shanghai", "Karachi", "Beijing", "Tianjin", "Istanbul", "Lagos",
  "Guangzhou", "Mumbai", "Moscow", "Dhaka", "Cairo", "São Paulo",
  "Lahore", "Shenzhen", "Seoul", "Jakarta", "Kinshasa", "Tokyo", "Mexico City",
  "Lima", "New York City", "Bengaluru", "London", "Bangkok", "Dongguan",
  "Nanjing", "Tehran", "Shenyang", "Ahmedabad", "Bogotá"];

var generateContent = function (recordsCount) {
  var ret = Ember.A([]);
  for (let i = 0; i < recordsCount; i++) {
    ret.push(Ember.Object.create({
      id: i + 1,
      firstName: names[Math.floor(Math.random() * names.length)],
      firstName2: names[Math.floor(Math.random() * names.length)],
      firstName3: names[Math.floor(Math.random() * names.length)],
      firstName4: names[Math.floor(Math.random() * names.length)],
      lastName: surnames[Math.floor(Math.random() * surnames.length)],
      lastName2: surnames[Math.floor(Math.random() * surnames.length)],
      lastName3: surnames[Math.floor(Math.random() * surnames.length)],
      lastName4: surnames[Math.floor(Math.random() * surnames.length)],
      age: Math.floor(Math.random() * (50 - 18)) + 18,
      city: cities[Math.floor(Math.random() * cities.length)]
    }));
  }
  return ret;
};

export default Ember.Controller.extend({

  example1: {
    title: 'Big table',
    content: generateContent(10000),
    columns: Ember.A([
      Ember.Object.create({
        propertyName: 'id',
        title: 'ID'
      }),
      Ember.Object.create({
        propertyName: 'firstName',
        title: 'First Name'
      }),
      Ember.Object.create({
        propertyName: 'firstName2',
        title: 'First Name 2'
      }),
      Ember.Object.create({
        propertyName: 'firstName3',
        title: 'First Name 3'
      }),
      Ember.Object.create({
        propertyName: 'firstName4',
        title: 'First Name 4'
      }),
      Ember.Object.create({
        propertyName: 'lastName',
        title: 'Last Name'
      }),
      Ember.Object.create({
        propertyName: 'lastName2',
        title: 'Last Name 2'
      }),
      Ember.Object.create({
        propertyName: 'lastName3',
        title: 'Last Name 3'
      }),
      Ember.Object.create({
        propertyName: 'lastName4',
        title: 'Last Name 4'
      }),
      Ember.Object.create({
        propertyName: 'city',
        title: 'City'
      })
    ])
  }

});