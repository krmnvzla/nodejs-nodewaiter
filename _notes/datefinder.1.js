//http://mongoosejs.com/docs/index.html
//https://app.mongohq.com/

var mongoose = require('mongoose');
mongoose.connect('mongodb://karman:tamagochi@widmore.mongohq.com:10000/node');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  // yay!
  console.log("-- DB cnn...");
});

//prueba
var BD={};
BD.ordenes = db.collection('ordenes');
BD.restobares = db.collection('restobar');
/*
BD.ordenes.nuevo = function(dbar,dmesa,dpedido){
    BD.ordenes.insert({restobar:dbar,mesa:dmesa,pedido:dpedido});
};
*/
BD.ordenes.nuevo = function(nData,callback){
    console.log('Intentando insertar...');
    db.collection('ordenes').insert({restobar:1,mesa:1,pedido:1},null);
    //db.collection('ordenes').insert(nData, callback(null));
};



BD.ordenes.lista = function(callback){
    BD.ordenes.find().toArray(function(e,res){
        if(e){
            callback(e);
        }        else{
            callback(null,res);
        }
    });
};


//SCHEMAS INI
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


var ordenSchema = new Schema({
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
var ordenSchema = mongoose.model('orden', ordenSchema);

//var orden = new ordenSchema({restobar:1,mesa:1,pedido:1});


//SCHEMAS FIN
/*
*/
module.exports = BD;