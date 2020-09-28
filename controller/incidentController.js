

var Incident = require("../model/Incident");

exports.getAllIncident = (req, res, next) => {
    Incident.find( {}, (error, incident) => {
    if (error) next(error);
    req.data = incident;
    next();
  });
};


exports.saveIncident = (req, res, next) =>  {
  var incident = new Incident({
    incident_type: req.body.incident_type,
    registration: req.body.registration,
    comments: req.body.comment,
    date: req.body.date,
    location: req.body.location,
  });
  incident.save(function (err, post) {
    if (err) {
      return next(err);
    }
    res.json(201, post);
  });
};
