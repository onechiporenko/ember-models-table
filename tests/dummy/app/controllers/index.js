import Ember from 'ember';
import ModelsTable from '../components/models-table';

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

const O = Ember.Object;

const {
  A,
  set,
  get
} = Ember;

var generateContent = function (recordsCount) {
  var ret = A([]);
  for (let i = 0; i < recordsCount; i++) {
    ret.push(O.create({
      id: i + 1,
      firstName: names[i],
      lastName: surnames[i],
      age: Math.floor(Math.random() * (50 - 18)) + 18,
      city: cities[i],
      cityWithHtml: `<i>${cities[i]}</i>`
    }));
  }
  return ret;
};

export default Ember.Controller.extend({

  c: ModelsTable.create(),

  example1: {
    title: 'Common table',
    content: generateContent(10),
    columns: A([
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
    ])
  },

  example2: {
    title: 'Table without footer',
    content: generateContent(10),
    columns: A([
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
    ]),
    showTableFooter: false
  },

  example4: {
    title: 'Table with custom sort column',
    message: 'Click on `Last Name` triggers sorting by `First Name`',
    content: generateContent(30),
    columns: A([
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
        sortedBy: 'firstName'
      },
      {
        propertyName: 'city',
        title: 'City'
      }
    ])
  },

  example5: {
    title: 'Table with custom template in the cell',
    content: generateContent(30),
    columns: A([
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
      },
      {
        template: 'custom/fullname',
        title: 'Full name'
      }
    ])
  },

  example6: {
    title: 'Table without `table-bordered table-striped table-condensed` classes',
    content: generateContent(30),
    columns: A([
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
    ])
  },

  example7: {
    title: 'Table with numeric navigation',
    content: A(Array.prototype.concat(generateContent(30), generateContent(30), generateContent(30), generateContent(30))).map((item, index) => {set(item, 'id', index + 1); return item;}),
    columns: A([
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
      },
      {
        template: 'custom/fullname',
        title: 'Full name'
      }
    ])
  },

  example8: {
    title: 'Custom pagination',
    content: generateContent(30),
    columns: A([
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
    ])
  },

  example9: {
    title: 'Custom Actions',
    content: generateContent(30),
    columns: A([
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
      },
      {
        title: 'Delete',
        template: 'custom/delete'
      }
    ])
  },

  example10: {
    title: 'Custom Messages',
    content: generateContent(10),
    columns: A([
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
    ]),
    customMessages: {
      searchLabel: 'Se@rch',
      'columns-title': 'ColumnZ',
      'columns-showAll': 'Show Me All!',
      'columns-hideAll': 'Hide All!',
      'columns-restoreDefaults': 'Restore My Columns',
      tableSummary: 'Now are showing %@ - %@ of %@',
      allColumnsAreHidden: 'No visible columns, dude!',
      noDataToShow: 'No data. Sorry, bro...'
    }
  },

  example11: {
    title: 'Custom Column Classes',
    content: generateContent(10),
    columns: A([
      {
        propertyName: 'id',
        title: 'ID',
        className: 'text-right'
      },
      {
        propertyName: 'firstName',
        title: 'First Name',
        className: 'text-success'
      },
      {
        propertyName: 'lastName',
        title: 'Last Name',
        className: 'text-uppercase'
      },
      {
        propertyName: 'city',
        title: 'City',
        className: 'text-center'
      }
    ])
  },

  example12: {
    title: 'Filtering ignore case',
    content: generateContent(10),
    columns: A([
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
    ])
  },

  example13: {
    title: 'Filtering with select-box',
    content: generateContent(10),
    columns: A([
      {
        propertyName: 'id',
        title: 'ID'
      },
      {
        propertyName: 'firstName',
        title: 'First Name',
        filterWithSelect: true
      },
      {
        propertyName: 'lastName',
        title: 'Last Name',
        filterWithSelect: true,
        predefinedFilterOptions: [
          'Smith',
          'Brown'
        ]
      },
      {
        propertyName: 'city',
        title: 'City'
      }
    ])
  },

  example14: {
    title: 'Add/Remove column',
    description: 'Column "Last Name" is not just shown/hidden. It is removed or added to the columns-array and table detects this changes.',
    content: generateContent(30),
    columns: A([
      {
        propertyName: 'id',
        title: 'ID'
      },
      {
        propertyName: 'firstName',
        title: 'First Name'
      },
      {
        propertyName: 'city',
        title: 'City'
      }
    ]),
    column: {
      propertyName: 'lastName',
      title: 'Last Name'
    },
    columnAdded: false
  },

  actions: {

    toggleColumn () {
      var columnAdded = get(this, 'example14.columnAdded');
      var columns = get(this, 'example14.columns');
      var column = get(this, 'example14.column');
      if(columnAdded) {
        // remove column
        columns = A(columns).filter(c=>c.propertyName !== column.propertyName);
      }
      else {
        // add column
        columns.pushObject(column);
      }
      set(this, 'example14.columns', A(columns));
      set(this, 'example14.columnAdded', !columnAdded);
    },

    deleteRecord (record) {
      var content = this.get('example9.content');
      this.set('example9.content', content.without(record));
    }
  }
});
