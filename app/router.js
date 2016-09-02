import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
	this.route('users');
	this.route('albums', { path: 'albums/:user_id' });
	this.route('photos', { path: 'photos/:album_id' });
});

export default Router;
