import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('players');
  this.route('scorecard');
  this.route('opener');
  this.route('closer');
});

export default Router;
