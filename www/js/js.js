var Lista_de_pedidos;
$(function() {
    //Asigna el numero de mesa
    var NumMesa=0;
	var get = getUrlVars()["mesa"];
	NumMesa=get;
	console.log("Mesa: " + NumMesa);
	

	
	//SOCKETS
    //var socket = io.connect('/');
    var socket = io.connect('https://clickclient-c9-karman.c9.io');
    socket.on('connect', function() {
        console.log('--- socket.on connect');
        socket.emit("LISTA_PEDIDOS");
    });
    
    
    socket.on('LISTA_PEDIDOS',function(lista) {
        Lista_de_pedidos=lista;
    });
    
    
    //BOTON
    $("#btn_pedido").on( "click", function( event ) {
        socket.emit("PEDIR",document.getElementById("pedidos").value);
        console.log("esta madre esta jalando");
    });
    
     //MENSAJES
    socket.on("MENSAJE", function(texto) {
            console.log(texto);
    });
});

//FUNCIONES
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}