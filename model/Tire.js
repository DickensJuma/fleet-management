var mongoose = require('mongoose')
  , Schema = mongoose.Schema


var tireSchema = Schema({
  pressure:{
    condition:{type: Boolean},
    comment:{type:String}
    },
    thread: {
    condition: { type: Boolean },
    comment: { type: String }
  },
  spare_wheel: { 
    condition: { type: Boolean},
    comment: { type: String }
  },
  jack_spanner: { 
      condition: { type: String },
      comment: { type: String }
    }

});





module.exports = Tire = mongoose.model('Tire', tireSchema);

