import Ember from 'ember';

function generateContent(length) {
  var startFrom = arguments.length > 1 ? arguments[1] : 0;
  var ret = Ember.A([]);
  for (let i = startFrom; i < startFrom + length; i++) {
    ret.pushObject({
      index: i,
      reversedIndex: startFrom + length - i,
      indexWithHtml: `<i>${i}</i>`
    });
  }
  return ret;
}

function generateColumns(columnNames) {
  return Ember.A(Ember.A(columnNames).map(columnName => {return Ember.Object.create({title: columnName, propertyName: columnName});}));
}

export { generateContent, generateColumns };