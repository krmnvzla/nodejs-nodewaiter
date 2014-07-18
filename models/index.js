//////////////////
//-MODELS INDEX-//
//////////////////

var mongoose = require('mongoose');
var models = require('./schemas.js');

module.exports = {
    //Find items from any collection
    find: function(collec, query, callback) {
	mongoose.connection.db.collection(collec, function (err, collection) {
	collection.find(query).toArray(callback);
	});
    },
    
    //Show orders by company and branch from DB
    ordersBy: function(varCompany, varBranch, callback){
	if (!varCompany) return "Error - Don't get company";
	
	var query = {'id_client.company':varCompany};    
	if (varBranch){
	    var query = {id_client:{company:varCompany,branch:varBranch}};                
	}
	
	return this.find('orders',query,function(err,docs){
	    callback(err,docs);
	});	    
	
    },
    
    //Add order to DB
    addOrder: function(data, callback){
	models.Order.create;
	var newOrder= new models.Order(data);
	newOrder.save(function(err, savedOrder) {
            callback(err, savedOrder); 
        });
    },
    
    addClient: function(data, callback){
	models.Client.create;
	var newClient= new models.Client(data);
	newClient.save(function(err, savedClient) {
            callback(err, savedClient); 
        });
    }    
    
    
};