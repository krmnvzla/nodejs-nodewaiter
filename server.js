require('./models/db');

var http = require('http');
var path = require('path');
//var socketio = require('socket.io');
var express = require('express');

var router = express();
var server = http.createServer(router);

//var io = socketio.listen(server);


//Vistas y layouts
router.configure(function() {
    router.set('view options', { layout: false });
    router.set('views',__dirname + '/views');
    router.set('view engine', 'jade');
    router.use(express.static(path.resolve(__dirname, 'www')));
});
//ROUTERS
require('./routes')(router);
//BASE DE DATOS
//var BDi = require('./datefinder.js');


//SOCKET
/*
io.on('connection', function (socket) {

  });
*/

server.listen(process.env.PORT || 3000, process.env.IP || "127.0.0.1", function(){
  var addr = server.address();
  console.log("Servidor escuchando en: ", addr.address + ":" + addr.port);
});


