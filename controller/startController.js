
var Start = require('../model/Start')

exports.getAllStart = (req, res, next) => {
    Start.find( {}, (error, start) => {
    if (error) next(error);
    req.data = start;
    next();
  });
};


exports.saveStart = (req, res, next) =>{

    Start.findOne({ registration: req.body.registration }).then(
        (data) => {
          if (data) {
            return res.status(401).send({
              error: 'Registration found'
            });
       
          }
   
        // Insert the new start if they do not exist yet
       var start = new Start({
            
            registration: req.body.registration,
            current_odometer_reading: req.body.current_odometer_reading,
            date:req.body.date,
            location:req.body.location,
            starting_point:req.body.starting_point
         
        });
     
    start.save(function (err, post) {
        if (err) {
          return next(err);
        }
        res.json(201, post);
      });
    });
};
 