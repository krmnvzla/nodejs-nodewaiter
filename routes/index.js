////////////
//-ROUTES-//
////////////

module.exports = function(app){
    
    var M = require('../models/index.js'); //Models functions
    
    //Index
    app.get('/',function(req, res){
        res.render('index', { 
            pagetitle: "Index", 
            lista: "Esta es una lista"
            });
    });     
      
    //Obtener ordenes por compañia y/o sucursal
    //Get orders by company and/or branch
    app.get('/:company/:branch?',function(req,res){
        M.orderBy(req.params.company,req.params.branch,function(err,docs){
            res.json(docs);
        });
    });       


    
    /*
    app.get('/:company/:branch?',function(req,res){       
        if (req.params.company) {
            var query = {'id_client.company':req.params.company};    
            if (req.params.branch){
                var query = {id_client:{company:req.params.company,branch:req.params.branch}};                
            }            
            M.find('orders',query,function (err, docs) {
                    console.dir(docs);
                    return res.json(docs);
                }
            );
        }else{
        res.send('Sucursal invalida')
        }        
    });
    */
    app.get('/allOrders',function(req,res,next){
        M.find('orders',{},function (err, docs) {
                console.dir(docs);
                return res.json(docs);
            }
        );    
    });
    
    app.get('/addOrder',function(req,res){
        res.render('agregar', { 
            pagetitle: "Titulo index", 
            lista: "Esta es una lista"
            });
    });
    
    app.post('/addOrder',function(req,res,next){    
        var data = {
                        id_client:{
                            company:	'ejemplo'
                            ,branch:	'sucursal'
                        }
                        ,table:		1
                        ,socket:	'socket'
                        ,id_user:	'id_usuario'//Modificar a ObjectID
                        ,msj:		'Mensaje' //Mensaje explicito de la orden
                    }       
        M.addOrder(/*req.body*/data, function(err, order){
            if (err) return next(err);
            return res.json(order);
        });
    });
    
}