 var mongoose = require('mongoose')
  , Schema = mongoose.Schema


var servicingSchema = Schema({
 registration:String,
 current_odometer_reading:Number,
 service_due_date: { type: Date, default: Date.now },
 garage:String,
 parts_needed:String,
 comments:String,
 date:{ type: Date, default: Date.now },
 location: String
  
});


module.exports = Servicing = mongoose.model('Servicing', servicingSchema);

