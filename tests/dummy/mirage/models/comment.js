import { belongsTo, Model } from 'miragejs';

export default Model.extend({
  author: belongsTo('user'),
});
