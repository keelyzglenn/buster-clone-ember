import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('admin');
  this.route('contact');
  this.route('article', {path: '/article/:article_id'});
  this.route('article-admin',  {path: '/article-admin/:article_id'});
});

export default Router;
