var mongoose = require('mongoose')
  , Schema = mongoose.Schema


var electricalSchema = Schema({
  headlights: {
    condition: { type: String },
    comment: { type: String }
  },
  sidelights: { 
    condition: { type: String},
    comment: { type: String }
  },
  indicator: { 
      brake_light: { type: String },
      comment: { type: String }
      },
  number_plate: { 
      reverse_light: { type: String },
      comment: { type: String }
  }


});





module.exports = Electrical = mongoose.model('Electrical', electricalSchema);