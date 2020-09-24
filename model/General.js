

 var mongoose = require('mongoose')
  , Schema = mongoose.Schema


var generalSchema = Schema({
  first_aid_kit:{
    condition:{type: String},
    comment:{type:String}
    },
    triangles: {
    condition: { type: String },
    comment: { type: String }
  },
  extinguisher: { 
    condition: { type: String},
    comment: { type: String }
  },
  radio: { 
      condition: { type: String },
      comment: { type: String }
    }

});





module.exports = General = mongoose.model('General', generalSchema);

