import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  namespace: 'api',
  host: 'http://localhost:3000',
  shouldReloadAll: function () { return true; },
  shouldBackgroundReloadAll: function()  { return true; }
});
