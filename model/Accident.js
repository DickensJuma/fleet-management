var mongoose = require('mongoose')
  , Schema = mongoose.Schema


var accidentSchema = Schema({
 registration:String,
extend_of_damage:String,
 comments:String,
 date:{ type: Date, default: Date.now },
 location: String
  
});





module.exports = Accident = mongoose.model('Accident', accidentSchema);

