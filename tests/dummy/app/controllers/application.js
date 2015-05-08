import Ember from 'ember';

var names = "Ingeborg Jim Rigoberto Ian Wei Otilia Wendell Chasity " +
  "Billi Chester Omer Paulene Hiram Laurice Deneen Chuck Petrina Lamonica " +
  "Roy Ai Marsha Kiana Tamar Fabiola Travis Mazie Dawna Fe Tommye Jene".split(' ');

var surnames = "Brown Smith Patel Jones Williams Johnson Taylor Thomas " +
  "Roberts Khan Lewis Jackson Clarke James Phillips Wilson Ali Mason " +
  "Mitchell Rose Davis Davies Rodríguez Cox Alexander" +
  "Stewart Quinn Robinson Murphy Graham".split(' ');

var cities = ["Shanghai", "Karachi", "Beijing", "Tianjin", "Istanbul", "Lagos",
  "Guangzhou", "Mumbai", "Moscow", "Dhaka", "Cairo", "São Paulo",
  "Lahore", "Shenzhen", "Seoul", "Jakarta", "Kinshasa", "Tokyo", "Mexico City",
  "Lima", "New York City", "Bengaluru", "London", "Bangkok", "Dongguan",
  "Nanjing", "Tehran", "Shenyang", "Ahmedabad", "Bogotá"];

var generateContent = function (recordsCount) {
  var ret = [];
  for (let i = 1; i <= recordsCount; i++) {
    ret.push(Ember.Object.create({
      id: i,
      firstName: names[i],
      lastName: surnames[i],
      age: Math.floor(Math.random() * (50 - 18)) + 18,
      city: cities[i],
      cityWithHtml: '<i>' + cities[i] + '</i>'
    }));
  }
  return ret;
};

export default Ember.Controller.extend({

  example1: {
    title: 'Common table',
    content: generateContent(10),
    columns: [
      {
        propertyName: 'id',
        title: 'ID'
      },
      {
        propertyName: 'firstName',
        title: 'First Name'
      },
      {
        propertyName: 'lastName',
        title: 'Last Name'
      },
      {
        propertyName: 'city',
        title: 'City'
      }
    ]
  },

  example2: {
    title: 'Table without footer',
    content: generateContent(10),
    columns: [
      {
        propertyName: 'id',
        title: 'ID'
      },
      {
        propertyName: 'firstName',
        title: 'First Name'
      },
      {
        propertyName: 'lastName',
        title: 'Last Name'
      },
      {
        propertyName: 'city',
        title: 'City'
      }
    ],
    showTableFooter: false
  },

  example3: {
    title: 'Table with HTML in the cell',
    content: generateContent(30),
    columns: [
      {
        propertyName: 'id',
        title: 'ID'
      },
      {
        propertyName: 'firstName',
        title: 'First Name'
      },
      {
        propertyName: 'lastName',
        title: 'Last Name'
      },
      {
        propertyName: 'cityWithHtml',
        title: 'City',
        isHtml: true
      }
    ]
  },

  example4: {
    title: 'Table with custom sort column',
    message: 'Click on `Last Name` triggers sorting by `First Name`',
    content: generateContent(30),
    columns: [
      {
        propertyName: 'id',
        title: 'ID'
      },
      {
        propertyName: 'firstName',
        title: 'First Name'
      },
      {
        propertyName: 'lastName',
        title: 'Last Name',
        sortBy: 'firstName'
      },
      {
        propertyName: 'city',
        title: 'City'
      }
    ]
  }

});