import { hasMany, Model } from 'miragejs';

export default Model.extend({
  comments: hasMany('comment'),
});
