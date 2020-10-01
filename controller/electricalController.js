
var Electrical = require("../model/Electrical");

exports.getAllElectrical = (req, res, next) => {
    Electrical.find( {}, (error, electrical) => {
    if (error) next(error);
    req.data = electrical;
    next();
  });
};



exports.saveElectrical = (req, res, next) => {
 
  let newElectrical = new Electrical({
    registration: req.body.registration,
    headlights: req.body.headlights,
    sidelights: req.body.sidelights,
    indicator: req.body.indicator,
    brake_light: req.body.brake_light,
    number_plate: req.body.number_plate,
    comment: req.body.comment

  });
  newElectrical
    .save()
    .then((data) => {
      res.send({data});
      res.json(data)
    })
    .catch((err) => res.send({message: err.message}));
};