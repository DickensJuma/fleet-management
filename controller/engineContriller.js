var Engine = require("../model/Engine");

exports.getAllEngine = (req, res, next) => {
    Engine.find( {}, (error, engine) => {
    if (error) next(error);
    req.data = engine;
    next();
  });
};


exports.saveEngine = (req, res, next) => {
 
    let newEngine = new Engine({
      registration: req.body.registration,
      oil_level:req.body.oil_level,
      radiator_fluid:req.body.radiator_fluid,
      clutch_brake_fluid: req.body.clutch_brake_fluid,
      fan_belt_tightness: req.body.fan_belt_tightness,
      exhaust_pipe:req.body,exhaust_pipe,
      fueltank_cap_leaks: req.body.fueltank_cap_leaks,
      comment: req.body.comment
    });
    newEngine
      .save()
      .then((data) => {
        res.send({data});
        res.json(data)
      })
      .catch((err) => res.send({message: err.message}));
  };