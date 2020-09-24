var express = require("express");
var router = express.Router();

var Engine = require("../model/Engine");
var Electrical = require("../model/Electrical");
var Mirrors = require("../model/Mirrors");

var Accident = require("../model/Accident");
var Incident = require("../model/Incident");
var Servicing = require("../model/Servicing");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

/* GET home page. */
router.get("/home", function (req, res, next) {
  res.render("home", { title: "home" });
});
/*==================================*/
// POST fueling

router.post("/fueling", function (req, res, next) {
  var fueling = new Fueling({
    fuel_station: req.body.fuel_station,
    cost: req.body.cost,
    linter: req.body.linter,
    registration: req.body.registration,
    date: req.body.date,
    location: req.body.location,
  });
  fueling.save(function (err, post) {
    if (err) {
      return next(err);
    }
    res.json(201, post);
  });
});

// GET fueling check
routes.get("/fueling", function (req, res, next) {
  Fueling.find(function (err, fueling) {
    if (err) {
      return next(err);
    }
    res.json(fueling);
  });
});

/*==================================*/
// POST incident

router.post("/incident", function (req, res, next) {
  var incident = new Incident({
    incident_type: req.body.incident_type,
    registration: req.body.registration,
    comments: req.body.comment,
    date: req.body.date,
    location: req.body.location,
  });
  incident.save(function (err, post) {
    if (err) {
      return next(err);
    }
    res.json(201, post);
  });
});

// GET Incident check
routes.get("/incident", function (req, res, next) {
  Incident.find(function (err, incident) {
    if (err) {
      return next(err);
    }
    res.json(incident);
  });
});

/*==================================*/

// POST servicing

router.post("/servicing", function (req, res, next) {
  var servicing = new Servicing({
    registration: req.body.registration,
    current_odometer_reading: req.body.current_odometer_reading,
    service_due_date: Date,
    garage: req.body.garage,
    parts_needed: req.body.parts_needed,
    comments: req.body.comment,
    date: req.body.date,
    location: req.body.location,
  });
  servicing.save(function (err, post) {
    if (err) {
      return next(err);
    }
    res.json(201, post);
  });
});

// GET Servicing check
routes.get("/servicing", function (req, res, next) {
  Servicing.find(function (err, servicing) {
    if (err) {
      return next(err);
    }
    res.json(servicing);
  });
});

/*==================================*/

// POST accident

router.post("/accident", function (req, res, next) {
  var accident = new Accident({
    registration: req.body.registration,
    extend_of_damage: req.body.extend_of_damage,
    comments: req.body.comment,
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

// GET accident
routes.get("/accident", function (req, res, next) {
  Accident.find(function (err, accident) {
    if (err) {
      return next(err);
    }
    res.json(accident);
  });
});

/*==================================*/

// GET electrical check
routes.get("/electrical-check", function (req, res, next) {
  Electrical.find(function (err, electrical) {
    if (err) {
      return next(err);
    }
    res.json(electrical);
  });
});

// POST electrical check

router.post("/electrical-check", (req, res) => {
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
      console.log(data);
    })
    .catch((err) => console.log(err));
});

/*==================================*/

// GET engine check
routes.get("/engine-check", function (req, res, next) {
  Engine.find(function (err, engine) {
    if (err) {
      return next(err);
    }
    res.json(engine);
  });
});

router.post("/engine-check", (req, res) => {
  let newEngine = new Engine({
    oil: {
      level: req.body.level,
      comment: req.body.comment,
    },
    radiator: {
      fluid: req.body.fluid,
      comment: req.body.comment,
    },
    clutch: {
      brake_fluid: req.body.brake_fluid,
      comment: req.body.comment,
    },
    fan_belt: {
      tightness: req.body.tightness,
      comment: req.body.comment,
    },
    exhaust_pipe: {
      condition: req.body.condition,
      comment: req.body.comment,
    },
    fuel_tank_cap: {
      leaks: req.body.leaks,
      comment: req.body.comment,
    },

    //   oil: {
    //   level: 'good',
    //   comment: 'good'
    // }, radiator: {
    //   fluid: 'faulty',
    //   comment: 'medium'
    // },
    // clutch: {
    //     brake_fluid:'good',
    //     comment: "sharp"
    //     },
    // fan_belt: {
    //     tightness: 'good',
    //     comment: 'perfect'
    // },
    // exhaust_pipe: {
    //     condition: 'good',
    //     comment: "good condition"
    // },
    // fuel_tank_cap: {
    //     leaks: 'good',
    //     comment: "full"
    // }
  });
  newEngine
    .save()
    .then((matchData) => {
      console.log(matchData);
    })
    .catch((err) => console.log(err));
});

/*==================================*/

// GET mirrors check

routes.get("/mirrors-check", function (req, res, next) {
  Mirrors.find(function (err, mirrors) {
    if (err) {
      return next(err);
    }
    res.json(mirrors);
  });
});

// POST mirrors

router.post("/mirrors-check", (req, res) => {
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
    .then((matchData) => {
      console.log(matchData);
    })
    .catch((err) => console.log(err));
});

module.exports = router;
