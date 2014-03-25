    //--SCHEMAS INI
	var mongoose = require('mongoose');
    var Schema = mongoose.Schema;
    
    var restobarSchema = new Schema({
        nombre:     String
        ,telefono:  String
        ,rfc:       String
        ,direccion: {
            calle:  String
            ,numero:Number
            ,local: String
            ,plaza: String
            ,gps: {
                x:  Number
                ,y: Number
            }
        }
        ,encargado: {
            nombre:     String
            ,apellido:  String
            ,telefono1: String
            ,telefono2: String
            ,direccion: String
        }
        ,config:{
            mesas:      Number
            ,meseros:   Number
            ,log:       Number
            //limite de tiempo de conexion para sockets
        }
    });
    
    module.exports.ordenSchema = new Schema({
        restobar:   String
        ,mesa:      String  
        ,pedido:    Number
        ,fecha:     { type: Date, default: Date.now }
        ,usuario: {
            socket:    String
            ,nombre:    String
            ,apellido:  String
        }
    });
	
	console.log('--Schemas..');
    //--SCHEMAS FIN