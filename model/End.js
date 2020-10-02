var mongoose = require('mongoose')
  , Schema = mongoose.Schema
 

var EndSchema = Schema({
  registration: String,
  current_odometer_reading: Number,
  date:{ type: Date, default: Date.now },
  ending_point:{type:String},
  location:{type: String},
 
  

});





module.exports = End = mongoose.model('End', EndSchema);