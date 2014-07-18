////////////
//-ROUTES-//
////////////

function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

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
            if (err) return next(err);
            if (docs==[]) return next(new Error('Nothing is found.'));                              
            return res.json(docs);
            //next();
        });    
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
                company:    req.body.txtCompany
                ,branch:    req.body.txtBranch
            }
            ,table:	    req.body.txtTable
            ,socket:	    req.body.txtSocket
            ,id_user:	    req.body.txtIdUser
            ,msg:	    req.body.txtMsg //Mensaje explicito de la orden
        }
        
        M.addOrder(data, function(err, order){
            if (err) next(new Error(err));
            return res.json(order);
        });
        
    });
    
    app.get('/orders/:company/:branch?',function(req,res,next){
        M.ordersBy(req.params.company,req.params.branch,function(err,docs){
            if (err) return next(err);
            if (Object.keys(docs).length === 0) return res.send(400, "Nothing is found.");                             
            return res.json(docs);
            //next();
        });
    });

//COMPANY    
    //Register Company
    
    app.get('/client/add',function(req,res){
        res.render('addclient', { 
            pagetitle: "Add client.", 
            });
    });
        
    app.post('/client/add',function(req,res,next){           
                
        var data ={
            company:     	req.body.Company       //Empresa
            ,branch:		req.body.Branch	//Sucursal
            ,id_company:       	req.body.Company	//RFC
            ,address: {		//Dirección
                mall:	 	req.body.Mall	
                ,street:  	req.body.Street
                ,number:	req.body.Number            
                ,suburb: 	req.body.Suburb
                ,city: 		req.body.City
                ,country: 	req.body.Country
                ,gps: {
                     x:  	req.body.gpsx
                    ,y: 	req.body.gpsy
                }
            }
            ,contact: {			//Contacto:
                name:		req.body.cName
                ,firstname:	req.body.cFName
                ,lastname:	req.body.cLName
                ,phone:		req.body.cNumber
            }
        }
       
        M.addClient(data, function(err, client){
            if (err) next(new Error(err));
            return res.json(client);
        });
        
    });

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

//ERRORS 
    //Errors page not found.
    app.get('*', function(req, res, next) {
	var err = new Error();
	err.status = 404;
	next(err);
    });
    // handling 404 errors
    app.use(function(err, req, res, next) {
        if(err.status !== 404) {
          return next();
        }
       
        res.send(err.message || 'Page not found.');
        
    });
}