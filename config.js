//CONFIG INDEX
var config = {    
    mesas : 7,                  //Numero de mesas
    pedidos :[                  //opciones para los pedidos
        'Llamar mesero',
        'Pedir tarro claro',
        'Pedir tarro obscuro',
        'Pedir cuenta'
    ],
    log:10,                     //limite para el log por mesa
    
    dbcnn : 'mongodb://localhost/node' //Cadena de conección 
};
module.exports = config;
