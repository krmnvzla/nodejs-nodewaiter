 // DATABASE
	 var mongoose = require('mongoose');
	 
	 require('./dbcnn.js');
	 Schemas = require('./schemas.js');
	 
	 //Modelo moongose
	 var Orden = mongoose.model('Orden', Schemas.ordenSchema);

    //--EXPORTS
	
    module.exports.Orden = Orden; // Para usar el modelo en las rutas
	
    //AGREGAR ORDEN -- FUNCIONANDO
    exports.agregarOrden = function(nData,callback){
        var unaorden = new Orden(nData);
        unaorden.save(function (err, unaorden) {
            if (err) return console.error(err + "--Error al agregar orden.");
            console.log('Orden agregada');
        });
		return
    };
    
    
    exports.lalista = function(callback){
        var unaorden = Orden;//mongoose.model( 'Orden' );
        unaorden.find(function (err, lista) {
            if(err){
                console.log(err);
            }else{
                callback(lista);
            }
        });// end Team.find
    };// end exports.lalista
    
    
    //Con filtros
    exports.lalista00 = function(callback){
        var unaorden = Orden;//mongoose.model( 'Orden' );
        
        unaorden.find({}).sort({fecha: -1}).limit(20).exec(function(err,lista){
            if(err){
                console.log(err);
            }else{
                callback(lista);
            }

        });
        
    };// end exports.lalista
