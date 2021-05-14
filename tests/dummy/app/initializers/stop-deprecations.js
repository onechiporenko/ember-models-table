import { registerDeprecationHandler } from '@ember/debug';

export function initialize(/* application */) {
  registerDeprecationHandler((message, options, next) => {
    if (options && options.id && options.id === 'ember-global') {
      return;
    }
    next(message, options);
  });
}

export default {
  initialize,
};
