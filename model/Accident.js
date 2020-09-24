var mongoose = require('mongoose')
  , Schema = mongoose.Schema


var accidentSchema = Schema({
 registration:String,
extend_of_damage:String,
 comments:String,
 timestamps:true,
 date:Date,
 location: String
  
});





module.exports = Accident = mongoose.model('Accident', accidentSchema);

