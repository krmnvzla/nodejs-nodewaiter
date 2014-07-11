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
    
    //AGREGAR
    app.get('/agregar',function(req, res){
        res.render('agregar', { 
            pagetitle: "Titulo index", 
            lista: "Esta es una lista"
            });
    });
    
    //AGREGAR POST
    app.post('/agregar',function(req, res){
	BD.addOrder(
	    {
		id_cliente:{
		    empresa:	"Empresa Ejemplo"
		    ,sucursal:	"1"
		}
		,mesa:		5
		,socket:	"socket"
		,usuario_id:	"ObjetoId"
	    }
	)
	res.render('agregar', { 
            pagetitle: "Agregado!", 
            lista: "Esta es una lista"
	});
    });

    
    //LISTA DE ORDENES
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