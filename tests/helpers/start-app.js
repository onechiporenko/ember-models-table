import Application from '../../app';
import config from '../../config/environment';
import { runTask } from 'ember-lifeline';

export default function startApp(attrs) {
  let attributes = Object.assign({}, config.APP);
  attributes.autoboot = true;
  attributes = Object.assign(attributes, attrs); // use defaults, but you can override;

  return runTask(
    this,
    () => {
      let application = Application.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    },
    1,
  );
}
