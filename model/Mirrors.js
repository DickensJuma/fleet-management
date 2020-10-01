var mongoose = require('mongoose')
  , Schema = mongoose.Schema


var mirrorsSchema = Schema({
  registration:String,
    windscreen:String,
  sidemirrors: String,
  rear_view_mirrors:String,
  comment:String

});





module.exports = Mirrors = mongoose.model('Mirrors', mirrorsSchema);