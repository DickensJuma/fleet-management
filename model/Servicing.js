 var mongoose = require('mongoose')
  , Schema = mongoose.Schema


var servicingSchema = Schema({
 registration:String,
 current_odometer_reading:Number,
 service_due_date: Date,
 garage:String,
 parts_needed:String,
 comments:String,
 timestamps:true,
 date:Date,
 location: String
  
});





module.exports = Servicing = mongoose.model('Servicing', servicingSchema);

