//--CONEXIÓN
var config = require('../config.js');

var mongoose = require('mongoose');
mongoose.connect(config.dbcnn);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  // yay!
  console.log("-- DB cnn...");
});

//--CONEXIÓN FIN