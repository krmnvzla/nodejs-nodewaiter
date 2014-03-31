var Lista_de_pedidos;
var NumeroDeMesas;
var MaxElementosLog;




$(function() {
    //Elemento li activo (añade y remueve class "activo")
	$('#ListaMesas li a').click(function(e) {
        e.preventDefault();
        var $this = $(this);
        $this.closest('ul').children('li').removeClass('activo');
        $this.parent().addClass('activo');
        //$this.parent().index(); //Index del elemento clickeado
    });
    
    
    
    
    //SOCKETS
    var socket = io.connect('/');
    socket.on('connect', function() {
        console.log('--- socket.on connect');
        socket.emit("LISTA_PEDIDOS");
        //Pedir numero de mesas al servidor
        socket.emit("BARRA");
        socket.emit("CNN_ROOM","barra");
    });
    
    socket.on('BARRA', function(mesas,maxlog){
        NumeroDeMesas=mesas;
        MaxElementosLog=maxlog;
        
    });
    
    socket.on('LISTA_PEDIDOS',function(lista) {
        Lista_de_pedidos=lista;
    });
    
    
    socket.on('IMPRIMIR_ORDEN', function (NumMesa, hora, pedido) {
        
		//agrega el pedido al log
		//agregar_log(NumMesa, hora + "-"+ pedido);
		//Agrega el pedido a la pantalla actual
		//actualizar_log(MesaActual); 
		//Avisar cuando hay nuevo pedido
		//if(NumMesa != MesaActual){flag_on("m" + NumMesa);};
		
    });
    
        
     //MENSAJES
    socket.on("MENSAJE", function(texto) {
            console.log(texto);
    });
    
});

/*
  //LOG
    var TotMesas=TotMesas; //Total de mesas.
    var TotLog=MaxElementosLog; //Total de lineas(pedidos) en el log del cliente.    

    //LOG - Crea la matriz de mesas y sus pedidos.
    var arr_log = new Array(TotMesas);
    for (var i = 0; i < TotMesas; i++){arr_log[i]=new Array();}
    
    function agregar_log(mesa,orden){
    	arr_log[mesa].push(orden);
    }
    
    //Actualizar LOG
    var MesaActual=0;
    function actualizar_log(mesa){
    	//flag_off("m"+mesa);
    	MesaActual=mesa;
    	document.getElementById('mesa_log').innerHTML ="";
    	for(i=arr_log.length; i>0; i--){
    		//document.getElementById('mesa_log').innerHTML += arr_log[mesa][i] + ".<br />";
    
    	if (!(typeof arr_log[mesa][i] === 'undefined')) 
    		{
    			document.getElementById('mesa_log').innerHTML += arr_log[mesa][i] + ".<br />";
    		}
    	}
    };
    
*/