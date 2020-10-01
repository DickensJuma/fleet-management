var mongoose = require('mongoose')
  , Schema = mongoose.Schema


var electricalSchema = Schema({
  headlights: String,
  sidelights: String,
  indicator: String,
  brake_light: String,
  number_plate: String,
  comment: String
  


});





module.exports = Electrical = mongoose.model('Electrical', electricalSchema);