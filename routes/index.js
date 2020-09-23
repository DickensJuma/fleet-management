var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('home', { title: 'home' });
});

router.get('/engine-check', (req, res) => {

  let newEngine = new Engine({ oil: {
    level: true,
    comment: 'good'
  }, radiator: { 
    fluid: false,
    comment: 'medium'
  },
  clutch: { 
      brake_fluid:true,
      comment: "good"
      },
  fan_belt: { 
      tightness: true,
      comment: 'perfect'
  },
  exhaust_pipe: { 
      condition: true,
      comment: "good condition"
  },
  fuel_tank_cap: { 
      leaks: true,
      comment: "full"
  }});
  newEngine.save().then(matchData => {
      console.log(matchData);
      
  })
  .catch(err => console.log(err));


});

module.exports = router;
