var express = require('express');
	app = express();
	http = require("http");
	bodyParser  = require("body-parser");
    methodOverride = require("method-override");
	server = http.createServer(app);
var mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: false }));  
app.use(bodyParser.json());  
app.use(methodOverride());

var router = express.Router();

router.get('/', function(req, res) {  
   res.send("Hola todos!!!!!!!!!Mi server node esta funcionando!!");
});

app.use(router);

mongoose.connect('mongodb://localhost/colors', function(err, res) {  
  if(err) {
    console.log('ERROR: connecting to Database. ' + err);
  }
	else{
      console.log('Conectado a MongoDB');
   }
	app.listen(3000, function() {  
  		console.log("Servidor node corriendo en: http://localhost:3000");
	});
});	
