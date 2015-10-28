var mongoose = require('mongoose');
        Schema = mongoose.Schema;

var colorsSchema = new Schema({
        nombre:         { type: String },
        codigo:         { type: Number },
        hexadecimal:    { type: Number },
        cartillas:      { type: String },
        linea:          { type: Number },
        base:           { type: String },
        marca:          { type: String, enum:
        ['paleta', 'corona', 'sytec'] }
)};

module.exports = mongoose.model('Colors', colorsSchema);

