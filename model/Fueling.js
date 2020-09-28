

var mongoose = require('mongoose')
, Schema = mongoose.Schema


var fuelingSchema = Schema({
registration:String,
fuel_station:String,
cost:Number,
linter:String,
date:{ type: Date, default: Date.now },
location: String

});



module.exports = Fueling = mongoose.model('Fueling', fuelingSchema);

