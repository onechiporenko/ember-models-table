import faker from '@faker-js/faker';

const firstNames = faker.definitions.name.first_name.slice(0, 10).sort();
const lastNames = faker.definitions.name.last_name.slice(0, 10).sort();

const { random, datatype } = faker;

// from http://stackoverflow.com/questions/14766951/convert-digits-into-words-with-javascript
function numberToWord(n) {
  var a = [
    '',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];
  var b = [
    '',
    '',
    'twenty',
    'thirty',
    'fourty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];
  var g = [
    '',
    'thousand',
    'million',
    'billion',
    'trillion',
    'quadrillion',
    'quintillion',
    'sextillion',
    'septillion',
    'octillion',
    'nonillion',
  ];
  var grp = function grp(n) {
    return ('000' + n).substr(-3);
  };
  var rem = function rem(n) {
    return n.substr(0, n.length - 3);
  };
  var fmt = function fmt(_ref) {
    var h = _ref[0];
    var t = _ref[1];
    var o = _ref[2];

    return [
      Number(h) === 0 ? '' : a[h] + ' hundred ',
      Number(o) === 0 ? b[t] : (b[t] && b[t] + '-') || '',
      a[t + o] || a[o],
    ].join('');
  };
  var cons = function cons(xs) {
    return function (x) {
      return function (g) {
        return x ? [x, (g && ' ' + g) || '', ' ', xs].join('') : xs;
      };
    };
  };
  var iter = function iter(str) {
    return function (i) {
      return function (x) {
        return function (r) {
          if (x === '000' && r.length === 0) {
            return str;
          }
          return iter(cons(str)(fmt(x))(g[i]))(i + 1)(grp(r))(rem(r));
        };
      };
    };
  };
  return iter('')(0)(grp(String(n)))(rem(String(n))).trim();
}

function generateContent(length) {
  const startFrom = arguments.length > 1 ? arguments[1] : 0;
  const ret = [];
  for (let i = startFrom; i < startFrom + length; i++) {
    ret.push({
      index: i,
      nested: {
        index: i,
      },
      index2: Math.round(i / 2),
      reversedIndex: startFrom + length - i,
      indexWithHtml: `<i>${i}</i>`,
      someWord: numberToWord(i),
      id: i,
      firstName: random.arrayElement(firstNames.slice(0, -2)),
      lastName: random.arrayElement(lastNames.slice(0, -2)),
      age: 11 + datatype.number(42),
      rand: !!(i % 2),
    });
  }
  ret[0].firstName = firstNames[0];
  return ret;
}

function generateColumns(columnNames) {
  return columnNames.map((columnName) => ({
    title: columnName,
    propertyName: columnName,
  }));
}

export { generateContent, generateColumns, firstNames, lastNames };
