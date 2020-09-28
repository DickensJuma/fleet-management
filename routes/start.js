var express = require('express');
var router = express.Router();


 var Start = require('../model/Start');




router.post('/',(req, res, next ) => {

    Start.findOne({ registration: req.body.registration }).then(
        (data) => {
          if (data) {
            return res.status(401).send({
              error: 'Registration  found'
            });
       
          }
   
        // Insert the new start if they do not exist yet
       var start = new Start({
            
            registration: req.body.registration,
            current_odometer_reading: req.body.current_odometer_reading,
            date:req.body.date,
            location:req.body.location,
            name:req.body.name,
            phone:req.body.phone,
            starting_point:req.body.starting_point
         
        });
     
    start.save(function (err, post) {
        if (err) {
          return next(err);
        }
        res.json(201, post);
      });
    });
});
 
module.exports = router;