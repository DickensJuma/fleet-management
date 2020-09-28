

var Mirrors = require("../model/Mirrors");


exports.getAllMirrors = (req, res, next) => {
    Mirrors.find( {}, (error, mirrors) => {
    if (error) next(error);
    req.data = mirrors;
    next();
  });
};

exports.saveMirrors = (req, res) => {
  let newMirror = new Mirrors({
    windscreen: {
      condition: req.body.condition,
      comment: req.body.comment,
    },
    sidemirrors: {
      condition: req.body.condition,
      comment: req.body.comment,
    },
    rear_view_mirrors: {
      condition: req.body.condition,
      comment: req.body.comment,
    },
    // windscreen: {
    //   condition: 'good',
    //   comment: 'good condition'
    // },
    // sidemirrors: {
    //   condition: 'faulty',
    //   comment: 'should be replaced'
    // },
    // rear_view_mirrors: {
    //     condition: 'good',
    //     comment: 'good condition'
    //   }
  });
  newMirror
   .save()
    .then((data) => {
      
      res.json(data)
    })
    .catch((err) => res.send({message: err.message}));
};
