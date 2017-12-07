import Controller from '@ember/controller';
import EmberObject from '@ember/object';
import { A } from '@ember/array';

var names = ('Ingeborg Jim Rigoberto Ian Wei Otilia Wendell Chasity ' +
'Billi Chester Omer Paulene Hiram Laurice Deneen Chuck Petrina Lamonica ' +
'Roy Ai Marsha Kiana Tamar Fabiola Travis Mazie Dawna Fe Tommye Jene').split(' ');

var surnames = ('Brown Smith Patel Jones Williams Johnson Taylor Thomas ' +
'Roberts Khan Lewis Jackson Clarke James Phillips Wilson Ali Mason ' +
'Mitchell Rose Davis Davies Rodríguez Cox Alexander ' +
'Stewart Quinn Robinson Murphy Graham').split(' ');

var cities = ['Shanghai', 'Karachi', 'Beijing', 'Tianjin', 'Istanbul', 'Lagos',
  'Guangzhou', 'Mumbai', 'Moscow', 'Dhaka', 'Cairo', 'São Paulo',
  'Lahore', 'Shenzhen', 'Seoul', 'Jakarta', 'Kinshasa', 'Tokyo', 'Mexico City',
  'Lima', 'New York City', 'Bengaluru', 'London', 'Bangkok', 'Dongguan',
  'Nanjing', 'Tehran', 'Shenyang', 'Ahmedabad', 'Bogotá'];

var generateContent = function (recordsCount) {
  var ret = A([]);
  for (let i = 0; i < recordsCount; i++) {
    ret.push(EmberObject.create({
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

export default Controller.extend({

  example1: {
    title: 'Big table',
    content: generateContent(10000),
    columns: A([
      EmberObject.create({
        propertyName: 'id',
        title: 'ID'
      }),
      EmberObject.create({
        propertyName: 'firstName',
        title: 'First Name'
      }),
      EmberObject.create({
        propertyName: 'firstName2',
        title: 'First Name 2'
      }),
      EmberObject.create({
        propertyName: 'firstName3',
        title: 'First Name 3'
      }),
      EmberObject.create({
        propertyName: 'firstName4',
        title: 'First Name 4'
      }),
      EmberObject.create({
        propertyName: 'lastName',
        title: 'Last Name'
      }),
      EmberObject.create({
        propertyName: 'lastName2',
        title: 'Last Name 2'
      }),
      EmberObject.create({
        propertyName: 'lastName3',
        title: 'Last Name 3'
      }),
      EmberObject.create({
        propertyName: 'lastName4',
        title: 'Last Name 4'
      }),
      EmberObject.create({
        propertyName: 'city',
        title: 'City'
      })
    ])
  }

});