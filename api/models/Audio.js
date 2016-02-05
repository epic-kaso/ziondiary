/**
* Audio.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

  	name: {
  		type: "String"
  	},
  	file: {
  		type: "String"
  	},
  	
  	size: "String",

  	pastor: {
  		model: "Pastor"
  	},
  	category: {
  		model: "Category"
  	},
  	playlists: {
  		collection: "Playlist",
  		via: "audios"
  	},
  	channel: {
  		model: "Channel"
  	},
  	users: {
  		collection: 'User',
  		via: 'my_audios'
  	}
  }
};

