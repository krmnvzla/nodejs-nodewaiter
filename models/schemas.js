////////////
//-MOELS SCHEMAS-//
////////////

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
require('./dbcnn.js');

var clientSchema = new Schema({
    company:     	{ type: String, required: true}	//Empresa
    ,branch:		String	//Sucursal
    ,id_company:       	String	//RFC
    ,address: {			//Dirección
	mall:	 	String	
	,street:  	String
	,number:	Number            
	,suburb: 	String
	,city: 		String
	,country: 	String
	,gps: {
	     x:  	Number
	    ,y: 	Number
	}
    }
    ,contact: {			//Contacto:
	name:		String
	,firstname:	String
	,lastname:	String
	,phone:		String
    }
    ,config:{			//Configuración
	 tables:      	{ type: Number, min: 0, max: 127, default: 5 }	//Numero de mesas del local
	,waiters:   	{ type: Number, min: 0, max: 64, default: 5 }	//Numero limite de meseros o sockets
	,loglimit:     	{ type: Number, min: 3, max: 127, default: 10 }	//Limite de log por mesero
	//Agregar atributo con limite de tiempo de conexion para sockets	    
    }
});

var orderSchema = new Schema({
    date:     { type: Date, default: Date.now }
    ,id_client:{
	company:	{ type: String, required: true}
	,branch:	String
    }
    ,table:		{ type: Number, min: 0, max: 127 }
    ,socket:		String
    ,id_user:		String //Modificar a ObjectID
    ,msg:		String //Mensaje explicito de la orden
});

var userSchema = new Schema ({
    socialkey:		String
    /*vvv-Datos extraidos del login*/
    ,uid:		String	//user id de fb o tw
    ,name:		String	
    ,firstame:		String
    ,lastname:		String
    ,email:		String
    ,pic:		String	//url de imagen de perfil
})

module.exports.Client = mongoose.model('client', clientSchema,'clients');
module.exports.Order = mongoose.model('order', orderSchema, 'orders' );
module.exports.User = mongoose.model('user', userSchema, 'users');
    
console.log('--Models load..');
//--SCHEMAS FIN