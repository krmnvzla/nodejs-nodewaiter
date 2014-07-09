// ROUTES

module.exports = function(app){

var BD = require('../models/index.js');   

    //INDEX
    app.get('/',function(req, res){
        res.render('index', { 
            pagetitle: "Titulo index", 
            lista: "Esta es una lista"
            });
    });  
    
    //AGREGAR - FUNCIONANDO - FUNCIONA
    app.get('/agregar',function(req, res){
        res.render('agregar', { 
            pagetitle: "Titulo index", 
            lista: "Esta es una lista"
            });
    });
    
	//AGREGAR ORDEN POST - FUNCIONA
    app.post('/agregar',function(req, res){
        //BD.agregarOrden({restobar:req.param('bar'),mesa:req.param('mesa'),pedido:req.param('pedido')}, function(e){
        BD.agregarOrden({restobar:2,mesa:2,pedido:2}, function(e){
            res.render('index', { 
                pagetitle: "Se agrego"
                //,lista: ""
                });
        });
    });	
    
    //EXTRAE LISTA DE ORDENES - FUNCIONA
    app.get('/lalista00', function(request,response){
        return BD.lista( function(lista, err){
            if(!err){
                response.render('lista', {
                   title: 'Titulo: ',
                   lista: lista
                });
            }
        });
    });
    
    
    

};