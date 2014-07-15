//////////////////
//-MODELS INDEX-//
//////////////////

var mongoose = require('mongoose');
var models = require('./schemas.js');

module.exports = {
    //Find
    find: function(collec, query, callback) {
	mongoose.connection.db.collection(collec, function (err, collection) {
	collection.find(query).toArray(callback);
	});
    },
    
    orderBy: function(varCompany, varBranch, callback){
	if (!varCompany) return "Error - Don't get company";
	
	var query = {'id_client.company':varCompany};    
	if (varBranch){
	    var query = {id_client:{company:varCompany,branch:varBranch}};                
	}
	//console.log(this.find('orders',query,x));
	return this.find('orders',query,function(err,docs){
	    callback(err,docs);
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