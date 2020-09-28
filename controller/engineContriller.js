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

      fan_belt: { 
        tightness: req.body.tightness,
        comment: req.body.comment
    },
    exhaust_pipe: { 
        condition: req.body.condition,
        comment: req.body.comment
    },
    fuel_tank_cap: { 
        leaks: req.body.leaks,
        comment: req.body.comment
    }
    });
    newEngine
      .save()
      .then((data) => {
        res.send({data});
        res.json(data)
      })
      .catch((err) => res.send({message: err.message}));
  };