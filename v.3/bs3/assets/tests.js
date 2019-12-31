'use strict';

define("dummy/tests/acceptance/models-table-test", ["qunit", "ember-qunit", "ember-cli-mirage/test-support/setup-mirage", "@ember/test-helpers", "ember-a11y-testing/test-support/audit"], function (_qunit, _emberQunit, _setupMirage, _testHelpers, _audit) {
  "use strict";

  let firstUser;
  (0, _qunit.module)('Acceptance | models table', function (hooks) {
    (0, _emberQunit.setupApplicationTest)(hooks);
    (0, _setupMirage.default)(hooks);
    hooks.beforeEach(function () {
      firstUser = server.createList('user', 10)[0];
    });
    hooks.afterEach(function () {
      server.shutdown();
    });
    (0, _qunit.test)('route cells', async function (assert) {
      await (0, _testHelpers.visit)('/examples/route-cells');
      let firstCellLink = (0, _testHelpers.find)('tbody tr td a');
      let secondCellLink = (0, _testHelpers.findAll)('tbody tr td')[1].querySelector('a');
      assert.ok(firstCellLink.href.includes('/users/1'), 'ID. URL is valid');
      assert.equal(firstCellLink.textContent.trim(), '1', 'ID. Link text is valid');
      assert.ok(secondCellLink.href.includes('/users/1'), 'firstName. URL is valid');
      assert.equal(secondCellLink.textContent.trim(), firstUser['first-name'], 'firstName. Link text is valid');
    });
    (0, _qunit.test)('A11y', async function (assert) {
      await (0, _testHelpers.visit)('/examples/common-table');
      await (0, _audit.default)('.models-table-wrapper');
      assert.ok(true, 'no a11y errors found (1)');
      await (0, _testHelpers.visit)('/examples/filtering');
      await (0, _audit.default)('.models-table-wrapper');
      assert.ok(true, 'no a11y errors found (2)');
    });
  });
});
define("dummy/tests/helpers/destroy-app", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = destroyApp;

  function destroyApp(application) {
    Ember.run(application, 'destroy');

    if (window.server) {
      window.server.shutdown();
    }
  }
});
define("dummy/tests/helpers/f", ["exports", "ember-cli-mirage"], function (_exports, _emberCliMirage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.generateContent = generateContent;
  _exports.generateColumns = generateColumns;
  _exports.lastNames = _exports.firstNames = void 0;

  const firstNames = _emberCliMirage.faker.definitions.name.first_name.slice(0, 10).sort();

  _exports.firstNames = firstNames;

  const lastNames = _emberCliMirage.faker.definitions.name.last_name.slice(0, 10).sort();

  _exports.lastNames = lastNames;
  const {
    random
  } = _emberCliMirage.faker; // from http://stackoverflow.com/questions/14766951/convert-digits-into-words-with-javascript

  function numberToWord(n) {
    var a = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    var b = ['', '', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    var g = ['', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion'];

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
      return [Number(h) === 0 ? '' : a[h] + ' hundred ', Number(o) === 0 ? b[t] : b[t] && b[t] + '-' || '', a[t + o] || a[o]].join('');
    };

    var cons = function cons(xs) {
      return function (x) {
        return function (g) {
          return x ? [x, g && ' ' + g || '', ' ', xs].join('') : xs;
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
    const ret = Ember.A([]);

    for (let i = startFrom; i < startFrom + length; i++) {
      ret.pushObject(Ember.Object.create({
        index: i,
        nested: {
          index: i
        },
        index2: Math.round(i / 2),
        reversedIndex: startFrom + length - i,
        indexWithHtml: `<i>${i}</i>`,
        someWord: numberToWord(i),
        id: i,
        firstName: random.arrayElement(firstNames.slice(0, -2)),
        lastName: random.arrayElement(lastNames.slice(0, -2)),
        age: 11 + random.number(42),
        rand: !!(i % 2)
      }));
    }

    return ret;
  }

  function generateColumns(columnNames) {
    return Ember.A(Ember.A(columnNames).map(columnName => {
      return {
        title: columnName,
        propertyName: columnName
      };
    }));
  }
});
define("dummy/tests/helpers/get-page-object", ["exports", "dummy/tests/pages/models-table-bs", "dummy/tests/pages/models-table-bs4", "dummy/tests/pages/models-table-semanticui"], function (_exports, _modelsTableBs, _modelsTableBs2, _modelsTableSemanticui) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = testContext => {
    const uiFramework = Ember.get(testContext, 'owner.application.uiFramework') || 'bs3';
    return {
      bs3: _modelsTableBs.default,
      bs4: _modelsTableBs2.default,
      'semantic-ui': _modelsTableSemanticui.default
    }[uiFramework] || _modelsTableBs.default;
  };

  _exports.default = _default;
});
define("dummy/tests/helpers/get-theme-class", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = testContext => {
    const owner = Ember.get(testContext, 'owner');
    const uiFramework = Ember.get(owner, 'application.uiFramework') || 'bs3';
    const lookup = owner.factoryFor ? 'factoryFor' : '_lookupFactory';
    const bs3 = owner[lookup]('theme:bootstrap3');
    const bs4 = owner[lookup]('theme:bootstrap4');
    const semanticUi = owner[lookup]('theme:semanticui');
    return {
      bs3,
      bs4,
      'semantic-ui': semanticUi
    }[uiFramework] || bs3;
  };

  _exports.default = _default;
});
define("dummy/tests/helpers/module-for-acceptance", ["exports", "qunit", "dummy/tests/helpers/start-app", "dummy/tests/helpers/destroy-app"], function (_exports, _qunit, _startApp, _destroyApp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _default;

  function _default(name, options = {}) {
    (0, _qunit.module)(name, {
      beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach() {
        let afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Ember.RSVP.resolve(afterEach).then(() => (0, _destroyApp.default)(this.application));
      }

    });
  }
});
define("dummy/tests/helpers/resolver", ["exports", "dummy/resolver", "dummy/config/environment"], function (_exports, _resolver, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const resolver = _resolver.default.create();

  resolver.namespace = {
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix
  };
  var _default = resolver;
  _exports.default = _default;
});
define("dummy/tests/helpers/start-app", ["exports", "dummy/app", "dummy/config/environment"], function (_exports, _app, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = startApp;

  function startApp(attrs) {
    let attributes = Ember.assign({}, _environment.default.APP);
    attributes.autoboot = true;
    attributes = Ember.assign(attributes, attrs); // use defaults, but you can override;

    return Ember.run(() => {
      let application = _app.default.create(attributes);

      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define("dummy/tests/integration/components/models-table-server-paginated-test", ["qunit", "ember-qunit", "@ember/test-helpers", "dummy/initializers/ember-cli-mirage", "dummy/tests/helpers/f", "ember-a11y-testing/test-support/audit", "dummy/tests/pages/models-table-bs", "dummy/tests/pages/models-table-bs4", "dummy/tests/pages/models-table-semanticui"], function (_qunit, _emberQunit, _testHelpers, _emberCliMirage, _f, _audit, _modelsTableBs, _modelsTableBs2, _modelsTableSemanticui) {
  "use strict";

  function fromTo(from, to) {
    const ret = [];

    for (let i = from; i <= to; i++) {
      ret.push(`${i}`);
    }

    return ret;
  }

  (0, _qunit.module)('ModelsTableServerPaginated | Integration', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    hooks.beforeEach(function () {
      const uiFramework = Ember.get(this, 'owner.application.uiFramework') || 'bs3';
      this.ModelsTablePageObject = {
        bs3: _modelsTableBs.default,
        bs4: _modelsTableBs2.default,
        'semantic-ui': _modelsTableSemanticui.default
      }[uiFramework] || _modelsTableBs.default;
      this.server = (0, _emberCliMirage.startMirage)();
      this.server.createList('user', 100);
      this.store = this.owner.lookup('service:store');
      this.set('filterQueryParameters', {
        globalFilter: 'globalSearch',
        sort: 'sort',
        sortDirection: 'sortDirection',
        page: 'page',
        pageSize: 'pageSize'
      });
      this.set('columns', (0, _f.generateColumns)(['index', 'firstName', 'lastName']));
      return this.store.query('user', {}).then(d => this.data = d);
    });
    hooks.afterEach(function () {
      this.server.shutdown();
    });
    (0, _qunit.test)('#summary is updated on page change', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table-server-paginated data=data columns=columns filterQueryParameters=filterQueryParameters}}
      */
      {
        id: "K7X4VqNf",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table-server-paginated\",null,[[\"data\",\"columns\",\"filterQueryParameters\"],[[24,[\"data\"]],[24,[\"columns\"]],[24,[\"filterQueryParameters\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.ModelsTablePageObject.summary, 'Show 1 - 10 of 100 Clear all filters', 'Content for 1st page (10)');
      await this.ModelsTablePageObject.navigation.goToNextPage();
      assert.equal(this.ModelsTablePageObject.summary, 'Show 11 - 20 of 100 Clear all filters', 'Content for 2nd page (10)');
    });
    (0, _qunit.test)('#summary is updated on page size change', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table-server-paginated data=data columns=columns filterQueryParameters=filterQueryParameters}}
      */
      {
        id: "K7X4VqNf",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table-server-paginated\",null,[[\"data\",\"columns\",\"filterQueryParameters\"],[[24,[\"data\"]],[24,[\"columns\"]],[24,[\"filterQueryParameters\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      await this.ModelsTablePageObject.changePageSize(25);
      assert.equal(this.ModelsTablePageObject.summary, 'Show 1 - 25 of 100 Clear all filters', 'Content for 1st page (25)');
    });
    (0, _qunit.test)('#summary is updated on global filter usage', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table-server-paginated data=data columns=columns filterQueryParameters=filterQueryParameters}}
      */
      {
        id: "K7X4VqNf",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table-server-paginated\",null,[[\"data\",\"columns\",\"filterQueryParameters\"],[[24,[\"data\"]],[24,[\"columns\"]],[24,[\"filterQueryParameters\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      await this.ModelsTablePageObject.doGlobalFilter('100');
      await (0, _testHelpers.settled)();
      assert.equal(this.ModelsTablePageObject.summary, 'Show 1 - 1 of 1 Clear all filters', 'Content for 1st page (1)');
    });
    (0, _qunit.test)('#summary is updated on column filter usage', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table-server-paginated data=data columns=columns filterQueryParameters=filterQueryParameters}}
      */
      {
        id: "K7X4VqNf",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table-server-paginated\",null,[[\"data\",\"columns\",\"filterQueryParameters\"],[[24,[\"data\"]],[24,[\"columns\"]],[24,[\"filterQueryParameters\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      await this.ModelsTablePageObject.filters.objectAt(0).inputFilter('100');
      await (0, _testHelpers.settled)();
      assert.equal(this.ModelsTablePageObject.summary, 'Show 1 - 1 of 1 Clear all filters', 'Content for 1st page (1)');
    });
    (0, _qunit.test)('#navigation first and prev are disabled by default', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table-server-paginated data=data columns=columns filterQueryParameters=filterQueryParameters}}
      */
      {
        id: "K7X4VqNf",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table-server-paginated\",null,[[\"data\",\"columns\",\"filterQueryParameters\"],[[24,[\"data\"]],[24,[\"columns\"]],[24,[\"filterQueryParameters\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      assert.ok(this.ModelsTablePageObject.navigation.goToPrevPageDisabled);
      assert.ok(this.ModelsTablePageObject.navigation.goToFirstPageDisabled);
    });
    (0, _qunit.test)('#navigation next and last are disabled when user on the last page', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table-server-paginated data=data columns=columns filterQueryParameters=filterQueryParameters}}
      */
      {
        id: "K7X4VqNf",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table-server-paginated\",null,[[\"data\",\"columns\",\"filterQueryParameters\"],[[24,[\"data\"]],[24,[\"columns\"]],[24,[\"filterQueryParameters\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      await this.ModelsTablePageObject.navigation.goToLastPage();
      assert.ok(this.ModelsTablePageObject.navigation.goToNextPageDisabled);
      assert.ok(this.ModelsTablePageObject.navigation.goToLastPageDisabled);
    });
    (0, _qunit.test)('#navigation all buttons are enabled when user not on the last or first page', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table-server-paginated data=data columns=columns filterQueryParameters=filterQueryParameters}}
      */
      {
        id: "K7X4VqNf",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table-server-paginated\",null,[[\"data\",\"columns\",\"filterQueryParameters\"],[[24,[\"data\"]],[24,[\"columns\"]],[24,[\"filterQueryParameters\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      await this.ModelsTablePageObject.navigation.goToNextPage();
      assert.notOk(this.ModelsTablePageObject.navigation.goToNextPageDisabled);
      assert.notOk(this.ModelsTablePageObject.navigation.goToLastPageDisabled);
      assert.notOk(this.ModelsTablePageObject.navigation.goToPrevPageDisabled);
      assert.notOk(this.ModelsTablePageObject.navigation.goToFirstPageDisabled);
    });
    (0, _qunit.test)('#content user may set custom page number to be shown initially', async function (assert) {
      this.set('currentPageNumber', 5);
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table-server-paginated 
            data=data
            columns=columns
            filterQueryParameters=filterQueryParameters
            currentPageNumber=currentPageNumber}}
      */
      {
        id: "q+taCMZ6",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table-server-paginated\",null,[[\"data\",\"columns\",\"filterQueryParameters\",\"currentPageNumber\"],[[24,[\"data\"]],[24,[\"columns\"]],[24,[\"filterQueryParameters\"]],[24,[\"currentPageNumber\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.ModelsTablePageObject.summary, 'Show 41 - 50 of 100 Clear all filters');
    });
    (0, _qunit.test)('#pageSize changes shown rows count', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table-server-paginated data=data columns=columns filterQueryParameters=filterQueryParameters}}
      */
      {
        id: "K7X4VqNf",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table-server-paginated\",null,[[\"data\",\"columns\",\"filterQueryParameters\"],[[24,[\"data\"]],[24,[\"columns\"]],[24,[\"filterQueryParameters\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), fromTo(1, 10));
      await this.ModelsTablePageObject.changePageSize(25);
      await (0, _testHelpers.settled)();
      assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), fromTo(1, 25));
    });
    (0, _qunit.test)('#globalFilter causes data filtering', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table-server-paginated data=data columns=columns filterQueryParameters=filterQueryParameters}}
      */
      {
        id: "K7X4VqNf",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table-server-paginated\",null,[[\"data\",\"columns\",\"filterQueryParameters\"],[[24,[\"data\"]],[24,[\"columns\"]],[24,[\"filterQueryParameters\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      await this.ModelsTablePageObject.doGlobalFilter(10);
      await (0, _testHelpers.settled)();
      assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), ['10', '100']);
    });
    (0, _qunit.test)('#pageSize and #currentPageNumber may be set on component init', async function (assert) {
      this.set('pageSize', 25);
      this.set('currentPageNumber', 2);
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table-server-paginated 
            data=data
            columns=columns
            filterQueryParameters=filterQueryParameters
            pageSize=pageSize
            currentPageNumber=currentPageNumber
          }}
      */
      {
        id: "eWh2P8Fd",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table-server-paginated\",null,[[\"data\",\"columns\",\"filterQueryParameters\",\"pageSize\",\"currentPageNumber\"],[[24,[\"data\"]],[24,[\"columns\"]],[24,[\"filterQueryParameters\"]],[24,[\"pageSize\"]],[24,[\"currentPageNumber\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.ModelsTablePageObject.summary, 'Show 26 - 50 of 100 Clear all filters');
    });
    (0, _qunit.test)('#columnFilter causes data filtering by `propertyName', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table-server-paginated data=data columns=columns filterQueryParameters=filterQueryParameters}}
      */
      {
        id: "K7X4VqNf",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table-server-paginated\",null,[[\"data\",\"columns\",\"filterQueryParameters\"],[[24,[\"data\"]],[24,[\"columns\"]],[24,[\"filterQueryParameters\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      await this.ModelsTablePageObject.filters.objectAt(0).inputFilter(10);
      await (0, _testHelpers.settled)();
      assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), ['10', '100']);
      await this.ModelsTablePageObject.filters.objectAt(1).inputFilter(this.server.db.users[9]['first-name']);
      await (0, _testHelpers.settled)();
      assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), ['10']);
    });
    (0, _qunit.test)('#columnFilter causes data filtering by `filteredBy`', async function (assert) {
      this.set('columns.1.filteredBy', 'index');
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table-server-paginated data=data columns=columns filterQueryParameters=filterQueryParameters}}
      */
      {
        id: "K7X4VqNf",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table-server-paginated\",null,[[\"data\",\"columns\",\"filterQueryParameters\"],[[24,[\"data\"]],[24,[\"columns\"]],[24,[\"filterQueryParameters\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      await this.ModelsTablePageObject.filters.objectAt(1).inputFilter(this.server.db.users[10]['index']);
      await (0, _testHelpers.settled)();
      assert.deepEqual(this.ModelsTablePageObject.getColumnCells(1), [this.server.db.users[10]['first-name']]);
    });
    (0, _qunit.test)('#columnFilter with predefined options causes data filtering by `propertyName`', async function (assert) {
      this.set('columns.firstObject.filterWithSelect', true);
      this.set('columns.firstObject.predefinedFilterOptions', ['10', '20', '30']);
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table-server-paginated data=data columns=columns filterQueryParameters=filterQueryParameters}}
      */
      {
        id: "K7X4VqNf",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table-server-paginated\",null,[[\"data\",\"columns\",\"filterQueryParameters\"],[[24,[\"data\"]],[24,[\"columns\"]],[24,[\"filterQueryParameters\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      await this.ModelsTablePageObject.filters.objectAt(0).selectFilter('10');
      await (0, _testHelpers.settled)();
      assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), ['10', '100']);
    });
    (0, _qunit.test)('#columnFilter with predefined options causes data filtering by `filteredBy`', async function (assert) {
      this.set('columns.1.filterWithSelect', true);
      this.set('columns.1.predefinedFilterOptions', ['10', '20', '30']);
      this.set('columns.1.filteredBy', 'index');
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table-server-paginated data=data columns=columns filterQueryParameters=filterQueryParameters}}
      */
      {
        id: "K7X4VqNf",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table-server-paginated\",null,[[\"data\",\"columns\",\"filterQueryParameters\"],[[24,[\"data\"]],[24,[\"columns\"]],[24,[\"filterQueryParameters\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      await this.ModelsTablePageObject.filters.objectAt(1).selectFilter('10');
      await (0, _testHelpers.settled)();
      assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), ['10', '100']);
    });
    (0, _qunit.test)('#sortColumn sort data by `propertyName`', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table-server-paginated data=data columns=columns filterQueryParameters=filterQueryParameters}}
      */
      {
        id: "K7X4VqNf",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table-server-paginated\",null,[[\"data\",\"columns\",\"filterQueryParameters\"],[[24,[\"data\"]],[24,[\"columns\"]],[24,[\"filterQueryParameters\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      await this.ModelsTablePageObject.sorting.objectAt(1).click();
      await (0, _testHelpers.settled)();
      assert.deepEqual(this.ModelsTablePageObject.getColumnCells(1), this.server.db.users.map(u => u['first-name']).sort().slice(0, 10));
    });
    (0, _qunit.test)('#sortColumn sort data by `sortedBy`', async function (assert) {
      this.set('columns.1.sortedBy', 'lastName');
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table-server-paginated data=data columns=columns filterQueryParameters=filterQueryParameters}}
      */
      {
        id: "K7X4VqNf",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table-server-paginated\",null,[[\"data\",\"columns\",\"filterQueryParameters\"],[[24,[\"data\"]],[24,[\"columns\"]],[24,[\"filterQueryParameters\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      await this.ModelsTablePageObject.sorting.objectAt(1).click();
      await (0, _testHelpers.settled)();
      assert.deepEqual(this.ModelsTablePageObject.getColumnCells(1), this.server.db.users.sort((a, b) => a['last-name'] > b['last-name'] ? 1 : -1).map(u => u['first-name']).slice(0, 10));
    });
    (0, _qunit.test)('#sort by single column', async function (assert) {
      this.server.get('/users', (schema, req) => {
        assert.deepEqual(req.queryParams, {
          page: '1',
          pageSize: '10',
          sort: 'firstName',
          sortDirection: 'ASC'
        }, 'correct query parameters are sent');
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table-server-paginated data=data columns=columns filterQueryParameters=filterQueryParameters}}
      */
      {
        id: "K7X4VqNf",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table-server-paginated\",null,[[\"data\",\"columns\",\"filterQueryParameters\"],[[24,[\"data\"]],[24,[\"columns\"]],[24,[\"filterQueryParameters\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      await this.ModelsTablePageObject.sorting.objectAt(1).click();
    });
    (0, _qunit.test)('#sort by multiple columns', async function (assert) {
      const expectedQp = [{
        page: '1',
        pageSize: '10',
        sort: 'firstName'
      }, {
        page: '1',
        pageSize: '10',
        sort: 'firstName,lastName'
      }, {
        page: '1',
        pageSize: '10',
        sort: 'firstName,-lastName'
      }];
      let index = 0;
      this.server.get('/users', (schema, req) => {
        assert.deepEqual(req.queryParams, expectedQp[index], `correct query parameters are sent (${index})`);
        index++;
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table-server-paginated data=data columns=columns filterQueryParameters=filterQueryParameters multipleColumnsSorting=true}}
      */
      {
        id: "uiqE1D7F",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table-server-paginated\",null,[[\"data\",\"columns\",\"filterQueryParameters\",\"multipleColumnsSorting\"],[[24,[\"data\"]],[24,[\"columns\"]],[24,[\"filterQueryParameters\"]],true]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      await this.ModelsTablePageObject.sorting.objectAt(1).click();
      await this.ModelsTablePageObject.sorting.objectAt(2).click();
      await this.ModelsTablePageObject.sorting.objectAt(2).click();
    });
    (0, _qunit.test)('A11y', async function (assert) {
      const columns = (0, _f.generateColumns)(['index', 'reversedIndex']);
      columns[0].filterWithSelect = true;
      const data = (0, _f.generateContent)(10);
      this.setProperties({
        data,
        columns
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table-server-paginated data=data columns=columns filterQueryParameters=filterQueryParameters}}
      */
      {
        id: "K7X4VqNf",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table-server-paginated\",null,[[\"data\",\"columns\",\"filterQueryParameters\"],[[24,[\"data\"]],[24,[\"columns\"]],[24,[\"filterQueryParameters\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      await (0, _audit.default)('.models-table-wrapper');
      assert.ok(true, 'no a11y errors found');
    });
  });
});
define("dummy/tests/integration/components/models-table-test", ["ember-data", "qunit", "ember-qunit", "@ember/test-helpers", "ember-a11y-testing/test-support/audit", "dummy/tests/helpers/f", "dummy/tests/helpers/get-page-object", "dummy/tests/helpers/get-theme-class"], function (_emberData, _qunit, _emberQunit, _testHelpers, _audit, _f, _getPageObject, _getThemeClass) {
  "use strict";

  const oneTenArray = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
  const oneTenArrayDig = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  const tenOneArrayDig = oneTenArrayDig.slice().reverse();
  const oneTenAscArray = ['eight', 'five', 'four', 'nine', 'one', 'seven', 'six', 'ten', 'three', 'two'];
  const oneTenDescArray = ['two', 'three', 'ten', 'six', 'seven', 'one', 'nine', 'four', 'five', 'eight'];
  (0, _qunit.module)('ModelsTable | Integration', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    hooks.beforeEach(function () {
      this.actions = {};

      this.send = (actionName, ...args) => this.actions[actionName].apply(this, args);

      this.ModelsTablePageObject = (0, _getPageObject.default)(this);
    });

    function signFilter(cellValue, neededString) {
      const signs = ['<', '>', '='];
      let neededNumber = neededString;
      let sign = '=';

      if (-1 !== signs.indexOf(neededString[0])) {
        sign = neededString[0];
        neededNumber = parseInt(neededString.substring(1), 10);
      }

      let _cellValue = parseInt(cellValue, 10);

      if ('=' === sign) {
        return _cellValue === neededNumber;
      }

      if ('>' === sign) {
        return _cellValue > neededNumber;
      }

      if ('<' === sign) {
        return _cellValue < neededNumber;
      }

      return cellValue === neededNumber;
    }

    (0, _qunit.test)('summary', async function (assert) {
      this.setProperties({
        data: Ember.A([]),
        columns: (0, _f.generateColumns)(['index'])
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table data=data columns=columns}}
      */
      {
        id: "1dKzPSCh",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"data\",\"columns\"],[[24,[\"data\"]],[24,[\"columns\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.ModelsTablePageObject.summary, 'Show 0 - 0 of 0 Clear all filters', 'Empty content');
      this.set('data', (0, _f.generateContent)(10));
      assert.equal(this.ModelsTablePageObject.summary, 'Show 1 - 10 of 10 Clear all filters', 'Content for 1 page');
      this.set('data', (0, _f.generateContent)(15));
      await this.ModelsTablePageObject.navigation.goToNextPage();
      assert.equal(this.ModelsTablePageObject.summary, 'Show 11 - 15 of 15 Clear all filters', 'Content for 2 pages. Last page selected');
      this.set('data', (0, _f.generateContent)(35));
      assert.equal(this.ModelsTablePageObject.summary, 'Show 11 - 20 of 35 Clear all filters', 'Content for 4 pages. Middle page selected');
    });
    (0, _qunit.test)('basic render', async function (assert) {
      this.setProperties({
        columns: (0, _f.generateColumns)(['index', 'reversedIndex']),
        data: (0, _f.generateContent)(10, 1)
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table columns=columns data=data}}
      */
      {
        id: "Z+X3QfSp",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"columns\",\"data\"],[[24,[\"columns\"]],[24,[\"data\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.ModelsTablePageObject.tablesCount, 1, 'Table exists');
      assert.equal(this.ModelsTablePageObject.rows.length, 10, 'Table has 10 rows');
      assert.equal(this.ModelsTablePageObject.summary, 'Show 1 - 10 of 10 Clear all filters', 'Summary is valid');
      assert.equal(this.ModelsTablePageObject.navigation.disabledNavigationLinksCount, 4, 'All navigation buttons are disabled');
      assert.equal(this.ModelsTablePageObject.footer.isVisible, false, 'Table footer not exists, if there is no footer-components');
      assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), oneTenArrayDig, 'Content is valid');
    });
    (0, _qunit.test)('basic render with data update', async function (assert) {
      this.set('data', (0, _f.generateContent)(10, 1));
      this.set('columns', (0, _f.generateColumns)(['index', 'reversedIndex']));
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table columns=columns data=data}}
      */
      {
        id: "Z+X3QfSp",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"columns\",\"data\"],[[24,[\"columns\"]],[24,[\"data\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.ModelsTablePageObject.tablesCount, 1, 'Table exists');
      assert.equal(this.ModelsTablePageObject.rows.length, 10, 'Table has 10 rows');
      assert.equal(this.ModelsTablePageObject.summary, 'Show 1 - 10 of 10 Clear all filters', 'Summary is valid');
      assert.equal(this.ModelsTablePageObject.navigation.disabledNavigationLinksCount, 4, 'All navigation buttons are disabled');
      assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), oneTenArrayDig, 'Content is valid');
      this.set('data.0.index', 11);
      assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), ['11', '2', '3', '4', '5', '6', '7', '8', '9', '10'], 'Content is valid after update');
      this.set('data.firstObject.index', 12);
      assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), ['12', '2', '3', '4', '5', '6', '7', '8', '9', '10'], 'Content is valid after second update');
    });
    (0, _qunit.test)('render without footer', async function (assert) {
      this.set('showComponentFooter', false);
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table showComponentFooter=showComponentFooter}}
      */
      {
        id: "ZM5O4QNj",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"showComponentFooter\"],[[24,[\"showComponentFooter\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.ModelsTablePageObject.tableFooterCount, 0, 'table footer isn\'t rendered');
    });
    (0, _qunit.test)('pageSizeObserver', async function (assert) {
      this.set('data', (0, _f.generateContent)(50, 1));
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table data=data}}
      */
      {
        id: "lDvF784e",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"data\"],[[24,[\"data\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.ModelsTablePageObject.summary, 'Show 1 - 10 of 50 Clear all filters', 'init value');
      await this.ModelsTablePageObject.navigation.goToNextPage();
      assert.equal(this.ModelsTablePageObject.summary, 'Show 11 - 20 of 50 Clear all filters', 'value changed by user');
      await this.ModelsTablePageObject.changePageSize(25);
      assert.equal(this.ModelsTablePageObject.summary, 'Show 1 - 25 of 50 Clear all filters', 'value restored to 1');
    });
    (0, _qunit.test)('visibleContent', async function (assert) {
      this.setProperties({
        columns: (0, _f.generateColumns)(['index']),
        data: (0, _f.generateContent)(10),
        pageSize: 10,
        currentPageNumber: 1
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table data=data currentPageNumber=currentPageNumber pageSize=pageSize columns=columns}}
      */
      {
        id: "7I1oQVvH",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"data\",\"currentPageNumber\",\"pageSize\",\"columns\"],[[24,[\"data\"]],[24,[\"currentPageNumber\"]],[24,[\"pageSize\"]],[24,[\"columns\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), (0, _f.generateContent)(10).mapBy('index').map(c => `${c}`), 'One page');
      this.setProperties({
        data: (0, _f.generateContent)(25, 1),
        currentPageNumber: 2
      });
      assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), (0, _f.generateContent)(10, 11).mapBy('index').map(c => `${c}`), 'Second page');
      this.setProperties({
        data: (0, _f.generateContent)(25, 1),
        currentPageNumber: 1,
        pageSize: 50
      });
      assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), (0, _f.generateContent)(25, 1).mapBy('index').map(c => `${c}`), 'One big page');
      this.setProperties({
        data: (0, _f.generateContent)(25, 1),
        currentPageNumber: 1,
        pageSize: 10
      });
      await this.ModelsTablePageObject.navigation.goToNextPage();
      await this.ModelsTablePageObject.navigation.goToNextPage();
      await (0, _testHelpers.settled)();
      assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), (0, _f.generateContent)(5, 21).mapBy('index').map(c => `${c}`), 'Last page');
    });
    (0, _qunit.test)('visibleContent with page size changing and pagination', async function (assert) {
      this.setProperties({
        data: (0, _f.generateContent)(1000, 1),
        columns: (0, _f.generateColumns)(['index'])
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table data=data columns=columns}}
      */
      {
        id: "1dKzPSCh",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"data\",\"columns\"],[[24,[\"data\"]],[24,[\"columns\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      await this.ModelsTablePageObject.changePageSize(25);
      assert.equal(this.ModelsTablePageObject.rows.length, 25, '1st page has 25 rows');
      await this.ModelsTablePageObject.navigation.goToNextPage();
      assert.equal(this.ModelsTablePageObject.rows.length, 25, '2nd page has 25 rows');
      await this.ModelsTablePageObject.navigation.goToNextPage();
      assert.equal(this.ModelsTablePageObject.rows.length, 25, '3rd page has 25 rows');
    });
    (0, _qunit.test)('sorting by nested properties', async function (assert) {
      this.setProperties({
        data: (0, _f.generateContent)(100, 1),
        columns: (0, _f.generateColumns)(['nested.index'])
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table data=data columns=columns}}
      */
      {
        id: "1dKzPSCh",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"data\",\"columns\"],[[24,[\"data\"]],[24,[\"columns\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      await this.ModelsTablePageObject.sorting.objectAt(0).click();
      assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), oneTenArrayDig, 'Content is valid after sorting');
      await this.ModelsTablePageObject.sorting.objectAt(0).click();
      assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), ['100', '99', '98', '97', '96', '95', '94', '93', '92', '91'], 'Content is valid after sorting (2)');
    });
    (0, _qunit.test)('gotoBackEnabled', async function (assert) {
      this.setProperties({
        data: (0, _f.generateContent)(25, 1),
        columns: (0, _f.generateColumns)(['index'])
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table data=data columns=columns}}
      */
      {
        id: "1dKzPSCh",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"data\",\"columns\"],[[24,[\"data\"]],[24,[\"columns\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      assert.ok(this.ModelsTablePageObject.navigation.goToPrevPageDisabled, 'Disabled, if user is on the 1st page');
      await this.ModelsTablePageObject.navigation.goToNextPage();
      assert.notOk(this.ModelsTablePageObject.navigation.goToPrevPageDisabled, 'Enabled, if user isn\'t on the 1st page');
    });
    (0, _qunit.test)('gotoForwardEnabled', async function (assert) {
      this.setProperties({
        data: (0, _f.generateContent)(10),
        columns: (0, _f.generateColumns)(['id'])
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table data=data columns=columns}}
      */
      {
        id: "1dKzPSCh",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"data\",\"columns\"],[[24,[\"data\"]],[24,[\"columns\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      assert.ok(this.ModelsTablePageObject.navigation.goToNextPageDisabled, 'One page only');
      this.set('data', (0, _f.generateContent)(11));
      assert.notOk(this.ModelsTablePageObject.navigation.goToNextPageDisabled, 'One page + 1 record more');
      this.setProperties({
        data: (0, _f.generateContent)(25)
      });
      await this.ModelsTablePageObject.navigation.goToNextPage();
      await this.ModelsTablePageObject.navigation.goToNextPage();
      await this.ModelsTablePageObject.navigation.goToNextPage();
      assert.ok(this.ModelsTablePageObject.navigation.goToNextPageDisabled, 'Three pages, last one selected');
    });
    (0, _qunit.test)('#345 work with select for page number', async function (assert) {
      this.setProperties({
        data: (0, _f.generateContent)(100),
        columns: (0, _f.generateColumns)(['id']),
        showCurrentPageNumberSelect: true,
        useNumericPagination: false
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table 
            data=data 
            columns=columns
            showCurrentPageNumberSelect=showCurrentPageNumberSelect
            useNumericPagination=useNumericPagination
          }}
      */
      {
        id: "qDmeyJZo",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"data\",\"columns\",\"showCurrentPageNumberSelect\",\"useNumericPagination\"],[[24,[\"data\"]],[24,[\"columns\"]],[24,[\"showCurrentPageNumberSelect\"]],[24,[\"useNumericPagination\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      assert.ok(this.ModelsTablePageObject.navigation.selectPageNumberExists, 'Select for current page number is shown by default for simple pagination');
      assert.equal(this.ModelsTablePageObject.navigation.selectedPageNumber, '1', 'First page is selected');
      this.set('useNumericPagination', true);
      assert.ok(this.ModelsTablePageObject.navigation.selectPageNumberExists, 'Select for current page number is shown by default for numeric pagination');
      assert.equal(this.ModelsTablePageObject.navigation.selectedPageNumber, '1', 'First page is selected');
      this.set('useNumericPagination', false);
      await this.ModelsTablePageObject.navigation.selectPageNumber(4);
      assert.equal(this.ModelsTablePageObject.summary, 'Show 31 - 40 of 100 Clear all filters', 'Summary is shown for 4th page');
      await this.ModelsTablePageObject.navigation.goToLastPage();
      assert.equal(this.ModelsTablePageObject.navigation.selectedPageNumber, '10', 'Last page is selected');
      await this.ModelsTablePageObject.changePageSize(25);
      assert.equal(this.ModelsTablePageObject.navigation.selectedPageNumber, '1', 'First page is selected after page size is changed');
      this.set('showCurrentPageNumberSelect', false);
      assert.notOk(this.ModelsTablePageObject.navigation.selectPageNumberExists, 'Select for current page number is hidden for simple pagination');
      this.set('useNumericPagination', true);
      assert.notOk(this.ModelsTablePageObject.navigation.selectPageNumberExists, 'Select for current page number is hidden for numeric pagination');
    });
    (0, _qunit.test)('#374 Disable page-number select if there are no options for it', async function (assert) {
      this.setProperties({
        data: (0, _f.generateContent)(100),
        columns: (0, _f.generateColumns)(['id']),
        showCurrentPageNumberSelect: true,
        useNumericPagination: false
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table 
            data=data 
            columns=columns
            showCurrentPageNumberSelect=showCurrentPageNumberSelect
            useNumericPagination=useNumericPagination
          }}
      */
      {
        id: "qDmeyJZo",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"data\",\"columns\",\"showCurrentPageNumberSelect\",\"useNumericPagination\"],[[24,[\"data\"]],[24,[\"columns\"]],[24,[\"showCurrentPageNumberSelect\"]],[24,[\"useNumericPagination\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      await this.ModelsTablePageObject.doGlobalFilter('any random text that does not exist im the table');
      assert.ok(this.ModelsTablePageObject.navigation.selectPageNumberDisabled, 'disabled with simple pagination');
      this.set('useNumericPagination', true);
      assert.ok(this.ModelsTablePageObject.navigation.selectPageNumberDisabled, 'disabled with numeric pagination');
    });
    (0, _qunit.test)('render multi-pages table', async function (assert) {
      this.setProperties({
        columns: (0, _f.generateColumns)(['index', 'reversedIndex']),
        data: (0, _f.generateContent)(20, 1)
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table columns=columns data=data}}
      */
      {
        id: "Z+X3QfSp",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"columns\",\"data\"],[[24,[\"columns\"]],[24,[\"data\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      assert.notOk(this.ModelsTablePageObject.navigation.goToNextPageDisabled, 'next enabled');
      assert.notOk(this.ModelsTablePageObject.navigation.goToLastPageDisabled, 'last enabled');
      assert.ok(this.ModelsTablePageObject.navigation.goToPrevPageDisabled, 'prev disabled');
      assert.ok(this.ModelsTablePageObject.navigation.goToFirstPageDisabled, 'first disabled');
      assert.equal(this.ModelsTablePageObject.summary, 'Show 1 - 10 of 20 Clear all filters', 'Summary is valid');
      await this.ModelsTablePageObject.navigation.goToNextPage();
      assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), ['11', '12', '13', '14', '15', '16', '17', '18', '19', '20'], 'Content is valid');
      assert.ok(this.ModelsTablePageObject.navigation.goToNextPageDisabled, 'next disabled');
      assert.ok(this.ModelsTablePageObject.navigation.goToLastPageDisabled, 'last disabled');
      assert.notOk(this.ModelsTablePageObject.navigation.goToPrevPageDisabled, 'prev enabled');
      assert.notOk(this.ModelsTablePageObject.navigation.goToFirstPageDisabled, 'first enabled');
    });
    (0, _qunit.test)('render custom component in the table cell', async function (assert) {
      const columns = (0, _f.generateColumns)(['index', 'someWord']);
      columns[1].component = 'cell-component';
      this.setProperties({
        data: (0, _f.generateContent)(20, 1),
        columns
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table columns=columns data=data}}
      */
      {
        id: "Z+X3QfSp",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"columns\",\"data\"],[[24,[\"columns\"]],[24,[\"data\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      assert.deepEqual(this.ModelsTablePageObject.getColumnCells(1), oneTenArray, 'Content is valid');
    });
    (0, _qunit.test)('render custom component in the table cell as a composable component', async function (assert) {
      const columns = (0, _f.generateColumns)(['index', 'someWord']);
      columns[1].component = 'cellComp';
      this.setProperties({
        data: (0, _f.generateContent)(20, 1),
        columns
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table columns=columns data=data columnComponents=(hash cellComp=(component "cell-component"))}}
      */
      {
        id: "GukKaxw/",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"columns\",\"data\",\"columnComponents\"],[[24,[\"columns\"]],[24,[\"data\"]],[28,\"hash\",null,[[\"cellComp\"],[[28,\"component\",[\"cell-component\"],null]]]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      assert.deepEqual(this.ModelsTablePageObject.getColumnCells(1), oneTenArray, 'Content is valid');
    });
    (0, _qunit.test)('render custom component (input) in the filter cell', async function (assert) {
      const columns = (0, _f.generateColumns)(['index', 'someWord']);
      columns[1].componentForFilterCell = 'filter-cell-input';
      this.setProperties({
        data: (0, _f.generateContent)(10, 1),
        columns
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table data=data columns=columns}}
      */
      {
        id: "1dKzPSCh",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"data\",\"columns\"],[[24,[\"data\"]],[24,[\"columns\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      assert.deepEqual(this.ModelsTablePageObject.getColumnCells(1), oneTenArray, 'Content is valid');
      await this.ModelsTablePageObject.filters.objectAt(1).inputFilter('one');
      assert.deepEqual(this.ModelsTablePageObject.getColumnCells(1), ['one'], 'Content is filtered');
      await this.ModelsTablePageObject.filters.objectAt(1).clearFilter();
      assert.deepEqual(this.ModelsTablePageObject.getColumnCells(1), oneTenArray, 'Content is restored');
    });
    (0, _qunit.test)('render custom component (select) in the filter cell', async function (assert) {
      const columns = (0, _f.generateColumns)(['index', 'someWord']);
      columns[1].componentForFilterCell = 'filter-cell-select';

      if (Ember.get(this, 'owner.application.uiFramework') === 'semantic-ui') {
        columns[1].componentForFilterCell = 'themes/ember-semanticui/filter-cell-select';
      }

      this.setProperties({
        data: (0, _f.generateContent)(10, 1),
        columns
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table data=data columns=columns}}
      */
      {
        id: "1dKzPSCh",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"data\",\"columns\"],[[24,[\"data\"]],[24,[\"columns\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      assert.deepEqual(this.ModelsTablePageObject.filters.objectAt(1).selectOptions, ['', ...oneTenArray], 'Filter options are correct');
      assert.deepEqual(this.ModelsTablePageObject.getColumnCells(1), oneTenArray, 'Content is valid');
      await this.ModelsTablePageObject.filters.objectAt(1).selectFilter('one');
      assert.deepEqual(this.ModelsTablePageObject.getColumnCells(1), ['one'], 'Content is filtered');
      await this.ModelsTablePageObject.filters.objectAt(1).clearFilter();
      assert.deepEqual(this.ModelsTablePageObject.getColumnCells(1), oneTenArray, 'Content is restored');
    });
    (0, _qunit.test)('render custom component in the sort cell', async function (assert) {
      const columns = (0, _f.generateColumns)(['index', 'someWord']);
      columns[1].componentForSortCell = 'sort-cell';
      this.setProperties({
        data: (0, _f.generateContent)(10, 1),
        columns
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table columns=columns data=data multipleColumnsSorting=false}}
      */
      {
        id: "/UMqb4C6",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"columns\",\"data\",\"multipleColumnsSorting\"],[[24,[\"columns\"]],[24,[\"data\"]],false]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      await this.ModelsTablePageObject.sorting.objectAt(1).click();
      assert.deepEqual(this.ModelsTablePageObject.getColumnCells(1), oneTenAscArray, 'Content is valid (sorting 2nd column asc)');
      await this.ModelsTablePageObject.sorting.objectAt(1).click();
      assert.deepEqual(this.ModelsTablePageObject.getColumnCells(1), oneTenDescArray, 'Content is valid (sorting 2nd column desc)');
    });
    (0, _qunit.test)('custom cell component should prevent filtering and sorting if propertyName and sortedBy/filteredBy not provided', async function (assert) {
      const columns = (0, _f.generateColumns)(['index', 'someWord']);
      columns[1].component = 'cell-component';
      delete columns[1].propertyName;
      delete columns[1].filteredBy;
      this.setProperties({
        data: (0, _f.generateContent)(20, 1),
        columns
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table columns=columns data=data}}
      */
      {
        id: "Z+X3QfSp",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"columns\",\"data\"],[[24,[\"columns\"]],[24,[\"data\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.ModelsTablePageObject.filters.objectAt(1).content, '', 'Filter-cell is empty');
      await this.ModelsTablePageObject.sorting.objectAt(1).click();
      assert.notOk(this.ModelsTablePageObject.sorting.objectAt(1).hasSortMarker, 'Not sorted');
      await this.ModelsTablePageObject.sorting.objectAt(1).click();
      assert.notOk(this.ModelsTablePageObject.sorting.objectAt(1).hasSortMarker, 'Not sorted again');
    });
    (0, _qunit.test)('render show/hide columns', async function (assert) {
      this.setProperties({
        columns: (0, _f.generateColumns)(['index', 'reversedIndex']),
        data: (0, _f.generateContent)(10, 1)
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table data=data columns=columns}}
      */
      {
        id: "1dKzPSCh",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"data\",\"columns\"],[[24,[\"data\"]],[24,[\"columns\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.ModelsTablePageObject.sorting.length, 2, '2 columns are shown (thead)');
      assert.equal(this.ModelsTablePageObject.filters.length, 2, '2 columns are shown (thead)');
      assert.equal(this.ModelsTablePageObject.rows.objectAt(0).cells.length, 2, '2 columns are shown (tbody)');
      await this.ModelsTablePageObject.toggleColumnDropDown();
      await this.ModelsTablePageObject.columnsDropDown.objectAt(3).click();
      assert.equal(this.ModelsTablePageObject.sorting.length, 1, '1 column is shown (thead)');
      assert.equal(this.ModelsTablePageObject.filters.length, 1, '1 column is shown (thead)');
      assert.equal(this.ModelsTablePageObject.rows.objectAt(0).cells.length, 1, '1 column is shown (tbody)');
      assert.deepEqual(this.ModelsTablePageObject.sorting.mapBy('title'), ['reversedIndex'], 'Valid column is shown (thead)');
      assert.equal(this.element.querySelector(this.ModelsTablePageObject.firstColumnIconSelector).className.includes(this.ModelsTablePageObject.uncheckedIconClass), true, 'First column is unchecked');
      assert.equal(this.element.querySelector(this.ModelsTablePageObject.secondColumnIconSelector).className.includes(this.ModelsTablePageObject.checkedIconClass), true, 'Second column is checked');
      await this.ModelsTablePageObject.columnsDropDown.objectAt(3).click();
      assert.equal(this.ModelsTablePageObject.sorting.length, 2, '2 columns are shown (thead)');
      assert.equal(this.ModelsTablePageObject.filters.length, 2, '2 columns are shown (tbody)');
      assert.equal(this.element.querySelector(this.ModelsTablePageObject.firstColumnIconSelector).className.includes(this.ModelsTablePageObject.checkedIconClass), true, 'First column is checked');
      assert.equal(this.element.querySelector(this.ModelsTablePageObject.secondColumnIconSelector).className.includes(this.ModelsTablePageObject.checkedIconClass), true, 'Second column is checked');
      await this.ModelsTablePageObject.columnsDropDown.objectAt(4).click();
      assert.equal(this.ModelsTablePageObject.sorting.length, 1, '1 column is shown (thead)');
      assert.equal(this.ModelsTablePageObject.filters.length, 1, '1 column is shown (tbody)');
      assert.deepEqual(this.ModelsTablePageObject.sorting.mapBy('title'), ['index'], 'Valid column is shown (thead)');
      assert.equal(this.element.querySelector(this.ModelsTablePageObject.firstColumnIconSelector).className.includes(this.ModelsTablePageObject.checkedIconClass), true, 'First column is checked');
      assert.equal(this.element.querySelector(this.ModelsTablePageObject.secondColumnIconSelector).className.includes(this.ModelsTablePageObject.uncheckedIconClass), true, 'Second column is unchecked');
      await this.ModelsTablePageObject.columnsDropDown.objectAt(3).click();
      assert.equal(this.ModelsTablePageObject.rows.length, 1, '1 row is shown when all columns are hidden');
      assert.equal(this.ModelsTablePageObject.getCellsCount(), 1, 'with 1 cell');
      assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), ['All columns are hidden. Use columns-dropdown to show some of them'], 'correct message is shown');
      assert.equal(this.element.querySelector(this.ModelsTablePageObject.firstColumnIconSelector).className.includes(this.ModelsTablePageObject.uncheckedIconClass), true, 'First column is unchecked');
      assert.equal(this.element.querySelector(this.ModelsTablePageObject.secondColumnIconSelector).className.includes(this.ModelsTablePageObject.uncheckedIconClass), true, 'Second column is unchecked');
    });
    (0, _qunit.test)('render show/hide all columns', async function (assert) {
      this.setProperties({
        columns: (0, _f.generateColumns)(['index', 'reversedIndex']),
        data: (0, _f.generateContent)(10, 1)
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table columns=columns data=data}}
      */
      {
        id: "Z+X3QfSp",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"columns\",\"data\"],[[24,[\"columns\"]],[24,[\"data\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.ModelsTablePageObject.sorting.length, 2, '2 columns are shown (thead)');
      assert.equal(this.ModelsTablePageObject.filters.length, 2, '2 columns are shown (thead)');
      assert.equal(this.ModelsTablePageObject.rows.objectAt(0).cells.length, 2, '2 columns are shown (tbody)');
      await this.ModelsTablePageObject.toggleColumnDropDown();
      await this.ModelsTablePageObject.columnsDropDown.objectAt(1).click();
      assert.equal(this.ModelsTablePageObject.rows.length, 1, '1 row is shown when all columns are hidden');
      assert.equal(this.ModelsTablePageObject.getCellsCount(), 1, 'with 1 cell');
      assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), ['All columns are hidden. Use columns-dropdown to show some of them'], 'correct message is shown');
      await this.ModelsTablePageObject.columnsDropDown.objectAt(0).click();
      assert.equal(this.ModelsTablePageObject.sorting.length, 2, '2 columns are shown (thead)');
      assert.equal(this.ModelsTablePageObject.filters.length, 2, '2 columns are shown (thead)');
      assert.equal(this.ModelsTablePageObject.rows.objectAt(0).cells.length, 2, '2 columns are shown (tbody)');
    });
    (0, _qunit.test)('render columns-dropdown with mayBeHidden = false for some columns', async function (assert) {
      const columns = (0, _f.generateColumns)(['index', 'reversedIndex']);
      columns[0].mayBeHidden = false;
      this.setProperties({
        columns,
        data: (0, _f.generateContent)(10, 1)
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table columns=columns data=data}}
      */
      {
        id: "Z+X3QfSp",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"columns\",\"data\"],[[24,[\"columns\"]],[24,[\"data\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      await this.ModelsTablePageObject.toggleColumnDropDown();
      assert.deepEqual(this.ModelsTablePageObject.columnsDropDown.mapBy('label'), ['Show All', 'Hide All', 'Restore Defaults', 'reversedIndex'], 'Column with mayBeHidden = false is not shown in the columns dropdown');
      await this.ModelsTablePageObject.columnsDropDown.objectAt(3).click();
      assert.equal(this.ModelsTablePageObject.sorting.length, 1, '1 column are shown (thead)');
      assert.equal(this.ModelsTablePageObject.filters.length, 1, '1 column are shown (thead)');
      assert.equal(this.ModelsTablePageObject.rows.objectAt(0).cells.length, 1, '1 column are shown (tbody)');
      assert.deepEqual(this.ModelsTablePageObject.sorting.mapBy('title'), ['index'], 'Valid column is shown (thead)');
      await this.ModelsTablePageObject.columnsDropDown.objectAt(3).click();
      assert.equal(this.ModelsTablePageObject.sorting.length, 2, '2 columns are shown (thead)');
      await this.ModelsTablePageObject.columnsDropDown.objectAt(1).click();
      assert.equal(this.ModelsTablePageObject.sorting.length, 1, '1 column are shown (thead)');
      assert.equal(this.ModelsTablePageObject.filters.length, 1, '1 column are shown (thead)');
      assert.equal(this.ModelsTablePageObject.rows.objectAt(0).cells.length, 1, '1 column are shown (tbody)');
      assert.deepEqual(this.ModelsTablePageObject.sorting.mapBy('title'), ['index'], 'Valid column is shown (thead)');
    });
    (0, _qunit.test)('render columnSets in columns-dropdown', async function (assert) {
      let customFunctionCalled = null;
      this.setProperties({
        columns: (0, _f.generateColumns)(['index', 'index2', 'reversedIndex', 'id']),
        data: (0, _f.generateContent)(10, 1),
        columnSets: [{
          label: 'Set 1',
          showColumns: ['index', 'id']
        }, {
          label: 'Set 2',
          showColumns: ['index', 'id'],
          hideOtherColumns: false
        }, {
          label: 'Set 3',
          showColumns: ['index', 'id'],
          toggleSet: true
        }, {
          label: 'Set 4',

          showColumns(columns) {
            customFunctionCalled = columns;
          }

        }]
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table columns=columns data=data columnSets=columnSets}}
      */
      {
        id: "TwceAz95",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"columns\",\"data\",\"columnSets\"],[[24,[\"columns\"]],[24,[\"data\"]],[24,[\"columnSets\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.ModelsTablePageObject.sorting.length, 4, '4 columns are shown (thead)');
      assert.equal(this.ModelsTablePageObject.filters.length, 4, '4 columns are shown (thead)');
      assert.equal(this.ModelsTablePageObject.rows.objectAt(0).cells.length, 4, '4 columns are shown (tbody)');
      await this.ModelsTablePageObject.toggleColumnDropDown();
      await this.ModelsTablePageObject.columnsDropDown.objectAt(1).click();
      await this.ModelsTablePageObject.columnsDropDown.objectAt(3).click();
      assert.equal(this.ModelsTablePageObject.rows.objectAt(0).cells.length, 2, '2 columns are shown for default settings');
      await this.ModelsTablePageObject.columnsDropDown.objectAt(3).click();
      assert.equal(this.ModelsTablePageObject.rows.objectAt(0).cells.length, 2, '2 columns are still shown after repeated click');
      await this.ModelsTablePageObject.columnsDropDown.objectAt(0).click();
      await this.ModelsTablePageObject.columnsDropDown.objectAt(3).click();
      assert.equal(this.ModelsTablePageObject.rows.objectAt(0).cells.length, 2, 'other columns are hidden if hideOtherColumns=true');
      await this.ModelsTablePageObject.columnsDropDown.objectAt(0).click();
      await this.ModelsTablePageObject.columnsDropDown.objectAt(7).click(); // This is the first regular column

      await this.ModelsTablePageObject.columnsDropDown.objectAt(4).click();
      assert.equal(this.ModelsTablePageObject.rows.objectAt(0).cells.length, 4, 'other columns are not hidden if hideOtherColumns=false');
      await this.ModelsTablePageObject.columnsDropDown.objectAt(4).click();
      assert.equal(this.ModelsTablePageObject.rows.objectAt(0).cells.length, 4, 'columns remain visible after repeated click with hideOtherColumns=false');
      await this.ModelsTablePageObject.columnsDropDown.objectAt(5).click();
      assert.equal(this.ModelsTablePageObject.rows.objectAt(0).cells.length, 2, 'columns are hidden if toggleSet=true and both columns are visible');
      await this.ModelsTablePageObject.columnsDropDown.objectAt(5).click();
      assert.equal(this.ModelsTablePageObject.rows.objectAt(0).cells.length, 4, 'columns are shown if toggleSet=true and both columns are hidden');
      await this.ModelsTablePageObject.columnsDropDown.objectAt(7).click(); // This is the first regular column

      await this.ModelsTablePageObject.columnsDropDown.objectAt(5).click();
      assert.equal(this.ModelsTablePageObject.rows.objectAt(0).cells.length, 4, 'columns are shown if toggleSet=true and one of them is hidden');
      await this.ModelsTablePageObject.columnsDropDown.objectAt(6).click();
      assert.ok(customFunctionCalled, 'custom function is called if showColumns is a function');
      assert.deepEqual(customFunctionCalled.mapBy('propertyName'), ['index', 'index2', 'reversedIndex', 'id'], 'custom function gets columns as argument');
    });
    (0, _qunit.test)('global filter and current page may be set on component init', async function (assert) {
      const columns = (0, _f.generateColumns)(['index', 'reversedIndex']);
      this.setProperties({
        columns,
        data: (0, _f.generateContent)(1000, 1),
        filterString: '1'
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table data=data columns=columns currentPageNumber=2 filterString=filterString}}
      */
      {
        id: "c+38mxx3",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"data\",\"columns\",\"currentPageNumber\",\"filterString\"],[[24,[\"data\"]],[24,[\"columns\"]],2,[24,[\"filterString\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.ModelsTablePageObject.summary, 'Show 11 - 20 of 488 Clear all filters');
    });
    (0, _qunit.test)('global filter focused if label is clicked', async function (assert) {
      const columns = (0, _f.generateColumns)(['index', 'reversedIndex']);
      this.setProperties({
        columns,
        data: (0, _f.generateContent)(10, 1)
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table data=data columns=columns}}
      */
      {
        id: "1dKzPSCh",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"data\",\"columns\"],[[24,[\"data\"]],[24,[\"columns\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      await this.ModelsTablePageObject.clickGlobalFilterLabel();
      assert.ok(this.ModelsTablePageObject.globalFilterFocused);
    });
    (0, _qunit.test)('page size and current page may be set on component init', async function (assert) {
      const columns = (0, _f.generateColumns)(['index', 'reversedIndex']);
      this.setProperties({
        columns,
        data: (0, _f.generateContent)(100, 1)
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table data=data columns=columns currentPageNumber=2 pageSize=25}}
      */
      {
        id: "Kza0lsWb",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"data\",\"columns\",\"currentPageNumber\",\"pageSize\"],[[24,[\"data\"]],[24,[\"columns\"]],2,25]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.ModelsTablePageObject.summary, 'Show 26 - 50 of 100 Clear all filters');
    });
    (0, _qunit.test)('global filtering (ignore case OFF)', async function (assert) {
      const columns = (0, _f.generateColumns)(['index', 'reversedIndex']);
      this.setProperties({
        columns,
        data: (0, _f.generateContent)(10, 1)
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table data=data columns=columns}}
      */
      {
        id: "1dKzPSCh",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"data\",\"columns\"],[[24,[\"data\"]],[24,[\"columns\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      await this.ModelsTablePageObject.doGlobalFilter('1');
      assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), ['1', '10'], 'Content is filtered correctly');
      await this.ModelsTablePageObject.doGlobalFilter('');
      assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), oneTenArrayDig, 'Filter is empty and All rows are shown');
      await this.ModelsTablePageObject.doGlobalFilter('invalid input');
      assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), ['No records to show'], 'All rows are filtered out and proper message is shown');
      assert.equal(this.ModelsTablePageObject.rows.objectAt(0).getCellColspans(), columns.length, 'cell with message has correct colspan');
    });
    (0, _qunit.test)('global filtering (ignore case ON)', async function (assert) {
      const columns = (0, _f.generateColumns)(['index', 'someWord']);
      this.setProperties({
        filteringIgnoreCase: true,
        columns,
        data: (0, _f.generateContent)(10, 1)
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table columns=columns data=data filteringIgnoreCase=filteringIgnoreCase}}
      */
      {
        id: "K1/eMCQ7",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"columns\",\"data\",\"filteringIgnoreCase\"],[[24,[\"columns\"]],[24,[\"data\"]],[24,[\"filteringIgnoreCase\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      await this.ModelsTablePageObject.doGlobalFilter('One');
      assert.deepEqual(this.ModelsTablePageObject.rows.objectAt(0).cells.mapBy('content'), ['1', 'one'], 'Content is filtered correctly');
      await this.ModelsTablePageObject.doGlobalFilter('');
      assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), oneTenArrayDig, 'Filter is empty and All rows are shown');
      await this.ModelsTablePageObject.doGlobalFilter('invalid input');
      assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), ['No records to show'], 'All rows are filtered out and proper message is shown');
      assert.equal(this.ModelsTablePageObject.rows.objectAt(0).getCellColspans(), columns.length, 'cell with message has correct colspan');
      await this.ModelsTablePageObject.doGlobalFilter('');
      await this.ModelsTablePageObject.sorting.objectAt(0).click();
      await this.ModelsTablePageObject.sorting.objectAt(0).click();
      await this.ModelsTablePageObject.doGlobalFilter('One');
      assert.deepEqual(this.ModelsTablePageObject.getColumnCells(1), ['one'], 'Content is filtered correctly when sorting is not done');
    });
    (0, _qunit.test)('filtering by columns (labels)', async function (assert) {
      const columns = (0, _f.generateColumns)(['index', 'reversedIndex']);
      columns[0].filterWithSelect = true;
      this.setProperties({
        columns,
        data: (0, _f.generateContent)(10, 1),
        useFilteringByColumns: true
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table data=data columns=columns useFilteringByColumns=useFilteringByColumns}}
      */
      {
        id: "wTQPatVN",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"data\",\"columns\",\"useFilteringByColumns\"],[[24,[\"data\"]],[24,[\"columns\"]],[24,[\"useFilteringByColumns\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.ModelsTablePageObject.filters.objectAt(0).label, columns[0].title);
      assert.equal(this.ModelsTablePageObject.filters.objectAt(1).label, columns[1].title);
    });
    (0, _qunit.test)('filtering by columns (ignore case OFF)', async function (assert) {
      const columns = (0, _f.generateColumns)(['index', 'reversedIndex']);
      columns[0].filterPlaceholder = 'custom placeholder';
      this.setProperties({
        columns,
        data: (0, _f.generateContent)(10, 1),
        useFilteringByColumns: true
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table data=data columns=columns useFilteringByColumns=useFilteringByColumns}}
      */
      {
        id: "wTQPatVN",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"data\",\"columns\",\"useFilteringByColumns\"],[[24,[\"data\"]],[24,[\"columns\"]],[24,[\"useFilteringByColumns\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      await this.ModelsTablePageObject.filters.objectAt(0).inputFilter('1');
      assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), ['1', '10'], 'Content is filtered correctly');
      await this.ModelsTablePageObject.filters.objectAt(0).inputFilter('');
      assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), oneTenArrayDig, 'Filter is empty and All rows are shown');
      await this.ModelsTablePageObject.filters.objectAt(0).inputFilter('invalid input');
      assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), ['No records to show'], 'All rows are filtered out and proper message is shown');
      assert.equal(this.ModelsTablePageObject.rows.objectAt(0).getCellColspans(), columns.length, 'cell with message has correct colspan');
      assert.equal(this.ModelsTablePageObject.filters.objectAt(0).inputPlaceholder, 'custom placeholder', 'Placeholder is correct');
      this.set('useFilteringByColumns', false);
      assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), oneTenArrayDig, 'Filtering by columns is ignored');
      assert.equal(this.element.querySelectorAll('thead input').length, 0, 'Columns filters are hidden');
    });
    (0, _qunit.test)('filtering by columns (ignore case ON)', async function (assert) {
      const columns = (0, _f.generateColumns)(['index', 'someWord']);
      this.setProperties({
        filteringIgnoreCase: true,
        useFilteringByColumns: true,
        columns,
        data: (0, _f.generateContent)(10, 1)
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table filteringIgnoreCase=filteringIgnoreCase columns=columns data=data useFilteringByColumns=useFilteringByColumns}}
      */
      {
        id: "5bZTGzu/",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"filteringIgnoreCase\",\"columns\",\"data\",\"useFilteringByColumns\"],[[24,[\"filteringIgnoreCase\"]],[24,[\"columns\"]],[24,[\"data\"]],[24,[\"useFilteringByColumns\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      await this.ModelsTablePageObject.filters.objectAt(1).inputFilter('One');
      assert.deepEqual(this.ModelsTablePageObject.rows.objectAt(0).cells.mapBy('content'), ['1', 'one'], 'Content is filtered correctly');
      await this.ModelsTablePageObject.filters.objectAt(1).inputFilter('');
      assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), oneTenArrayDig, 'Filter is empty and All rows are shown');
      await this.ModelsTablePageObject.filters.objectAt(1).inputFilter('invalid input');
      assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), ['No records to show'], 'All rows are filtered out and proper message is shown');
      assert.equal(this.ModelsTablePageObject.rows.objectAt(0).getCellColspans(), columns.length, 'cell with message has correct colspan');
      await this.ModelsTablePageObject.filters.objectAt(1).inputFilter('');
      await this.ModelsTablePageObject.filters.objectAt(1).inputFilter('One');
      assert.deepEqual(this.ModelsTablePageObject.getColumnCells(1), ['one'], 'Content is filtered correctly when sorting is not done');
      this.set('useFilteringByColumns', false);
      assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), oneTenArrayDig, 'Filtering by columns is ignored');
      assert.equal(this.ModelsTablePageObject.filters.length, 0, 'Columns filters are hidden');
    });
    (0, _qunit.test)('filtering by columns with custom functions', async function (assert) {
      const columns = (0, _f.generateColumns)(['index', 'someWord']);
      columns[0].filterFunction = signFilter;
      this.setProperties({
        useFilteringByColumns: true,
        columns,
        data: (0, _f.generateContent)(10, 1)
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table columns=columns data=data useFilteringByColumns=useFilteringByColumns}}
      */
      {
        id: "pPutvJv1",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"columns\",\"data\",\"useFilteringByColumns\"],[[24,[\"columns\"]],[24,[\"data\"]],[24,[\"useFilteringByColumns\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      await this.ModelsTablePageObject.filters.objectAt(0).inputFilter('=1');
      assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), ['1'], 'Content is filtered correctly (with "=1")');
      await this.ModelsTablePageObject.filters.objectAt(0).inputFilter('>5');
      assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), ['6', '7', '8', '9', '10'], 'Content is filtered correctly (with ">5")');
      await this.ModelsTablePageObject.filters.objectAt(0).inputFilter('<6');
      assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), ['1', '2', '3', '4', '5'], 'Content is filtered correctly (with "<6")');
    });
    (0, _qunit.test)('filtering by columns with custom functions and predefined filter options', async function (assert) {
      const columns = (0, _f.generateColumns)(['index', 'someWord']);
      columns[0].filterFunction = signFilter;
      columns[0].filterWithSelect = true;
      columns[0].predefinedFilterOptions = ['=1', '>5', '<6'];
      this.setProperties({
        useFilteringByColumns: true,
        columns,
        data: (0, _f.generateContent)(10, 1)
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table columns=columns data=data useFilteringByColumns=useFilteringByColumns}}
      */
      {
        id: "pPutvJv1",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"columns\",\"data\",\"useFilteringByColumns\"],[[24,[\"columns\"]],[24,[\"data\"]],[24,[\"useFilteringByColumns\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      await this.ModelsTablePageObject.filters.objectAt(0).selectFilter('=1');
      assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), ['1'], 'Content is filtered correctly (with "=1")');
      await this.ModelsTablePageObject.filters.objectAt(0).selectFilter('>5');
      assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), ['6', '7', '8', '9', '10'], 'Content is filtered correctly (with ">5")');
      await this.ModelsTablePageObject.filters.objectAt(0).selectFilter('<6');
      assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), ['1', '2', '3', '4', '5'], 'Content is filtered correctly (with "<6")');
    });
    (0, _qunit.test)('filtering with filterWithSelect (without predefinedFilterOptions)', async function (assert) {
      const columns = (0, _f.generateColumns)(['index', 'someWord']);
      columns[1].filterWithSelect = true;
      const data = (0, _f.generateContent)(10, 1);
      data[data.length - 1].someWord = '';
      this.setProperties({
        columns,
        data
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table columns=columns data=data}}
      */
      {
        id: "Z+X3QfSp",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"columns\",\"data\"],[[24,[\"columns\"]],[24,[\"data\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.ModelsTablePageObject.filters.objectAt(1).selectOptions.length, 10, 'Empty data-value was excluded');
      assert.deepEqual(this.ModelsTablePageObject.filters.objectAt(1).selectOptions, ['', ...data.mapBy('someWord').slice(0, -1)], 'Options for select are valid');
      await this.ModelsTablePageObject.filters.objectAt(1).selectFilter('one');
      assert.equal(this.ModelsTablePageObject.rows.length, 1, 'Only one row exist after filtering');
      this.set('data.firstObject.someWord', 'not a number');
      assert.equal(this.ModelsTablePageObject.filters.objectAt(1).selectValue, '', 'Filter is reverted to the default value');
      await this.ModelsTablePageObject.filters.objectAt(1).selectFilter('');
      assert.equal(this.ModelsTablePageObject.rows.length, 10, 'All rows are shown after clear filter');
    });
    (0, _qunit.test)('filtering with filterWithSelect (without predefinedFilterOptions), `sortFilterOptions` is true', async function (assert) {
      const columns = (0, _f.generateColumns)(['index', 'someWord']);
      columns[1].filterWithSelect = true;
      columns[1].sortFilterOptions = true;
      const data = (0, _f.generateContent)(10, 1);
      data[data.length - 1].someWord = '';
      const words = data.mapBy('someWord').sort();
      this.setProperties({
        columns,
        data
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table columns=columns data=data}}
      */
      {
        id: "Z+X3QfSp",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"columns\",\"data\"],[[24,[\"columns\"]],[24,[\"data\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      assert.deepEqual(this.ModelsTablePageObject.filters.objectAt(1).selectOptions, words, 'Options for select are valid');
      await this.ModelsTablePageObject.filters.objectAt(1).selectFilter('one');
      assert.equal(this.ModelsTablePageObject.rows.length, 1, 'Only one row exist after filtering');
    });
    (0, _qunit.test)('filtering with filterWithSelect (without predefinedFilterOptions), sort by property with boolean values', async function (assert) {
      const columns = (0, _f.generateColumns)(['index', 'rand']);
      columns[1].filterWithSelect = true;
      const data = (0, _f.generateContent)(10, 1);
      this.setProperties({
        columns,
        data
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table columns=columns data=data}}
      */
      {
        id: "Z+X3QfSp",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"columns\",\"data\"],[[24,[\"columns\"]],[24,[\"data\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.ModelsTablePageObject.rows.length, 10, '10 rows exist before filtering');
      await this.ModelsTablePageObject.filters.objectAt(1).selectFilter('true');
      assert.equal(this.ModelsTablePageObject.rows.length, 5, '5 rows exist after filtering');
      assert.deepEqual(this.ModelsTablePageObject.getColumnCells(1), ['true', 'true', 'true', 'true', 'true'], 'valid rows are shown');
      await this.ModelsTablePageObject.filters.objectAt(1).selectFilter('false');
      assert.equal(this.ModelsTablePageObject.rows.length, 5, '5 rows exist after filtering (2)');
      assert.deepEqual(this.ModelsTablePageObject.getColumnCells(1), ['false', 'false', 'false', 'false', 'false'], 'valid rows are shown (2)');
    });
    (0, _qunit.test)('filtering with filterWithSelect (with predefinedFilterOptions as primitives)', async function (assert) {
      const columns = (0, _f.generateColumns)(['index', 'someWord']);
      columns[1].filterWithSelect = true;
      columns[1].predefinedFilterOptions = ['one', 'two'];
      const data = (0, _f.generateContent)(10, 1);
      this.setProperties({
        columns,
        data
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table data=data columns=columns}}
      */
      {
        id: "1dKzPSCh",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"data\",\"columns\"],[[24,[\"data\"]],[24,[\"columns\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      assert.deepEqual(this.ModelsTablePageObject.filters.objectAt(1).selectOptions, ['', 'one', 'two'], 'Options for select are valid');
      await this.ModelsTablePageObject.filters.objectAt(1).selectFilter('one');
      assert.equal(this.ModelsTablePageObject.filters.objectAt(1).selectValue, 'one', 'Proper option is selected');
      assert.equal(this.ModelsTablePageObject.rows.length, 1, 'Only one row exist after filtering');
      this.set('data', (0, _f.generateContent)(9, 2));
      assert.equal(this.ModelsTablePageObject.filters.objectAt(1).selectValue, 'one', 'Filter is not reverted to the default value');
      assert.deepEqual(this.ModelsTablePageObject.filters.objectAt(1).selectOptions, ['', 'one', 'two'], 'Options for select are valid');
      await this.ModelsTablePageObject.filters.objectAt(1).selectFilter('');
      assert.equal(this.ModelsTablePageObject.rows.length, 9, 'All rows are shown after clear filter');
    });
    (0, _qunit.test)('filtering with filterWithSelect (with predefinedFilterOptions as objects)', async function (assert) {
      const columns = (0, _f.generateColumns)(['index', 'someWord']);
      columns[1].filterWithSelect = true;
      columns[1].predefinedFilterOptions = [{
        label: '1',
        value: 'one'
      }, {
        label: '2',
        value: 'two'
      }];
      const data = (0, _f.generateContent)(10, 1);
      this.setProperties({
        columns,
        data
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table data=data columns=columns}}
      */
      {
        id: "1dKzPSCh",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"data\",\"columns\"],[[24,[\"data\"]],[24,[\"columns\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      assert.deepEqual(this.ModelsTablePageObject.filters.objectAt(1).selectOptions, ['', '1', '2'], 'Options for select are valid');
      await this.ModelsTablePageObject.filters.objectAt(1).selectFilter('one');
      assert.equal(this.ModelsTablePageObject.filters.objectAt(1).selectValue, 'one', 'Proper option is selected');
      assert.equal(this.ModelsTablePageObject.rows.length, 1, 'Only one row exist after filtering');
      this.set('data', (0, _f.generateContent)(9, 2));
      assert.equal(this.ModelsTablePageObject.filters.objectAt(1).selectValue, 'one', 'Filter is not reverted to the default value');
      assert.deepEqual(this.ModelsTablePageObject.filters.objectAt(1).selectOptions, ['', '1', '2'], 'Options for select are valid');
      await this.ModelsTablePageObject.filters.objectAt(1).selectFilter('');
      assert.equal(this.ModelsTablePageObject.rows.length, 9, 'All rows are shown after clear filter');
    });
    (0, _qunit.test)('filtering with filterWithSelect (with predefinedFilterOptions as empty array)', async function (assert) {
      const columns = (0, _f.generateColumns)(['index', 'someWord']);
      columns[1].filterWithSelect = true;
      columns[1].predefinedFilterOptions = [];
      const data = (0, _f.generateContent)(10, 1);
      this.setProperties({
        columns,
        data
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table data=data columns=columns}}
      */
      {
        id: "1dKzPSCh",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"data\",\"columns\"],[[24,[\"data\"]],[24,[\"columns\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      assert.notOk(this.ModelsTablePageObject.filters.objectAt(1).selectFilterExists, 'Select-box for column with `filterWithSelect` does not exist if empty predefinedFilterOptions are given');
    });
    (0, _qunit.test)('filtering with filterWithSelect (with predefinedFilterOptions). `filterPlaceholder` is used', async function (assert) {
      const columns = (0, _f.generateColumns)(['index', 'someWord']);
      columns[1].filterWithSelect = true;
      columns[1].filterPlaceholder = 'placeholder';
      columns[1].predefinedFilterOptions = [{
        label: '1',
        value: 'one'
      }, {
        label: '2',
        value: 'two'
      }];
      const data = (0, _f.generateContent)(10, 1);
      this.setProperties({
        columns,
        data
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table data=data columns=columns}}
      */
      {
        id: "1dKzPSCh",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"data\",\"columns\"],[[24,[\"data\"]],[24,[\"columns\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.ModelsTablePageObject.filters.objectAt(1).selectPlaceholder, 'placeholder');
    });
    (0, _qunit.test)('filtering with filterWithSelect (without predefinedFilterOptions). `filterPlaceholder` is used', async function (assert) {
      const columns = (0, _f.generateColumns)(['index', 'someWord']);
      columns[1].filterWithSelect = true;
      columns[1].filterPlaceholder = 'placeholder';
      const data = (0, _f.generateContent)(10, 1);
      this.setProperties({
        columns,
        data
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table data=data columns=columns}}
      */
      {
        id: "1dKzPSCh",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"data\",\"columns\"],[[24,[\"data\"]],[24,[\"columns\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.ModelsTablePageObject.filters.objectAt(1).selectPlaceholder, 'placeholder');
    });
    (0, _qunit.test)('filtering with `filteredBy`', async function (assert) {
      const columns = (0, _f.generateColumns)(['index', 'index']);
      delete columns[0].propertyName;
      columns[0].filteredBy = 'index';
      this.setProperties({
        columns,
        data: (0, _f.generateContent)(10, 1),
        useFilteringByColumns: true
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table data=data columns=columns useFilteringByColumns=useFilteringByColumns}}
      */
      {
        id: "wTQPatVN",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"data\",\"columns\",\"useFilteringByColumns\"],[[24,[\"data\"]],[24,[\"columns\"]],[24,[\"useFilteringByColumns\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      await this.ModelsTablePageObject.filters.objectAt(1).inputFilter('1');
      assert.deepEqual(this.ModelsTablePageObject.getColumnCells(1), ['1', '10'], 'Content is filtered correctly');
      await this.ModelsTablePageObject.filters.objectAt(1).inputFilter('');
      assert.deepEqual(this.ModelsTablePageObject.getColumnCells(1), oneTenArrayDig, 'Filter is empty and All rows are shown');
    });
    (0, _qunit.test)('`filteredBy` has higher priority than `propertyName`', async function (assert) {
      const columns = (0, _f.generateColumns)(['someWord']);
      columns[0].filteredBy = 'index';
      this.setProperties({
        columns,
        data: (0, _f.generateContent)(10, 1)
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table data=data columns=columns}}
      */
      {
        id: "1dKzPSCh",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"data\",\"columns\"],[[24,[\"data\"]],[24,[\"columns\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      await this.ModelsTablePageObject.doGlobalFilter('2');
      assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), ['two'], 'Content is filtered correctly (global filter)');
      await this.ModelsTablePageObject.doGlobalFilter('');
      await this.ModelsTablePageObject.filters.objectAt(0).inputFilter('2');
      assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), ['two'], 'Content is filtered correctly (filter by column)');
    });
    (0, _qunit.test)('clear filters using icons', async function (assert) {
      const columns = (0, _f.generateColumns)(['index', 'someWord']);
      columns[1].filterWithSelect = true;
      const data = (0, _f.generateContent)(10, 1);
      this.setProperties({
        columns,
        data
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table data=data columns=columns}}
      */
      {
        id: "1dKzPSCh",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"data\",\"columns\"],[[24,[\"data\"]],[24,[\"columns\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      await this.ModelsTablePageObject.doGlobalFilter(2);
      assert.equal(this.ModelsTablePageObject.rows.length, 1, 'Global filter is used');
      await this.ModelsTablePageObject.clearGlobalFilter();
      assert.equal(this.ModelsTablePageObject.rows.length, data.length, 'Global filter is clear (1)');
      await this.ModelsTablePageObject.doGlobalFilter(2);
      assert.equal(this.ModelsTablePageObject.rows.length, 1, 'Global filter is used');
      await this.ModelsTablePageObject.clearAllFilters();
      assert.equal(this.ModelsTablePageObject.rows.length, data.length, 'Global filter is clear (2)');
      await this.ModelsTablePageObject.filters.objectAt(0).inputFilter(2);
      assert.equal(this.ModelsTablePageObject.rows.length, 1, 'Filter for first column is used');
      await this.ModelsTablePageObject.clearAllFilters();
      assert.equal(this.ModelsTablePageObject.rows.length, data.length, 'Filter for first column is clear (1)');
      await this.ModelsTablePageObject.filters.objectAt(0).inputFilter(2);
      assert.equal(this.ModelsTablePageObject.rows.length, 1, 'Filter for first column is used');
      await this.ModelsTablePageObject.clearAllFilters();
      assert.equal(this.ModelsTablePageObject.rows.length, data.length, 'Filter for first column is clear (2)');
      await this.ModelsTablePageObject.filters.objectAt(1).selectFilter('one');
      assert.equal(this.ModelsTablePageObject.rows.length, 1, 'Filter for second column is used');
      await this.ModelsTablePageObject.filters.objectAt(1).clearFilter();
      assert.equal(this.ModelsTablePageObject.rows.length, data.length, 'Filter for second column is clear (1)');
      await this.ModelsTablePageObject.filters.objectAt(1).selectFilter('one');
      assert.equal(this.ModelsTablePageObject.rows.length, 1, 'Filter for second column is used');
      await this.ModelsTablePageObject.clearAllFilters();
      assert.equal(this.ModelsTablePageObject.rows.length, data.length, 'Filter for second column is clear (2)');
      this.ModelsTablePageObject.doGlobalFilter(2);
      await this.ModelsTablePageObject.filters.objectAt(0).inputFilter(2);
      await this.ModelsTablePageObject.filters.objectAt(1).selectFilter('two');
      assert.equal(this.ModelsTablePageObject.rows.length, 1, 'All filters are used, 1 row shown');
      await this.ModelsTablePageObject.clearAllFilters();
      assert.equal(this.ModelsTablePageObject.rows.length, data.length, 'All filters are clear');
    });
    (0, _qunit.test)('all custom messages', async function (assert) {
      const messages = {
        searchLabel: 'Se@rch:',
        'columns-title': 'ColumnZ',
        'columns-showAll': 'Show Me All!',
        'columns-hideAll': 'Hide All!',
        'columns-restoreDefaults': 'Restore My Columns',
        tableSummary: 'Now are showing %@ - %@ of %@',
        allColumnsAreHidden: 'No visible columns, dude!',
        noDataToShow: 'No data. Sorry, bro...',
        editRowButtonLabel: 'Ed1t',
        saveRowButtonLabel: 'S@ve',
        cancelRowButtonLabel: 'Canc3l'
      };
      const messages2 = {
        searchLabel: 'SEARCH',
        'columns-title': 'COLUMNS',
        'columns-showAll': 'SHOW All',
        'columns-hideAll': 'HIDE ALL',
        'columns-restoreDefaults': 'RESTORE MY COLUMNS',
        tableSummary: 'DISPLAY %@ - %@ OF %@',
        allColumnsAreHidden: 'NO COLUMNS',
        noDataToShow: 'NO DATA',
        editRowButtonLabel: 'EDIT',
        saveRowButtonLabel: 'SAVE',
        cancelRowButtonLabel: 'CANCEL'
      };
      this.setProperties({
        columns: (0, _f.generateColumns)(['index', 'reversedIndex']),
        data: (0, _f.generateContent)(10, 1),
        themeInstance: (0, _getThemeClass.default)(this).create({
          messages
        })
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table data=data columns=columns themeInstance=themeInstance}}
      */
      {
        id: "YO/pccLz",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"data\",\"columns\",\"themeInstance\"],[[24,[\"data\"]],[24,[\"columns\"]],[24,[\"themeInstance\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.ModelsTablePageObject.summary, 'Now are showing 1 - 10 of 10 Clear all filters', 'Summary is valid');
      assert.equal(this.ModelsTablePageObject.columnsDropdownLabel, messages['columns-title'], 'Columns-dropdown title is valid');
      await this.ModelsTablePageObject.toggleColumnDropDown();
      assert.equal(this.ModelsTablePageObject.columnsDropDown.objectAt(0).label, messages['columns-showAll'], 'Columns-dropdown "showAll" is valid');
      assert.equal(this.ModelsTablePageObject.columnsDropDown.objectAt(1).label, messages['columns-hideAll'], 'Columns-dropdown "hideAll" is valid');
      assert.equal(this.ModelsTablePageObject.columnsDropDown.objectAt(2).label, messages['columns-restoreDefaults'], 'Columns-dropdown "restoreDefaults" is valid');
      assert.equal(this.ModelsTablePageObject.globalFilterLabel, messages.searchLabel, 'Global-search label is valid');
      await this.ModelsTablePageObject.columnsDropDown.objectAt(1).click();
      assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), [messages.allColumnsAreHidden], 'Message about all hidden columns is valid');
      await this.ModelsTablePageObject.columnsDropDown.objectAt(0).click();
      await this.ModelsTablePageObject.doGlobalFilter('invalid string');
      assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), [messages.noDataToShow], 'Message about no data is valid');
      this.set('themeInstance.messages', messages2);
      await this.ModelsTablePageObject.doGlobalFilter('');
      assert.equal(this.ModelsTablePageObject.summary, 'DISPLAY 1 - 10 OF 10', 'Summary is valid (2)');
      assert.equal(this.ModelsTablePageObject.columnsDropdownLabel, messages2['columns-title'], 'Columns-dropdown title is valid (2)');
      assert.equal(this.ModelsTablePageObject.columnsDropDown.objectAt(0).label, messages2['columns-showAll'], 'Columns-dropdown "showAll" is valid (2)');
      assert.equal(this.ModelsTablePageObject.columnsDropDown.objectAt(1).label, messages2['columns-hideAll'], 'Columns-dropdown "hideAll" is valid (2)');
      assert.equal(this.ModelsTablePageObject.columnsDropDown.objectAt(2).label, messages2['columns-restoreDefaults'], 'Columns-dropdown "restoreDefaults" is valid (2)');
      assert.equal(this.ModelsTablePageObject.globalFilterLabel, messages2.searchLabel, 'Global-search label is valid (2)');
      await this.ModelsTablePageObject.columnsDropDown.objectAt(1).click();
      assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), [messages2.allColumnsAreHidden], 'Message about all hidden columns is valid (2)');
      await this.ModelsTablePageObject.columnsDropDown.objectAt(0).click();
      await this.ModelsTablePageObject.doGlobalFilter('invalid string');
      assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), [messages2.noDataToShow], 'Message about no data is valid (2)');
    });
    (0, _qunit.test)('some custom messages', async function (assert) {
      const messages = {
        searchLabel: 'Se@rch:',
        'columns-title': 'ColumnZ',
        'columns-showAll': 'Show Me All!',
        'columns-hideAll': 'Hide All!',
        'columns-restoreDefaults': 'Restore My Columns',
        allColumnsAreHidden: 'No visible columns, dude!',
        noDataToShow: 'No data. Sorry, bro...',
        editRowButtonLabel: 'Ed1t',
        saveRowButtonLabel: 'S@ve',
        cancelRowButtonLabel: 'Canc3l'
      };
      assert.notOk(messages.tableSummary, 'tableSummary is not set in the custom messages');
      this.setProperties({
        columns: (0, _f.generateColumns)(['index', 'reversedIndex']),
        data: (0, _f.generateContent)(10, 1),
        themeInstance: (0, _getThemeClass.default)(this).create({
          messages
        })
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table data=data columns=columns themeInstance=themeInstance}}
      */
      {
        id: "YO/pccLz",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"data\",\"columns\",\"themeInstance\"],[[24,[\"data\"]],[24,[\"columns\"]],[24,[\"themeInstance\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.ModelsTablePageObject.summary, 'Show 1 - 10 of 10 Clear all filters', 'Summary is valid');
    });
    (0, _qunit.test)('custom icons', async function (assert) {
      const customIcons = {
        'sort-asc': 'sort-asc',
        'sort-desc': 'sort-desc',
        'column-visible': 'column-visible',
        'column-hidden': 'column-hidden',
        'nav-first': 'nav-first',
        'nav-prev': 'nav-prev',
        'nav-next': 'nav-next',
        'nav-last': 'nav-last'
      };
      this.setProperties({
        columns: (0, _f.generateColumns)(['index', 'reversedIndex']),
        data: (0, _f.generateContent)(10, 1),
        themeInstance: (0, _getThemeClass.default)(this).create(customIcons)
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table data=data columns=columns themeInstance=themeInstance}}
      */
      {
        id: "YO/pccLz",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"data\",\"columns\",\"themeInstance\"],[[24,[\"data\"]],[24,[\"columns\"]],[24,[\"themeInstance\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      await this.ModelsTablePageObject.sorting.objectAt(0).click();
      assert.equal(this.element.querySelectorAll('.sort-asc').length, 1, 'sort asc 1 column');
      await this.ModelsTablePageObject.sorting.objectAt(1).click();
      await this.ModelsTablePageObject.sorting.objectAt(1).click();
      assert.equal(this.element.querySelectorAll('.sort-asc').length, 1, 'sort asc 1 column');
      assert.equal(this.element.querySelectorAll('.sort-desc').length, 1, 'sort desc 1 column');
      assert.equal(this.element.querySelectorAll('.column-visible').length, 2, 'all columns are visible');
      await this.ModelsTablePageObject.toggleColumnDropDown();
      await this.ModelsTablePageObject.columnsDropDown.objectAt(3).click();
      assert.equal(this.element.querySelectorAll('.column-visible').length, 1, '1 column is visible');
      assert.equal(this.element.querySelectorAll('.column-hidden').length, 1, '1 column is hidden');
      assert.ok(this.ModelsTablePageObject.navigation.btns.objectAt(0).icon.includes('nav-first'), 'First-button has valid class');
      assert.ok(this.ModelsTablePageObject.navigation.btns.objectAt(1).icon.includes('nav-prev'), 'Prev-button has valid class');
      assert.ok(this.ModelsTablePageObject.navigation.btns.objectAt(2).icon.includes('nav-next'), 'Next-button has valid class');
      assert.ok(this.ModelsTablePageObject.navigation.btns.objectAt(3).icon.includes('nav-last'), 'Last-button has valid class');
    });
    (0, _qunit.test)('columns column cell classes', async function (assert) {
      const columns = (0, _f.generateColumns)(['index', 'reversedIndex']);
      columns[0].className = 'custom-column-class';
      this.setProperties({
        columns,
        data: (0, _f.generateContent)(10, 1)
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table columns=columns data=data}}
      */
      {
        id: "Z+X3QfSp",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"columns\",\"data\"],[[24,[\"columns\"]],[24,[\"data\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.querySelectorAll('tbody .custom-column-class').length, 10, 'Custom column class exists on each column cell');
    });
    (0, _qunit.test)('column title auto generation', async function (assert) {
      const columns = (0, _f.generateColumns)(['index', 'reversedIndex']);
      columns.setEach('title', null);
      this.setProperties({
        columns,
        data: (0, _f.generateContent)(10, 1)
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table columns=columns data=data}}
      */
      {
        id: "Z+X3QfSp",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"columns\",\"data\"],[[24,[\"columns\"]],[24,[\"data\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      assert.deepEqual(this.ModelsTablePageObject.sorting.mapBy('title'), ['Index', 'Reversed index']);
    });
    (0, _qunit.test)('`sortedBy` has higher priority than `propertyName`', async function (assert) {
      const columns = (0, _f.generateColumns)(['someWord', 'index']);
      columns[0].sortedBy = 'index';
      this.setProperties({
        columns,
        data: (0, _f.generateContent)(10, 1)
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table columns=columns data=data}}
      */
      {
        id: "Z+X3QfSp",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"columns\",\"data\"],[[24,[\"columns\"]],[24,[\"data\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      await this.ModelsTablePageObject.sorting.objectAt(1).click();
      assert.deepEqual(this.ModelsTablePageObject.getColumnCells(1), oneTenArrayDig, 'Content is valid (sorting by `index` desc)');
      await this.ModelsTablePageObject.sorting.objectAt(1).click();
      assert.deepEqual(this.ModelsTablePageObject.getColumnCells(1), tenOneArrayDig, 'Content is valid (sorting by `index` asc)');
    });
    (0, _qunit.test)('sorting , custom sort function (multi `true`)', async function (assert) {
      const columns = (0, _f.generateColumns)(['index', 'index2']);

      columns[0].sortFunction = function sortEvenFirst(i1, i2) {
        if (i1 % 2 === 0) {
          if (i2 % 2 === 0) {
            return Ember.compare(i1, i2);
          }

          return -1;
        } else {
          if (i2 % 2 === 0) {
            return 1;
          }

          return Ember.compare(i1, i2);
        }
      };

      this.setProperties({
        columns: columns,
        data: (0, _f.generateContent)(10, 1)
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table columns=columns data=data}}
      */
      {
        id: "Z+X3QfSp",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"columns\",\"data\"],[[24,[\"columns\"]],[24,[\"data\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      await this.ModelsTablePageObject.sorting.objectAt(0).click();
      assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), ['2', '4', '6', '8', '10', '1', '3', '5', '7', '9'], 'Content is valid (sorting 1st column asc)');
      await this.ModelsTablePageObject.sorting.objectAt(0).click();
      assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), ['9', '7', '5', '3', '1', '10', '8', '6', '4', '2'], 'Content is valid (sorting 1st column desc)');
      await this.ModelsTablePageObject.sorting.objectAt(0).click();
      await this.ModelsTablePageObject.sorting.objectAt(1).click();
      assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), oneTenArrayDig, 'Content is valid (sorting 1st column asc) - restore defaults');
      assert.deepEqual(this.ModelsTablePageObject.getColumnCells(1), ['1', '1', '2', '2', '3', '3', '4', '4', '5', '5'], 'Content is valid (sorting 2nd column asc) - restore defaults');
      await this.ModelsTablePageObject.sorting.objectAt(0).click();
      await this.ModelsTablePageObject.sorting.objectAt(0).click();
      assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), ['3', '4', '7', '8', '1', '2', '5', '6', '9', '10'], 'Content is valid (sorting 1st column desc)');
      assert.deepEqual(this.ModelsTablePageObject.getColumnCells(1), ['2', '2', '4', '4', '1', '1', '3', '3', '5', '5'], 'Content is valid (sorting 2nd column asc)');
    });
    (0, _qunit.test)('sorting, custom sort function (multi `false`)', async function (assert) {
      const columns = (0, _f.generateColumns)(['index', 'index2']);

      columns[0].sortFunction = function sortEvenFirst(i1, i2) {
        if (i1 % 2 === 0) {
          if (i2 % 2 === 0) {
            return Ember.compare(i1, i2);
          }

          return -1;
        } else {
          if (i2 % 2 === 0) {
            return 1;
          }

          return Ember.compare(i1, i2);
        }
      };

      this.setProperties({
        columns: columns,
        data: (0, _f.generateContent)(10, 1)
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table columns=columns data=data multipleColumnsSorting=false}}
      */
      {
        id: "/UMqb4C6",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"columns\",\"data\",\"multipleColumnsSorting\"],[[24,[\"columns\"]],[24,[\"data\"]],false]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      await this.ModelsTablePageObject.sorting.objectAt(0).click();
      assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), ['2', '4', '6', '8', '10', '1', '3', '5', '7', '9'], 'Content is valid (sorting 1st column asc)');
      await this.ModelsTablePageObject.sorting.objectAt(0).click();
      assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), ['9', '7', '5', '3', '1', '10', '8', '6', '4', '2'], 'Content is valid (sorting 1st column desc)');
      await this.ModelsTablePageObject.sorting.objectAt(0).click();
      await this.ModelsTablePageObject.sorting.objectAt(1).click();
      assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), oneTenArrayDig, 'Content is valid (sorting 1st column asc) - restore defaults');
      assert.deepEqual(this.ModelsTablePageObject.getColumnCells(1), ['1', '1', '2', '2', '3', '3', '4', '4', '5', '5'], 'Content is valid (sorting 2nd column asc) - restore defaults');
      await this.ModelsTablePageObject.sorting.objectAt(0).click();
      await this.ModelsTablePageObject.sorting.objectAt(0).click();
      assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), ['9', '7', '5', '3', '1', '10', '8', '6', '4', '2'], 'Content is valid (sorting 1st column desc)');
      assert.deepEqual(this.ModelsTablePageObject.getColumnCells(1), ['5', '4', '3', '2', '1', '5', '4', '3', '2', '1'], 'Content is valid (sorting 2nd reverted)');
    });
    (0, _qunit.test)('column is sorted with `sortedBy` when `propertyName` is not provided', async function (assert) {
      const columns = (0, _f.generateColumns)(['index', 'index2']);
      columns[1].sortedBy = 'index';
      delete columns[1].propertyName;
      columns[1].component = 'custom-concat';
      this.setProperties({
        columns,
        data: (0, _f.generateContent)(3, 1).reverse()
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table columns=columns data=data multipleColumnsSorting=false}}
      */
      {
        id: "/UMqb4C6",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"columns\",\"data\",\"multipleColumnsSorting\"],[[24,[\"columns\"]],[24,[\"data\"]],false]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      await this.ModelsTablePageObject.sorting.objectAt(1).click();
      assert.deepEqual(this.ModelsTablePageObject.getColumnCells(1), ['1+3', '2+2', '3+1'], 'Content is sorted by `index`');
    });
    (0, _qunit.test)('table is sorted by first column with `propertyName` or `sortedBy` by default, according to sortDirection', async function (assert) {
      const data = (0, _f.generateContent)(10, 1).reverse();
      const columns = (0, _f.generateColumns)(['index']);
      columns[0].sortPrecedence = 0;
      columns[0].sortDirection = 'asc';
      this.setProperties({
        data,
        columns
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table data=data columns=columns}}
      */
      {
        id: "1dKzPSCh",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"data\",\"columns\"],[[24,[\"data\"]],[24,[\"columns\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), oneTenArrayDig, 'Content is sorted correctly');
    });
    (0, _qunit.test)('table is not sorted by first column with `propertyName` or `sortedBy` by default', async function (assert) {
      const data = (0, _f.generateContent)(10, 1).reverse();
      const columns = (0, _f.generateColumns)(['indexWithHtml', 'index']);
      delete columns[0].propertyName;
      this.setProperties({
        data,
        columns
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table data=data columns=columns}}
      */
      {
        id: "1dKzPSCh",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"data\",\"columns\"],[[24,[\"data\"]],[24,[\"columns\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      assert.deepEqual(this.ModelsTablePageObject.getColumnCells(1), tenOneArrayDig, 'Content is sorted correctly');
    });
    (0, _qunit.test)('visible page numbers', async function (assert) {
      this.setProperties({
        data: (0, _f.generateContent)(10, 1),
        columns: (0, _f.generateColumns)(['index']),
        currentPageNumber: 1,
        useNumericPagination: true,
        pageSize: 1
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table data=data columns=columns currentPageNumber=currentPageNumber pageSize=pageSize useNumericPagination=useNumericPagination}}
      */
      {
        id: "RB1YEV9x",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"data\",\"columns\",\"currentPageNumber\",\"pageSize\",\"useNumericPagination\"],[[24,[\"data\"]],[24,[\"columns\"]],[24,[\"currentPageNumber\"]],[24,[\"pageSize\"]],[24,[\"useNumericPagination\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      Ember.A([{
        currentPageNumber: 1,
        visiblePageNumbers: [{
          label: 1,
          isLink: true,
          isActive: true
        }, {
          label: 2,
          isLink: true,
          isActive: false
        }, {
          label: '...',
          isLink: false,
          isActive: false
        }, {
          label: 10,
          isLink: true,
          isActive: false
        }]
      }, {
        currentPageNumber: 2,
        visiblePageNumbers: [{
          label: 1,
          isLink: true,
          isActive: false
        }, {
          label: 2,
          isLink: true,
          isActive: true
        }, {
          label: 3,
          isLink: true,
          isActive: false
        }, {
          label: '...',
          isLink: false,
          isActive: false
        }, {
          label: 10,
          isLink: true,
          isActive: false
        }]
      }, {
        currentPageNumber: 3,
        visiblePageNumbers: [{
          label: 1,
          isLink: true,
          isActive: false
        }, {
          label: 2,
          isLink: true,
          isActive: false
        }, {
          label: 3,
          isLink: true,
          isActive: true
        }, {
          label: 4,
          isLink: true,
          isActive: false
        }, {
          label: '...',
          isLink: false,
          isActive: false
        }, {
          label: 10,
          isLink: true,
          isActive: false
        }]
      }, {
        currentPageNumber: 4,
        visiblePageNumbers: [{
          label: 1,
          isLink: true,
          isActive: false
        }, {
          label: '...',
          isLink: false,
          isActive: false
        }, {
          label: 3,
          isLink: true,
          isActive: false
        }, {
          label: 4,
          isLink: true,
          isActive: true
        }, {
          label: 5,
          isLink: true,
          isActive: false
        }, {
          label: '...',
          isLink: false,
          isActive: false
        }, {
          label: 10,
          isLink: true,
          isActive: false
        }]
      }, {
        currentPageNumber: 5,
        visiblePageNumbers: [{
          label: 1,
          isLink: true,
          isActive: false
        }, {
          label: '...',
          isLink: false,
          isActive: false
        }, {
          label: 4,
          isLink: true,
          isActive: false
        }, {
          label: 5,
          isLink: true,
          isActive: true
        }, {
          label: 6,
          isLink: true,
          isActive: false
        }, {
          label: '...',
          isLink: false,
          isActive: false
        }, {
          label: 10,
          isLink: true,
          isActive: false
        }]
      }, {
        currentPageNumber: 6,
        visiblePageNumbers: [{
          label: 1,
          isLink: true,
          isActive: false
        }, {
          label: '...',
          isLink: false,
          isActive: false
        }, {
          label: 5,
          isLink: true,
          isActive: false
        }, {
          label: 6,
          isLink: true,
          isActive: true
        }, {
          label: 7,
          isLink: true,
          isActive: false
        }, {
          label: '...',
          isLink: false,
          isActive: false
        }, {
          label: 10,
          isLink: true,
          isActive: false
        }]
      }, {
        currentPageNumber: 7,
        visiblePageNumbers: [{
          label: 1,
          isLink: true,
          isActive: false
        }, {
          label: '...',
          isLink: false,
          isActive: false
        }, {
          label: 6,
          isLink: true,
          isActive: false
        }, {
          label: 7,
          isLink: true,
          isActive: true
        }, {
          label: 8,
          isLink: true,
          isActive: false
        }, {
          label: '...',
          isLink: false,
          isActive: false
        }, {
          label: 10,
          isLink: true,
          isActive: false
        }]
      }, {
        currentPageNumber: 8,
        visiblePageNumbers: [{
          label: 1,
          isLink: true,
          isActive: false
        }, {
          label: '...',
          isLink: false,
          isActive: false
        }, {
          label: 7,
          isLink: true,
          isActive: false
        }, {
          label: 8,
          isLink: true,
          isActive: true
        }, {
          label: 9,
          isLink: true,
          isActive: false
        }, {
          label: 10,
          isLink: true,
          isActive: false
        }]
      }, {
        currentPageNumber: 9,
        visiblePageNumbers: [{
          label: 1,
          isLink: true,
          isActive: false
        }, {
          label: '...',
          isLink: false,
          isActive: false
        }, {
          label: 8,
          isLink: true,
          isActive: false
        }, {
          label: 9,
          isLink: true,
          isActive: true
        }, {
          label: 10,
          isLink: true,
          isActive: false
        }]
      }, {
        currentPageNumber: 10,
        visiblePageNumbers: [{
          label: 1,
          isLink: true,
          isActive: false
        }, {
          label: '...',
          isLink: false,
          isActive: false
        }, {
          label: 9,
          isLink: true,
          isActive: false
        }, {
          label: 10,
          isLink: true,
          isActive: true
        }]
      }]).forEach(test => {
        this.set('currentPageNumber', test.currentPageNumber);
        assert.deepEqual(this.ModelsTablePageObject.navigation.navigationButtons, Ember.A(test.visiblePageNumbers).mapBy('label').map(c => `${c}`), `10 pages, active is ${test.currentPageNumber}`);
      }, this);
      this.set('data', (0, _f.generateContent)(10, 1));
      this.set('pageSize', 10);
      assert.deepEqual(this.ModelsTablePageObject.navigation.navigationButtons, ['1'], 'Only 1 page');
    });
    (0, _qunit.test)('visible page numbers with #collapseNumPaginationForPagesCount', async function (assert) {
      this.set('data', (0, _f.generateContent)(40, 1));
      this.set('columns', (0, _f.generateColumns)(['index']));
      this.set('collapseNumPaginationForPagesCount', 4);
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table data=data columns=columns useNumericPagination=true collapseNumPaginationForPagesCount=collapseNumPaginationForPagesCount}}
      */
      {
        id: "DZAbFxRP",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"data\",\"columns\",\"useNumericPagination\",\"collapseNumPaginationForPagesCount\"],[[24,[\"data\"]],[24,[\"columns\"]],true,[24,[\"collapseNumPaginationForPagesCount\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      assert.deepEqual(this.ModelsTablePageObject.numericNavigation.mapBy('text'), ['1', '2', '3', '4']);
      this.set('collapseNumPaginationForPagesCount', 1);
      assert.deepEqual(this.ModelsTablePageObject.numericNavigation.mapBy('text'), ['1', '2', '...', '4']);
    });
    (0, _qunit.test)('#event on user interaction (filtering by column)', async function (assert) {
      this.setProperties({
        columns: (0, _f.generateColumns)(['index', 'someWord']),
        data: (0, _f.generateContent)(10, 1),
        displayDataChangedAction: 'displayDataChanged'
      });

      this.actions.displayDataChanged = function (data) {
        assert.deepEqual(data.columnFilters, {
          someWord: 'One'
        });
        assert.deepEqual(data.columns, [{
          propertyName: 'index',
          filterField: 'index',
          sortField: 'index',
          filterString: '',
          sorting: 'none'
        }, {
          propertyName: 'someWord',
          filterField: 'someWord',
          sortField: 'someWord',
          filterString: 'One',
          sorting: 'none'
        }]);
      };

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table columns=columns data=data displayDataChangedAction=(action "displayDataChanged")}}
      */
      {
        id: "tAqkDJuA",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"columns\",\"data\",\"displayDataChangedAction\"],[[24,[\"columns\"]],[24,[\"data\"]],[28,\"action\",[[23,0,[]],\"displayDataChanged\"],null]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      await this.ModelsTablePageObject.filters.objectAt(1).inputFilter('One');
    });
    (0, _qunit.test)('#event on user interaction (global filtering))', async function (assert) {
      this.setProperties({
        columns: (0, _f.generateColumns)(['index', 'someWord']),
        data: (0, _f.generateContent)(10, 1)
      });

      this.actions.displayDataChanged = function (data) {
        assert.equal(data.filterString, 'One');
      };

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table columns=columns data=data displayDataChangedAction=(action "displayDataChanged")}}
      */
      {
        id: "tAqkDJuA",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"columns\",\"data\",\"displayDataChangedAction\"],[[24,[\"columns\"]],[24,[\"data\"]],[28,\"action\",[[23,0,[]],\"displayDataChanged\"],null]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      await this.ModelsTablePageObject.doGlobalFilter('One');
    });
    (0, _qunit.test)('#event on user interaction (sorting)', async function (assert) {
      this.setProperties({
        columns: (0, _f.generateColumns)(['index', 'someWord']),
        data: (0, _f.generateContent)(10, 1)
      });

      this.actions.displayDataChanged = function (data) {
        assert.deepEqual(data.sort, ['index:asc']);
        assert.deepEqual(data.columns, [{
          propertyName: 'index',
          filterField: 'index',
          sortField: 'index',
          filterString: '',
          sorting: 'asc'
        }, {
          propertyName: 'someWord',
          filterField: 'someWord',
          sortField: 'someWord',
          filterString: '',
          sorting: 'none'
        }]);
      };

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table columns=columns data=data displayDataChangedAction=(action "displayDataChanged")}}
      */
      {
        id: "tAqkDJuA",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"columns\",\"data\",\"displayDataChangedAction\"],[[24,[\"columns\"]],[24,[\"data\"]],[28,\"action\",[[23,0,[]],\"displayDataChanged\"],null]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      await this.ModelsTablePageObject.sorting.objectAt(0).click();
    });
    (0, _qunit.test)('#event on user interaction (expanding rows)', async function (assert) {
      const columns = (0, _f.generateColumns)(['id']);
      const records = (0, _f.generateContent)(30, 1);
      columns.splice(0, 0, {
        component: 'expand-toggle',
        mayBeHidden: false
      });
      this.setProperties({
        columns,
        data: records
      });

      this.actions.displayDataChanged = function (data) {
        assert.deepEqual(data.expandedItems, [records[0]]);
      };

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table columns=columns data=data displayDataChangedAction=(action "displayDataChanged") expandedRowComponent=(component "expanded-row")}}
      */
      {
        id: "Qyf1YTDP",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"columns\",\"data\",\"displayDataChangedAction\",\"expandedRowComponent\"],[[24,[\"columns\"]],[24,[\"data\"]],[28,\"action\",[[23,0,[]],\"displayDataChanged\"],null],[28,\"component\",[\"expanded-row\"],null]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      await this.ModelsTablePageObject.rows.objectAt(0).expand();
    });
    (0, _qunit.test)('#event on user interaction (selecting rows)', async function (assert) {
      const records = (0, _f.generateContent)(30, 1);
      this.setProperties({
        columns: (0, _f.generateColumns)(['id']),
        data: records
      });

      this.actions.displayDataChanged = function (data) {
        assert.deepEqual(data.selectedItems, [records[0]]);
      };

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table columns=columns data=data displayDataChangedAction=(action "displayDataChanged")}}
      */
      {
        id: "tAqkDJuA",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"columns\",\"data\",\"displayDataChangedAction\"],[[24,[\"columns\"]],[24,[\"data\"]],[28,\"action\",[[23,0,[]],\"displayDataChanged\"],null]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      await this.ModelsTablePageObject.rows.objectAt(0).click();
    });
    (0, _qunit.test)('#event on user interaction (clear all filters)', async function (assert) {
      assert.expect(6);
      const calls = [// after filter by first column
      {
        filterString: '',
        columnFilters: {
          id: '1'
        }
      }, // after global filter
      {
        filterString: '1',
        columnFilters: {
          id: '1'
        }
      }, // after clear all this.ModelsTablePageObject.filters
      {
        filterString: '',
        columnFilters: {}
      }];
      let indx = 0;
      this.setProperties({
        columns: (0, _f.generateColumns)(['id']),
        data: (0, _f.generateContent)(30, 1)
      });

      this.actions.displayDataChanged = function (settings) {
        const call = calls[indx];
        assert.equal(call.filterString, settings.filterString, `#${indx + 1}. filterString`);
        assert.deepEqual(call.columnFilters, settings.columnFilters, `#${indx + 1}. columnFilters`);
        indx++;
      };

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table columns=columns data=data displayDataChangedAction=(action "displayDataChanged")}}
      */
      {
        id: "tAqkDJuA",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"columns\",\"data\",\"displayDataChangedAction\"],[[24,[\"columns\"]],[24,[\"data\"]],[28,\"action\",[[23,0,[]],\"displayDataChanged\"],null]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      await this.ModelsTablePageObject.filters.objectAt(0).inputFilter(1);
      await this.ModelsTablePageObject.doGlobalFilter(1);
      await this.ModelsTablePageObject.clearAllFilters();
    });
    (0, _qunit.test)('#event on user interaction (toggle all columns visibility)', async function (assert) {
      assert.expect(2);
      const expects = [[{
        propertyName: 'index',
        isHidden: true,
        mayBeHidden: true
      }, {
        propertyName: 'reversedIndex',
        isHidden: true,
        mayBeHidden: true
      }], [{
        propertyName: 'index',
        isHidden: false,
        mayBeHidden: true
      }, {
        propertyName: 'reversedIndex',
        isHidden: false,
        mayBeHidden: true
      }]];
      let i = 0;
      this.setProperties({
        columns: (0, _f.generateColumns)(['index', 'reversedIndex']),
        data: (0, _f.generateContent)(10, 1)
      });

      this.actions.onVisibilityChange = function (data) {
        assert.deepEqual(data, expects[i++]);
      };

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table columns=columns data=data columnsVisibilityChangedAction=(action "onVisibilityChange")}}
      */
      {
        id: "bnQ8GVmZ",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"columns\",\"data\",\"columnsVisibilityChangedAction\"],[[24,[\"columns\"]],[24,[\"data\"]],[28,\"action\",[[23,0,[]],\"onVisibilityChange\"],null]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      await this.ModelsTablePageObject.toggleColumnDropDown();
      await this.ModelsTablePageObject.columnsDropDown.objectAt(1).click(); // hide all

      await this.ModelsTablePageObject.columnsDropDown.objectAt(0).click(); // show all
    });
    (0, _qunit.test)('#event on user interaction (toggle single column visibility)', async function (assert) {
      assert.expect(2);
      const expects = [[{
        propertyName: 'index',
        isHidden: true,
        mayBeHidden: true
      }, {
        propertyName: 'reversedIndex',
        isHidden: false,
        mayBeHidden: true
      }], [{
        propertyName: 'index',
        isHidden: false,
        mayBeHidden: true
      }, {
        propertyName: 'reversedIndex',
        isHidden: false,
        mayBeHidden: true
      }]];
      let i = 0;
      this.setProperties({
        columns: (0, _f.generateColumns)(['index', 'reversedIndex']),
        data: (0, _f.generateContent)(10, 1)
      });

      this.actions.onVisibilityChange = function (data) {
        assert.deepEqual(data, expects[i++]);
      };

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table columns=columns data=data columnsVisibilityChangedAction=(action "onVisibilityChange")}}
      */
      {
        id: "bnQ8GVmZ",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"columns\",\"data\",\"columnsVisibilityChangedAction\"],[[24,[\"columns\"]],[24,[\"data\"]],[28,\"action\",[[23,0,[]],\"onVisibilityChange\"],null]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      await this.ModelsTablePageObject.toggleColumnDropDown();
      await this.ModelsTablePageObject.columnsDropDown.objectAt(3).click(); // hide 1st column

      await this.ModelsTablePageObject.columnsDropDown.objectAt(3).click(); // show 1st column
    });
    (0, _qunit.test)('#event on user interaction (restore default columns visibility)', async function (assert) {
      assert.expect(3);
      const expects = [[{
        propertyName: 'index',
        isHidden: false,
        mayBeHidden: true
      }, {
        propertyName: 'reversedIndex',
        isHidden: false,
        mayBeHidden: true
      }], [{
        propertyName: 'index',
        isHidden: true,
        mayBeHidden: true
      }, {
        propertyName: 'reversedIndex',
        isHidden: false,
        mayBeHidden: true
      }], [{
        propertyName: 'index',
        isHidden: true,
        mayBeHidden: true
      }, {
        propertyName: 'reversedIndex',
        isHidden: false,
        mayBeHidden: true
      }]];
      let i = 0;
      const columns = (0, _f.generateColumns)(['index', 'reversedIndex']);
      columns[0].isHidden = true;
      this.setProperties({
        columns,
        data: (0, _f.generateContent)(10, 1)
      });

      this.actions.onVisibilityChange = function (data) {
        assert.deepEqual(data, expects[i++]);
      };

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table columns=columns data=data columnsVisibilityChangedAction=(action "onVisibilityChange")}}
      */
      {
        id: "bnQ8GVmZ",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"columns\",\"data\",\"columnsVisibilityChangedAction\"],[[24,[\"columns\"]],[24,[\"data\"]],[28,\"action\",[[23,0,[]],\"onVisibilityChange\"],null]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      await this.ModelsTablePageObject.toggleColumnDropDown();
      await this.ModelsTablePageObject.columnsDropDown.objectAt(3).click(); // show 1st column

      await this.ModelsTablePageObject.columnsDropDown.objectAt(2).click(); // restore defaults
    });
    (0, _qunit.test)('#event on user interaction (toggle columns set visibility)', async function (assert) {
      assert.expect(4);
      const expects = [[{
        propertyName: 'index',
        isHidden: true,
        mayBeHidden: true
      }, {
        propertyName: 'index2',
        isHidden: false,
        mayBeHidden: true
      }, {
        propertyName: 'id',
        isHidden: false,
        mayBeHidden: true
      }], [{
        propertyName: 'index',
        isHidden: true,
        mayBeHidden: true
      }, {
        propertyName: 'index2',
        isHidden: false,
        mayBeHidden: true
      }, {
        propertyName: 'id',
        isHidden: true,
        mayBeHidden: true
      }], [{
        propertyName: 'index',
        isHidden: false,
        mayBeHidden: true
      }, {
        propertyName: 'index2',
        isHidden: false,
        mayBeHidden: true
      }, {
        propertyName: 'id',
        isHidden: true,
        mayBeHidden: true
      }], [{
        propertyName: 'index',
        isHidden: false,
        mayBeHidden: true
      }, {
        propertyName: 'index2',
        isHidden: false,
        mayBeHidden: true
      }, {
        propertyName: 'id',
        isHidden: false,
        mayBeHidden: true
      }]];
      let i = 0;
      this.setProperties({
        columns: (0, _f.generateColumns)(['index', 'index2', 'id']),
        data: (0, _f.generateContent)(10, 1),
        columnSets: [{
          label: 'Set 1',
          showColumns: ['index', 'id'],
          toggleSet: true
        }]
      });

      this.actions.onVisibilityChange = function (data) {
        assert.deepEqual(data, expects[i++]);
      };

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table columns=columns data=data columnSets=columnSets columnsVisibilityChangedAction=(action "onVisibilityChange")}}
      */
      {
        id: "5//tx17u",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"columns\",\"data\",\"columnSets\",\"columnsVisibilityChangedAction\"],[[24,[\"columns\"]],[24,[\"data\"]],[24,[\"columnSets\"]],[28,\"action\",[[23,0,[]],\"onVisibilityChange\"],null]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      await this.ModelsTablePageObject.toggleColumnDropDown();
      await this.ModelsTablePageObject.columnsDropDown.objectAt(3).click(); // hide 1st columns set

      await this.ModelsTablePageObject.columnsDropDown.objectAt(3).click(); // show 1st columns set
    });
    (0, _qunit.test)('#event on user interaction (page size changing)', async function (assert) {
      assert.expect(2);
      const expects = [25, 50];
      let i = 0;
      this.setProperties({
        columns: (0, _f.generateColumns)(['index', 'reversedIndex']),
        data: (0, _f.generateContent)(10, 1)
      });

      this.actions.displayDataChanged = function (data) {
        assert.equal(data.pageSize, expects[i++]);
      };

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table columns=columns data=data displayDataChangedAction=(action "displayDataChanged")}}
      */
      {
        id: "tAqkDJuA",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"columns\",\"data\",\"displayDataChangedAction\"],[[24,[\"columns\"]],[24,[\"data\"]],[28,\"action\",[[23,0,[]],\"displayDataChanged\"],null]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      await this.ModelsTablePageObject.changePageSize(25);
      await this.ModelsTablePageObject.changePageSize(50);
    });
    (0, _qunit.test)('show first page if for some reasons there is no content for current page, but table data exists', async function (assert) {
      assert.expect(1);
      const data = (0, _f.generateContent)(11, 1);
      const columns = (0, _f.generateColumns)(['index', 'indexWithHtml']);
      columns.push({
        title: 'Delete',
        component: 'deleteRow'
      });
      const self = this;
      this.setProperties({
        data,
        columns
      });

      this.actions.deleteRecord = function (record) {
        self.set('data', data.without(record));
      };

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table data=data columns=columns columnComponents=(hash
              deleteRow=(
                component "delete-row-comp"
                onClick=(action "deleteRecord")
              ))}}
      */
      {
        id: "vUsopKkn",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"data\",\"columns\",\"columnComponents\"],[[24,[\"data\"]],[24,[\"columns\"]],[28,\"hash\",null,[[\"deleteRow\"],[[28,\"component\",[\"delete-row-comp\"],[[\"onClick\"],[[28,\"action\",[[23,0,[]],\"deleteRecord\"],null]]]]]]]]]],false]],\"hasEval\":false}",
        meta: {}
      })); // move to the 2nd page and delete 1 row there

      await this.ModelsTablePageObject.navigation.goToNextPage();
      await (0, _testHelpers.click)('td button');
      assert.equal(this.ModelsTablePageObject.summary, 'Show 1 - 10 of 10 Clear all filters', 'First page is shown');
    });
    (0, _qunit.test)('row deleted in the middle page', async function (assert) {
      assert.expect(1);
      const data = (0, _f.generateContent)(31, 1);
      const columns = (0, _f.generateColumns)(['index', 'indexWithHtml']);
      columns.push({
        title: 'Delete',
        component: 'deleteRow'
      });
      const self = this;
      this.setProperties({
        data,
        columns
      });

      this.actions.deleteRecord = function (record) {
        self.set('data', data.without(record));
      };

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table data=data columns=columns columnComponents=(hash
              deleteRow=(
                component "delete-row-comp"
                onClick=(action "deleteRecord")
              ))}}
      */
      {
        id: "vUsopKkn",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"data\",\"columns\",\"columnComponents\"],[[24,[\"data\"]],[24,[\"columns\"]],[28,\"hash\",null,[[\"deleteRow\"],[[28,\"component\",[\"delete-row-comp\"],[[\"onClick\"],[[28,\"action\",[[23,0,[]],\"deleteRecord\"],null]]]]]]]]]],false]],\"hasEval\":false}",
        meta: {}
      })); // move to the 2nd page and delete 1 row there

      await this.ModelsTablePageObject.navigation.goToNextPage();
      await (0, _testHelpers.click)('td button');
      assert.equal(this.ModelsTablePageObject.summary, 'Show 11 - 20 of 30 Clear all filters', 'Second page is shown');
    });
    (0, _qunit.test)('updateable columns (disabled)', async function (assert) {
      const columns1 = (0, _f.generateColumns)(['index', 'someWord']);
      const columns2 = (0, _f.generateColumns)(['index', 'index2', 'someWord']);
      this.setProperties({
        columns: columns1,
        data: (0, _f.generateContent)(10, 1),
        columnsAreUpdateable: false
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table columns=columns data=data columnsAreUpdateable=columnsAreUpdateable}}
      */
      {
        id: "L2Ubx+cV",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"columns\",\"data\",\"columnsAreUpdateable\"],[[24,[\"columns\"]],[24,[\"data\"]],[24,[\"columnsAreUpdateable\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      await this.ModelsTablePageObject.filters.objectAt(0).inputFilter('1');
      await this.ModelsTablePageObject.sorting.objectAt(0).click();
      await this.ModelsTablePageObject.toggleColumnDropDown();
      assert.deepEqual(this.ModelsTablePageObject.sorting.mapBy('title'), ['index', 'someWord'], 'two columns are shown');
      assert.deepEqual(this.ModelsTablePageObject.columnsDropDown.mapBy('label'), ['Show All', 'Hide All', 'Restore Defaults', 'index', 'someWord'], 'two columns are in columns dropdown');
      this.set('columns', columns2);
      assert.deepEqual(this.ModelsTablePageObject.sorting.mapBy('title'), ['index', 'someWord'], 'columns are not updated');
      assert.deepEqual(this.ModelsTablePageObject.columnsDropDown.mapBy('label'), ['Show All', 'Hide All', 'Restore Defaults', 'index', 'someWord'], 'columns dropdown is not updated');
      assert.equal(this.ModelsTablePageObject.filters.objectAt(0).inputValue, '1', 'column filter was not dropped');
      assert.ok(this.ModelsTablePageObject.sorting.objectAt(0).isSorted, 'column sorting was not dropped');
    });
    (0, _qunit.test)('updateable columns (enabled)', async function (assert) {
      const columns1 = (0, _f.generateColumns)(['index', 'someWord']);
      const columns2 = (0, _f.generateColumns)(['index', 'index2', 'someWord']);
      this.setProperties({
        columns: columns1,
        data: (0, _f.generateContent)(10, 1),
        columnsAreUpdateable: true
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table columns=columns data=data columnsAreUpdateable=columnsAreUpdateable}}
      */
      {
        id: "L2Ubx+cV",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"columns\",\"data\",\"columnsAreUpdateable\"],[[24,[\"columns\"]],[24,[\"data\"]],[24,[\"columnsAreUpdateable\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      await this.ModelsTablePageObject.toggleColumnDropDown();
      assert.deepEqual(this.ModelsTablePageObject.sorting.mapBy('title'), ['index', 'someWord'], 'two columns are shown');
      assert.deepEqual(this.ModelsTablePageObject.columnsDropDown.mapBy('label'), ['Show All', 'Hide All', 'Restore Defaults', 'index', 'someWord'], 'two columns are in columns dropdown');
      await this.ModelsTablePageObject.filters.objectAt(0).inputFilter('1');
      await this.ModelsTablePageObject.sorting.objectAt(0).click();
      this.set('columns', columns2);
      await this.ModelsTablePageObject.toggleColumnDropDown();
      assert.deepEqual(this.ModelsTablePageObject.sorting.mapBy('title'), ['index', 'index2', 'someWord'], 'columns are updated');
      assert.deepEqual(this.ModelsTablePageObject.columnsDropDown.mapBy('label'), ['Show All', 'Hide All', 'Restore Defaults', 'index', 'index2', 'someWord'], 'columns dropdown is updated');
      assert.equal(this.ModelsTablePageObject.filters.objectAt(0).inputValue, '', 'column filter was dropped');
    });
    (0, _qunit.test)('filtering with `doFilteringByHiddenColumns` = false', async function (assert) {
      this.setProperties({
        columns: (0, _f.generateColumns)(['index', 'someWord']),
        data: (0, _f.generateContent)(10, 1),
        doFilteringByHiddenColumns: false
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table columns=columns data=data doFilteringByHiddenColumns=doFilteringByHiddenColumns}}
      */
      {
        id: "I/xd11bl",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"columns\",\"data\",\"doFilteringByHiddenColumns\"],[[24,[\"columns\"]],[24,[\"data\"]],[24,[\"doFilteringByHiddenColumns\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      await this.ModelsTablePageObject.toggleColumnDropDown();
      await this.ModelsTablePageObject.columnsDropDown.objectAt(4).click();
      await this.ModelsTablePageObject.doGlobalFilter('one');
      assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), ['No records to show'], 'Content is not changed');
      this.set('doFilteringByHiddenColumns', true);
      assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), ['No records to show'], 'Content is not changed after `doFilteringByHiddenColumns` updating');
      await this.ModelsTablePageObject.doGlobalFilter('');
      await this.ModelsTablePageObject.doGlobalFilter('one');
      assert.deepEqual(this.ModelsTablePageObject.getColumnCells(0), ['1'], 'Content is filtered');
    });
    (0, _qunit.test)('grouped headers', async function (assert) {
      this.setProperties({
        columns: (0, _f.generateColumns)(['index', 'index2', 'reversedIndex', 'indexWithHtml', 'someWord']),
        data: (0, _f.generateContent)(10, 1),
        groupedHeaders: [[{
          title: 'BigTitle',
          colspan: 5
        }], [{
          title: 'SubTitle1',
          colspan: 2
        }, {
          title: 'SubTitle2',
          colspan: 3
        }]]
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table columns=columns data=data groupedHeaders=groupedHeaders}}
      */
      {
        id: "7BCpYvVv",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"columns\",\"data\",\"groupedHeaders\"],[[24,[\"columns\"]],[24,[\"data\"]],[24,[\"groupedHeaders\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      assert.deepEqual(this.ModelsTablePageObject.headers.objectAt(0).cells, ['BigTitle']);
      assert.deepEqual(this.ModelsTablePageObject.headers.objectAt(0).colspans, ['5']);
      assert.deepEqual(this.ModelsTablePageObject.headers.objectAt(1).cells, ['SubTitle1', 'SubTitle2']);
      assert.deepEqual(this.ModelsTablePageObject.headers.objectAt(1).colspans, ['2', '3']);
    });
    (0, _qunit.test)('expandable rows (multipleExpand = true)', async function (assert) {
      const columns = (0, _f.generateColumns)(['id']);
      columns.splice(0, 0, {
        component: 'expand-toggle',
        mayBeHidden: false
      });
      this.setProperties({
        columns,
        data: (0, _f.generateContent)(30, 1)
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table columns=columns data=data expandedRowComponent=(component "expanded-row") multipleExpand=true}}
      */
      {
        id: "G58z1cq3",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"columns\",\"data\",\"expandedRowComponent\",\"multipleExpand\"],[[24,[\"columns\"]],[24,[\"data\"]],[28,\"component\",[\"expanded-row\"],null],true]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.ModelsTablePageObject.collapseRowButtons, 0, 'All rows are collapsed by default');
      await this.ModelsTablePageObject.rows.objectAt(0).expand();
      assert.ok(this.ModelsTablePageObject.rows.objectAt(0).expanded, 'First row is expanded');
      assert.equal(this.element.querySelectorAll('.expand-0').length, 1, 'Expanded row content exists');
      assert.equal(this.element.querySelectorAll('.expand-0 .id').length, 1, 'Expanded row content is valid');
      await this.ModelsTablePageObject.rows.objectAt(1).expand();
      assert.ok(this.ModelsTablePageObject.rows.objectAt(0).expanded, 'First row is still expanded');
      assert.ok(this.ModelsTablePageObject.rows.objectAt(1).expanded, 'Second row is expanded');
      await this.ModelsTablePageObject.rows.objectAt(0).collapse();
      assert.ok(this.ModelsTablePageObject.rows.objectAt(0).collapsed, 'First row is collapsed');
      assert.ok(this.ModelsTablePageObject.rows.objectAt(1).expanded, 'Second row is still expanded');
      await this.ModelsTablePageObject.rows.objectAt(1).collapse();
      assert.ok(this.ModelsTablePageObject.rows.objectAt(1).collapsed, 'Second row is collapsed');
      await this.ModelsTablePageObject.rows.objectAt(0).expand();
      await this.ModelsTablePageObject.navigation.goToNextPage();
      assert.ok(this.ModelsTablePageObject.rows.objectAt(0).collapsed, 'First row on the second page is collapsed');
    });
    (0, _qunit.test)('expandable rows (multipleExpand = true, expand All rows)', async function (assert) {
      Ember.defineProperty(this, 'expandedItems', Ember.computed('flag', 'data.@each.index1', function () {
        return Ember.get(this, 'flag') ? Ember.get(this, 'data').filter((itemn, index) => index % 2 === 0) : Ember.A([]);
      }).readOnly());
      const columns = (0, _f.generateColumns)(['id']);
      columns.splice(0, 0, {
        component: 'expand-toggle',
        componentForFilterCell: 'expand-all-toggle',
        mayBeHidden: false
      });
      this.setProperties({
        columns,
        flag: false,
        data: (0, _f.generateContent)(30, 1)
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table columns=columns data=data expandedRowComponent=(component "expanded-row") multipleExpand=true}}
      */
      {
        id: "G58z1cq3",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"columns\",\"data\",\"expandedRowComponent\",\"multipleExpand\"],[[24,[\"columns\"]],[24,[\"data\"]],[28,\"component\",[\"expanded-row\"],null],true]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.ModelsTablePageObject.collapseRowButtons, 0, 'All rows are collapsed by default');
      await this.ModelsTablePageObject.expandAllRows();
      assert.equal(this.ModelsTablePageObject.rows.filterBy('expanded').length, 10, 'All rows are expanded');
      assert.deepEqual(this.ModelsTablePageObject.rowExpands.mapBy('id'), oneTenArrayDig, 'Expanded rows content is valid');
      await this.ModelsTablePageObject.collapseAllRows();
      assert.equal(this.ModelsTablePageObject.rows.filterBy('expanded').length, 0, 'All rows are collapsed');
      await this.ModelsTablePageObject.expandAllRows();
      await this.ModelsTablePageObject.navigation.goToNextPage();
      assert.equal(this.ModelsTablePageObject.rows.filterBy('expanded').length, 0, 'All rows on the second page are collapsed');
    });
    (0, _qunit.test)('expandable rows (multipleExpand = false)', async function (assert) {
      let columns = (0, _f.generateColumns)(['id']);
      columns.splice(0, 0, {
        component: 'expand-toggle',
        mayBeHidden: false
      });
      this.setProperties({
        columns,
        data: (0, _f.generateContent)(30, 1)
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table columns=columns data=data expandedRowComponent=(component "expanded-row") multipleExpand=false}}
      */
      {
        id: "9966tlC8",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"columns\",\"data\",\"expandedRowComponent\",\"multipleExpand\"],[[24,[\"columns\"]],[24,[\"data\"]],[28,\"component\",[\"expanded-row\"],null],false]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.ModelsTablePageObject.collapseRowButtons, 0, 'All rows are collapsed by default');
      await this.ModelsTablePageObject.rows.objectAt(0).expand();
      assert.ok(this.ModelsTablePageObject.rows.objectAt(0).expanded, 'First row is expanded');
      assert.equal(this.ModelsTablePageObject.rowExpands.objectAt(0).id, '1', 'Expanded row content is valid');
      await this.ModelsTablePageObject.rows.objectAt(1).expand();
      assert.ok(this.ModelsTablePageObject.rows.objectAt(0).collapsed, 'First row is collapsed');
      assert.ok(this.ModelsTablePageObject.rows.objectAt(1).expanded, 'Second row is expanded');
      await this.ModelsTablePageObject.rows.objectAt(1).collapse();
      assert.ok(this.ModelsTablePageObject.rows.objectAt(1).collapsed, 'Second row is collapsed');
      await this.ModelsTablePageObject.rows.objectAt(0).expand();
      await this.ModelsTablePageObject.navigation.goToNextPage();
      assert.ok(this.ModelsTablePageObject.rows.objectAt(0).collapsed, 'First row on the second page is collapsed');
    });
    (0, _qunit.test)('#251 expand is dropped if expanded row is filtered out', async function (assert) {
      let columns = (0, _f.generateColumns)(['id']);
      columns.splice(0, 0, {
        component: 'expand-toggle',
        mayBeHidden: false
      });
      this.setProperties({
        columns,
        data: (0, _f.generateContent)(30, 1)
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table columns=columns data=data expandedRowComponent=(component "expanded-row") multipleExpand=false}}
      */
      {
        id: "9966tlC8",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"columns\",\"data\",\"expandedRowComponent\",\"multipleExpand\"],[[24,[\"columns\"]],[24,[\"data\"]],[28,\"component\",[\"expanded-row\"],null],false]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.ModelsTablePageObject.collapseRowButtons, 0, 'All rows are collapsed by default');
      await this.ModelsTablePageObject.rows.objectAt(0).expand();
      assert.ok(this.ModelsTablePageObject.rows.objectAt(0).expanded, 'First row is expanded');
      await this.ModelsTablePageObject.filters.objectAt(1).inputFilter('4');
      assert.equal(this.ModelsTablePageObject.rowExpands.length, 0, 'Expanded row is filtered out');
      await this.ModelsTablePageObject.filters.objectAt(1).clearFilter();
      assert.ok(this.ModelsTablePageObject.rows.objectAt(0).expanded, 'First row is expanded after filter is dropped');
    });
    (0, _qunit.test)('selectable rows (multipleSelect = true)', async function (assert) {
      const checkboxColumn = {
        component: 'select-row-checkbox',
        useFilter: false,
        mayBeHidden: false,
        componentForSortCell: 'select-all-rows-checkbox'
      };
      const columns = (0, _f.generateColumns)(['id']);
      columns.unshift(checkboxColumn);
      this.setProperties({
        data: (0, _f.generateContent)(30, 1),
        columns
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table data=data columns=columns multipleSelect=true}}
      */
      {
        id: "+NHItgPb",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"data\",\"columns\",\"multipleSelect\"],[[24,[\"data\"]],[24,[\"columns\"]],true]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.ModelsTablePageObject.rows.filterBy('selected').length, 0, 'No selected rows by default');
      await this.ModelsTablePageObject.rows.objectAt(0).click();
      assert.ok(this.ModelsTablePageObject.rows.objectAt(0).selected, 'First row is selected');
      await this.ModelsTablePageObject.rows.objectAt(1).click();
      assert.ok(this.ModelsTablePageObject.rows.objectAt(0).selected, 'First row is still selected');
      assert.ok(this.ModelsTablePageObject.rows.objectAt(1).selected, 'Second row is selected');
      await this.ModelsTablePageObject.rows.objectAt(0).click();
      assert.notOk(this.ModelsTablePageObject.rows.objectAt(0).selected, 'First row is not selected');
      assert.ok(this.ModelsTablePageObject.rows.objectAt(1).selected, 'Second row is selected');
      await this.ModelsTablePageObject.rows.objectAt(1).click();
      assert.notOk(this.ModelsTablePageObject.rows.objectAt(0).selected, 'First row still is not selected');
      assert.notOk(this.ModelsTablePageObject.rows.objectAt(1).selected, 'Second row is not selected');
      await this.ModelsTablePageObject.toggleAllSelection();
      assert.equal(this.ModelsTablePageObject.rows.filter(r => r.selected).length, 10, 'All rows are selected');
      await this.ModelsTablePageObject.toggleAllSelection();
      assert.equal(this.ModelsTablePageObject.rows.filter(r => r.selected).length, 0, 'All rows are not selected');
    });
    (0, _qunit.test)('selectable rows (multipleSelect = false)', async function (assert) {
      this.setProperties({
        data: (0, _f.generateContent)(30, 1),
        columns: (0, _f.generateColumns)(['id'])
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table data=data columns=columns multipleSelect=false}}
      */
      {
        id: "dzm/QB6G",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"data\",\"columns\",\"multipleSelect\"],[[24,[\"data\"]],[24,[\"columns\"]],false]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.ModelsTablePageObject.rows.filterBy('selected').length, 0, 'No selected rows by default');
      await this.ModelsTablePageObject.rows.objectAt(0).click();
      assert.ok(this.ModelsTablePageObject.rows.objectAt(0).selected, 'First row is selected');
      await this.ModelsTablePageObject.rows.objectAt(1).click();
      assert.notOk(this.ModelsTablePageObject.rows.objectAt(0).selected, 'First row is not selected');
      assert.ok(this.ModelsTablePageObject.rows.objectAt(1).selected, 'Second row is selected');
      await this.ModelsTablePageObject.rows.objectAt(0).click();
      assert.ok(this.ModelsTablePageObject.rows.objectAt(0).selected, 'First row is selected');
      assert.notOk(this.ModelsTablePageObject.rows.objectAt(1).selected, 'Second row is not selected');
      await this.ModelsTablePageObject.rows.objectAt(1).click();
      assert.notOk(this.ModelsTablePageObject.rows.objectAt(0).selected, 'First row is not selected');
      assert.ok(this.ModelsTablePageObject.rows.objectAt(1).selected, 'Second row is selected');
    });
    (0, _qunit.test)('row-expand should trigger select/deselect row', async function (assert) {
      let columns = (0, _f.generateColumns)(['index']);
      columns = [{
        component: 'expand-toggle',
        mayBeHidden: false
      }, ...columns];
      this.setProperties({
        columns,
        data: (0, _f.generateContent)(30, 1)
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table data=data columns=columns expandedRowComponent=(component "expanded-row")}}
      */
      {
        id: "4N2qTB0r",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"data\",\"columns\",\"expandedRowComponent\"],[[24,[\"data\"]],[24,[\"columns\"]],[28,\"component\",[\"expanded-row\"],null]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      await this.ModelsTablePageObject.rows.objectAt(0).expand();
      await this.ModelsTablePageObject.rows.objectAt(0).click();
      assert.ok(this.ModelsTablePageObject.rows.objectAt(0).expanded, 'First row is expanded');
      assert.ok(this.ModelsTablePageObject.rowExpands.objectAt(0).selected, 'First row expand is selected');
      assert.ok(this.ModelsTablePageObject.rows.objectAt(0).selected, 'First row is selected');
      await this.ModelsTablePageObject.rowExpands.objectAt(0).click();
      assert.notOk(this.ModelsTablePageObject.rows.objectAt(0).selected, 'First row is not selected');
      assert.notOk(this.ModelsTablePageObject.rowExpands.objectAt(0).selected, 'First row expand is not selected');
      await this.ModelsTablePageObject.rowExpands.objectAt(0).click();
      assert.ok(this.ModelsTablePageObject.rows.objectAt(0).selected, 'First row is selected');
      assert.ok(this.ModelsTablePageObject.rowExpands.objectAt(0).selected, 'First row expand is selected');
    });
    (0, _qunit.test)('rows may be preselected with `selectedItems`', async function (assert) {
      const data = (0, _f.generateContent)(30, 1);
      Ember.defineProperty(this, 'selectedItems', Ember.computed('flag', 'data.@each.index1', function () {
        return Ember.get(this, 'flag') ? Ember.get(this, 'data').filter((itemn, index) => index % 2 === 0) : Ember.A([]);
      }).readOnly());
      this.setProperties({
        columns: (0, _f.generateColumns)(['index1', 'index2']),
        flag: true,
        data
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table data=data columns=columns selectedItems=selectedItems}}
      */
      {
        id: "/TO5pBo8",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"data\",\"columns\",\"selectedItems\"],[[24,[\"data\"]],[24,[\"columns\"]],[24,[\"selectedItems\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.ModelsTablePageObject.rows.filterBy('selected').length, 5, 'rows are initially selected correctly');
      await this.ModelsTablePageObject.rows.objectAt(1).click();
      assert.equal(this.ModelsTablePageObject.rows.filterBy('selected').length, 6, 'One more row become selected');
      await this.ModelsTablePageObject.rows.objectAt(0).click();
      assert.equal(this.ModelsTablePageObject.rows.filterBy('selected').length, 5, 'One row become deselected');
      this.set('flag', false);
      assert.equal(this.ModelsTablePageObject.rows.filterBy('selected').length, 0, 'All rows are deselected after dropping `selectedItems`');
    });
    (0, _qunit.test)('rows may be expanded initially with `expandedItems`', async function (assert) {
      const data = (0, _f.generateContent)(30, 1);
      Ember.defineProperty(this, 'expandedItems', Ember.computed('flag', 'data.@each.index1', function () {
        return Ember.get(this, 'flag') ? Ember.get(this, 'data').filter((itemn, index) => index % 2 === 0) : Ember.A([]);
      }).readOnly());
      const columns = (0, _f.generateColumns)(['index1', 'index2']);
      columns.splice(0, 0, {
        component: 'expand-toggle',
        mayBeHidden: false
      });
      this.setProperties({
        columns,
        flag: true,
        data
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table data=data columns=columns expandedItems=expandedItems}}
      */
      {
        id: "XpJqz97h",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"data\",\"columns\",\"expandedItems\"],[[24,[\"data\"]],[24,[\"columns\"]],[24,[\"expandedItems\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.ModelsTablePageObject.rows.filterBy('expanded').length, 5, 'rows are initially expanded correctly');
      await this.ModelsTablePageObject.rows.objectAt(1).expand();
      assert.equal(this.ModelsTablePageObject.rows.filterBy('expanded').length, 6, 'One more row become expanded');
      await this.ModelsTablePageObject.rows.objectAt(0).collapse();
      assert.equal(this.ModelsTablePageObject.rows.filterBy('expanded').length, 5, 'One row become collapsed');
      this.set('flag', false);
      assert.equal(this.ModelsTablePageObject.rows.filterBy('expanded').length, 0, 'All rows are collapsed after dropping `expandedItems`');
    });
    (0, _qunit.test)('columns column contains original definition as a nested property', async function (assert) {
      const columns = (0, _f.generateColumns)(['index1', 'index2']);
      columns[0].componentForSortCell = 'custom-sort-cell';
      columns[0].CustomColumString = 'custom-column-string';
      columns[0].CustomColumObject = {
        name: 'custom-column-object'
      };
      columns[0].CustomColumBool = true;
      columns[0].CustomColumNumber = 1;
      this.setProperties({
        columns,
        data: (0, _f.generateContent)(10, 1)
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table columns=columns data=data multipleColumnsSorting=false}}
      */
      {
        id: "/UMqb4C6",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"columns\",\"data\",\"multipleColumnsSorting\"],[[24,[\"columns\"]],[24,[\"data\"]],false]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      assert.deepEqual(this.ModelsTablePageObject.sorting.mapBy('title'), ['custom-column-string|custom-column-object|true|1', 'index2'], 'Custom column properties present in originalDefinition property in processedColumns');
    });
    (0, _qunit.test)('#event on user interaction (row double-click)', async function (assert) {
      assert.expect(2);
      const data = (0, _f.generateContent)(10, 1);
      this.setProperties({
        data,
        columns: (0, _f.generateColumns)(['index'])
      });
      const indx = 4;

      this.actions.rowDoubleClick = function (index, row) {
        assert.equal(index, indx, 'row is double-clicked');
        assert.deepEqual(row, data[indx]);
      };

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table data=data columns=columns rowDoubleClickAction=(action "rowDoubleClick")}}
      */
      {
        id: "zbYWi8y7",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"data\",\"columns\",\"rowDoubleClickAction\"],[[24,[\"data\"]],[24,[\"columns\"]],[28,\"action\",[[23,0,[]],\"rowDoubleClick\"],null]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      await this.ModelsTablePageObject.rows.objectAt(indx).dbClick();
    });
    (0, _qunit.test)('#event on user interaction (row hover/out)', async function (assert) {
      assert.expect(6);
      const data = (0, _f.generateContent)(10, 1);
      this.setProperties({
        data,
        columns: (0, _f.generateColumns)(['index'])
      });
      const indx = 4;
      let fl = false;
      this.set('rowHover', (index, row) => {
        const i = fl ? indx + 1 : indx;
        assert.equal(index, i, 'row is hovered');
        assert.deepEqual(row, data[i]);
        fl = true;
      });
      this.set('rowOut', (index, row) => {
        assert.equal(index, indx, 'row is hover-out');
        assert.deepEqual(row, data[indx]);
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table data=data columns=columns rowHoverAction=(action rowHover) rowOutAction=(action rowOut)}}
      */
      {
        id: "PQgzAJNo",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"data\",\"columns\",\"rowHoverAction\",\"rowOutAction\"],[[24,[\"data\"]],[24,[\"columns\"]],[28,\"action\",[[23,0,[]],[24,[\"rowHover\"]]],null],[28,\"action\",[[23,0,[]],[24,[\"rowOut\"]]],null]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      await (0, _testHelpers.triggerEvent)(this.ModelsTablePageObject.rows.objectAt(indx).getSelf(), 'mouseenter');
      await (0, _testHelpers.triggerEvent)(this.ModelsTablePageObject.rows.objectAt(indx).getSelf(), 'mouseleave');
      await (0, _testHelpers.triggerEvent)(this.ModelsTablePageObject.rows.objectAt(indx + 1).getSelf(), 'mouseenter');
    });
    (0, _qunit.test)('#context-components render custom simple pagination', async function (assert) {
      this.set('data', (0, _f.generateContent)(30, 1));
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            {{#models-table data=data as |c|}}
              {{c.table}}
              {{#c.footer as |f|}}
                {{f.summary}}
                {{f.size-select}}
                {{#f.pagination-simple}}
                  <a href="#" {{action "gotoFirst"}} class={{gotoBackEnabled:enabled:disabled}}>F</a>&nbsp;
                  <a href="#" {{action "gotoPrev"}} class={{gotoBackEnabled:enabled:disabled}}>P</a>&nbsp;
                  <a href="#" {{action "gotoNext"}} class={{gotoForwardEnabled:enabled:disabled}}>N</a>&nbsp;
                  <a href="#" {{action "gotoLast"}} class={{gotoForwardEnabled:enabled:disabled}}>L</a>
                {{/f.pagination-simple}}
              {{/c.footer}}
            {{/models-table}}
          
      */
      {
        id: "nDiaCXQW",
        block: "{\"symbols\":[\"c\",\"f\"],\"statements\":[[0,\"\\n\"],[4,\"models-table\",null,[[\"data\"],[[24,[\"data\"]]]],{\"statements\":[[0,\"        \"],[1,[23,1,[\"table\"]],false],[0,\"\\n\"],[4,\"component\",[[28,\"-assert-implicit-component-helper-argument\",[[23,1,[\"footer\"]],\"expected `c.footer` to be a contextual component but found a string. Did you mean `(component c.footer)`? (L4:C11) \"],null]],null,{\"statements\":[[0,\"          \"],[1,[23,2,[\"summary\"]],false],[0,\"\\n          \"],[1,[23,2,[\"size-select\"]],false],[0,\"\\n\"],[4,\"component\",[[28,\"-assert-implicit-component-helper-argument\",[[23,2,[\"pagination-simple\"]],\"expected `f.pagination-simple` to be a contextual component but found a string. Did you mean `(component f.pagination-simple)`? (L7:C13) \"],null]],null,{\"statements\":[[0,\"            \"],[7,\"a\",false],[12,\"href\",\"#\"],[12,\"class\",[22,\"gotoBackEnabled:enabled:disabled\"]],[3,\"action\",[[23,0,[]],\"gotoFirst\"]],[8],[0,\"F\"],[9],[0,\"\xA0\\n            \"],[7,\"a\",false],[12,\"href\",\"#\"],[12,\"class\",[22,\"gotoBackEnabled:enabled:disabled\"]],[3,\"action\",[[23,0,[]],\"gotoPrev\"]],[8],[0,\"P\"],[9],[0,\"\xA0\\n            \"],[7,\"a\",false],[12,\"href\",\"#\"],[12,\"class\",[22,\"gotoForwardEnabled:enabled:disabled\"]],[3,\"action\",[[23,0,[]],\"gotoNext\"]],[8],[0,\"N\"],[9],[0,\"\xA0\\n            \"],[7,\"a\",false],[12,\"href\",\"#\"],[12,\"class\",[22,\"gotoForwardEnabled:enabled:disabled\"]],[3,\"action\",[[23,0,[]],\"gotoLast\"]],[8],[0,\"L\"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[2]},null]],\"parameters\":[1]},null],[0,\"    \"]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.ModelsTablePageObject.navigation.text, 'F P N L', 'Custom labels are used');
    });
    (0, _qunit.test)('#grouped-rows #row group value is shown', async function (assert) {
      const columns = (0, _f.generateColumns)(['index', 'firstName', 'lastName']);
      const data = (0, _f.generateContent)(50, 1);
      this.setProperties({
        dataGroupProperties: ['firstName', 'lastName'],
        data,
        columns
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table
            data=data
            columns=columns
            useDataGrouping=true
            currentGroupingPropertyName='firstName'
            displayGroupedValueAs='row'
            pageSize=50
            dataGroupProperties=dataGroupProperties}}
      */
      {
        id: "J8FONi3e",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"data\",\"columns\",\"useDataGrouping\",\"currentGroupingPropertyName\",\"displayGroupedValueAs\",\"pageSize\",\"dataGroupProperties\"],[[24,[\"data\"]],[24,[\"columns\"]],true,\"firstName\",\"row\",50,[24,[\"dataGroupProperties\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.ModelsTablePageObject.rows.length, 50, 'table has 50 rows with data');
      assert.deepEqual(this.ModelsTablePageObject.groupingRowsByRow.map(r => r.cell.content), data.uniqBy('firstName').mapBy('firstName').sort(), 'grouping rows have valid content');
    });
    (0, _qunit.test)('#grouped-rows #row group may be collapsed initially', async function (assert) {
      const columns = (0, _f.generateColumns)(['index', 'firstName', 'lastName']);
      const data = (0, _f.generateContent)(50, 1);
      Ember.defineProperty(this, 'collapsedGroupValues', Ember.computed('flag', function () {
        return Ember.get(this, 'flag') ? Ember.A([_f.firstNames[0]]) : Ember.A([]);
      }).readOnly());
      Ember.defineProperty(this, 'selectedItems', Ember.computed('flag', 'data.@each.firstName', function () {
        return Ember.get(this, 'flag') ? Ember.get(this, 'data').filter((itemn, index) => index % 2 === 0) : Ember.A([]);
      }).readOnly());
      this.setProperties({
        dataGroupProperties: ['firstName', 'lastName'],
        flag: true,
        data,
        columns
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table
            data=data
            columns=columns
            useDataGrouping=true
            currentGroupingPropertyName='firstName'
            displayGroupedValueAs='row'
            pageSize=50
            groupingRowComponent=(component "custom-row-group-toggle")
            multipleSelect=true
            selectedItems=selectedItems
            collapsedGroupValues=collapsedGroupValues
            dataGroupProperties=dataGroupProperties}}
      */
      {
        id: "3jAxMJC0",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"data\",\"columns\",\"useDataGrouping\",\"currentGroupingPropertyName\",\"displayGroupedValueAs\",\"pageSize\",\"groupingRowComponent\",\"multipleSelect\",\"selectedItems\",\"collapsedGroupValues\",\"dataGroupProperties\"],[[24,[\"data\"]],[24,[\"columns\"]],true,\"firstName\",\"row\",50,[28,\"component\",[\"custom-row-group-toggle\"],null],true,[24,[\"selectedItems\"]],[24,[\"collapsedGroupValues\"]],[24,[\"dataGroupProperties\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.ModelsTablePageObject.rows.length, 50 - data.filterBy('firstName', _f.firstNames[0]).length, 'rows for first grouped value are hidden');
      await this.ModelsTablePageObject.groupingRowsByRow.objectAt(0).cell.toggleGroup();
      assert.equal(this.ModelsTablePageObject.rows.length, 50, 'All rows are shown after second click');
      await this.ModelsTablePageObject.groupingRowsByRow.objectAt(0).cell.toggleGroup();
      assert.equal(this.ModelsTablePageObject.rows.length, 50 - data.filterBy('firstName', _f.firstNames[0]).length, 'rows for first grouped value are hidden (2)');
      this.set('flag', false);
      assert.equal(this.ModelsTablePageObject.rows.length, 50, 'All rows are shown after dropping `collapsedGroupValues`');
      await this.ModelsTablePageObject.groupingRowsByRow.objectAt(0).cell.toggleSelection();
      const rowsInGroup = this.ModelsTablePageObject.getRowsFromGroupRow(0);
      assert.ok(rowsInGroup.length > 0);
      assert.ok(rowsInGroup.every(r => r.selected), 'All rows for rows group become selected');
    });
    (0, _qunit.test)('#grouped-rows #row grouping-field dropdown has valid options', async function (assert) {
      const columns = (0, _f.generateColumns)(['index', 'firstName', 'lastName']);
      const data = (0, _f.generateContent)(50, 1);
      this.setProperties({
        dataGroupProperties: [{
          value: 'firstName',
          label: 'F Name'
        }, {
          value: 'lastName',
          label: 'L Name'
        }],
        data,
        columns
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table
            data=data
            columns=columns
            useDataGrouping=true
            currentGroupingPropertyName='firstName'
            displayGroupedValueAs='row'
            pageSize=50
            dataGroupProperties=dataGroupProperties}}
      */
      {
        id: "J8FONi3e",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"data\",\"columns\",\"useDataGrouping\",\"currentGroupingPropertyName\",\"displayGroupedValueAs\",\"pageSize\",\"dataGroupProperties\"],[[24,[\"data\"]],[24,[\"columns\"]],true,\"firstName\",\"row\",50,[24,[\"dataGroupProperties\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      assert.deepEqual(this.ModelsTablePageObject.groupByFieldOptions.map(o => o.label), ['F Name', 'L Name']);
    });
    (0, _qunit.test)('#grouped-rows #row cells have valid colspan', async function (assert) {
      const columns = (0, _f.generateColumns)(['index', 'firstName', 'lastName']);
      const data = (0, _f.generateContent)(50, 1);
      this.setProperties({
        dataGroupProperties: ['firstName', 'lastName'],
        data,
        columns
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table
            data=data
            columns=columns
            useDataGrouping=true
            currentGroupingPropertyName='firstName'
            displayGroupedValueAs='row'
            pageSize=50
            dataGroupProperties=dataGroupProperties}}
      */
      {
        id: "J8FONi3e",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"data\",\"columns\",\"useDataGrouping\",\"currentGroupingPropertyName\",\"displayGroupedValueAs\",\"pageSize\",\"dataGroupProperties\"],[[24,[\"data\"]],[24,[\"columns\"]],true,\"firstName\",\"row\",50,[24,[\"dataGroupProperties\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      assert.ok(this.ModelsTablePageObject.groupingRowsByRow.toArray().every(r => r.cell.colspan === '3'), 'each grouping cell has colspan equal to the table columns count');
      await this.ModelsTablePageObject.toggleColumnDropDown();
      await this.ModelsTablePageObject.columnsDropDown.objectAt(5).click();
      assert.ok(this.ModelsTablePageObject.groupingRowsByRow.toArray().every(r => r.cell.colspan === '2'), 'one column becomes hidden, so colspan is changed');
    });
    (0, _qunit.test)('#grouped-rows #row clicking on grouped values hide grouped', async function (assert) {
      const columns = (0, _f.generateColumns)(['index', 'firstName', 'lastName']);
      const data = (0, _f.generateContent)(50, 1);
      this.setProperties({
        dataGroupProperties: ['firstName', 'lastName'],
        data,
        columns
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table
            data=data
            columns=columns
            useDataGrouping=true
            currentGroupingPropertyName='firstName'
            displayGroupedValueAs='row'
            pageSize=50
            dataGroupProperties=dataGroupProperties}}
      */
      {
        id: "J8FONi3e",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"data\",\"columns\",\"useDataGrouping\",\"currentGroupingPropertyName\",\"displayGroupedValueAs\",\"pageSize\",\"dataGroupProperties\"],[[24,[\"data\"]],[24,[\"columns\"]],true,\"firstName\",\"row\",50,[24,[\"dataGroupProperties\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      await this.ModelsTablePageObject.groupingRowsByRow.objectAt(0).cell.toggleGroup();
      assert.equal(this.ModelsTablePageObject.rows.length, 50 - data.filterBy('firstName', _f.firstNames[0]).length, 'rows for first grouped value are hidden');
      await this.ModelsTablePageObject.groupingRowsByRow.objectAt(0).cell.toggleGroup();
      assert.equal(this.ModelsTablePageObject.rows.length, 50, 'All rows are shown after second click');
    });
    (0, _qunit.test)('#grouped-rows #row sorting is done for each group separately', async function (assert) {
      const columns = (0, _f.generateColumns)(['index', 'firstName', 'lastName']);
      const data = (0, _f.generateContent)(50, 1);
      const columnToSort = 2;
      this.setProperties({
        dataGroupProperties: ['firstName', 'lastName'],
        data,
        columns
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table
            data=data
            columns=columns
            useDataGrouping=true
            currentGroupingPropertyName='firstName'
            displayGroupedValueAs='row'
            pageSize=50
            dataGroupProperties=dataGroupProperties}}
      */
      {
        id: "J8FONi3e",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"data\",\"columns\",\"useDataGrouping\",\"currentGroupingPropertyName\",\"displayGroupedValueAs\",\"pageSize\",\"dataGroupProperties\"],[[24,[\"data\"]],[24,[\"columns\"]],true,\"firstName\",\"row\",50,[24,[\"dataGroupProperties\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      await this.ModelsTablePageObject.sorting.objectAt(columnToSort).click();
      data.uniqBy('firstName').sort().forEach((record, index) => {
        const {
          first,
          last
        } = this.ModelsTablePageObject.getRowsIndexesFromGroupRow(index);
        const values = this.ModelsTablePageObject.getColumnCells(columnToSort, first, last);
        assert.deepEqual(Ember.A(values).mapBy('id'), Ember.A([...values].sort()).mapBy('id'), `group #${index} is sorted`);
      });
      const wholeColumn = this.ModelsTablePageObject.getColumnCells(columnToSort);
      assert.notDeepEqual(wholeColumn, [...wholeColumn].sort(), 'Column is not sorted overall (only its part are sorted)');
    });
    (0, _qunit.test)('#grouped-rows #row grouped property may be changed', async function (assert) {
      const columns = (0, _f.generateColumns)(['index', 'firstName', 'lastName']);
      const data = (0, _f.generateContent)(50, 1);
      this.setProperties({
        dataGroupProperties: ['firstName', 'lastName'],
        data,
        columns
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table
            data=data
            columns=columns
            useDataGrouping=true
            currentGroupingPropertyName='firstName'
            displayGroupedValueAs='row'
            pageSize=50
            dataGroupProperties=dataGroupProperties}}
      */
      {
        id: "J8FONi3e",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"data\",\"columns\",\"useDataGrouping\",\"currentGroupingPropertyName\",\"displayGroupedValueAs\",\"pageSize\",\"dataGroupProperties\"],[[24,[\"data\"]],[24,[\"columns\"]],true,\"firstName\",\"row\",50,[24,[\"dataGroupProperties\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      assert.deepEqual(this.ModelsTablePageObject.groupingRowsByRow.map(r => r.cell.content), data.uniqBy('firstName').mapBy('firstName').sort(), 'grouping rows have valid content (firstName)');
      await this.ModelsTablePageObject.changeGroupByField('lastName');
      assert.equal(this.ModelsTablePageObject.rows.length, 50, 'table has 50 rows with data');
      assert.deepEqual(this.ModelsTablePageObject.groupingRowsByRow.map(r => r.cell.content), data.uniqBy('lastName').mapBy('lastName').sort(), 'grouping rows have valid content (lastName)');
    });
    (0, _qunit.test)('#grouped-rows #row order of grouped values may be changed', async function (assert) {
      const columns = (0, _f.generateColumns)(['index', 'firstName', 'lastName']);
      const data = (0, _f.generateContent)(50, 1);
      this.setProperties({
        dataGroupProperties: ['firstName', 'lastName'],
        data,
        columns
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table
            data=data
            columns=columns
            useDataGrouping=true
            currentGroupingPropertyName='firstName'
            displayGroupedValueAs='row'
            pageSize=50
            dataGroupProperties=dataGroupProperties}}
      */
      {
        id: "J8FONi3e",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"data\",\"columns\",\"useDataGrouping\",\"currentGroupingPropertyName\",\"displayGroupedValueAs\",\"pageSize\",\"dataGroupProperties\"],[[24,[\"data\"]],[24,[\"columns\"]],true,\"firstName\",\"row\",50,[24,[\"dataGroupProperties\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      assert.deepEqual(this.ModelsTablePageObject.groupingRowsByRow.map(r => r.cell.content), data.uniqBy('firstName').mapBy('firstName').sort(), 'grouping rows have valid content (firstName)');
      await this.ModelsTablePageObject.sortByGroupedBy();
      assert.equal(this.ModelsTablePageObject.rows.length, 50, 'table has 50 rows with data');
      assert.deepEqual(this.ModelsTablePageObject.groupingRowsByRow.map(r => r.cell.content), data.uniqBy('firstName').mapBy('firstName').sort().reverse(), 'grouping rows have valid sorted content (firstName)');
    });
    (0, _qunit.test)('#grouped-rows #row filtered out groups are hidden', async function (assert) {
      const columns = (0, _f.generateColumns)(['index', 'firstName', 'lastName']);
      const data = (0, _f.generateContent)(50, 1);
      this.setProperties({
        dataGroupProperties: ['firstName', 'lastName'],
        data,
        columns
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table
            data=data
            columns=columns
            useDataGrouping=true
            currentGroupingPropertyName='firstName'
            displayGroupedValueAs='row'
            pageSize=50
            dataGroupProperties=dataGroupProperties}}
      */
      {
        id: "J8FONi3e",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"data\",\"columns\",\"useDataGrouping\",\"currentGroupingPropertyName\",\"displayGroupedValueAs\",\"pageSize\",\"dataGroupProperties\"],[[24,[\"data\"]],[24,[\"columns\"]],true,\"firstName\",\"row\",50,[24,[\"dataGroupProperties\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      await this.ModelsTablePageObject.doGlobalFilter(_f.firstNames[0]);
      assert.equal(this.ModelsTablePageObject.groupingRowsByRow.length, 1, 'only one group is shown');
      assert.equal(this.ModelsTablePageObject.rows.length, data.filterBy('firstName', _f.firstNames[0]).length, 'rows for first group are shown');
    });
    (0, _qunit.test)('#grouped-rows #row only message about no data is shown if All rows are filtered out', async function (assert) {
      const columns = (0, _f.generateColumns)(['index', 'firstName', 'lastName']);
      const data = (0, _f.generateContent)(50, 1);
      this.setProperties({
        dataGroupProperties: ['firstName', 'lastName'],
        data,
        columns
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table
            data=data
            columns=columns
            useDataGrouping=true
            currentGroupingPropertyName='firstName'
            displayGroupedValueAs='row'
            pageSize=50
            dataGroupProperties=dataGroupProperties}}
      */
      {
        id: "J8FONi3e",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"data\",\"columns\",\"useDataGrouping\",\"currentGroupingPropertyName\",\"displayGroupedValueAs\",\"pageSize\",\"dataGroupProperties\"],[[24,[\"data\"]],[24,[\"columns\"]],true,\"firstName\",\"row\",50,[24,[\"dataGroupProperties\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      await this.ModelsTablePageObject.doGlobalFilter('some random fake string');
      assert.equal(this.ModelsTablePageObject.rows.length, 1, '1 row is shown');
      assert.equal(this.ModelsTablePageObject.rows.objectAt(0).cells.length, 1, 'with 1 cell');
      assert.equal(this.ModelsTablePageObject.rows.objectAt(0).cells.objectAt(0).content, 'No records to show', 'with correct message');
      assert.equal(this.ModelsTablePageObject.groupingRowsByRow.length, 0, 'no grouped rows are shown');
    });
    (0, _qunit.test)('#grouped-rows #row only message about hidden columns is shown if all columns are hidden', async function (assert) {
      const columns = (0, _f.generateColumns)(['index', 'firstName', 'lastName']);
      const data = (0, _f.generateContent)(50, 1);
      this.setProperties({
        dataGroupProperties: ['firstName', 'lastName'],
        data,
        columns
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table
            data=data
            columns=columns
            useDataGrouping=true
            currentGroupingPropertyName='firstName'
            displayGroupedValueAs='row'
            pageSize=50
            dataGroupProperties=dataGroupProperties}}
      */
      {
        id: "J8FONi3e",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"data\",\"columns\",\"useDataGrouping\",\"currentGroupingPropertyName\",\"displayGroupedValueAs\",\"pageSize\",\"dataGroupProperties\"],[[24,[\"data\"]],[24,[\"columns\"]],true,\"firstName\",\"row\",50,[24,[\"dataGroupProperties\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      await this.ModelsTablePageObject.toggleColumnDropDown();
      await this.ModelsTablePageObject.columnsDropDown.objectAt(1).click();
      assert.equal(this.ModelsTablePageObject.rows.length, 1, '1 row is shown');
      assert.equal(this.ModelsTablePageObject.rows.objectAt(0).cells.length, 1, 'with 1 cell');
      assert.ok(this.ModelsTablePageObject.rows.objectAt(0).cells.objectAt(0).content.indexOf('All columns are hidden') !== -1, 'with correct message');
      assert.equal(this.ModelsTablePageObject.groupingRowsByRow.length, 0, 'no grouped rows are shown');
      assert.equal(this.ModelsTablePageObject.filters.length, 0, 'no filter-th shown');
      assert.equal(this.ModelsTablePageObject.sorting.length, 0, 'no sorting-th shown');
    });
    (0, _qunit.test)('#grouped-rows #row custom group-cell component content', async function (assert) {
      const columns = (0, _f.generateColumns)(['index', 'firstName', 'lastName']);
      const data = (0, _f.generateContent)(50, 1);
      this.setProperties({
        dataGroupProperties: ['firstName', 'lastName'],
        data,
        columns
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table
            data=data
            columns=columns
            useDataGrouping=true
            currentGroupingPropertyName="firstName"
            displayGroupedValueAs="row"
            groupingRowComponent=(component "custom-row-group-toggle")
            pageSize=50
            dataGroupProperties=dataGroupProperties}}
      */
      {
        id: "1eXAVXI2",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"data\",\"columns\",\"useDataGrouping\",\"currentGroupingPropertyName\",\"displayGroupedValueAs\",\"groupingRowComponent\",\"pageSize\",\"dataGroupProperties\"],[[24,[\"data\"]],[24,[\"columns\"]],true,\"firstName\",\"row\",[28,\"component\",[\"custom-row-group-toggle\"],null],50,[24,[\"dataGroupProperties\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      const fNamesCount = data.filterBy('firstName', _f.firstNames[0]).length;
      assert.equal(this.ModelsTablePageObject.groupingRowsByRow.objectAt(0).cell.toggleText, `firstName: ${_f.firstNames[0]} (${fNamesCount}). expanded`, 'custom component content is valid');
      await this.ModelsTablePageObject.groupingRowsByRow.objectAt(0).cell.toggleGroup();
      assert.equal(this.ModelsTablePageObject.groupingRowsByRow.objectAt(0).cell.toggleText, `firstName: ${_f.firstNames[0]} (${fNamesCount}). collapsed`, 'custom component content is updated');
      await this.ModelsTablePageObject.changeGroupByField('lastName');
      const lNamesCount = data.filterBy('lastName', _f.lastNames[0]).length;
      assert.equal(this.ModelsTablePageObject.groupingRowsByRow.objectAt(0).cell.toggleText, `lastName: ${_f.lastNames[0]} (${lNamesCount}). expanded`, 'custom component content is updated (2)');
    });
    (0, _qunit.test)('#grouped-rows #row custom group-cell component actions', async function (assert) {
      assert.expect(10);
      const columns = (0, _f.generateColumns)(['index', 'firstName', 'lastName']);
      const data = (0, _f.generateContent)(50, 1);

      this.actions.displayDataChanged = function () {
        assert.ok(true);
      };

      this.setProperties({
        dataGroupProperties: ['firstName', 'lastName'],
        data,
        columns
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table
            data=data
            columns=columns
            useDataGrouping=true
            currentGroupingPropertyName='firstName'
            expandedRowComponent=(component "expanded-row")
            displayGroupedValueAs='row'
            multipleSelect=true
            multipleExpand=true
            groupingRowComponent=(component "custom-row-group-toggle")
            pageSize=50
            displayDataChangedAction=(action "displayDataChanged")
            dataGroupProperties=dataGroupProperties}}
      */
      {
        id: "pxyxN85g",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"data\",\"columns\",\"useDataGrouping\",\"currentGroupingPropertyName\",\"expandedRowComponent\",\"displayGroupedValueAs\",\"multipleSelect\",\"multipleExpand\",\"groupingRowComponent\",\"pageSize\",\"displayDataChangedAction\",\"dataGroupProperties\"],[[24,[\"data\"]],[24,[\"columns\"]],true,\"firstName\",[28,\"component\",[\"expanded-row\"],null],\"row\",true,true,[28,\"component\",[\"custom-row-group-toggle\"],null],50,[28,\"action\",[[23,0,[]],\"displayDataChanged\"],null],[24,[\"dataGroupProperties\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      const firstGroupRowsCount = this.ModelsTablePageObject.getRowsFromGroupRow(0).length;
      assert.ok(this.ModelsTablePageObject.getRowsFromGroupRow(0).every(r => !r.selected), 'All rows for rows group are not selected by default');
      assert.equal(this.ModelsTablePageObject.groupingRowsByRow.objectAt(0).cell.selectedCountText, '0');
      await this.ModelsTablePageObject.groupingRowsByRow.objectAt(0).cell.toggleSelection();
      assert.ok(this.ModelsTablePageObject.getRowsFromGroupRow(0).every(r => r.selected), 'All rows for rows group become selected');
      assert.equal(this.ModelsTablePageObject.groupingRowsByRow.objectAt(0).cell.selectedCountText, firstGroupRowsCount);
      assert.ok(this.ModelsTablePageObject.getRowsFromGroupRow(0).every(r => !r.expanded), 'All rows for rows group are not expanded by default');
      assert.equal(this.ModelsTablePageObject.groupingRowsByRow.objectAt(0).cell.expandedCountText, '0');
      await this.ModelsTablePageObject.groupingRowsByRow.objectAt(0).cell.toggleExpands();
      assert.ok(this.ModelsTablePageObject.getRowsFromGroupRow(0).every(r => r.expanded), 'All rows for rows group become expanded');
      assert.equal(this.ModelsTablePageObject.groupingRowsByRow.objectAt(0).cell.expandedCountText, firstGroupRowsCount);
    });
    (0, _qunit.test)('#grouped-rows #row component for group summary', async function (assert) {
      const columns = (0, _f.generateColumns)(['index', 'firstName', 'lastName']);
      const data = (0, _f.generateContent)(50, 1);
      this.setProperties({
        dataGroupProperties: ['firstName', 'lastName'],
        data,
        columns
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table
            data=data
            columns=columns
            useDataGrouping=true
            currentGroupingPropertyName='firstName'
            groupSummaryRowComponent=(component "group-summary-row")
            displayGroupedValueAs='row'
            pageSize=50
            dataGroupProperties=dataGroupProperties}}
      */
      {
        id: "AdFzUKJ5",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"data\",\"columns\",\"useDataGrouping\",\"currentGroupingPropertyName\",\"groupSummaryRowComponent\",\"displayGroupedValueAs\",\"pageSize\",\"dataGroupProperties\"],[[24,[\"data\"]],[24,[\"columns\"]],true,\"firstName\",[28,\"component\",[\"group-summary-row\"],null],\"row\",50,[24,[\"dataGroupProperties\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      const groupRows = this.ModelsTablePageObject.getRowsFromGroupRow(0);
      const rowsInGroup = data.filterBy('firstName', _f.firstNames[0]);
      assert.equal(groupRows.length, rowsInGroup.length + 1, 'rows for first group are shown with summary row');
      const firstGroupRowCell = groupRows[groupRows.length - 1].cells.objectAt(0);
      assert.equal(firstGroupRowCell.groupSummaryVisible, rowsInGroup.length, 'visible rows are bound correctly');
      assert.equal(firstGroupRowCell.groupSummarySelected, 0, 'selected rows are bound correctly');
      await this.ModelsTablePageObject.rows.objectAt(0).click();
      assert.equal(firstGroupRowCell.groupSummarySelected, 1, 'selected rows are bound correctly (2)');
    });
    (0, _qunit.test)('#grouped-rows #column group value is shown', async function (assert) {
      const columns = (0, _f.generateColumns)(['index', 'firstName', 'lastName']);
      const data = (0, _f.generateContent)(50, 1);
      this.setProperties({
        dataGroupProperties: ['firstName', 'lastName'],
        data,
        columns
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table
            data=data
            columns=columns
            useDataGrouping=true
            currentGroupingPropertyName='firstName'
            displayGroupedValueAs='column'
            pageSize=50
            dataGroupProperties=dataGroupProperties}}
      */
      {
        id: "XmYahqFT",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"data\",\"columns\",\"useDataGrouping\",\"currentGroupingPropertyName\",\"displayGroupedValueAs\",\"pageSize\",\"dataGroupProperties\"],[[24,[\"data\"]],[24,[\"columns\"]],true,\"firstName\",\"column\",50,[24,[\"dataGroupProperties\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.ModelsTablePageObject.rows.length, 50, 'table has 50 rows with data');
      assert.deepEqual(this.ModelsTablePageObject.groupingRowsByColumn.toArray().mapBy('content'), data.uniqBy('firstName').mapBy('firstName').sort(), 'grouping cell have valid content');
    });
    (0, _qunit.test)('#grouped-rows #column group may be collapsed initially', async function (assert) {
      const columns = (0, _f.generateColumns)(['index', 'firstName', 'lastName']);
      const data = (0, _f.generateContent)(50, 1);
      Ember.defineProperty(this, 'collapsedGroupValues', Ember.computed('flag', function () {
        return Ember.get(this, 'flag') ? Ember.A([_f.firstNames[0]]) : Ember.A([]);
      }).readOnly());
      Ember.defineProperty(this, 'selectedItems', Ember.computed('flag', 'data.@each.firstName', function () {
        return Ember.get(this, 'flag') ? Ember.get(this, 'data').filter((itemn, index) => index % 2 === 0) : Ember.A([]);
      }).readOnly());
      this.setProperties({
        dataGroupProperties: ['firstName', 'lastName'],
        flag: true,
        data,
        columns
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table
            data=data
            columns=columns
            useDataGrouping=true
            currentGroupingPropertyName='firstName'
            displayGroupedValueAs='column'
            selectedItems=selectedItems
            pageSize=50
            groupingRowComponent=(component "custom-row-group-toggle")
            multipleSelect=true
            collapsedGroupValues=collapsedGroupValues
            dataGroupProperties=dataGroupProperties}}
      */
      {
        id: "4RJukKEW",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"data\",\"columns\",\"useDataGrouping\",\"currentGroupingPropertyName\",\"displayGroupedValueAs\",\"selectedItems\",\"pageSize\",\"groupingRowComponent\",\"multipleSelect\",\"collapsedGroupValues\",\"dataGroupProperties\"],[[24,[\"data\"]],[24,[\"columns\"]],true,\"firstName\",\"column\",[24,[\"selectedItems\"]],50,[28,\"component\",[\"custom-row-group-toggle\"],null],true,[24,[\"collapsedGroupValues\"]],[24,[\"dataGroupProperties\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.ModelsTablePageObject.rows.length, 50 - data.filterBy('firstName', _f.firstNames[0]).length, 'rows for first grouped value are hidden');
      await this.ModelsTablePageObject.groupingRowsByColumn.objectAt(0).toggleGroup();
      assert.equal(this.ModelsTablePageObject.rows.length, 50, 'All rows are shown after second click');
      await this.ModelsTablePageObject.groupingRowsByColumn.objectAt(0).toggleGroup();
      assert.equal(this.ModelsTablePageObject.rows.length, 50 - data.filterBy('firstName', _f.firstNames[0]).length, 'rows for first grouped value are hidden (2)');
      this.set('flag', false);
      assert.equal(this.ModelsTablePageObject.rows.length, 50, 'All rows are shown after dropping `collapsedGroupValues`');
      await this.ModelsTablePageObject.groupingRowsByColumn.objectAt(0).toggleSelection();
      assert.ok(this.ModelsTablePageObject.getRowsFromGroupColumn(0).every(r => r.selected), 'All rows for rows group become selected');
    });
    (0, _qunit.test)('#grouped-rows #column grouping-field dropdown has valid options', async function (assert) {
      const columns = (0, _f.generateColumns)(['index', 'firstName', 'lastName']);
      const data = (0, _f.generateContent)(50, 1);
      this.setProperties({
        dataGroupProperties: [{
          value: 'firstName',
          label: 'F Name'
        }, {
          value: 'lastName',
          label: 'L Name'
        }],
        data,
        columns
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table
            data=data
            columns=columns
            useDataGrouping=true
            currentGroupingPropertyName='firstName'
            displayGroupedValueAs='column'
            pageSize=50
            dataGroupProperties=dataGroupProperties}}
      */
      {
        id: "XmYahqFT",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"data\",\"columns\",\"useDataGrouping\",\"currentGroupingPropertyName\",\"displayGroupedValueAs\",\"pageSize\",\"dataGroupProperties\"],[[24,[\"data\"]],[24,[\"columns\"]],true,\"firstName\",\"column\",50,[24,[\"dataGroupProperties\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      assert.deepEqual(this.ModelsTablePageObject.groupByFieldOptions.map(o => o.label), ['F Name', 'L Name']);
    });
    (0, _qunit.test)('#grouped-rows #column cells have valid rowspan', async function (assert) {
      const columns = (0, _f.generateColumns)(['index', 'firstName', 'lastName']);
      const data = (0, _f.generateContent)(50, 1);
      this.setProperties({
        dataGroupProperties: ['firstName', 'lastName'],
        data,
        columns
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table
            data=data
            columns=columns
            useDataGrouping=true
            currentGroupingPropertyName='firstName'
            displayGroupedValueAs='column'
            pageSize=50
            dataGroupProperties=dataGroupProperties}}
      */
      {
        id: "XmYahqFT",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"data\",\"columns\",\"useDataGrouping\",\"currentGroupingPropertyName\",\"displayGroupedValueAs\",\"pageSize\",\"dataGroupProperties\"],[[24,[\"data\"]],[24,[\"columns\"]],true,\"firstName\",\"column\",50,[24,[\"dataGroupProperties\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      const rowspans = data.uniqBy('firstName').sort().map((record, index) => {
        const {
          first,
          last
        } = this.ModelsTablePageObject.getRowsIndexesFromGroupColumn(index);
        return String(last - first + 1);
      });
      assert.deepEqual(this.ModelsTablePageObject.groupingRowsByColumn.toArray().mapBy('rowspan'), rowspans, 'each grouping cell has rowspan equal to the group rows count');
      assert.ok(this.ModelsTablePageObject.groupingRowsByRow.toArray().every(r => r.cell.colspan === '2'), 'one column becomes hidden, so colspan is changed');
    });
    (0, _qunit.test)('#grouped-rows #column clicking on grouped values hide grouped', async function (assert) {
      const columns = (0, _f.generateColumns)(['index', 'firstName', 'lastName']);
      const data = (0, _f.generateContent)(50, 1);
      this.setProperties({
        dataGroupProperties: ['firstName', 'lastName'],
        data,
        columns
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table
            data=data
            columns=columns
            useDataGrouping=true
            currentGroupingPropertyName='firstName'
            displayGroupedValueAs='column'
            pageSize=50
            dataGroupProperties=dataGroupProperties}}
      */
      {
        id: "XmYahqFT",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"data\",\"columns\",\"useDataGrouping\",\"currentGroupingPropertyName\",\"displayGroupedValueAs\",\"pageSize\",\"dataGroupProperties\"],[[24,[\"data\"]],[24,[\"columns\"]],true,\"firstName\",\"column\",50,[24,[\"dataGroupProperties\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      await this.ModelsTablePageObject.groupingRowsByColumn.objectAt(0).toggleGroup();
      assert.equal(this.ModelsTablePageObject.rows.length, 50 - data.filterBy('firstName', _f.firstNames[0]).length, 'rows for first grouped value are hidden');
      await this.ModelsTablePageObject.groupingRowsByColumn.objectAt(0).toggleGroup();
      assert.equal(this.ModelsTablePageObject.rows.length, 50, 'All rows are shown after second click');
    });
    (0, _qunit.test)('#grouped-rows #column sorting is done for each group separately', async function (assert) {
      const columns = (0, _f.generateColumns)(['index', 'firstName', 'lastName']);
      const data = (0, _f.generateContent)(50, 1);
      const columnToSort = 3;
      this.setProperties({
        dataGroupProperties: ['firstName', 'lastName'],
        data,
        columns
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table
            data=data
            columns=columns
            useDataGrouping=true
            currentGroupingPropertyName='firstName'
            displayGroupedValueAs='column'
            pageSize=50
            dataGroupProperties=dataGroupProperties}}
      */
      {
        id: "XmYahqFT",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"data\",\"columns\",\"useDataGrouping\",\"currentGroupingPropertyName\",\"displayGroupedValueAs\",\"pageSize\",\"dataGroupProperties\"],[[24,[\"data\"]],[24,[\"columns\"]],true,\"firstName\",\"column\",50,[24,[\"dataGroupProperties\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      await this.ModelsTablePageObject.sorting.objectAt(columnToSort).click();
      data.uniqBy('firstName').forEach((name, index) => {
        const {
          first,
          last
        } = this.ModelsTablePageObject.getRowsIndexesFromGroupColumn(index);
        const values = this.ModelsTablePageObject.getColumnCells(-1, first, last);
        assert.deepEqual(values, [...values].sort(), `group #${index} is sorted`);
      });
      const wholeColumn = this.ModelsTablePageObject.getColumnCells(-1);
      assert.notDeepEqual(wholeColumn, [...wholeColumn].sort(), 'Column is not sorted overall (only its part are sorted)');
    });
    (0, _qunit.test)('#grouped-rows #column grouped property may be changed', async function (assert) {
      const columns = (0, _f.generateColumns)(['index', 'firstName', 'lastName']);
      const data = (0, _f.generateContent)(50, 1);
      this.setProperties({
        dataGroupProperties: ['firstName', 'lastName'],
        data,
        columns
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table
            data=data
            columns=columns
            useDataGrouping=true
            currentGroupingPropertyName='firstName'
            displayGroupedValueAs='column'
            pageSize=50
            dataGroupProperties=dataGroupProperties}}
      */
      {
        id: "XmYahqFT",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"data\",\"columns\",\"useDataGrouping\",\"currentGroupingPropertyName\",\"displayGroupedValueAs\",\"pageSize\",\"dataGroupProperties\"],[[24,[\"data\"]],[24,[\"columns\"]],true,\"firstName\",\"column\",50,[24,[\"dataGroupProperties\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      assert.deepEqual(this.ModelsTablePageObject.groupingRowsByColumn.map(r => r.content), data.uniqBy('firstName').mapBy('firstName').sort(), 'grouping columns have valid content (firstName)');
      await this.ModelsTablePageObject.changeGroupByField('lastName');
      assert.equal(this.ModelsTablePageObject.rows.length, 50, 'table has 50 rows with data');
      assert.deepEqual(this.ModelsTablePageObject.groupingRowsByColumn.map(r => r.content), data.uniqBy('lastName').mapBy('lastName').sort(), 'grouping columns have valid content (lastName)');
    });
    (0, _qunit.test)('#grouped-rows #column order of grouped values may be changed', async function (assert) {
      const columns = (0, _f.generateColumns)(['index', 'firstName', 'lastName']);
      const data = (0, _f.generateContent)(50, 1);
      this.setProperties({
        dataGroupProperties: ['firstName', 'lastName'],
        data,
        columns
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table
            data=data
            columns=columns
            useDataGrouping=true
            currentGroupingPropertyName='firstName'
            displayGroupedValueAs='column'
            pageSize=50
            dataGroupProperties=dataGroupProperties}}
      */
      {
        id: "XmYahqFT",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"data\",\"columns\",\"useDataGrouping\",\"currentGroupingPropertyName\",\"displayGroupedValueAs\",\"pageSize\",\"dataGroupProperties\"],[[24,[\"data\"]],[24,[\"columns\"]],true,\"firstName\",\"column\",50,[24,[\"dataGroupProperties\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      assert.deepEqual(this.ModelsTablePageObject.groupingRowsByColumn.map(r => r.content), data.uniqBy('firstName').mapBy('firstName').sort(), 'grouping columns have valid content (firstName)');
      await this.ModelsTablePageObject.sortByGroupedBy();
      assert.equal(this.ModelsTablePageObject.rows.length, 50, 'table has 50 rows with data');
      assert.deepEqual(this.ModelsTablePageObject.groupingRowsByColumn.map(r => r.content), data.uniqBy('firstName').mapBy('firstName').sort().reverse(), 'grouping columns have valid sorted content (firstName)');
    });
    (0, _qunit.test)('#grouped-rows #column filtered out groups are hidden', async function (assert) {
      const columns = (0, _f.generateColumns)(['index', 'firstName', 'lastName']);
      const data = (0, _f.generateContent)(50, 1);
      this.setProperties({
        dataGroupProperties: ['firstName', 'lastName'],
        data,
        columns
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table
            data=data
            columns=columns
            useDataGrouping=true
            currentGroupingPropertyName='firstName'
            displayGroupedValueAs='column'
            pageSize=50
            dataGroupProperties=dataGroupProperties}}
      */
      {
        id: "XmYahqFT",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"data\",\"columns\",\"useDataGrouping\",\"currentGroupingPropertyName\",\"displayGroupedValueAs\",\"pageSize\",\"dataGroupProperties\"],[[24,[\"data\"]],[24,[\"columns\"]],true,\"firstName\",\"column\",50,[24,[\"dataGroupProperties\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      await this.ModelsTablePageObject.doGlobalFilter(_f.firstNames[0]);
      assert.equal(this.ModelsTablePageObject.groupingRowsByColumn.length, 1, 'only one group is shown');
      assert.equal(this.ModelsTablePageObject.rows.length, data.filterBy('firstName', _f.firstNames[0]).length, 'rows for first group are shown');
    });
    (0, _qunit.test)('#grouped-rows #column only message about no data is shown if All rows are filtered out', async function (assert) {
      const columns = (0, _f.generateColumns)(['index', 'firstName', 'lastName']);
      const data = (0, _f.generateContent)(50, 1);
      this.setProperties({
        dataGroupProperties: ['firstName', 'lastName'],
        data,
        columns
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table
            data=data
            columns=columns
            useDataGrouping=true
            currentGroupingPropertyName='firstName'
            displayGroupedValueAs='column'
            pageSize=50
            dataGroupProperties=dataGroupProperties}}
      */
      {
        id: "XmYahqFT",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"data\",\"columns\",\"useDataGrouping\",\"currentGroupingPropertyName\",\"displayGroupedValueAs\",\"pageSize\",\"dataGroupProperties\"],[[24,[\"data\"]],[24,[\"columns\"]],true,\"firstName\",\"column\",50,[24,[\"dataGroupProperties\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      await this.ModelsTablePageObject.doGlobalFilter('some random fake string');
      assert.equal(this.ModelsTablePageObject.rows.length, 1, '1 row is shown');
      assert.equal(this.ModelsTablePageObject.rows.objectAt(0).cells.length, 1, 'with 1 cell');
      assert.equal(this.ModelsTablePageObject.rows.objectAt(0).cells.objectAt(0).content, 'No records to show', 'with correct message');
      assert.equal(this.ModelsTablePageObject.groupingRowsByColumn.length, 0, 'no grouped rows are shown');
    });
    (0, _qunit.test)('#grouped-rows #column only message about hidden columns is shown if all columns are hidden', async function (assert) {
      const columns = (0, _f.generateColumns)(['index', 'firstName', 'lastName']);
      const data = (0, _f.generateContent)(50, 1);
      this.setProperties({
        dataGroupProperties: ['firstName', 'lastName'],
        data,
        columns
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table
            data=data
            columns=columns
            useDataGrouping=true
            currentGroupingPropertyName='firstName'
            displayGroupedValueAs='column'
            pageSize=50
            dataGroupProperties=dataGroupProperties}}
      */
      {
        id: "XmYahqFT",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"data\",\"columns\",\"useDataGrouping\",\"currentGroupingPropertyName\",\"displayGroupedValueAs\",\"pageSize\",\"dataGroupProperties\"],[[24,[\"data\"]],[24,[\"columns\"]],true,\"firstName\",\"column\",50,[24,[\"dataGroupProperties\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      await this.ModelsTablePageObject.toggleColumnDropDown();
      await this.ModelsTablePageObject.columnsDropDown.objectAt(1).click();
      assert.equal(this.ModelsTablePageObject.rows.length, 1, '1 row is shown');
      assert.equal(this.ModelsTablePageObject.rows.objectAt(0).cells.length, 1, 'with 1 cell');
      assert.ok(this.ModelsTablePageObject.rows.objectAt(0).cells.objectAt(0).content.indexOf('All columns are hidden') !== -1, 'with correct message');
      assert.equal(this.ModelsTablePageObject.groupingRowsByColumn.length, 0, 'no grouped rows are shown');
      assert.equal(this.ModelsTablePageObject.filters.length, 0, 'no filter-th shown');
      assert.equal(this.ModelsTablePageObject.sorting.length, 0, 'no sorting-th shown');
    });
    (0, _qunit.test)('#grouped-rows #column row expands update rowspan for grouping cells', async function (assert) {
      const columns = (0, _f.generateColumns)(['index', 'firstName', 'lastName']);
      const data = (0, _f.generateContent)(50, 1);
      columns.splice(0, 0, {
        component: 'expand-toggle',
        mayBeHidden: false
      });
      this.setProperties({
        dataGroupProperties: ['firstName', 'lastName'],
        data,
        columns
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table
            data=data
            columns=columns
            useDataGrouping=true
            currentGroupingPropertyName='firstName'
            displayGroupedValueAs='column'
            pageSize=50
            dataGroupProperties=dataGroupProperties
            expandedRowComponent=(component "expanded-row")
            multipleExpand=true}}
      */
      {
        id: "Hw6PBFx0",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"data\",\"columns\",\"useDataGrouping\",\"currentGroupingPropertyName\",\"displayGroupedValueAs\",\"pageSize\",\"dataGroupProperties\",\"expandedRowComponent\",\"multipleExpand\"],[[24,[\"data\"]],[24,[\"columns\"]],true,\"firstName\",\"column\",50,[24,[\"dataGroupProperties\"]],[28,\"component\",[\"expanded-row\"],null],true]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      const firstGroupRowspan = data.filterBy('firstName', _f.firstNames[0]).length;
      assert.equal(this.ModelsTablePageObject.groupingRowsByColumn.objectAt(0).rowspan, String(firstGroupRowspan), 'rows are collapsed');
      await this.ModelsTablePageObject.rows.objectAt(0).expand();
      assert.equal(this.ModelsTablePageObject.groupingRowsByColumn.objectAt(0).rowspan, String(firstGroupRowspan + 1), 'rowspan is updated after first row becomes expanded');
      await this.ModelsTablePageObject.rows.objectAt(0).collapse();
      assert.equal(this.ModelsTablePageObject.groupingRowsByColumn.objectAt(0).rowspan, String(firstGroupRowspan), 'rowspan is set to its default value');
    });
    (0, _qunit.test)('#grouped-rows #column thead has extra cell in the each row', async function (assert) {
      const columns = (0, _f.generateColumns)(['index', 'firstName', 'lastName']);
      const data = (0, _f.generateContent)(50, 1);
      this.setProperties({
        groupedHeaders: [[{
          title: 'BigTitle',
          colspan: 3
        }], [{
          title: 'SubTitle1',
          colspan: 2
        }, {
          title: 'SubTitle2',
          colspan: 1
        }]],
        dataGroupProperties: ['firstName', 'lastName'],
        data,
        columns
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table
            data=data
            columns=columns
            useDataGrouping=true
            currentGroupingPropertyName='firstName'
            displayGroupedValueAs='column'
            pageSize=50
            groupedHeaders=groupedHeaders
            dataGroupProperties=dataGroupProperties}}
      */
      {
        id: "yD8JJeY3",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"data\",\"columns\",\"useDataGrouping\",\"currentGroupingPropertyName\",\"displayGroupedValueAs\",\"pageSize\",\"groupedHeaders\",\"dataGroupProperties\"],[[24,[\"data\"]],[24,[\"columns\"]],true,\"firstName\",\"column\",50,[24,[\"groupedHeaders\"]],[24,[\"dataGroupProperties\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.ModelsTablePageObject.headers.length, 4, '4 rows in the header');
      assert.equal(this.ModelsTablePageObject.headers.objectAt(0).cells.length, 2, 'first row has 2 cells');
      assert.equal(this.ModelsTablePageObject.headers.objectAt(1).cells.length, 3, 'second row has 3 cells');
      assert.equal(this.ModelsTablePageObject.headers.objectAt(2).cells.length, 4, 'third row has 4 cells');
      assert.equal(this.ModelsTablePageObject.headers.objectAt(2).cells[0], 'First name', 'Cell contains property name used to group rows');
      assert.equal(this.ModelsTablePageObject.headers.objectAt(3).cells.length, 4, 'fourth row has 4 cells');
    });
    (0, _qunit.test)('#grouped-rows #column custom component for header cell', async function (assert) {
      const columns = (0, _f.generateColumns)(['index', 'firstName', 'lastName']);
      const data = (0, _f.generateContent)(50, 1);
      this.setProperties({
        dataGroupProperties: ['firstName', 'lastName'],
        data,
        columns
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table
            data=data
            columns=columns
            useDataGrouping=true
            currentGroupingPropertyName='firstName'
            displayGroupedValueAs='column'
            groupingRowComponent=(component "custom-row-group-toggle")
            groupHeaderCellComponent=(component "group-header-cell")
            pageSize=50
            dataGroupProperties=dataGroupProperties}}
      */
      {
        id: "jCxdeN1I",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"data\",\"columns\",\"useDataGrouping\",\"currentGroupingPropertyName\",\"displayGroupedValueAs\",\"groupingRowComponent\",\"groupHeaderCellComponent\",\"pageSize\",\"dataGroupProperties\"],[[24,[\"data\"]],[24,[\"columns\"]],true,\"firstName\",\"column\",[28,\"component\",[\"custom-row-group-toggle\"],null],[28,\"component\",[\"group-header-cell\"],null],50,[24,[\"dataGroupProperties\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.ModelsTablePageObject.headers.objectAt(0).cells[0], '~firstName~', 'Cell contains property name used to group rows wrapped with ~');
    });
    (0, _qunit.test)('#grouped-rows #column custom group-cell component content', async function (assert) {
      const columns = (0, _f.generateColumns)(['index', 'firstName', 'lastName']);
      const data = (0, _f.generateContent)(50, 1);
      this.setProperties({
        dataGroupProperties: ['firstName', 'lastName'],
        data,
        columns
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table
            data=data
            columns=columns
            useDataGrouping=true
            currentGroupingPropertyName='firstName'
            displayGroupedValueAs='column'
            groupingRowComponent=(component "custom-row-group-toggle")
            pageSize=50
            dataGroupProperties=dataGroupProperties}}
      */
      {
        id: "VzU+jbjC",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"data\",\"columns\",\"useDataGrouping\",\"currentGroupingPropertyName\",\"displayGroupedValueAs\",\"groupingRowComponent\",\"pageSize\",\"dataGroupProperties\"],[[24,[\"data\"]],[24,[\"columns\"]],true,\"firstName\",\"column\",[28,\"component\",[\"custom-row-group-toggle\"],null],50,[24,[\"dataGroupProperties\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      const fNamesCount = data.filterBy('firstName', _f.firstNames[0]).length;
      assert.equal(this.ModelsTablePageObject.groupingRowsByColumn.objectAt(0).toggleText, `firstName: ${_f.firstNames[0]} (${fNamesCount}). expanded`, 'custom component content is valid');
      await this.ModelsTablePageObject.groupingRowsByColumn.objectAt(0).toggleGroup();
      assert.equal(this.ModelsTablePageObject.groupingRowsByColumn.objectAt(0).toggleText, `firstName: ${_f.firstNames[0]} (${fNamesCount}). collapsed`, 'custom component content is updated');
      await this.ModelsTablePageObject.changeGroupByField('lastName');
      const lNamesCount = data.filterBy('lastName', _f.lastNames[0]).length;
      assert.equal(this.ModelsTablePageObject.groupingRowsByColumn.objectAt(0).toggleText, `lastName: ${_f.lastNames[0]} (${lNamesCount}). expanded`, 'custom component content is updated (2)');
    });
    (0, _qunit.test)('#grouped-rows #column custom group-cell component actions', async function (assert) {
      assert.expect(10);
      const columns = (0, _f.generateColumns)(['index', 'firstName', 'lastName']);
      const data = (0, _f.generateContent)(50, 1);
      this.setProperties({
        dataGroupProperties: ['firstName', 'lastName'],
        data,
        columns
      });

      this.actions.displayDataChanged = function () {
        assert.ok(true);
      };

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table
            data=data
            columns=columns
            useDataGrouping=true
            currentGroupingPropertyName="firstName"
            expandedRowComponent=(component "expanded-row")
            displayGroupedValueAs='row'
            multipleSelect=true
            multipleExpand=true
            groupingRowComponent=(component "custom-row-group-toggle")
            pageSize=50
            displayDataChangedAction=(action "displayDataChanged")
            dataGroupProperties=dataGroupProperties}}
      */
      {
        id: "pxyxN85g",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"data\",\"columns\",\"useDataGrouping\",\"currentGroupingPropertyName\",\"expandedRowComponent\",\"displayGroupedValueAs\",\"multipleSelect\",\"multipleExpand\",\"groupingRowComponent\",\"pageSize\",\"displayDataChangedAction\",\"dataGroupProperties\"],[[24,[\"data\"]],[24,[\"columns\"]],true,\"firstName\",[28,\"component\",[\"expanded-row\"],null],\"row\",true,true,[28,\"component\",[\"custom-row-group-toggle\"],null],50,[28,\"action\",[[23,0,[]],\"displayDataChanged\"],null],[24,[\"dataGroupProperties\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      const firstGroupRowsCount = this.ModelsTablePageObject.getRowsFromGroupColumn(0).length;
      assert.ok(this.ModelsTablePageObject.getRowsFromGroupColumn(0).every(r => !r.selected), 'All rows for rows group are not selected by default');
      assert.equal(this.ModelsTablePageObject.groupingRowsByColumn.objectAt(0).selectedCountText, '0');
      await this.ModelsTablePageObject.groupingRowsByColumn.objectAt(0).toggleSelection();
      assert.ok(this.ModelsTablePageObject.getRowsFromGroupColumn(0).every(r => r.selected), 'All rows for rows group become selected');
      assert.equal(this.ModelsTablePageObject.groupingRowsByColumn.objectAt(0).selectedCountText, firstGroupRowsCount);
      assert.ok(this.ModelsTablePageObject.getRowsFromGroupColumn(0).every(r => !r.expanded), 'All rows for rows group are not expanded by default');
      assert.equal(this.ModelsTablePageObject.groupingRowsByColumn.objectAt(0).expandedCountText, '0');
      await this.ModelsTablePageObject.groupingRowsByColumn.objectAt(0).toggleExpands();
      assert.ok(this.ModelsTablePageObject.getRowsFromGroupColumn(0).every(r => r.expanded), 'All rows for rows group become expanded');
      assert.equal(this.ModelsTablePageObject.groupingRowsByColumn.objectAt(0).expandedCountText, firstGroupRowsCount);
    });
    (0, _qunit.test)('#grouped-rows #column component for group summary', async function (assert) {
      const columns = (0, _f.generateColumns)(['index', 'firstName', 'lastName']);
      const data = (0, _f.generateContent)(50, 1);
      this.setProperties({
        dataGroupProperties: ['firstName', 'lastName'],
        data,
        columns
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table
            data=data
            columns=columns
            useDataGrouping=true
            currentGroupingPropertyName='firstName'
            groupSummaryRowComponent=(component "group-summary-row")
            displayGroupedValueAs='column'
            pageSize=50
            dataGroupProperties=dataGroupProperties}}
      */
      {
        id: "5D4wSW0i",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"data\",\"columns\",\"useDataGrouping\",\"currentGroupingPropertyName\",\"groupSummaryRowComponent\",\"displayGroupedValueAs\",\"pageSize\",\"dataGroupProperties\"],[[24,[\"data\"]],[24,[\"columns\"]],true,\"firstName\",[28,\"component\",[\"group-summary-row\"],null],\"column\",50,[24,[\"dataGroupProperties\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      const groupRows = this.ModelsTablePageObject.getRowsFromGroupColumn(0);
      const rowsInGroup = data.filterBy('firstName', _f.firstNames[0]);
      assert.equal(groupRows.length, rowsInGroup.length, 'rows for first group are shown with summary row');
      const firstGroupRowCell = this.ModelsTablePageObject.rows[groupRows.length].cells.objectAt(1);
      assert.equal(firstGroupRowCell.groupSummaryVisible, rowsInGroup.length, 'visible rows are bound correctly');
      assert.equal(firstGroupRowCell.groupSummarySelected, 0, 'selected rows are bound correctly');
      await this.ModelsTablePageObject.rows.objectAt(0).click();
      assert.equal(firstGroupRowCell.groupSummarySelected, 1, 'selected rows are bound correctly (2)');
    });
    (0, _qunit.test)('#in-line edit: row is editable, column displays default edit component', async function (assert) {
      assert.expect(13);
      this.owner.register('component:stub-comp-edit', Ember.Component.extend({
        classNames: ['cellInput'],
        layout: Ember.HTMLBars.template(
        /*
          {{get record propertyName}}
        */
        {
          id: "NtQK5z7u",
          block: "{\"symbols\":[],\"statements\":[[1,[28,\"get\",[[24,[\"record\"]],[24,[\"propertyName\"]]],null],false]],\"hasEval\":false}",
          meta: {}
        })
      }));
      const columns = (0, _f.generateColumns)(['index', 'firstName', 'lastName']);
      columns[0].editable = false; // Index is not editable

      columns[1].componentForEdit = 'stub-comp-edit'; // Index is not editable

      this.setProperties({
        data: (0, _f.generateContent)(5, 1),
        columns
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            {{#models-table data=data columns=columns as |c|}}
              {{#c.table as |table|}}
                {{#table.body as |body|}}
                  {{#each body.visibleContent as |record index|}}
                    {{#body.row record=record index=index as |row|}}
                        <div class="isEditRow">{{if row.isEditRow "yes" "no"}}</div>
                        <div class="actionEdit" {{action row.editRow}}>Edit</div>
                        <div class="actionSave" {{action row.saveRow}}>Save</div>
                        <div class="actionCancel" {{action row.cancelEditRow}}>Cancel</div>
                      {{#each row.visibleProcessedColumns as |column|}}
                        {{component row.cell class="cell" index=index column=column}}
                      {{/each}}
                    {{/body.row}}
                  {{/each}}
                {{/table.body}}
              {{/c.table}}
            {{/models-table}}
          
      */
      {
        id: "tOvpt/h4",
        block: "{\"symbols\":[\"c\",\"table\",\"body\",\"record\",\"index\",\"row\",\"column\"],\"statements\":[[0,\"\\n\"],[4,\"models-table\",null,[[\"data\",\"columns\"],[[24,[\"data\"]],[24,[\"columns\"]]]],{\"statements\":[[4,\"component\",[[28,\"-assert-implicit-component-helper-argument\",[[23,1,[\"table\"]],\"expected `c.table` to be a contextual component but found a string. Did you mean `(component c.table)`? (L3:C11) \"],null]],null,{\"statements\":[[4,\"component\",[[28,\"-assert-implicit-component-helper-argument\",[[23,2,[\"body\"]],\"expected `table.body` to be a contextual component but found a string. Did you mean `(component table.body)`? (L4:C13) \"],null]],null,{\"statements\":[[4,\"each\",[[23,3,[\"visibleContent\"]]],null,{\"statements\":[[4,\"component\",[[28,\"-assert-implicit-component-helper-argument\",[[23,3,[\"row\"]],\"expected `body.row` to be a contextual component but found a string. Did you mean `(component body.row)`? (L6:C17) \"],null]],[[\"record\",\"index\"],[[23,4,[]],[23,5,[]]]],{\"statements\":[[0,\"                  \"],[7,\"div\",true],[10,\"class\",\"isEditRow\"],[8],[1,[28,\"if\",[[23,6,[\"isEditRow\"]],\"yes\",\"no\"],null],false],[9],[0,\"\\n                  \"],[7,\"div\",false],[12,\"class\",\"actionEdit\"],[3,\"action\",[[23,0,[]],[23,6,[\"editRow\"]]]],[8],[0,\"Edit\"],[9],[0,\"\\n                  \"],[7,\"div\",false],[12,\"class\",\"actionSave\"],[3,\"action\",[[23,0,[]],[23,6,[\"saveRow\"]]]],[8],[0,\"Save\"],[9],[0,\"\\n                  \"],[7,\"div\",false],[12,\"class\",\"actionCancel\"],[3,\"action\",[[23,0,[]],[23,6,[\"cancelEditRow\"]]]],[8],[0,\"Cancel\"],[9],[0,\"\\n\"],[4,\"each\",[[23,6,[\"visibleProcessedColumns\"]]],null,{\"statements\":[[0,\"                  \"],[1,[28,\"component\",[[23,6,[\"cell\"]]],[[\"class\",\"index\",\"column\"],[\"cell\",[23,5,[]],[23,7,[]]]]],false],[0,\"\\n\"]],\"parameters\":[7]},null]],\"parameters\":[6]},null]],\"parameters\":[4,5]},null]],\"parameters\":[3]},null]],\"parameters\":[2]},null]],\"parameters\":[1]},null],[0,\"    \"]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.querySelector('.isEditRow').textContent, 'no', 'Row is not editable');
      assert.equal(this.element.querySelectorAll('input').length, 0, 'There are no input fields');
      assert.equal(this.element.querySelectorAll('.cellInput').length, 0, 'There are no custom input fields');
      await (0, _testHelpers.click)('.actionEdit');
      assert.equal(this.element.querySelector('.isEditRow').textContent, 'yes', 'Row is editable');
      assert.equal(this.element.querySelectorAll('input').length, 1, 'There are input fields');
      assert.equal(this.element.querySelectorAll('.cellInput').length, 1, 'Uses a custom Edit component');
      await (0, _testHelpers.click)('.actionCancel');
      assert.equal(this.element.querySelector('.isEditRow').textContent, 'no', 'Row is not editable');
      assert.equal(this.element.querySelectorAll('input').length, 0, 'There are no input fields');
      assert.equal(this.element.querySelectorAll('.cellInput').length, 0, 'There are no custom input fields');
      await (0, _testHelpers.click)('.actionEdit');
      assert.equal(this.element.querySelector('.isEditRow').textContent, 'yes', 'Row is editable');
      await (0, _testHelpers.click)('.actionSave');
      assert.equal(this.element.querySelector('.isEditRow').textContent, 'no', 'Row is not editable');
      assert.equal(this.element.querySelectorAll('input').length, 0, 'There are no input fields');
      assert.equal(this.element.querySelectorAll('.cellInput').length, 0, 'There are no custom input fields');
    });
    (0, _qunit.test)('#publicAPI: publicAPI is accessible ', async function (assert) {
      assert.expect(3);
      const columns = (0, _f.generateColumns)(['index', 'someWord']);
      columns[1].componentForFilterCell = 'filter-cell-input';
      this.setProperties({
        data: (0, _f.generateContent)(10, 1),
        columns
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            {{#models-table data=data columns=columns as |mt|}}
              <div class="records-count">{{mt.publicAPI.recordsCount}}</div>
              {{mt.table}}
            {{/models-table}}
          
      */
      {
        id: "WIin8amK",
        block: "{\"symbols\":[\"mt\"],\"statements\":[[0,\"\\n\"],[4,\"models-table\",null,[[\"data\",\"columns\"],[[24,[\"data\"]],[24,[\"columns\"]]]],{\"statements\":[[0,\"        \"],[7,\"div\",true],[10,\"class\",\"records-count\"],[8],[1,[23,1,[\"publicAPI\",\"recordsCount\"]],false],[9],[0,\"\\n        \"],[1,[23,1,[\"table\"]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"    \"]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.querySelector('.records-count').textContent, '10', 'records count is accessible');
      await this.ModelsTablePageObject.filters.objectAt(1).inputFilter('one');
      assert.equal(this.element.querySelector('.records-count').textContent, '1', 'records count is updated');
      await this.ModelsTablePageObject.filters.objectAt(1).clearFilter();
      assert.equal(this.element.querySelector('.records-count').textContent, '10', 'records count is restored');
    });
    (0, _qunit.test)('#292 rows grouping doesn\'t work if grouped values are not strings #row', async function (assert) {
      const columns = (0, _f.generateColumns)(['index', 'firstName', 'lastName', 'age']);
      const data = (0, _f.generateContent)(50, 1);
      this.setProperties({
        dataGroupProperties: ['age'],
        data,
        columns
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table
            data=data
            columns=columns
            useDataGrouping=true
            currentGroupingPropertyName='age'
            displayGroupedValueAs='row'
            pageSize=50
            dataGroupProperties=dataGroupProperties}}
      */
      {
        id: "0Pv0+BjF",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"data\",\"columns\",\"useDataGrouping\",\"currentGroupingPropertyName\",\"displayGroupedValueAs\",\"pageSize\",\"dataGroupProperties\"],[[24,[\"data\"]],[24,[\"columns\"]],true,\"age\",\"row\",50,[24,[\"dataGroupProperties\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.ModelsTablePageObject.rows.length, 50, 'table has 50 rows with data');
      assert.deepEqual(this.ModelsTablePageObject.groupingRowsByRow.map(r => r.cell.content), data.uniqBy('age').map(item => `${item.age}`).sort(), 'grouping rows have valid content');
    });
    (0, _qunit.test)('#292 rows grouping doesn\'t work if grouped values are not strings #column', async function (assert) {
      const columns = (0, _f.generateColumns)(['index', 'firstName', 'lastName', 'age']);
      const data = (0, _f.generateContent)(50, 1);
      this.setProperties({
        dataGroupProperties: ['age'],
        data,
        columns
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table
            data=data
            columns=columns
            useDataGrouping=true
            currentGroupingPropertyName='age'
            displayGroupedValueAs='column'
            pageSize=50
            dataGroupProperties=dataGroupProperties}}
      */
      {
        id: "dmkkXeW5",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"data\",\"columns\",\"useDataGrouping\",\"currentGroupingPropertyName\",\"displayGroupedValueAs\",\"pageSize\",\"dataGroupProperties\"],[[24,[\"data\"]],[24,[\"columns\"]],true,\"age\",\"column\",50,[24,[\"dataGroupProperties\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.ModelsTablePageObject.rows.length, 50, 'table has 50 rows with data');
      assert.deepEqual(this.ModelsTablePageObject.groupingRowsByColumn.toArray().mapBy('content'), data.uniqBy('age').map(item => `${item.age}`).sort(), 'grouping cell have valid content');
    });
    (0, _qunit.test)('component in the table-footer cells', async function (assert) {
      const columns = (0, _f.generateColumns)(['age', 'index']);
      columns[0].componentForFooterCell = 'models-table/cell-column-summary';
      this.setProperties({
        data: (0, _f.generateContent)(10, 1),
        columns
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table
            data=data
            columns=columns}}
      */
      {
        id: "1dKzPSCh",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"data\",\"columns\"],[[24,[\"data\"]],[24,[\"columns\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      assert.deepEqual(this.ModelsTablePageObject.footer.cells.mapBy('isComponent'), [true, false], 'tfoot first cell has a component inside');
    });
    (0, _qunit.test)('custom colspan for header cells', async function (assert) {
      const columns = (0, _f.generateColumns)(['age', 'index', 'index2', 'indexWithHtml', 'firstName', 'lastName']);
      columns[1].colspanForFilterCell = 3;
      columns[1].colspanForSortCell = 3;
      this.setProperties({
        data: (0, _f.generateContent)(10, 1),
        columns
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table
            data=data
            columns=columns}}
      */
      {
        id: "1dKzPSCh",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"data\",\"columns\"],[[24,[\"data\"]],[24,[\"columns\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.ModelsTablePageObject.sorting.length, columns.length - 2, 'sorting row hash a correct columns number');
      assert.equal(this.ModelsTablePageObject.filters.length, columns.length - 2, 'Filtering row hash a correct columns number');
      assert.equal(this.ModelsTablePageObject.sorting.objectAt(1).colspan, 3, 'Colspan for second sort-cell is 3');
      assert.equal(this.ModelsTablePageObject.filters.objectAt(1).colspan, 3, 'Colspan for second filter-cell is 3');
      await this.ModelsTablePageObject.toggleColumnDropDown();
      await this.ModelsTablePageObject.columnsDropDown.objectAt(6).click(); // hide third column in the colspan

      assert.equal(this.ModelsTablePageObject.sorting.objectAt(1).colspan, 2, 'Colspan for second sort-cell is 2');
      assert.equal(this.ModelsTablePageObject.filters.objectAt(1).colspan, 2, 'Colspan for second filter-cell is 2');
      await this.ModelsTablePageObject.columnsDropDown.objectAt(5).click(); // hide second column in the colspan

      assert.equal(this.ModelsTablePageObject.sorting.objectAt(1).colspan, 1, 'Colspan for second sort-cell is 1');
      assert.equal(this.ModelsTablePageObject.filters.objectAt(1).colspan, 1, 'Colspan for second filter-cell is 1');
      await this.ModelsTablePageObject.columnsDropDown.objectAt(4).click(); // hide first column in the colspan

      assert.equal(this.ModelsTablePageObject.sorting.length, columns.length - 3, 'sorting row hash a correct columns number (2)');
      assert.equal(this.ModelsTablePageObject.filters.length, columns.length - 3, 'Filtering row hash a correct columns number (2)');
      await this.ModelsTablePageObject.columnsDropDown.objectAt(5).click(); // show second column in the colspan

      assert.equal(this.ModelsTablePageObject.sorting.length, columns.length - 2, 'sorting row hash a correct columns number (3)');
      assert.equal(this.ModelsTablePageObject.filters.length, columns.length - 2, 'Filtering row hash a correct columns number (3)');
      await this.ModelsTablePageObject.columnsDropDown.objectAt(6).click(); // show third column in the colspan

      assert.equal(this.ModelsTablePageObject.sorting.objectAt(1).colspan, 2, 'Colspan for second sort-cell is 2');
      assert.equal(this.ModelsTablePageObject.filters.objectAt(1).colspan, 2, 'Colspan for second filter-cell is 2');
    });
    (0, _qunit.test)('#325 toggle all selected works', async function (assert) {
      const columns = (0, _f.generateColumns)(['age', 'index']);
      const owner = Ember.get(this, 'owner');
      owner.register('model:test325', _emberData.default.Model.extend({}));
      const store = owner.lookup('service:store');
      store.createRecord('test325', {});
      columns.unshiftObject({
        component: 'select-row-checkbox',
        useFilter: false,
        mayBeHidden: false,
        componentForSortCell: 'select-all-rows-checkbox'
      });
      this.setProperties({
        data: store.peekAll('test325'),
        // data must be a result from `store` (peekAll, findAll, query - what ever)
        columns
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table data=data columns=columns}}
      */
      {
        id: "1dKzPSCh",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"data\",\"columns\"],[[24,[\"data\"]],[24,[\"columns\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      await this.ModelsTablePageObject.toggleAllSelection();
      assert.equal(this.ModelsTablePageObject.rows.filter(r => r.selected).length, 1, 'All rows are selected');
      await this.ModelsTablePageObject.toggleAllSelection();
      assert.equal(this.ModelsTablePageObject.rows.filter(r => r.selected).length, 0, 'All rows are not selected');
    });
    (0, _qunit.test)('#342 properly destroy columns when models-table is destroyed', async function (assert) {
      const columns = (0, _f.generateColumns)(['index']);
      columns[0].filterWithSelect = true;
      columns[0].sortFilterOptions = true;
      const data = (0, _f.generateContent)(10);
      this.setProperties({
        data,
        columns
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table data=data columns=columns}}
      */
      {
        id: "1dKzPSCh",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"data\",\"columns\"],[[24,[\"data\"]],[24,[\"columns\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      await (0, _testHelpers.clearRender)();
      Ember.run(() => Ember.set(data[0], 'index', 100500));
      assert.ok(true);
    });
    (0, _qunit.test)('A11y', async function (assert) {
      const columns = (0, _f.generateColumns)(['index', 'reversedIndex']);
      columns[0].filterWithSelect = true;
      const data = (0, _f.generateContent)(10);
      this.setProperties({
        data,
        columns
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table data=data columns=columns}}
      */
      {
        id: "1dKzPSCh",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table\",null,[[\"data\",\"columns\"],[[24,[\"data\"]],[24,[\"columns\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      await (0, _audit.default)('.models-table-wrapper');
      assert.ok(true, 'no a11y errors found');
    });
  });
});
define("dummy/tests/integration/components/models-table/cell-content-display-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | models table/cell content display', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      this.setProperties({
        record: {
          title: 'Hello'
        },
        column: {
          propertyName: 'title'
        }
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table/cell-content-display record=record column=column}}
      */
      {
        id: "8V4m+bIY",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table/cell-content-display\",null,[[\"record\",\"column\"],[[24,[\"record\"]],[24,[\"column\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), this.get('record.title'));
    });
  });
});
define("dummy/tests/integration/components/models-table/cell-content-edit-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | models table/cell content edit', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      this.setProperties({
        record: {
          title: 'Hello'
        },
        column: {
          propertyName: 'title'
        }
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table/cell-content-edit record=record column=column}}
      */
      {
        id: "EFnRaRKa",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table/cell-content-edit\",null,[[\"record\",\"column\"],[[24,[\"record\"]],[24,[\"column\"]]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.querySelector('input').value, this.get('record.title'));
    });
  });
});
define("dummy/tests/integration/components/models-table/cell-edit-toggle-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | models table/cell edit toggle', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    hooks.beforeEach(async function (assert) {
      this.setProperties({
        record: {},
        isEditRow: false,
        actions: {
          // methods provided by the grid
          editRow: () => {
            Ember.set(this, 'isEditRow', true);
            assert.ok(true, 'Edit Row Action was called');
          },
          cancelEditRow: () => {
            Ember.set(this, 'isEditRow', false);
            assert.ok(true, 'Cancel Edit Row Action was called');
          },
          saveRow: () => {
            Ember.set(this, 'isEditRow', false);
            assert.ok(true, 'Save Row Action was called');
          },
          // methods provided by user of component
          onSave: () => {
            assert.ok(true, 'onSave Action was called');
            return Ember.get(this, 'saveReturn');
          },
          onEdit: () => {
            assert.ok(true, 'onEdit Action was called');
            return Ember.get(this, 'editReturn');
          },
          onCancel: () => {
            assert.ok(true, 'onCancel Action was called');
            return Ember.get(this, 'cancelReturn');
          }
        },
        // Test Properties
        editReturn: true,
        saveReturn: true,
        cancelReturn: true
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table/cell-edit-toggle
            record=record
            editRow=(action "editRow")
            cancelEditRow=(action "cancelEditRow")
            saveRow=(action "saveRow")
            isEditRow=isEditRow
            saveRowAction=(action "onSave")
            editRowAction=(action "onEdit")
            cancelRowAction=(action "onCancel")
          }}
      */
      {
        id: "hiJBETnS",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"models-table/cell-edit-toggle\",null,[[\"record\",\"editRow\",\"cancelEditRow\",\"saveRow\",\"isEditRow\",\"saveRowAction\",\"editRowAction\",\"cancelRowAction\"],[[24,[\"record\"]],[28,\"action\",[[23,0,[]],\"editRow\"],null],[28,\"action\",[[23,0,[]],\"cancelEditRow\"],null],[28,\"action\",[[23,0,[]],\"saveRow\"],null],[24,[\"isEditRow\"]],[28,\"action\",[[23,0,[]],\"onSave\"],null],[28,\"action\",[[23,0,[]],\"onEdit\"],null],[28,\"action\",[[23,0,[]],\"onCancel\"],null]]]],false]],\"hasEval\":false}",
        meta: {}
      }));
    });
    (0, _qunit.test)('Enters / Exits Edit Mode correctly', function (assert) {
      assert.expect(13);
      let buttons = this.element.querySelectorAll('button');
      assert.equal(buttons.length, 1, 'Only Edit button is displayed'); // Click the Edit button to enter Edit Mode

      buttons[0].click();
      buttons = this.element.querySelectorAll('button');
      assert.equal(buttons.length, 2, 'Only Save Cancel buttons are displayed'); // Click the Cancel button to exit Edit Mode

      buttons[0].click();
      buttons = this.element.querySelectorAll('button');
      assert.equal(buttons.length, 1, 'Cancel exited edit mode'); // Click the Edit button to enter Edit Mode

      buttons[0].click();
      buttons = this.element.querySelectorAll('button');
      assert.equal(buttons.length, 2, 'Only Save Cancel buttons are displayed'); // Click the Save button to exit Edit Mode

      buttons[1].click();
      buttons = this.element.querySelectorAll('button');
      assert.equal(buttons.length, 1, 'Save exited edit mode');
    });
    (0, _qunit.test)('Action only progress on truthy values', function (assert) {
      assert.expect(10);
      let buttons = this.element.querySelectorAll('button');
      assert.equal(buttons.length, 1, 'Only Edit button is displayed'); // Click the Edit button to enter Edit Mode

      Ember.set(this, 'editReturn', false);
      buttons[0].click();
      buttons = this.element.querySelectorAll('button');
      assert.equal(buttons.length, 1, 'Edit Button did not Progress');
      Ember.set(this, 'editReturn', true);
      buttons[0].click();
      buttons = this.element.querySelectorAll('button');
      assert.equal(buttons.length, 2, 'Edit Button Progresses');
      Ember.set(this, 'cancelReturn', false);
      buttons[0].click();
      buttons = this.element.querySelectorAll('button');
      assert.equal(buttons.length, 2, 'Cancel Button did not progress'); // Click the Save button to exit Edit Mode

      Ember.set(this, 'saveReturn', false);
      buttons[1].click();
      buttons = this.element.querySelectorAll('button');
      assert.equal(buttons.length, 2, 'Save Button did not progress');
    });
    (0, _qunit.test)('Action only progress on truthy values', function (assert) {
      assert.expect(10);
      let buttons = this.element.querySelectorAll('button');
      assert.equal(buttons.length, 1, 'Only Edit button is displayed'); // Click the Edit button to enter Edit Mode

      Ember.set(this, 'editReturn', false);
      buttons[0].click();
      buttons = this.element.querySelectorAll('button');
      assert.equal(buttons.length, 1, 'Edit Button did not Progress');
      Ember.set(this, 'editReturn', true);
      buttons[0].click();
      buttons = this.element.querySelectorAll('button');
      assert.equal(buttons.length, 2, 'Edit Button Progresses');
      Ember.set(this, 'cancelReturn', false);
      buttons[0].click();
      buttons = this.element.querySelectorAll('button');
      assert.equal(buttons.length, 2, 'Cancel Button did not progress'); // Click the Save button to exit Edit Mode

      Ember.set(this, 'saveReturn', false);
      buttons[1].click();
      buttons = this.element.querySelectorAll('button');
      assert.equal(buttons.length, 2, 'Save Button did not progress');
    });
    (0, _qunit.test)('Actions accept promises', function (assert) {
      assert.expect(10);
      let buttons = this.element.querySelectorAll('button');
      assert.equal(buttons.length, 1, 'Only Edit button is displayed'); // Click the Edit button to enter Edit Mode

      Ember.set(this, 'editReturn', Ember.RSVP.resolve(false));
      buttons[0].click();
      buttons = this.element.querySelectorAll('button');
      assert.equal(buttons.length, 1, 'Edit Button did not Progress');
      Ember.set(this, 'editReturn', Ember.RSVP.resolve(true));
      buttons[0].click();
      buttons = this.element.querySelectorAll('button');
      assert.equal(buttons.length, 2, 'Edit Button Progresses');
      Ember.set(this, 'cancelReturn', Ember.RSVP.resolve(false));
      buttons[0].click();
      buttons = this.element.querySelectorAll('button');
      assert.equal(buttons.length, 2, 'Cancel Button did not progress'); // Click the Save button to exit Edit Mode

      Ember.set(this, 'saveReturn', Ember.RSVP.resolve(false));
      buttons[1].click();
      buttons = this.element.querySelectorAll('button');
      assert.equal(buttons.length, 2, 'Save Button did not progress');
    });
  });
});
define("dummy/tests/integration/components/models-table/cell-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | models table/cell', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table/cell}}
      */
      {
        id: "3SpJhUQK",
        block: "{\"symbols\":[],\"statements\":[[1,[22,\"models-table/cell\"],false]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            {{#models-table/cell}}
              template block text
            {{/models-table/cell}}
          
      */
      {
        id: "umsytV/8",
        block: "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"models-table/cell\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("dummy/tests/integration/components/models-table/data-group-by-select-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | models table/data group by select', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', function (assert) {
      assert.ok(true);
    });
  });
});
define("dummy/tests/integration/components/models-table/group-summary-row-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | models-table/group-summary-row', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table/group-summary-row}}
      */
      {
        id: "4yrpaPrL",
        block: "{\"symbols\":[],\"statements\":[[1,[22,\"models-table/group-summary-row\"],false]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            {{#models-table/group-summary-row}}
              template block text
            {{/models-table/group-summary-row}}
          
      */
      {
        id: "WK+SgkV5",
        block: "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"models-table/group-summary-row\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("dummy/tests/integration/components/models-table/page-size-select-test", ["qunit", "ember-qunit", "@ember/test-helpers", "dummy/initializers/ember-cli-mirage", "dummy/tests/helpers/f", "dummy/tests/helpers/get-page-object"], function (_qunit, _emberQunit, _testHelpers, _emberCliMirage, _f, _getPageObject) {
  "use strict";

  (0, _qunit.module)('Integration | Component | models table/page size select', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    hooks.beforeEach(function () {
      this.ModelsTablePageObject = (0, _getPageObject.default)(this);
      this.server = (0, _emberCliMirage.startMirage)();
      this.server.createList('user', 100);
      this.setProperties({
        data: this.server.db.users,
        columns: (0, _f.generateColumns)(['index'])
      });
    });
    hooks.afterEach(function () {
      this.server.shutdown();
    });
    (0, _qunit.test)('dropdown is shown', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
          {{#models-table data=data columns=columns as |mt|}}
            {{mt.table}}
            {{#mt.footer as |footer|}}
              {{footer.size-select}}
            {{/mt.footer}}
          {{/models-table}}
      */
      {
        id: "1Q7qrhJq",
        block: "{\"symbols\":[\"mt\",\"footer\"],\"statements\":[[0,\"\\n\"],[4,\"models-table\",null,[[\"data\",\"columns\"],[[24,[\"data\"]],[24,[\"columns\"]]]],{\"statements\":[[0,\"      \"],[1,[23,1,[\"table\"]],false],[0,\"\\n\"],[4,\"component\",[[28,\"-assert-implicit-component-helper-argument\",[[23,1,[\"footer\"]],\"expected `mt.footer` to be a contextual component but found a string. Did you mean `(component mt.footer)`? (L4:C9) \"],null]],null,{\"statements\":[[0,\"        \"],[1,[23,2,[\"size-select\"]],false],[0,\"\\n\"]],\"parameters\":[2]},null]],\"parameters\":[1]},null]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.ModelsTablePageObject.pageSize, '10');
      await this.ModelsTablePageObject.changePageSize(25);
      assert.equal(this.ModelsTablePageObject.rows.length, 25);
      this.set('data', this.server.db.users.slice(0, 15));
      assert.equal(this.ModelsTablePageObject.pageSize, '25');
      assert.equal(this.ModelsTablePageObject.rows.length, 15);
    });
    (0, _qunit.test)('dropdown is shown (2)', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
          {{#models-table data=data columns=columns as |mt|}}
            {{mt.table}}
            {{#mt.footer as |footer|}}
              {{#footer.size-select as |s|}}
                {{s.select}}
              {{/footer.size-select}}
            {{/mt.footer}}
          {{/models-table}}
      */
      {
        id: "Uc5sxv22",
        block: "{\"symbols\":[\"mt\",\"footer\",\"s\"],\"statements\":[[0,\"\\n\"],[4,\"models-table\",null,[[\"data\",\"columns\"],[[24,[\"data\"]],[24,[\"columns\"]]]],{\"statements\":[[0,\"      \"],[1,[23,1,[\"table\"]],false],[0,\"\\n\"],[4,\"component\",[[28,\"-assert-implicit-component-helper-argument\",[[23,1,[\"footer\"]],\"expected `mt.footer` to be a contextual component but found a string. Did you mean `(component mt.footer)`? (L4:C9) \"],null]],null,{\"statements\":[[4,\"component\",[[28,\"-assert-implicit-component-helper-argument\",[[23,2,[\"size-select\"]],\"expected `footer.size-select` to be a contextual component but found a string. Did you mean `(component footer.size-select)`? (L5:C11) \"],null]],null,{\"statements\":[[0,\"          \"],[1,[23,3,[\"select\"]],false],[0,\"\\n\"]],\"parameters\":[3]},null]],\"parameters\":[2]},null]],\"parameters\":[1]},null]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.ModelsTablePageObject.pageSize, '10');
      await this.ModelsTablePageObject.changePageSize(25);
      assert.equal(this.ModelsTablePageObject.rows.length, 25);
      this.set('data', this.server.db.users.slice(0, 15));
      assert.equal(this.ModelsTablePageObject.pageSize, '25');
      assert.equal(this.ModelsTablePageObject.rows.length, 15);
    });
  });
});
define("dummy/tests/integration/components/models-table/pagination-numeric-test", ["qunit", "ember-qunit", "@ember/test-helpers", "dummy/tests/pages/models-table-bs", "dummy/initializers/ember-cli-mirage", "dummy/tests/helpers/f"], function (_qunit, _emberQunit, _testHelpers, _modelsTableBs, _emberCliMirage, _f) {
  "use strict";

  const {
    numericNavigation
  } = _modelsTableBs.default;
  (0, _qunit.module)('Integration | Component | models table/pagination numeric', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    hooks.beforeEach(function () {
      this.server = (0, _emberCliMirage.startMirage)();
      this.server.createList('user', 100);
      this.setProperties({
        data: this.server.db.users,
        columns: (0, _f.generateColumns)(['index'])
      });
    });
    hooks.afterEach(function () {
      this.server.shutdown();
    });
    (0, _qunit.test)('buttons are shown', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
          {{#models-table data=data columns=columns as |mt|}}
            {{#mt.footer as |footer|}}
              {{footer.pagination-numeric}}
            {{/mt.footer}}
          {{/models-table}}
      */
      {
        id: "mS/7RBdX",
        block: "{\"symbols\":[\"mt\",\"footer\"],\"statements\":[[0,\"\\n\"],[4,\"models-table\",null,[[\"data\",\"columns\"],[[24,[\"data\"]],[24,[\"columns\"]]]],{\"statements\":[[4,\"component\",[[28,\"-assert-implicit-component-helper-argument\",[[23,1,[\"footer\"]],\"expected `mt.footer` to be a contextual component but found a string. Did you mean `(component mt.footer)`? (L3:C9) \"],null]],null,{\"statements\":[[0,\"        \"],[1,[23,2,[\"pagination-numeric\"]],false],[0,\"\\n\"]],\"parameters\":[2]},null]],\"parameters\":[1]},null]],\"hasEval\":false}",
        meta: {}
      }));
      assert.deepEqual(numericNavigation.mapBy('text'), ['1', '2', '...', '10']);
      await numericNavigation.objectAt(1).click();
      assert.deepEqual(numericNavigation.mapBy('text'), ['1', '2', '3', '...', '10']);
    });
    (0, _qunit.test)('buttons are shown (2)', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
          {{#models-table data=data columns=columns as |mt|}}
            {{#mt.footer as |footer|}}
              {{#footer.pagination-numeric as |pn|}}
                {{#each pn.visiblePageNumbers as |page|}}
                  {{#if page.isLink}}
                    <button type="button" class="{{if page.isActive "active"}}"
                    {{action pn.gotoCustomPage page.label}}>{{page.label}}</button>
                  {{else}}
                    <button disabled="disabled" type="button" 
                      {{action pn.gotoCustomPage page.label}}>{{page.label}}</button>
                  {{/if}}
                {{/each}}
              {{/footer.pagination-numeric}}
            {{/mt.footer}}
          {{/models-table}}
      */
      {
        id: "VboIGLsj",
        block: "{\"symbols\":[\"mt\",\"footer\",\"pn\",\"page\"],\"statements\":[[0,\"\\n\"],[4,\"models-table\",null,[[\"data\",\"columns\"],[[24,[\"data\"]],[24,[\"columns\"]]]],{\"statements\":[[4,\"component\",[[28,\"-assert-implicit-component-helper-argument\",[[23,1,[\"footer\"]],\"expected `mt.footer` to be a contextual component but found a string. Did you mean `(component mt.footer)`? (L3:C9) \"],null]],null,{\"statements\":[[4,\"component\",[[28,\"-assert-implicit-component-helper-argument\",[[23,2,[\"pagination-numeric\"]],\"expected `footer.pagination-numeric` to be a contextual component but found a string. Did you mean `(component footer.pagination-numeric)`? (L4:C11) \"],null]],null,{\"statements\":[[4,\"each\",[[23,3,[\"visiblePageNumbers\"]]],null,{\"statements\":[[4,\"if\",[[23,4,[\"isLink\"]]],null,{\"statements\":[[0,\"              \"],[7,\"button\",false],[12,\"class\",[29,[[28,\"if\",[[23,4,[\"isActive\"]],\"active\"],null]]]],[12,\"type\",\"button\"],[3,\"action\",[[23,0,[]],[23,3,[\"gotoCustomPage\"]],[23,4,[\"label\"]]]],[8],[1,[23,4,[\"label\"]],false],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"              \"],[7,\"button\",false],[12,\"disabled\",\"disabled\"],[12,\"type\",\"button\"],[3,\"action\",[[23,0,[]],[23,3,[\"gotoCustomPage\"]],[23,4,[\"label\"]]]],[8],[1,[23,4,[\"label\"]],false],[9],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[4]},null]],\"parameters\":[3]},null]],\"parameters\":[2]},null]],\"parameters\":[1]},null]],\"hasEval\":false}",
        meta: {}
      }));
      assert.deepEqual(numericNavigation.mapBy('text'), ['1', '2', '...', '10']);
      await numericNavigation.objectAt(1).click();
      assert.deepEqual(numericNavigation.mapBy('text'), ['1', '2', '3', '...', '10']);
    });
  });
});
define("dummy/tests/integration/components/models-table/row-filtering-cell-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | models table/row filtering cell', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table/row-filtering-cell}}
      */
      {
        id: "katb2Evz",
        block: "{\"symbols\":[],\"statements\":[[1,[22,\"models-table/row-filtering-cell\"],false]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            {{#models-table/row-filtering-cell}}
              template block text
            {{/models-table/row-filtering-cell}}
          
      */
      {
        id: "Xx9PDQSu",
        block: "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"models-table/row-filtering-cell\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("dummy/tests/integration/components/models-table/row-group-toggle-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | models table/row group toggle', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table/row-group-toggle}}
      */
      {
        id: "4oZDzv1v",
        block: "{\"symbols\":[],\"statements\":[[1,[22,\"models-table/row-group-toggle\"],false]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            {{#models-table/row-group-toggle}}
              template block text
            {{/models-table/row-group-toggle}}
          
      */
      {
        id: "4Npai4y/",
        block: "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"models-table/row-group-toggle\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("dummy/tests/integration/components/models-table/row-grouping-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | models table/row grouping', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', function (assert) {
      assert.ok(true);
    });
  });
});
define("dummy/tests/integration/components/models-table/row-sorting-cell-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | models table/row sorting cell', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table/row-sorting-cell}}
      */
      {
        id: "RdRFklLy",
        block: "{\"symbols\":[],\"statements\":[[1,[22,\"models-table/row-sorting-cell\"],false]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            {{#models-table/row-sorting-cell}}
              template block text
            {{/models-table/row-sorting-cell}}
          
      */
      {
        id: "BZ1asDrM",
        block: "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"models-table/row-sorting-cell\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("dummy/tests/integration/components/models-table/themes/bootstrap4/columns-dropdown-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | models table/themes/bootstrap4/columns dropdown', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table/themes/bootstrap4/columns-dropdown}}
      */
      {
        id: "OhTr1O1x",
        block: "{\"symbols\":[],\"statements\":[[1,[22,\"models-table/themes/bootstrap4/columns-dropdown\"],false]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            {{#models-table/themes/bootstrap4/columns-dropdown}}
              template block text
            {{/models-table/themes/bootstrap4/columns-dropdown}}
          
      */
      {
        id: "mxWZS5G4",
        block: "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"models-table/themes/bootstrap4/columns-dropdown\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("dummy/tests/integration/components/models-table/themes/bootstrap4/data-group-by-select-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | models table/themes/bootstrap4/data group by select', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', function (assert) {
      assert.ok(true);
    });
  });
});
define("dummy/tests/integration/components/models-table/themes/bootstrap4/global-filter-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | models table/themes/bootstrap4/global filter', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table/themes/bootstrap4/global-filter}}
      */
      {
        id: "H7uZrE88",
        block: "{\"symbols\":[],\"statements\":[[1,[22,\"models-table/themes/bootstrap4/global-filter\"],false]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            {{#models-table/themes/bootstrap4/global-filter}}
              template block text
            {{/models-table/themes/bootstrap4/global-filter}}
          
      */
      {
        id: "hJ2MYHdo",
        block: "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"models-table/themes/bootstrap4/global-filter\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("dummy/tests/integration/components/models-table/themes/bootstrap4/row-filtering-cell-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | models table/themes/bootstrap4/row filtering cell', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table/themes/bootstrap4/row-filtering-cell}}
      */
      {
        id: "U5+uBCQg",
        block: "{\"symbols\":[],\"statements\":[[1,[22,\"models-table/themes/bootstrap4/row-filtering-cell\"],false]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            {{#models-table/themes/bootstrap4/row-filtering-cell}}
              template block text
            {{/models-table/themes/bootstrap4/row-filtering-cell}}
          
      */
      {
        id: "e7KgXS4d",
        block: "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"models-table/themes/bootstrap4/row-filtering-cell\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("dummy/tests/integration/components/models-table/themes/ember-semanticui/row-filtering-cell-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | models-table/themes/ember-semanticui/row-filtering-cell', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table/themes/ember-semanticui/row-filtering-cell}}
      */
      {
        id: "/XYOU2AS",
        block: "{\"symbols\":[],\"statements\":[[1,[22,\"models-table/themes/ember-semanticui/row-filtering-cell\"],false]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            {{#models-table/themes/ember-semanticui/row-filtering-cell}}
              template block text
            {{/models-table/themes/ember-semanticui/row-filtering-cell}}
          
      */
      {
        id: "Ne2Ubb0M",
        block: "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"models-table/themes/ember-semanticui/row-filtering-cell\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("dummy/tests/integration/components/models-table/themes/semanticui/columns-dropdown-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | models table/themes/semanticui/columns dropdown', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table/themes/semanticui/columns-dropdown}}
      */
      {
        id: "2Au0xgdg",
        block: "{\"symbols\":[],\"statements\":[[1,[22,\"models-table/themes/semanticui/columns-dropdown\"],false]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            {{#models-table/themes/semanticui/columns-dropdown}}
              template block text
            {{/models-table/themes/semanticui/columns-dropdown}}
          
      */
      {
        id: "fwAy7ou4",
        block: "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"models-table/themes/semanticui/columns-dropdown\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("dummy/tests/integration/components/models-table/themes/semanticui/data-group-by-select-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | models table/themes/semanticui/data group by select', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', function (assert) {
      assert.ok(true);
    });
  });
});
define("dummy/tests/integration/components/models-table/themes/semanticui/global-filter-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | models table/themes/semanticui/global filter', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table/themes/semanticui/global-filter}}
      */
      {
        id: "d/VUOLh2",
        block: "{\"symbols\":[],\"statements\":[[1,[22,\"models-table/themes/semanticui/global-filter\"],false]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            {{#models-table/themes/semanticui/global-filter}}
              template block text
            {{/models-table/themes/semanticui/global-filter}}
          
      */
      {
        id: "lqcYDbPd",
        block: "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"models-table/themes/semanticui/global-filter\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("dummy/tests/integration/components/models-table/themes/semanticui/pagination-numeric-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | models table/themes/semanticui/pagination numeric', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table/themes/semanticui/pagination-numeric}}
      */
      {
        id: "i8FSD/Ws",
        block: "{\"symbols\":[],\"statements\":[[1,[22,\"models-table/themes/semanticui/pagination-numeric\"],false]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            {{#models-table/themes/semanticui/pagination-numeric}}
              template block text
            {{/models-table/themes/semanticui/pagination-numeric}}
          
      */
      {
        id: "JcR0vbDT",
        block: "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"models-table/themes/semanticui/pagination-numeric\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("dummy/tests/integration/components/models-table/themes/semanticui/pagination-simple-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | models table/themes/semanticui/pagination simple', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table/themes/semanticui/pagination-simple}}
      */
      {
        id: "URnEQMQB",
        block: "{\"symbols\":[],\"statements\":[[1,[22,\"models-table/themes/semanticui/pagination-simple\"],false]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            {{#models-table/themes/semanticui/pagination-simple}}
              template block text
            {{/models-table/themes/semanticui/pagination-simple}}
          
      */
      {
        id: "u1o+UoO5",
        block: "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"models-table/themes/semanticui/pagination-simple\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("dummy/tests/integration/components/models-table/themes/semanticui/row-filtering-cell-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | models table/themes/semanticui/row filtering cell', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table/themes/semanticui/row-filtering-cell}}
      */
      {
        id: "gbnnDf6r",
        block: "{\"symbols\":[],\"statements\":[[1,[22,\"models-table/themes/semanticui/row-filtering-cell\"],false]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            {{#models-table/themes/semanticui/row-filtering-cell}}
              template block text
            {{/models-table/themes/semanticui/row-filtering-cell}}
          
      */
      {
        id: "fcJVnG9r",
        block: "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"models-table/themes/semanticui/row-filtering-cell\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("dummy/tests/integration/components/models-table/themes/semanticui/select-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | models table/themes/semanticui/select', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table/themes/semanticui/select}}
      */
      {
        id: "DokGlsQe",
        block: "{\"symbols\":[],\"statements\":[[1,[22,\"models-table/themes/semanticui/select\"],false]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            {{#models-table/themes/semanticui/select}}
              template block text
            {{/models-table/themes/semanticui/select}}
          
      */
      {
        id: "Wtd151kn",
        block: "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"models-table/themes/semanticui/select\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("dummy/tests/integration/components/models-table/themes/semanticui/summary-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | models-table/themes/semanticui/summary', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{models-table/themes/semanticui/summary}}
      */
      {
        id: "+AkiZtGf",
        block: "{\"symbols\":[],\"statements\":[[1,[22,\"models-table/themes/semanticui/summary\"],false]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            {{#models-table/themes/semanticui/summary}}
              template block text
            {{/models-table/themes/semanticui/summary}}
          
      */
      {
        id: "X/hHCBI/",
        block: "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"models-table/themes/semanticui/summary\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("dummy/tests/integration/helpers/and-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('helper:and', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it renders', async function (assert) {
      this.set('inputValue', true);
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{#if (and inputValue)}}1234{{/if}}
      */
      {
        id: "tRSuakUB",
        block: "{\"symbols\":[],\"statements\":[[4,\"if\",[[28,\"and\",[[24,[\"inputValue\"]]],null]],null,{\"statements\":[[0,\"1234\"]],\"parameters\":[]},null]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), '1234');
    });
  });
});
define("dummy/tests/integration/helpers/not-eq-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Helper | not-eq', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it renders', async function (assert) {
      this.set('inputValue', '1234');
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{#if (not-eq inputValue '1234')}}not-eq{{else}}eq{{/if}}
      */
      {
        id: "kL7yRVHl",
        block: "{\"symbols\":[],\"statements\":[[4,\"if\",[[28,\"not-eq\",[[24,[\"inputValue\"]],\"1234\"],null]],null,{\"statements\":[[0,\"not-eq\"]],\"parameters\":[]},{\"statements\":[[0,\"eq\"]],\"parameters\":[]}]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), 'eq');
      this.set('inputValue', '4321');
      assert.equal(this.element.textContent.trim(), 'not-eq');
    });
  });
});
define("dummy/tests/integration/helpers/stringify-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Helper | stringify', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it renders', async function (assert) {
      this.set('inputValue', '1234');
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{stringify inputValue}}
      */
      {
        id: "BiVLImZ2",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"stringify\",[[24,[\"inputValue\"]]],null],false]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), '"1234"');
    });
  });
});
define("dummy/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('components/cell-component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/cell-component.js should pass ESLint\n\n');
  });
  QUnit.test('components/custom-action.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/custom-action.js should pass ESLint\n\n');
  });
  QUnit.test('components/custom-concat.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/custom-concat.js should pass ESLint\n\n');
  });
  QUnit.test('components/custom-pagination.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/custom-pagination.js should pass ESLint\n\n');
  });
  QUnit.test('components/custom-row-group-toggle.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/custom-row-group-toggle.js should pass ESLint\n\n');
  });
  QUnit.test('components/custom-sort-cell.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/custom-sort-cell.js should pass ESLint\n\n');
  });
  QUnit.test('components/delete-row-comp.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/delete-row-comp.js should pass ESLint\n\n');
  });
  QUnit.test('components/expand-all-toggle.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/expand-all-toggle.js should pass ESLint\n\n');
  });
  QUnit.test('components/expand-toggle.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/expand-toggle.js should pass ESLint\n\n');
  });
  QUnit.test('components/expanded-row.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/expanded-row.js should pass ESLint\n\n');
  });
  QUnit.test('components/filter-cell-input.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/filter-cell-input.js should pass ESLint\n\n');
  });
  QUnit.test('components/filter-cell-select.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/filter-cell-select.js should pass ESLint\n\n');
  });
  QUnit.test('components/group-header-cell.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/group-header-cell.js should pass ESLint\n\n');
  });
  QUnit.test('components/group-summary-row.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/group-summary-row.js should pass ESLint\n\n');
  });
  QUnit.test('components/select-all-rows-checkbox.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/select-all-rows-checkbox.js should pass ESLint\n\n');
  });
  QUnit.test('components/select-row-checkbox.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/select-row-checkbox.js should pass ESLint\n\n');
  });
  QUnit.test('components/sort-cell.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/sort-cell.js should pass ESLint\n\n');
  });
  QUnit.test('components/themes/ember-semanticui/filter-cell-select.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/themes/ember-semanticui/filter-cell-select.js should pass ESLint\n\n');
  });
  QUnit.test('controllers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/application.js should pass ESLint\n\n');
  });
  QUnit.test('controllers/examples/common-table.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/examples/common-table.js should pass ESLint\n\n');
  });
  QUnit.test('controllers/examples/custom-components-in-cell.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/examples/custom-components-in-cell.js should pass ESLint\n\n');
  });
  QUnit.test('controllers/examples/display-data-changed-action.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/examples/display-data-changed-action.js should pass ESLint\n\n');
  });
  QUnit.test('controllers/examples/grouped-rows.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/examples/grouped-rows.js should pass ESLint\n\n');
  });
  QUnit.test('controllers/examples/in-line-edit.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/examples/in-line-edit.js should pass ESLint\n\n');
  });
  QUnit.test('controllers/examples/select-rows-with-checkboxes.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/examples/select-rows-with-checkboxes.js should pass ESLint\n\n');
  });
  QUnit.test('controllers/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/index.js should pass ESLint\n\n');
  });
  QUnit.test('instance-initializers/emt-inject.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'instance-initializers/emt-inject.js should pass ESLint\n\n');
  });
  QUnit.test('models/user.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/user.js should pass ESLint\n\n');
  });
  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
  QUnit.test('routes/examples.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/examples.js should pass ESLint\n\n');
  });
  QUnit.test('routes/examples/add-remove-column.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/examples/add-remove-column.js should pass ESLint\n\n');
  });
  QUnit.test('routes/examples/column-sets.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/examples/column-sets.js should pass ESLint\n\n');
  });
  QUnit.test('routes/examples/common-table.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/examples/common-table.js should pass ESLint\n\n');
  });
  QUnit.test('routes/examples/custom-actions.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/examples/custom-actions.js should pass ESLint\n\n');
  });
  QUnit.test('routes/examples/custom-column-classes.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/examples/custom-column-classes.js should pass ESLint\n\n');
  });
  QUnit.test('routes/examples/custom-components-in-cell.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/examples/custom-components-in-cell.js should pass ESLint\n\n');
  });
  QUnit.test('routes/examples/custom-messages.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/examples/custom-messages.js should pass ESLint\n\n');
  });
  QUnit.test('routes/examples/display-data-changed-action.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/examples/display-data-changed-action.js should pass ESLint\n\n');
  });
  QUnit.test('routes/examples/example.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/examples/example.js should pass ESLint\n\n');
  });
  QUnit.test('routes/examples/expandable-rows.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/examples/expandable-rows.js should pass ESLint\n\n');
  });
  QUnit.test('routes/examples/filtering.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/examples/filtering.js should pass ESLint\n\n');
  });
  QUnit.test('routes/examples/grouped-headers.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/examples/grouped-headers.js should pass ESLint\n\n');
  });
  QUnit.test('routes/examples/grouped-rows.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/examples/grouped-rows.js should pass ESLint\n\n');
  });
  QUnit.test('routes/examples/in-line-edit.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/examples/in-line-edit.js should pass ESLint\n\n');
  });
  QUnit.test('routes/examples/route-cells.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/examples/route-cells.js should pass ESLint\n\n');
  });
  QUnit.test('routes/examples/select-rows-with-checkboxes.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/examples/select-rows-with-checkboxes.js should pass ESLint\n\n');
  });
  QUnit.test('routes/examples/sort-by-filter-by.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/examples/sort-by-filter-by.js should pass ESLint\n\n');
  });
  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint\n\n');
  });
  QUnit.test('routes/users/user.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/users/user.js should pass ESLint\n\n');
  });
  QUnit.test('serializers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/application.js should pass ESLint\n\n');
  });
});
define("dummy/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('dummy/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/application.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/components/cell-component.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/cell-component.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/components/custom-action.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/custom-action.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/components/custom-concat.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/custom-concat.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/components/custom-pagination.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/custom-pagination.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/components/custom-row-group-toggle.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/custom-row-group-toggle.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/components/custom-sort-cell.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/custom-sort-cell.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/components/delete-row-comp.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/delete-row-comp.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/components/expand-all-toggle.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/expand-all-toggle.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/components/expand-toggle.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/expand-toggle.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/components/expanded-row.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/expanded-row.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/components/filter-cell-input.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/filter-cell-input.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/components/filter-cell-select.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/filter-cell-select.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/components/group-header-cell.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/group-header-cell.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/components/group-summary-row.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/group-summary-row.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/components/select-all-rows-checkbox.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/select-all-rows-checkbox.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/components/select-row-checkbox.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/select-row-checkbox.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/components/sort-cell.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/sort-cell.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/components/themes/ember-semanticui/filter-cell-select.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/themes/ember-semanticui/filter-cell-select.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/examples.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/examples.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/examples/column-sets.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/examples/column-sets.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/examples/common-table.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/examples/common-table.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/examples/custom-column-classes.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/examples/custom-column-classes.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/examples/custom-components-in-cell.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/examples/custom-components-in-cell.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/examples/custom-messages.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/examples/custom-messages.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/examples/display-data-changed-action.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/examples/display-data-changed-action.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/examples/expandable-rows.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/examples/expandable-rows.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/examples/filtering.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/examples/filtering.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/examples/grouped-headers.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/examples/grouped-headers.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/examples/grouped-rows.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/examples/grouped-rows.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/examples/in-line-edit.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/examples/in-line-edit.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/examples/route-cells.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/examples/route-cells.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/examples/select-rows-with-checkboxes.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/examples/select-rows-with-checkboxes.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/examples/sort-by-filter-by.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/examples/sort-by-filter-by.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/index.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/index.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/users/user.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/users/user.hbs should pass TemplateLint.\n\n');
  });
});
define("dummy/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('acceptance/models-table-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/models-table-test.js should pass ESLint\n\n');
  });
  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });
  QUnit.test('helpers/f.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/f.js should pass ESLint\n\n');
  });
  QUnit.test('helpers/get-page-object.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/get-page-object.js should pass ESLint\n\n');
  });
  QUnit.test('helpers/get-theme-class.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/get-theme-class.js should pass ESLint\n\n');
  });
  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });
  QUnit.test('helpers/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint\n\n');
  });
  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/models-table-server-paginated-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/models-table-server-paginated-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/models-table-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/models-table-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/models-table/cell-content-display-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/models-table/cell-content-display-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/models-table/cell-content-edit-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/models-table/cell-content-edit-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/models-table/cell-edit-toggle-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/models-table/cell-edit-toggle-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/models-table/cell-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/models-table/cell-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/models-table/data-group-by-select-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/models-table/data-group-by-select-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/models-table/group-summary-row-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/models-table/group-summary-row-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/models-table/page-size-select-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/models-table/page-size-select-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/models-table/pagination-numeric-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/models-table/pagination-numeric-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/models-table/row-filtering-cell-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/models-table/row-filtering-cell-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/models-table/row-group-toggle-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/models-table/row-group-toggle-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/models-table/row-grouping-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/models-table/row-grouping-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/models-table/row-sorting-cell-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/models-table/row-sorting-cell-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/models-table/themes/bootstrap4/columns-dropdown-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/models-table/themes/bootstrap4/columns-dropdown-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/models-table/themes/bootstrap4/data-group-by-select-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/models-table/themes/bootstrap4/data-group-by-select-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/models-table/themes/bootstrap4/global-filter-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/models-table/themes/bootstrap4/global-filter-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/models-table/themes/bootstrap4/row-filtering-cell-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/models-table/themes/bootstrap4/row-filtering-cell-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/models-table/themes/ember-semanticui/row-filtering-cell-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/models-table/themes/ember-semanticui/row-filtering-cell-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/models-table/themes/semanticui/columns-dropdown-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/models-table/themes/semanticui/columns-dropdown-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/models-table/themes/semanticui/data-group-by-select-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/models-table/themes/semanticui/data-group-by-select-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/models-table/themes/semanticui/global-filter-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/models-table/themes/semanticui/global-filter-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/models-table/themes/semanticui/pagination-numeric-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/models-table/themes/semanticui/pagination-numeric-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/models-table/themes/semanticui/pagination-simple-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/models-table/themes/semanticui/pagination-simple-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/models-table/themes/semanticui/row-filtering-cell-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/models-table/themes/semanticui/row-filtering-cell-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/models-table/themes/semanticui/select-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/models-table/themes/semanticui/select-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/models-table/themes/semanticui/summary-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/models-table/themes/semanticui/summary-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/helpers/and-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/helpers/and-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/helpers/not-eq-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/helpers/not-eq-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/helpers/stringify-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/helpers/stringify-test.js should pass ESLint\n\n');
  });
  QUnit.test('pages/models-table-bs.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pages/models-table-bs.js should pass ESLint\n\n');
  });
  QUnit.test('pages/models-table-bs4.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pages/models-table-bs4.js should pass ESLint\n\n');
  });
  QUnit.test('pages/models-table-semanticui.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pages/models-table-semanticui.js should pass ESLint\n\n');
  });
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
  QUnit.test('unit/components/models-table-server-paginated-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/components/models-table-server-paginated-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/utils/better-compare-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/utils/better-compare-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/utils/fmt-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/utils/fmt-test.js should pass ESLint\n\n');
  });
});
define("dummy/tests/page-object", ["exports", "ember-cli-page-object"], function (_exports, _emberCliPageObject) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "alias", {
    enumerable: true,
    get: function () {
      return _emberCliPageObject.alias;
    }
  });
  Object.defineProperty(_exports, "attribute", {
    enumerable: true,
    get: function () {
      return _emberCliPageObject.attribute;
    }
  });
  Object.defineProperty(_exports, "clickOnText", {
    enumerable: true,
    get: function () {
      return _emberCliPageObject.clickOnText;
    }
  });
  Object.defineProperty(_exports, "clickable", {
    enumerable: true,
    get: function () {
      return _emberCliPageObject.clickable;
    }
  });
  Object.defineProperty(_exports, "collection", {
    enumerable: true,
    get: function () {
      return _emberCliPageObject.collection;
    }
  });
  Object.defineProperty(_exports, "contains", {
    enumerable: true,
    get: function () {
      return _emberCliPageObject.contains;
    }
  });
  Object.defineProperty(_exports, "count", {
    enumerable: true,
    get: function () {
      return _emberCliPageObject.count;
    }
  });
  Object.defineProperty(_exports, "create", {
    enumerable: true,
    get: function () {
      return _emberCliPageObject.create;
    }
  });
  Object.defineProperty(_exports, "fillable", {
    enumerable: true,
    get: function () {
      return _emberCliPageObject.fillable;
    }
  });
  Object.defineProperty(_exports, "selectable", {
    enumerable: true,
    get: function () {
      return _emberCliPageObject.fillable;
    }
  });
  Object.defineProperty(_exports, "focusable", {
    enumerable: true,
    get: function () {
      return _emberCliPageObject.focusable;
    }
  });
  Object.defineProperty(_exports, "hasClass", {
    enumerable: true,
    get: function () {
      return _emberCliPageObject.hasClass;
    }
  });
  Object.defineProperty(_exports, "is", {
    enumerable: true,
    get: function () {
      return _emberCliPageObject.is;
    }
  });
  Object.defineProperty(_exports, "isHidden", {
    enumerable: true,
    get: function () {
      return _emberCliPageObject.isHidden;
    }
  });
  Object.defineProperty(_exports, "isPresent", {
    enumerable: true,
    get: function () {
      return _emberCliPageObject.isPresent;
    }
  });
  Object.defineProperty(_exports, "isVisible", {
    enumerable: true,
    get: function () {
      return _emberCliPageObject.isVisible;
    }
  });
  Object.defineProperty(_exports, "notHasClass", {
    enumerable: true,
    get: function () {
      return _emberCliPageObject.notHasClass;
    }
  });
  Object.defineProperty(_exports, "property", {
    enumerable: true,
    get: function () {
      return _emberCliPageObject.property;
    }
  });
  Object.defineProperty(_exports, "text", {
    enumerable: true,
    get: function () {
      return _emberCliPageObject.text;
    }
  });
  Object.defineProperty(_exports, "triggerable", {
    enumerable: true,
    get: function () {
      return _emberCliPageObject.triggerable;
    }
  });
  Object.defineProperty(_exports, "value", {
    enumerable: true,
    get: function () {
      return _emberCliPageObject.value;
    }
  });
  Object.defineProperty(_exports, "visitable", {
    enumerable: true,
    get: function () {
      return _emberCliPageObject.visitable;
    }
  });
  Object.defineProperty(_exports, "buildSelector", {
    enumerable: true,
    get: function () {
      return _emberCliPageObject.buildSelector;
    }
  });
  Object.defineProperty(_exports, "findElementWithAssert", {
    enumerable: true,
    get: function () {
      return _emberCliPageObject.findElementWithAssert;
    }
  });
  Object.defineProperty(_exports, "findElement", {
    enumerable: true,
    get: function () {
      return _emberCliPageObject.findElement;
    }
  });
  Object.defineProperty(_exports, "getContext", {
    enumerable: true,
    get: function () {
      return _emberCliPageObject.getContext;
    }
  });
  Object.defineProperty(_exports, "fullScope", {
    enumerable: true,
    get: function () {
      return _emberCliPageObject.fullScope;
    }
  });
  _exports.default = void 0;
  var _default = {
    alias: _emberCliPageObject.alias,
    attribute: _emberCliPageObject.attribute,
    blurrable: _emberCliPageObject.blurrable,
    clickOnText: _emberCliPageObject.clickOnText,
    clickable: _emberCliPageObject.clickable,
    collection: _emberCliPageObject.collection,
    contains: _emberCliPageObject.contains,
    count: _emberCliPageObject.count,
    create: _emberCliPageObject.create,
    fillable: _emberCliPageObject.fillable,
    focusable: _emberCliPageObject.focusable,
    hasClass: _emberCliPageObject.hasClass,
    is: _emberCliPageObject.is,
    isHidden: _emberCliPageObject.isHidden,
    isPresent: _emberCliPageObject.isPresent,
    isVisible: _emberCliPageObject.isVisible,
    notHasClass: _emberCliPageObject.notHasClass,
    property: _emberCliPageObject.property,
    selectable: _emberCliPageObject.fillable,
    text: _emberCliPageObject.text,
    triggerable: _emberCliPageObject.triggerable,
    value: _emberCliPageObject.value,
    visitable: _emberCliPageObject.visitable
  };
  _exports.default = _default;
  (true && !(false) && Ember.deprecate(`Importing from "test-support" is now deprecated. Please import directly from the "ember-cli-page-object" module instead.`, false, {
    id: 'ember-cli-page-object.import-from-test-support',
    until: '2.0.0',
    url: 'https://ember-cli-page-object.js.org/docs/v1.16.x/deprecations/#import-from-test-support'
  }));
});
define("dummy/tests/pages/models-table-bs", ["exports", "ember-cli-page-object", "ember-cli-page-object/macros"], function (_exports, _emberCliPageObject, _macros) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _exports.definition = void 0;
  const definition = {
    scope: '.models-table-wrapper',
    tablesCount: (0, _emberCliPageObject.count)('table'),
    summary: (0, _emberCliPageObject.text)('.table-summary'),
    globalFilterLabel: (0, _emberCliPageObject.text)('.globalSearch label'),
    globalFilterFocused: (0, _macros.getter)(function () {
      return document.activeElement === (0, _emberCliPageObject.findElement)(document, '.globalSearch input')[0];
    }),
    clickGlobalFilterLabel: (0, _emberCliPageObject.clickable)('.globalSearch label'),
    doGlobalFilter: (0, _emberCliPageObject.fillable)('.filterString'),
    clearGlobalFilter: (0, _emberCliPageObject.clickable)('.globalSearch .clearFilterIcon'),
    clearGlobalFilterExists: (0, _emberCliPageObject.isPresent)('.globalSearch .clearFilterIcon'),
    clearGlobalFilterDisabled: (0, _emberCliPageObject.attribute)('disabled', '.globalSearch .clearFilterIcon'),
    tableFooterCount: (0, _emberCliPageObject.count)('.table-footer'),
    clearAllFilters: (0, _emberCliPageObject.clickable)('.clearFilters'),
    clearAllFiltersExists: (0, _emberCliPageObject.isPresent)('.clearFilters'),
    clearAllFiltersDisabled: (0, _emberCliPageObject.attribute)('disabled', '.clearFilters'),
    changePageSize: (0, _emberCliPageObject.fillable)('select.changePageSize'),
    pageSize: (0, _emberCliPageObject.value)('select.changePageSize'),
    expandAllRows: (0, _emberCliPageObject.clickable)('thead .expand-all-rows'),
    collapseAllRows: (0, _emberCliPageObject.clickable)('thead .collapse-all-rows'),
    toggleAllSelection: (0, _emberCliPageObject.clickable)('thead .toggle-all'),
    expandRowButtons: (0, _emberCliPageObject.count)('a.expand-row'),
    collapseRowButtons: (0, _emberCliPageObject.count)('a.collapse-row'),
    filters: (0, _emberCliPageObject.collection)('table thead tr:eq(1) th', {
      content: (0, _emberCliPageObject.text)(),
      inputFilter: (0, _emberCliPageObject.fillable)('input'),
      inputValue: (0, _emberCliPageObject.value)('input'),
      inputPlaceholder: (0, _emberCliPageObject.attribute)('placeholder', 'input'),
      inputFilterExists: (0, _emberCliPageObject.isPresent)('input'),
      clearFilter: (0, _emberCliPageObject.clickable)('.clearFilterIcon'),
      clearFilterExists: (0, _emberCliPageObject.isPresent)('.clearFilterIcon'),
      clearFilterDisabled: (0, _emberCliPageObject.attribute)('disabled', '.clearFilterIcon'),
      selectFilter: (0, _emberCliPageObject.fillable)('select'),
      selectFilterExists: (0, _emberCliPageObject.isPresent)('select'),
      selectPlaceholder: (0, _emberCliPageObject.text)('select option:eq(0)'),
      selectValue: (0, _emberCliPageObject.value)('select'),
      selectOptions: (0, _emberCliPageObject.text)('select option', {
        multiple: true
      }),
      colspan: (0, _emberCliPageObject.attribute)('colspan'),
      label: (0, _emberCliPageObject.text)('label.emt-sr-only')
    }),
    sorting: (0, _emberCliPageObject.collection)('table thead tr:eq(0) th', {
      title: (0, _emberCliPageObject.text)(),
      hasSortMarker: (0, _emberCliPageObject.isPresent)('i'),
      isSorted: (0, _emberCliPageObject.hasClass)('glyphicon', 'i'),
      colspan: (0, _emberCliPageObject.attribute)('colspan')
    }),
    headers: (0, _emberCliPageObject.collection)('thead tr', {
      cells: (0, _emberCliPageObject.text)('th', {
        multiple: true
      }),
      colspans: (0, _emberCliPageObject.attribute)('colspan', 'th', {
        multiple: true
      })
    }),
    footer: {
      scope: 'tfoot',
      cells: (0, _emberCliPageObject.collection)('tr td', {
        isComponent: (0, _emberCliPageObject.hasClass)('ember-view')
      })
    },
    navigation: {
      scope: '.table-nav',
      text: (0, _emberCliPageObject.text)(''),
      selectPageNumberExists: (0, _emberCliPageObject.isPresent)('select'),
      selectPageNumber: (0, _emberCliPageObject.fillable)('select'),
      selectPageNumberDisabled: (0, _emberCliPageObject.property)('disabled', 'select'),
      selectedPageNumber: (0, _emberCliPageObject.value)('select'),
      goToLastPage: (0, _emberCliPageObject.clickable)('button:eq(3)'),
      goToLastPageDisabled: (0, _emberCliPageObject.hasClass)('disabled', 'button:eq(3)'),
      goToNextPage: (0, _emberCliPageObject.clickable)('button:eq(2)'),
      goToNextPageDisabled: (0, _emberCliPageObject.hasClass)('disabled', 'button:eq(2)'),
      goToPrevPage: (0, _emberCliPageObject.clickable)('button:eq(1)'),
      goToPrevPageDisabled: (0, _emberCliPageObject.hasClass)('disabled', 'button:eq(1)'),
      goToFirstPage: (0, _emberCliPageObject.clickable)('button:eq(0)'),
      goToFirstPageDisabled: (0, _emberCliPageObject.hasClass)('disabled', 'button:eq(0)'),
      navigationButtons: (0, _emberCliPageObject.text)('button', {
        multiple: true
      }),
      btns: (0, _emberCliPageObject.collection)('button', {
        icon: (0, _emberCliPageObject.attribute)('class', 'i')
      }),
      disabledNavigationLinksCount: (0, _emberCliPageObject.count)('button.disabled')
    },
    numericNavigation: (0, _emberCliPageObject.collection)('.table-nav button', {
      label: (0, _emberCliPageObject.text)()
    }),
    allRows: (0, _emberCliPageObject.collection)('tbody tr:not(.expand-row)', {
      isGroupingRow: (0, _macros.getter)(function () {
        return !!this.cells.toArray().find(c => c.isGroupingRowCell);
      }),
      cells: (0, _emberCliPageObject.collection)('td', {
        isGroupingRowCell: (0, _emberCliPageObject.hasClass)('grouping-cell')
      })
    }),
    rows: (0, _emberCliPageObject.collection)('tbody tr:not(.expand-row):not(.grouping-row)', {
      expand: (0, _emberCliPageObject.clickable)('a.expand-row'),
      collapse: (0, _emberCliPageObject.clickable)('a.collapse-row'),
      expanded: (0, _emberCliPageObject.hasClass)('expanded-row'),
      collapsed: (0, _emberCliPageObject.notHasClass)('expanded-row'),
      selected: (0, _emberCliPageObject.hasClass)('selected-row'),
      dbClick: (0, _emberCliPageObject.triggerable)('dblclick'),
      hover: (0, _emberCliPageObject.triggerable)('mouseenter'),
      out: (0, _emberCliPageObject.triggerable)('mouseleave'),

      getSelf() {
        return (0, _emberCliPageObject.findElement)(document, this.scope)[0];
      },

      getCellColspans() {
        return this.cells.mapBy('colspan');
      },

      cells: (0, _emberCliPageObject.collection)('td', {
        content: (0, _emberCliPageObject.text)(),
        colspan: (0, _emberCliPageObject.attribute)('colspan'),
        groupSummaryVisible: (0, _emberCliPageObject.text)('.visible'),
        groupSummaryExpanded: (0, _emberCliPageObject.text)('.expanded'),
        groupSummarySelected: (0, _emberCliPageObject.text)('.selected')
      })
    }),
    rowExpands: (0, _emberCliPageObject.collection)('tbody tr.expand-row', {
      selected: (0, _emberCliPageObject.hasClass)('selected-expand'),
      id: (0, _emberCliPageObject.text)('.id')
    }),
    groupByFieldExists: (0, _emberCliPageObject.isPresent)('.change-group-by-field'),
    changeGroupByField: (0, _emberCliPageObject.fillable)('.change-group-by-field'),
    groupByFieldOptions: (0, _emberCliPageObject.collection)('.change-group-by-field option', {
      label: (0, _emberCliPageObject.text)()
    }),
    sortByGroupedBy: (0, _emberCliPageObject.clickable)('.data-group-by-wrapper button'),

    /**
     * Use only when group-value is shown in the separated row!
     */
    groupingRowsByRow: (0, _emberCliPageObject.collection)('tbody tr.grouping-row', {
      cell: {
        scope: 'td:eq(0)',
        content: (0, _emberCliPageObject.text)(),
        colspan: (0, _emberCliPageObject.attribute)('colspan'),
        toggleGroup: (0, _emberCliPageObject.clickable)('a'),
        toggleSelection: (0, _emberCliPageObject.clickable)('.toggle-selection-group'),
        toggleExpands: (0, _emberCliPageObject.clickable)('.toggle-expands-group'),
        toggleText: (0, _emberCliPageObject.text)('a'),
        expandedCountText: (0, _emberCliPageObject.text)('.expanded-count'),
        selectedCountText: (0, _emberCliPageObject.text)('.selected-count')
      }
    }),

    getIndexOfFirstRowGroupedByRow(groupIndex) {
      let index = 0;
      let groupedCount = 0;
      this.allRows.forEach((row, i) => {
        if (row.isGroupingRow) {
          groupedCount++;
        }

        if (groupedCount === groupIndex) {
          index = i + 1;
        }
      });
      return index;
    },

    /*
     * Use only when group-value is shown in the separated row!
     */
    getRowsIndexesFromGroupRow(groupIndex) {
      const first = this.getIndexOfFirstRowGroupedByRow(groupIndex) - groupIndex;
      let last = 0;

      if (this.groupingRowsByRow.length > groupIndex + 1) {
        last = this.getIndexOfFirstRowGroupedByRow(groupIndex + 1) - groupIndex - 1;
      } else {
        last = this.rows.length;
      }

      return {
        first: parseInt(first, 10),
        last: parseInt(last, 10)
      };
    },

    /*
     * Use only when group-value is shown in the separated row!
     */
    getRowsFromGroupRow(groupIndex) {
      const {
        first,
        last
      } = this.getRowsIndexesFromGroupRow(groupIndex);
      return this.rows.toArray().slice(first, last);
    },

    /**
     * Use only when group-value is shown in the separated column!
     */
    groupingRowsByColumn: (0, _emberCliPageObject.collection)('tbody td.grouping-cell', {
      content: (0, _emberCliPageObject.text)(),
      rowspan: (0, _emberCliPageObject.attribute)('rowspan'),
      toggleGroup: (0, _emberCliPageObject.clickable)('a'),
      toggleSelection: (0, _emberCliPageObject.clickable)('.toggle-selection-group'),
      toggleExpands: (0, _emberCliPageObject.clickable)('.toggle-expands-group'),
      toggleText: (0, _emberCliPageObject.text)('a'),
      expandedCountText: (0, _emberCliPageObject.text)('.expanded-count'),
      selectedCountText: (0, _emberCliPageObject.text)('.selected-count')
    }),

    getIndexOfFirstRowGroupedByColumn(groupIndex) {
      let index = 0;
      let groupedCount = 0;
      this.allRows.forEach((row, i) => {
        if (row.isGroupingRow) {
          groupedCount++;
        }

        if (groupedCount === groupIndex) {
          index = i + 1;
        }
      });
      return index;
    },

    /*
     * Use only when group-value is shown in the separated column!
     */
    getRowsIndexesFromGroupColumn(groupIndex) {
      const first = this.getIndexOfFirstRowGroupedByColumn(groupIndex);
      let last = 0;

      if (this.groupingRowsByColumn.length > groupIndex + 1) {
        last = this.getIndexOfFirstRowGroupedByColumn(groupIndex + 1) - 1;
      } else {
        last = this.rows.length - 1;
      }

      return {
        first: parseInt(first, 10),
        last: parseInt(last, 10)
      };
    },

    /*
     * Use only when group-value is shown in the separated column!
     */
    getRowsFromGroupColumn(groupIndex) {
      const {
        first,
        last
      } = this.getRowsIndexesFromGroupColumn(groupIndex);
      return this.rows.toArray().slice(first, last);
    },

    getCellsCount() {
      return this.rows.map(row => row.cells.length).reduce((a, b) => a + b, 0);
    },

    getColumnCells(columnIndex, startRow = 0, endRow = Number.POSITIVE_INFINITY) {
      return this.rows.toArray().slice(startRow, endRow).map(row => {
        const index = columnIndex < 0 ? row.cells.length + columnIndex : columnIndex;
        return row.cells.objectAt(index).content;
      });
    },

    columnsDropdownLabel: (0, _emberCliPageObject.text)('.columns-dropdown button'),
    toggleColumnDropDown: (0, _emberCliPageObject.clickable)('.columns-dropdown .dropdown-toggle'),
    columnsDropDown: (0, _emberCliPageObject.collection)('.columns-dropdown li a', {
      toggleLabel: (0, _emberCliPageObject.text)('button'),
      label: (0, _emberCliPageObject.text)()
    }),
    firstColumnIconSelector: '.columns-dropdown li:nth-child(5) a i',
    secondColumnIconSelector: '.columns-dropdown li:nth-child(6) a i',
    checkedIconClass: 'glyphicon-check',
    uncheckedIconClass: 'glyphicon-unchecked'
  };
  _exports.definition = definition;

  var _default = (0, _emberCliPageObject.create)(definition);

  _exports.default = _default;
});
define("dummy/tests/pages/models-table-bs4", ["exports", "ember-cli-page-object", "dummy/tests/pages/models-table-bs"], function (_exports, _emberCliPageObject, _modelsTableBs) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _exports.definition = void 0;
  const definition = Object.assign({}, _modelsTableBs.definition, {
    sorting: (0, _emberCliPageObject.collection)('table thead tr:eq(0) th', {
      title: (0, _emberCliPageObject.text)(),
      hasSortMarker: (0, _emberCliPageObject.isPresent)('i'),
      isSorted: (0, _emberCliPageObject.hasClass)('fa', 'i'),
      colspan: (0, _emberCliPageObject.attribute)('colspan')
    }),
    columnsDropDown: (0, _emberCliPageObject.collection)('.columns-dropdown a', {
      toggleLabel: (0, _emberCliPageObject.text)('button'),
      label: (0, _emberCliPageObject.text)()
    }),
    firstColumnIconSelector: '.columns-dropdown a:nth-child(5) i',
    secondColumnIconSelector: '.columns-dropdown a:nth-child(6) i',
    checkedIconClass: 'fa fa-check-square-o',
    uncheckedIconClass: 'fa fa-square-o'
  });
  _exports.definition = definition;

  var _default = (0, _emberCliPageObject.create)(definition);

  _exports.default = _default;
});
define("dummy/tests/pages/models-table-semanticui", ["exports", "ember-cli-page-object", "@ember/test-helpers", "dummy/tests/pages/models-table-bs"], function (_exports, _emberCliPageObject, _testHelpers, _modelsTableBs) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _exports.definition = void 0;

  function getDataId(attributeName, selector, clb) {
    return {
      isDescriptor: true,

      get() {
        let elements = (0, _emberCliPageObject.findElement)(this, selector);
        return elements.length ? clb(elements[0].getAttribute(attributeName)) : '';
      }

    };
  }

  const definition = Object.assign({}, _modelsTableBs.definition, {
    navigation: {
      scope: '.table-nav',
      text: (0, _emberCliPageObject.text)(''),
      goToLastPage: (0, _emberCliPageObject.clickable)('button:eq(3)'),
      goToLastPageDisabled: (0, _emberCliPageObject.hasClass)('disabled', 'button:eq(3)'),
      goToNextPage: (0, _emberCliPageObject.clickable)('button:eq(2)'),
      goToNextPageDisabled: (0, _emberCliPageObject.hasClass)('disabled', 'button:eq(2)'),
      goToPrevPage: (0, _emberCliPageObject.clickable)('button:eq(1)'),
      goToPrevPageDisabled: (0, _emberCliPageObject.hasClass)('disabled', 'button:eq(1)'),
      goToFirstPage: (0, _emberCliPageObject.clickable)('button:eq(0)'),
      goToFirstPageDisabled: (0, _emberCliPageObject.hasClass)('disabled', 'button:eq(0)'),
      navigationButtons: (0, _emberCliPageObject.text)('button', {
        multiple: true
      }),
      btns: (0, _emberCliPageObject.collection)('button', {
        icon: (0, _emberCliPageObject.attribute)('class', 'i')
      }),
      disabledNavigationLinksCount: (0, _emberCliPageObject.count)('button.disabled'),
      selectPageNumberExists: (0, _emberCliPageObject.isPresent)('.selection.compact.ui.dropdown'),

      async selectPageNumber(number) {
        await (0, _testHelpers.click)('.selection.compact.ui.dropdown');
        await (0, _testHelpers.click)(`.selection.compact.ui.dropdown .menu .item[data-id='${JSON.stringify(number)}']`);
      },

      selectedPageNumber: (0, _emberCliPageObject.text)('.selection.compact.ui.dropdown .text'),
      selectPageNumberDisabled: (0, _emberCliPageObject.hasClass)('disabled', '.selection.compact.ui.dropdown')
    },

    async changePageSize(size) {
      await (0, _testHelpers.click)('.selection.compact.ui.dropdown');
      await (0, _testHelpers.click)(`.selection.compact.ui.dropdown .menu .item[data-id='${JSON.stringify(size)}']`);
    },

    pageSize: (0, _emberCliPageObject.text)('.selection.compact.ui.dropdown .text'),
    filters: (0, _emberCliPageObject.collection)('table thead tr:eq(1) th', {
      content: (0, _emberCliPageObject.text)(),
      inputFilter: (0, _emberCliPageObject.fillable)('input'),
      inputValue: (0, _emberCliPageObject.value)('input'),
      inputPlaceholder: (0, _emberCliPageObject.attribute)('placeholder', 'input'),
      inputFilterExists: (0, _emberCliPageObject.isPresent)('input'),
      clearFilter: (0, _emberCliPageObject.clickable)('.clearFilterIcon'),
      clearFilterExists: (0, _emberCliPageObject.isPresent)('.clearFilterIcon'),
      clearFilterDisabled: (0, _emberCliPageObject.attribute)('disabled', '.clearFilterIcon'),

      async selectFilter(value) {
        if (value === 'true') {
          value = true;
        }

        if (value === 'false') {
          value = false;
        }

        await (0, _testHelpers.click)('.selection.ui.dropdown');
        await (0, _testHelpers.click)(`.selection.ui.dropdown .menu .item[data-id='${JSON.stringify(value)}']`);
      },

      selectFilterExists: (0, _emberCliPageObject.isPresent)('.selection.ui.dropdown'),
      selectPlaceholder: (0, _emberCliPageObject.text)('.menu .item:eq(0)'),
      selectValue: getDataId('data-id', '.selection.ui.dropdown .selected', v => JSON.parse(v)),
      selectOptions: (0, _emberCliPageObject.text)('.selection.ui.dropdown .item', {
        multiple: true
      }),
      colspan: (0, _emberCliPageObject.attribute)('colspan'),
      label: (0, _emberCliPageObject.text)('label.emt-sr-only')
    }),
    columnsDropdownLabel: (0, _emberCliPageObject.text)('.ui.compact.menu.right.floated .text'),
    toggleColumnDropDown: (0, _emberCliPageObject.clickable)('.ui.compact.menu.right.floated .ui.simple.dropdown'),
    columnsDropDown: (0, _emberCliPageObject.collection)('.ui.compact.menu.right.floated .menu .item', {
      toggleLabel: (0, _emberCliPageObject.text)(),
      label: (0, _emberCliPageObject.text)()
    }),
    firstColumnIconSelector: '.ui.compact.menu.right.floated .menu .item:nth-child(5) i',
    secondColumnIconSelector: '.ui.compact.menu.right.floated .menu .item:nth-child(6) i',
    checkedIconClass: 'on',
    uncheckedIconClass: 'off',

    async changeGroupByField(value) {
      await (0, _testHelpers.click)('.change-group-by-field');
      await (0, _testHelpers.click)(`.change-group-by-field .menu .item[data-id='${JSON.stringify(value)}']`);
    },

    groupByFieldOptions: (0, _emberCliPageObject.collection)('.change-group-by-field .menu .item', {
      label: (0, _emberCliPageObject.text)()
    }),
    sortByGroupedBy: (0, _emberCliPageObject.clickable)('.data-group-by-wrapper button'),
    sorting: (0, _emberCliPageObject.collection)('table thead tr:eq(0) th', {
      title: (0, _emberCliPageObject.text)(),
      hasSortMarker: (0, _emberCliPageObject.isPresent)('i'),
      isSorted: (0, _emberCliPageObject.hasClass)('sort', 'i'),
      colspan: (0, _emberCliPageObject.attribute)('colspan')
    })
  });
  _exports.definition = definition;

  var _default = (0, _emberCliPageObject.create)(definition);

  _exports.default = _default;
});
define("dummy/tests/test-helper", ["dummy/app", "dummy/config/environment", "@ember/test-helpers", "ember-qunit", "ember-exam/test-support/load"], function (_app, _environment, _testHelpers, _emberQunit, _load) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
  (0, _load.default)();
});
define("dummy/tests/unit/components/models-table-server-paginated-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Component | models-table-server-paginated', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('#filteringIgnoreCase cannot be used', async function (assert) {
      const component = this.owner.lookup('component:models-table-server-paginated');
      assert.expectAssertion(() => Ember.set(component, 'filteringIgnoreCase', true), '"filteringIgnoreCase" can\'t be used with "models-table-server-paginated"');
    });
    (0, _qunit.test)('#doFilteringByHiddenColumns cannot be used', async function (assert) {
      const component = this.owner.lookup('component:models-table-server-paginated');
      assert.expectAssertion(() => Ember.set(component, 'doFilteringByHiddenColumns', true), '"doFilteringByHiddenColumns" can\'t be used with "models-table-server-paginated"');
    });
  });
});
define("dummy/tests/unit/utils/better-compare-test", ["ember-models-table/utils/better-compare", "qunit"], function (_betterCompare, _qunit) {
  "use strict";

  (0, _qunit.module)('Unit | Utility | better compare', function () {
    (0, _qunit.test)('it works', function (assert) {
      let result = (0, _betterCompare.default)(1, 2);
      assert.equal(result, -1, 'it works with numbers');
      result = (0, _betterCompare.default)(2, 1);
      assert.equal(result, 1, 'it works with equal numbers');
      result = (0, _betterCompare.default)(0, 0);
      assert.equal(result, 0, 'it works with equal numbers');
      result = (0, _betterCompare.default)('aa', 'bb');
      assert.equal(result, -1, 'it works with strings');
      result = (0, _betterCompare.default)('aa', 'aa');
      assert.equal(result, 0, 'it works with equal strings');
      result = (0, _betterCompare.default)(true, false);
      assert.equal(result, 1, 'it works with booleans');
      result = (0, _betterCompare.default)(true, true);
      assert.equal(result, 0, 'it works with equal booleans');
      result = (0, _betterCompare.default)({}, {});
      assert.equal(result, 0, 'it works with empty objects');
      let a = Ember.Object.create({});
      let b = Ember.Object.create({});
      result = (0, _betterCompare.default)(a, b);
      assert.equal(result, 0, 'it works with objects without valueOf method');
      a = Ember.Object.create({
        valueOf() {
          return 2;
        }

      });
      b = Ember.Object.create({
        valueOf() {
          return 1;
        }

      });
      result = (0, _betterCompare.default)(a, b);
      assert.equal(result, 1, 'it works with objects with valueOf method');
    });
  });
});
define("dummy/tests/unit/utils/fmt-test", ["dummy/utils/fmt", "qunit"], function (_fmt, _qunit) {
  "use strict";

  (0, _qunit.module)('Unit | Utility | fmt', function () {
    // Replace this with your real tests.
    (0, _qunit.test)('it works', function (assert) {
      const result = (0, _fmt.default)('Hi %@, I\'m %@', 'John', 'Nico');
      assert.equal(result, 'Hi John, I\'m Nico');
    });
  });
});
define('dummy/config/environment', [], function() {
  var prefix = 'dummy';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('dummy/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
