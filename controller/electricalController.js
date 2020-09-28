
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
    headlights: {
      condition: req.body.condition,
      comment: req.body.comment,
    },
    sidelights: {
      condition: req.body.condition,
      comment: req.body.comment,
    },
    indicator: {
      brake_light: req.body.brake_light,
      comment: req.body.comment,
    },
    number_plate: {
      reverse_light: req.body.reverse_light,
      comment: req.body.comment,
    },
    // headlights: {
    //   condition: 'good',
    //   comment: 'Working ok'
    // },
    // sidelights: {
    //   condition: 'good',
    //   comment: 'best standard'
    // },
    // indicator: {
    //     brake_light: 'faulty',
    //     comment: 'too sharp'
    //     },
    // number_plate: {
    //     reverse_light: 'good',
    //     comment: 'perfect conditon'
    // }
  });
  newElectrical
    .save()
    .then((data) => {
      res.send({data});
      res.json(data)
    })
    .catch((err) => res.send({message: err.message}));
};