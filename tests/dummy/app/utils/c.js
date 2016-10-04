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

const {
  A,
  Object: O
} = Ember;

export default function generateContent (recordsCount) {
  var ret = A([]);
  for (let i = 0; i < recordsCount; i++) {
    let indx = i % 30;
    ret.push(O.create({
      id: i + 1,
      firstName: names[indx],
      lastName: surnames[indx],
      age: Math.floor(Math.random() * (50 - 18)) + 18,
      city: cities[indx],
      cityWithHtml: `<i>${cities[indx]}</i>`
    }));
  }
  return ret;
}