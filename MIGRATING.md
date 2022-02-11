# Migrating from v3 to v4

Main difference between v3 and v4 is required now argument `themeInstace`. It's an instance of any service that extends `emt-themes/default`. It could be some predefined theme or your own.

v4 was rewritten using TypeScript and docs for new version are much more useful and contains a lot of information. Arguments for **all** components now are declared as interfaces with description almost for each key.

## Simple usage

### `<ModelsTable>`

#### v3

```html
{{! app/templates/example.hbs }}
<ModelsTable
  @data={{this.model}}
  @columns={{this.columns}}
/>
```

```ts
// app/controllers/example.ts
import { tracked } from '@glimmer/tracking';
import Controller from '@ember/controller';

export default class ExampleController extends Controller {
  @tracked
  columns = [
    // any columns you need
  ];

  @tracked
  data = [
    // any data you need to show in the table
  ];
}
```

#### v4

```html
{{! app/templates/example.hbs }}
<ModelsTable
  @data={{this.model}}
  @columns={{this.columns}}
  @themeInstance={{this.themeInstance}}
/>
```

```ts
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import Controller from '@ember/controller';

export default class ExampleController extends Controller {
  @tracked
  columns = [
    // any columns you need
  ];
  
  @tracked
  data = [
    // any data you need to show in the table
  ];

  /**
   * Here can be any service that extends
   * default theme (`services/emt-themes/default`)
   *
   * Theme instance now must be passed manually to the `ModelsTable` component
   */
  @service('emt-themes/plain-html')
  themeInstance;
}
```

### `<ModelsTableServerPaginated>`

#### v3

```html
{{! app/templates/example.hbs }}
<ModelsTableServerPaginated
  @data={{this.model}}
  @columns={{this.columns}}
/>
```

```ts
// app/routes/example.ts
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ExampleRoute extends Route {
  @service
  store;

  model() {
    return this.store.query('user', {});
  }
}
```

```ts
// app/controllers/example.ts
import { tracked } from '@glimmer/tracking';
import Controller from '@ember/controller';

export default class ExampleController extends Controller {
  @tracked
  columns = [
    // any columns you need
  ];
}
```

#### v4

```html
{{! app/templates/example.hbs }}
<ModelsTableServerPaginated
  @data={{this.model}}
  @columns={{this.columns}}
  @themeInstance={{this.themeInstance}}
  @doQuery={{this.doQuery}}
  @itemsCount={{this.itemsCount}}
  @pagesCount={{this.pagesCount}}
/>
```

```ts
// app/routes/example.ts
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ExampleRoute extends Route {
  @service
  store;

  model() {
    return this.store.query('user', {});
  }
}
```

```ts
// app/controllers/example.ts
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Controller from '@ember/controller';

export default class ExampleController extends Controller {
  @service()
  store;
  
  @tracked
  columns = [
    // any columns you need
  ];

  /**
   * Here can be any service that extends
   * default theme (`services/emt-themes/default`)
   * 
   * Theme instance now must be passed manually to the
   * `ModelsTableServerPaginated` component
   */ 
  @service('emt-themes/plain-html')
  themeInstance;

  get itemsCount() {
    return this.model.meta.itemsCount;
  }

  get pagesCount() {
    return this.model.meta.pagesCount;
  }

  @action
  doQuery(query) {
    return this.store.query('user', query).then((newData) => {
      this.model = newData;
    });
  }
}
```

## Some "magic" arguments

Arguments `pageSize`, `currentPageNumber` and `currentGroupingPropertyName` must be updated manually inside action-handler `onDisplayDataChanged` if their values are bound from some context properties. `ModelsTable` can't update them internally on user interaction.

### `<ModelsTable>`

#### v3

```html
{{! app/templates/example.hbs }}
<ModelsTable
  @data={{this.data}}
  @columns={{this.columns}}
  @pageSize={{this.page}}
  @currentPageNumber={{this.currentPageNumber}}
  @useDataGrouping={{true}}
  @currentGroupingPropertyName={{this.currentGroupingPropertyName}}
/>
```

```ts
// app/controllers/examples.ts
import { tracked } from '@glimmer/tracking';
import Controller from '@ember/controller';

export default class ExampleController extends Controller {
  @tracked
  columns = [];
  
  @tracked
  data = [];
  
  @tracked
  pageSize = 10;
  
  @tracked
  currentPageNumber = 25;

  @tracked
  currentGroupingPropertyName = 'name';
}
```

#### v4

```html
{{! app/templates/example.hbs }}
<ModelsTable
  @data={{this.data}}
  @columns={{this.columns}}
  @themeInstance={{this.themeInstance}}
  @pageSize={{this.page}}
  @currentPageNumber={{this.currentPageNumber}}
  @useDataGrouping={{true}}
  @currentGroupingPropertyName={{this.currentGroupingPropertyName}}
  @onDisplayDataChanged={{this.onDisplayDataChanged}}
/>
```

```ts
// app/controllers/examples.ts
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Controller from '@ember/controller';

export default class ExampleController extends Controller {
  @tracked
  columns = [];
  
  @tracked
  data = [];
  
  @tracked
  pageSize = 10;
  
  @tracked
  currentPageNumber = 25;

  @tracked
  currentGroupingPropertyName = 25;

  @service('emt-themes/plain-html')
  themeInstance;
  
  // IMPORTANT!
  @action
  onDisplayDataChanged(settings) {
    this.pageSize = settings.pageSize;
    this.currentPageNumber = settings.currentPageNumber;
    this.currentGroupingPropertyName = settings.currentGroupingPropertyName;
  }
}
```
