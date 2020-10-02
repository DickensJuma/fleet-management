
var End = require('../model/End')

exports.getAllEnd = (req, res, next) => {
    End.find( {}, (error, end) => {
    if (error) next(error);
    req.data = end;
    next();
  });
};


exports.saveEnd = (req, res, next) =>{

    End.findOne({ registration: req.body.registration }).then(
        (data) => {
          if (data) {
            return res.status(401).send({
              error: 'Trip ended already'
            });
       
          }
   
        // Insert the new end if they do not exist yet
       var end = new End({
            
            registration: req.body.registration,
            current_odometer_reading: req.body.current_odometer_reading,
            date:req.body.date,
            location:req.body.location,
            ending_point:req.body.ending_point
         
        });
     
    end.save(function (err, data) {
        if (err) {
          return next(err);
        }
        res.json(201, data);
        console.log(data)
      });
    });
};


