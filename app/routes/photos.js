import Ember from 'ember';

export default Ember.Route.extend({
	model(params){
		return this.get('store').query('photos', { albumId: params.album_id });
	}
});
