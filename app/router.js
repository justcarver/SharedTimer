import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index',{ path: '/' });
  this.route('manage', { path: 'manage/:timer_id'});
  this.route('view', { path: 'view/:timer_id'});
  this.route('find');
  this.route('about');
});

export default Router;
