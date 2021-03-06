var mongoose = require('mongoose')
  , Schema = mongoose.Schema
 

var startSchema = Schema({
  registration: String,
  current_odometer_reading: Number,
  date:{ type: Date, default: Date.now },
  location:{type: String},
  name:{type: String},
  phone:{type: String},
  starting_point:{type:String}
 
 
});


module.exports = Start = mongoose.model('Start', startSchema);