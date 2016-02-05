/**
* Playlist.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	name: "String",
  	category: {
  		model: "Category"
  	},
  	channel: {
  		model: "Channel"
  	},
  	audios: {
  		collection: "Audio",
  		via: "playlists"
  	}
  }
};

