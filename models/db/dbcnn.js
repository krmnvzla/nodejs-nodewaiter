//--CONEXIÓN
//coment
	var mongoose = require('mongoose');
	mongoose.connect('YOUR_URL_CNN');

	var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', function callback () {
	  // yay!
	  console.log("-- DB cnn...");
	});
	

	
//--CONEXIÓN FIN