var mesas;              //Numero total de mesas
var pedidos;            //Pedidos rapidos que apareceran en la pantalla del cliente
var log;                //Numero maximo de elementos que se mostraran en el log de la barra

//##########################################//
//###### PARAMETROS DE CONFIGURACIÓN #######//
//##########################################//

mesas = 7;
pedidos =
    ['Llamar mesero'
    ,'Pedir tarro claro'
    ,'Pedir tarro obscuro'
    ,'-------------------'
    ,'Pedir cuenta'
    ];
log = 10;
    
//##########################################//    
//##########################################//
//##########################################//


exports.NumeroDeMesas = mesas ;
exports.OpcionesDePedidos =pedidos;
exports.MaxElementosLog = log;