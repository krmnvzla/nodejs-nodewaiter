////////////
//-MOELS SCHEMAS-//
////////////

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
require('./dbcnn.js');

var clientSchema = new Schema({
    company:     	String	//Empresa
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
	 tables:      	Number	//Numero de mesas del local
	,waiters:   	Number	//Numero limite de meseros o sockets
	,loglimit:     	Number	//Limite de log por mesero
	//Agregar atributo con limite de tiempo de conexion para sockets	    
    }
});

var orderSchema = new Schema({
    date:     { type: Date, default: Date.now }
    ,id_client:{
	company:	String
	,branch:	String
    }
    ,table:		Number
    ,socket:		String
    ,id_user:		String //Modificar a ObjectID
    ,msj:		String //Mensaje explicito de la orden
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

mongoose.model('client', clientSchema,'clients');
mongoose.model('order', orderSchema, 'orders' );
mongoose.model('user', userSchema, 'users');


module.exports.Client = mongoose.model('client')
module.exports.Order = mongoose.model('order');
module.exports.User = mongoose.model('user');
    
console.log('--Models load..');
//--SCHEMAS FIN