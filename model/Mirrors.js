var mongoose = require('mongoose')
  , Schema = mongoose.Schema


var mirrorsSchema = Schema({
    windscreen: {
    condition: { type: String },
    comment: { type: String }
  },
  sidemirrors: { 
    condition: { type: String},
    comment: { type: String }
  },
  rear_view_mirrors: { 
      condition: { type: String },
      comment: { type: String }
    }

});





module.exports = Mirrors = mongoose.model('Mirrors', mirrorsSchema);