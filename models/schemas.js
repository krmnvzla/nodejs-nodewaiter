//--SCHEMAS INI
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var clienteSchema = new Schema({
    empresa:     	String
    ,sucursal:		String
    ,rfc:       	String
    ,direccion: {
	 local: 	String
	,plaza: 	String
	,calle:  	String
	,numero:	Number            
	,colonia: 	String
	,ciudad: 	String
	,estado: 	String
	,gps: {
	     x:  	Number
	    ,y: 	Number
	}
    }
    ,contacto: {
	nombre:		String
	,apellido:	String
	,puesto:	String
	,telefono1:	String
    }
    ,config:{
	 mesas:      	Number	//Numero de mesas del local
	,meseros:   	Number	//Numero limite de meseros o sockets
	,log:       	Number	//Limite de log por mesero
	//atributo con limite de tiempo de conexion para sockets	    
    }
});

module.exports.Sorden = new Schema({
    fecha:     { type: Date, default: Date.now }
    ,id_cliente:{
	empresa:	String
	,sucursal:	String
    }
    ,mesa:		Number
    ,socket:		String
    ,usuario_id:	String //Modificar	
});
module.exports.orden0;//PRUEBA

var usuario = new Schema ({
    socialkey:		String
    /*vvv-Datos extraidos del login*/
    ,uid:		String	//user id de fb o tw
    ,nombre:		String	
    ,apellido:		String
    ,email:		String
    ,foto:		String	//url de imagen de perfil
})

module.exports.ordenSchema = new Schema({
    restobar:   	String
    ,mesa:      	String  
    ,pedido:    	Number
    ,fecha:     { type: Date, default: Date.now }
    ,usuario: {
	socket:    	String
	,nombre:    	String
	,apellido:  	String
    }
});
    
    console.log('--Schemas..');
//--SCHEMAS FIN