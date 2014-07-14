////////////
//-ROUTES-//
////////////


module.exports = function(app){
    
    var models = require('../models/index.js');
    
    //INDEX
    app.get('/',function(req, res){
        res.render('index', { 
            pagetitle: "Index", 
            lista: "Esta es una lista"
            });
    });  
    
    app.get('/allorders',function(req,res,next){
        console.log(models.getAllOrders());
        return res.json(models.getAllOrders);
    
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
        
        models.addOrder(/*req.body*/data, function(err, order){
            if (err) return next(err);
            return res.json(order);
        });
    });
    
}