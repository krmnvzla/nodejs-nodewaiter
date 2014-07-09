//SOKETS INICIO


module.exports = function (io){
	/*
var Config = require('../models/config.js');
var OpcionesDePedidos = Config.OpcionesDePedidos;
var NumeroDeMesas = Config.NumeroDeMesas;
var MaxElementosLog = Config.MaxElementosLog;
*/
var config = require('../config.js');
var OpcionesDePedidos = config.pedidos;
var NumeroDeMesas = config.mesas;
var MaxElementosLog = config.log;

 console.log("+++++op" + OpcionesDePedidos);



	console.log("--Sockets..");
	
	io.sockets.on('connection', function(socket) {		
		console.log("--- io.sockets.on connection");
		
		socket.on('LISTA_PEDIDOS', function(lista) {
			socket.emit('LISTA_PEDIDOS',lista=OpcionesDePedidos);
		});
		
		//ROOM
		socket.on('CNN_ROOM',function (NumMesa){
			socket.join(NumMesa);
			var texto = "Conectado a la mesa #: " + NumMesa;
			socket.emit('MENSAJE',texto);
			//socket.emit('LISTA_ORDENES',OpPedidos);
			});	
		
		socket.on('PEDIR', function(pedido){
			
			//Enviar al admin
			socket.broadcast.to('BARRA').emit('MENSAJE',"Hola");
			
			//Envia pedido a la barra
			socket.broadcast.to('barra').emit('MENSAJE',OpcionesDePedidos[pedido]);
			
			socket.emit('MENSAJE',OpcionesDePedidos[pedido]);
			console.log(OpcionesDePedidos[pedido]);
		});
		
		socket.on('BARRA', function(){
			socket.emit('BARRA',NumeroDeMesas,MaxElementosLog);  
			
		});
		
		socket.on("MENSAJE",function (texto) {
			socket.emit("MENSAJE",texto);
		});
		
	});
};
//SOCKETS FIN
