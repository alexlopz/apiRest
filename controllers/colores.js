//File: controllers/colores.js
var mongoose = require('mongoose');  
var Colors  = mongoose.model('Colors');

//GET - Return all colors in the DB
exports.findAllColores = function(req, res) {  
    Colors.find(function(err, colores) {
    if(err) res.send(500, err.message);

    console.log('GET /colores')
        res.status(200).jsonp(colores);
    });
};

//GET - Return a Colors with specified ID
exports.findById = function(req, res) {  
    Colors.findById(req.params.id, function(err, colors) {
    if(err) return res.send(500. err.message);

    console.log('GET /colors/' + req.params.id);
        res.status(200).jsonp(colors);
    });
};

//POST - Insert a new TVShow in the DB
exports.addTVShow = function(req, res) {  
    console.log('POST');
    console.log(req.body);

    var colors = new Colors({
        nombre:   	 req.body.nombre,
        codigo:   	 req.body.codigo,
        hexadecimal: 	 req.body.hexadecimal,
        cartillas:  	 req.body.cartillas,
        linea: 		 req.body.linea,
        base: 		 req.body.base,
        marca: 		 req.body.marca
    });

    colors.save(function(err, colors) {
        if(err) return res.send(500, err.message);
    res.status(200).jsonp(colors);
    });
};




//DELETE - Delete a Colors  with specified ID
exports.deleteColors = function(req, res) {  
    Colors.findById(req.params.id, function(err, colors) {
        colors.remove(function(err) {
            if(err) return res.send(500, err.message);
      res.status(200);
        })
    });
};
