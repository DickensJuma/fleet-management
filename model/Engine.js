var mongoose = require('mongoose')
  , Schema = mongoose.Schema

var engineSchema = Schema({
    oil: {
      level: { type: String },
      comment: { type: String }
    },
    radiator: { 
      fluid: { type: String},
      comment: { type: String }
    },
    clutch: { 
        brake_fluid: { type: String },
        comment: { type: String }
        },
    fan_belt: { 
        tightness: { type: String },
        comment: { type: String }
    },
    exhaust_pipe: { 
        condition: { type: String },
        comment: { type: String }
    },
    fuel_tank_cap: { 
        leaks: { type: String },
        comment: { type: String }
    }

  
});


module.exports = Engine = mongoose.model('Engine', engineSchema);

