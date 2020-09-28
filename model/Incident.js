var mongoose = require('mongoose')
, Schema = mongoose.Schema


var incidentSchema = Schema({
registration:String,
incident_type:String,
comments:String,
date:{ type: Date, default: Date.now },
location: String

});





module.exports = Incident = mongoose.model('Incident', incidentSchema);

