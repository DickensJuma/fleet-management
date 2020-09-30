var mongoose = require('mongoose')
  , Schema = mongoose.Schema
 

var registerSchema = Schema({
  registration: {type:String},
 
 
});


module.exports = Register = mongoose.model('Register', registerSchema);