var mongoose = require('mongoose')
  , Schema = mongoose.Schema

var engineSchema = Schema({
    registration:String,
    oil_level:String,
    radiator_fluid:String,
    clutch_brake_fluid: String,
    fan_belt_tightness: String,
    exhaust_pipe:String,
    fueltank_cap_leaks: String,
    comment: String
  
});


module.exports = Engine = mongoose.model('Engine', engineSchema);

