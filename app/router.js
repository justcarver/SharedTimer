import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    this.resource('index',{ path: '/' });
    this.resource('manage', { path: 'manage/:timer_id'});
    this.resource('view', { path: 'view/:timer_id'});
    this.resource('find');
    this.resource('about');
});

export default Router;
