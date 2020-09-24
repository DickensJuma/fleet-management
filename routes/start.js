var express = require('express');
var router = express.Router();


const { Start } = require('../model/Start');

 
router.post('/', async (req, res) => {
    // First Validate The Request
    const { error } = validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
 
    // Check if this start already exisits
    let start = await Start.findOne({ registration: req.body.registration });
    if (start) {
        return res.status(400).send('That registration already exisits!');
    } else {
        // Insert the new start if they do not exist yet
        start = new start({
            
            registration: req.body.registration,
            current_odometer_reading: req.body.current_odometer_reading,
            date:req.body.date,
            location:req.body.location
         
        });
        await start.save();
        res.send(start);
    }
});
 
module.exports = router;