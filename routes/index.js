////////////
//-ROUTES-//
////////////

module.exports = function(app){
    
    var M = require('../models/index.js'); //Models functions
    
//INDEX
    app.get('/',function(req, res){
        res.render('index', { 
            pagetitle: "Index", 
            });
    });     
      
//ORDERS//
    //Obtener ordenes por compañia y/o sucursal
    //Get orders by company and/or branch
       

    app.get('/orders/all',function(req,res,next){
        M.find('orders',{},function (err, docs) {
                console.dir(docs);
                return res.json(docs);
            }
        );    
    });
    
    app.get('/orders/add',function(req,res){
        res.render('addorder', { 
            pagetitle: "Add order", 
            //lista: "Esta es una lista"
            });
    });
    
    app.post('/orders/add',function(req,res,next){    
       
        var data = {
            id_client:{
                company:	req.body.txtCompany
                ,branch:	req.body.txtBranch
            }
            ,table:		req.body.txtTable
            ,socket:	req.body.txtSocket
            ,id_user:	req.body.txtIdUser
            ,msg:		req.body.txtMsg //Mensaje explicito de la orden
        }
        
        M.addOrder(data, function(err, order){
            if (err) next(new Error(err);
            return res.json(order);
        });
        
    });
    
    app.get('/orders/:company/:branch?',function(req,res){
        M.ordersBy(req.params.company,req.params.branch,function(err,docs){
            res.json(docs);
        });
    });

//COMPANY    
    //Register Company
    //Find company
    //Edit company
    //Delete company
//CONFIG
    //Find config by company/branch
    //Edit config
//USER
    //Register user
    //Find user
    //Edit user
    //Delete user
}