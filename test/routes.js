// ROUTERS

module.exports = function(app){

var BD = require('../models/index.js');   

    //INDEX
    app.get('/',function(req, res){
        res.render('index', { 
            pagetitle: "Titulo index", 
            lista: "Esta es una lista"
            });
    });
    
    //URL VARS
    app.get('/cc',function(req, res){
        res.render('index', { 
            pagetitle: "Titulo: " + req.param("urlvar") , 
            lista: "lista"
            });
    });
    //
    
    
    //AGREGAR - FUNCIONANDO - REVISAR
    app.get('/agregar',function(req, res){
        res.render('agregar', { 
            pagetitle: "Titulo index", 
            lista: "Esta es una lista"
            });
    });
    
	
	
	//USANDO POST - FUNCIONA
    app.post('/agregar',function(req, res){
        //BD.agregarOrden({restobar:req.param('bar'),mesa:req.param('mesa'),pedido:req.param('pedido')}, function(e){
        BD.agregarOrden({restobar:2,mesa:2,pedido:2}, function(e){
            res.render('index', { 
                pagetitle: "Se agrego"
                //,lista: ""
                });
        });
    });
	

    
    //EXTRAE LISTA - FUNCIONA - REVISAR
    app.get('/lista', function( request, response ) {
        return BD.Orden.find( function( err, clients ) {
            if( !err ) {
                response.render('lista', {
                    title : 'Express Todo Example',
                    lista : clients.sort({fecha:-1})
                });
            } else {
                return console.log( " ERROR: " + err );
            }
        });//.sort({fecha:-1});
    });
    
    app.get('/lalista', function(request,response){
        
        return BD.lalista( function(lista, err){
            if(!err){
                response.render('lista', {
                   title: 'Titulo: ',
                   lista: lista
                });
            }
        });
    });
    
    
    app.get('/lalista00', function(request,response){
        return BD.lalista00( function(lista, err){
            if(!err){
                response.render('lista', {
                   title: 'Titulo: ',
                   lista: lista
                });
            }
        });
    });
    
    
    

};