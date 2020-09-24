

var mongoose = require('mongoose')
, Schema = mongoose.Schema


var fuelingSchema = Schema({
registration:String,
fuel_station:String,
cost:Number,
linter:String,
timestamps:true,
date:Date,
location: String

});





module.exports = Fueling = mongoose.model('Fueling', fuelingSchema);

