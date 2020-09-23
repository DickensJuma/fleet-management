var mongoose = require('mongoose')
  , Schema = mongoose.Schema

var engineSchema = Schema({
    oil: {
      level: { type: Boolean },
      comment: { type: String }
    },
    radiator: { 
      fluid: { type: Boolean},
      comment: { type: String }
    },
    clutch: { 
        brake_fluid: { type: Boolean },
        comment: { type: String }
        },
    fan_belt: { 
        tightness: { type: Boolean },
        comment: { type: String }
    },
    exhaust_pipe: { 
        condition: { type: Boolean },
        comment: { type: String }
    },
    fuel_tank_cap: { 
        leaks: { type: Boolean },
        comment: { type: String }
    }

  
});




module.exports = Engine = mongoose.model('Engine', engineSchema);