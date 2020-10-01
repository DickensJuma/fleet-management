

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

    registration: req.body.registration,
    windscreen: req.body.windscreen,
    sidemirrors:req.body.sidemirrors,
    rear_view_mirrors:req.body.rear_view_mirrors,
    comment:req.body.comment
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
