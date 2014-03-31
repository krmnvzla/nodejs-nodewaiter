//--CONEXIÓN

	var mongoose = require('mongoose');
	mongoose.connect('mongodb://nodejs-nodewaiter:nodewaiter@widmore.mongohq.com:10000/node');

	var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', function callback () {
	  // yay!
	  console.log("-- DB cnn...");
	});
	

	
//--CONEXIÓN FIN