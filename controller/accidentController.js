
const Accident = require("../model/Accident");

exports.getAllAccidents = (req, res, next) => {
    Accident.find( {}, (error, accidents) => {
    if (error) next(error);
    req.data = accidents;
    next();
  });
};




exports.saveAccident = (req, res, next) => {

    Accident.findOne({ registration: req.body.registration }).then(
      (data) => {
        if (data) {
          return res.status(401).send({
            error: 'Registration  found'
          });
     
        }
   
    var accident = new Accident({
      registration: req.body.registration,
      extend_of_damage: req.body.extend_of_damage,
      comments: req.body.comments,
      date: req.body.date,
      location: req.body.location,
    });
  
  
    
  
    accident.save(function (err, post) {
      if (err) {
        return next(err);
      }
      res.json(201, post);
    });
  });
  
  };
  