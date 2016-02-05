/**
 * AudioController
 *
 * @description :: Server-side logic for managing audios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var fs = require('fs');

module.exports = {

	stream: function(request,response){
		console.log(request);
		Audio.findOne(request.params.id,function(err,audio){

			
			if(err) return response.negotiate(err);

			var fileDescription = audio.fileFd;
			console.log(fileDescription);

			 var rstream = fs.createReadStream(fileDescription);
  			 return rstream.pipe(response);
		})
	},
	upload: function(request,response){
		request.file('audio').upload({
	    	// don't allow the total upload size to exceed ~100MB
	    	maxBytes: 100000000
	  	},function whenDone(err, uploadedFiles) {

	  		console.log(uploadedFiles);

		    if (err) {
		      return response.negotiate(err);
		    }

		    // If no files were uploaded, respond with an error.
		    if (uploadedFiles.length === 0){
		      return response.badRequest('No file was uploaded');
		    }

		    // Save the "fd" and the url where the avatar for a user can be accessed
		    Audio.update(request.params.id, {

		      // Generate a unique URL where the avatar can be downloaded.
		      file: require('util').format('%s/audio/stream/%d', sails.getBaseUrl(), request.params.id),

		      // Grab the first file and use it's `fd` (file descriptor)
		      fileFd: uploadedFiles[0].fd
		    }
		)
	    .exec(function (err){
	      if (err) return response.negotiate(err);
	      return response.ok();
	    });
	  });
	}
};

