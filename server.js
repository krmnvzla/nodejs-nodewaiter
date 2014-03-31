var http = require('http');
var path = require('path');
var socketio = require('socket.io');
var express = require('express');

var router = express();
var server = http.createServer(router);



//Vistas y layouts
router.configure(function() {
    router.set('view options', { layout: false });
    router.set('views',__dirname + '/views');
    router.set('view engine', 'jade');
    router.use(express.static(path.resolve(__dirname, 'www')));
});

//ROUTERS
require('./routes')(router);

var io = socketio.listen(server);
require('./sockets')(io);


server.listen(process.env.PORT || 80, process.env.IP || "127.0.0.1", function(){
  var addr = server.address();
  console.log("Servidor escuchando en: ", addr.address + ":" + addr.port);
});


