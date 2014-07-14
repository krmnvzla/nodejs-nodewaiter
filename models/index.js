//////////////////
//-MODELS INDEX-//
//////////////////

var mongoose = require('mongoose');
var models = require('./schemas.js');
/*
require('./dbcnn.js');
Schemas = require('./schemas.js');

//Modelo moongose
var Orden = mongoose.model('Orden', Schemas.ordenSchema);

//Modelo
var modeloOrden = mongoose.model('orden', Schemas.Sorden,'ordenes');//model name, schema, collection
*/

module.exports = {
    //Todas las ordenes
    
    getAllOrders: function(callback){
	//models.Order.create;
	return models.Order.find(function(err, orders) {
	    console.log(orders);//toarray
	    var ordersMap = {};
	    orders.forEach(function(orden) {
		ordersMap[orden._id] = orden;
	    })
	    console.log(ordersMap);
	    return ordersMap;
	});
    },

 /*    
    //funciona
    getAllOrders: function(callback){
	//models.Order.create;
	return models.Order.find({},function(err, users) {
	    console.log(users);//toarray	    
	});
    },

   
    getAllOrders: function(callback){
	//models.Order.create;
	//var newOrdenes = new models.Order;
	models.Order.find({},function(err,orders){
	    callback(err, orders);
	})//.sort({date: -1}).limit(5);
    },
    
    getAllOrders: function(callback){
	//var newOrdenes = new models.Order;
	models.Order.find({},function(err,orders){
	    var ordersMap = {};
	    orders.forEach(function(orden) {
		ordersMap[orden._id] = orden;
	    })
	    callback(ordersMap);
	})

    },
*/


    //Obtiene las ultimas ordenes
    getOrders: function(company, branch, limit, callback){
	models.Order.find({'company':company,'branch':branch}).sort({date: -1}).limit(limit).exec(function(err,orders){
	    callback(err, orders);
	});
    },
    //Agregar orden
    addOrder: function(data, callback){
	models.Order.create;
	var newOrder= new models.Order(data);
	 newOrder.save(function(err, savedOrder) {
            callback(err, savedOrder); 
        });
    }
};
/*
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
        var unaorden = modeloOrden;//mongoose.model( 'Orden' );        
        unaorden.find({}).sort({fecha: -1}).limit(20).exec(function(err,lista){
            if(err){
                console.log(err);
            }else{
                callback(lista);
            }
        });
    };   
    
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
*/