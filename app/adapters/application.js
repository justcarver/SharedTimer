import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  namespace: 'api',
  host: 'http://localhost:3000',
  shouldReloadAll: function () { return false;} ,
  shouldBackgroundReloadAll: function()  {
      if (window.navigator.connection === 'cellular' ||
        window.navigator.connection === 'none') {
          return false;
      } else {
        return true;
    }
  }
});
