//--MODELS DATABASE
var mongoose = require('mongoose');

require('./dbcnn.js');
Schemas = require('./schemas.js');

//Modelo moongose
var Orden = mongoose.model('Orden', Schemas.ordenSchema);

//Modelo
var modeloOrden = mongoose.model('orden', Schemas.Sorden,'ordenes');//model name, schema, collection


//--EXPORTS
	
    module.exports.Orden = Orden; // Para usar el modelo en las rutas
	
    //AGREGAR ORDEN -- FUNCIONANDO
    module.exports.addOrder = function(nData,callback){
	var unaorden = new modeloOrden(nData);
	unaorden.save(function (err) {
	    if (err) return handleError(err);
	    console.log("Agregada: ",nData);
	    return true;
	})
    }
    
    //MOSTRAR ORDENES - C FILTROS
    exports.lista = function(callback){
        var unaorden = Orden;//mongoose.model( 'Orden' );        
        unaorden.find({}).sort({fecha: -1}).limit(20).exec(function(err,lista){
            if(err){
                console.log(err);
            }else{
                callback(lista);
            }

        });
        
    };
