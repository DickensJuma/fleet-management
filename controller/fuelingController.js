var Fueling = require("../model/Fueling");


exports.getAllFueling = (req, res, next) => {
  Fueling.find( {}, (error, fueling) => {
  if (error) next(error);
  req.data = fueling;
  next();
});
};

exports.saveFueling = (req, res, next) => {
  var fueling = new Fueling({
    fuel_station: req.body.fuel_station,
    cost: req.body.cost,
    linter: req.body.linter,
    registration: req.body.registration,
    date: req.body.date,
    location: req.body.location,
  });
  fueling.save(function (err, post) {
    if (err) {
      return next(err);
    }
    res.json(201, post);
  });
};
