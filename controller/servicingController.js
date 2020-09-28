
var Servicing = require("../model/Servicing");



exports.getAllServicing = (req, res, next) => {
    Servicing.find( {}, (error, servicing) => {
    if (error) next(error);
    req.data = servicing;
    next();
  });
};

exports.saveServicing = (req, res, next) =>{
  var servicing = new Servicing({
    registration: req.body.registration,
    current_odometer_reading: req.body.current_odometer_reading,
    service_due_date: Date,
    garage: req.body.garage,
    parts_needed: req.body.parts_needed,
    comments: req.body.comment,
    date: req.body.date,
    location: req.body.location,
  });
  servicing.save(function (err, post) {
    if (err) {
      return next(err);
    }
    res.json(201, post);
  });
};