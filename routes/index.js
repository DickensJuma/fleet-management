var express = require("express");
var router = express.Router();


var servicingController = require("../controller/servicingController")
var fuelingController = require("../controller/fuelingController")
var engineController = require("../controller/engineContriller")
var electricalController = require("../controller/electricalController")
var mirrorsController = require("../controller/mirrorsController")
var incidentController = require("../controller/incidentController")
var accidentController = require("../controller/accidentController")
var startController = require("../controller/startController")

// POST Start
router.post('/start', startController.saveStart);

// POST fueling
router.post('/fueling', fuelingController.saveFueling);

// POST incident
router.post("/incident", incidentController.saveIncident);

// POST servicing

router.post("/servicing", servicingController.saveServicing);

// POST accident

router.post("/accident", accidentController.saveAccident);

// POST electrical check
router.post("/engine-check", engineController.saveEngine);

router.post("/electrical-check", electricalController.saveElectrical);


router.get('/', (req, res) => {
  res.send('Hello World!')
})

// GET start check

router.get("/start", startController.getAllStart,
 (req, res, next) => {
  console.log(req.data);
  res.send(req.data);
});

// GET fueling check

router.get("/fueling", fuelingController.getAllFueling,
 (req, res, next) => {
  console.log(req.data);
  res.send(req.data);
});


/*==================================*/

// GET Incident check


router.get("/incident", incidentController.getAllIncident,
 (req, res, next) => {
  console.log(req.data);
  res.send(req.data);
});


/*==================================*/



// GET Servicing check

router.get("/servicing", servicingController.getAllServicing,
 (req, res, next) => {
  console.log(req.data);
  res.send(req.data);
});

/*==================================*/





router.get("/accident", accidentController.getAllAccidents,
 (req, res, next) => {
  console.log(req.data);
  res.send(req.data);
});

/*==================================*/

// GET electrical check

router.get("/electrical-check", electricalController.getAllElectrical,
 (req, res, next) => {
  console.log(req.data);
  res.send(req.data);
});




/*==================================*/

// GET engine check

router.get("/engine-check", engineController.getAllEngine,
 (req, res, next) => {
  console.log(req.data);
  res.send(req.data);
});


/*==================================*/

// GET mirrors check


router.get("/mirrors-check", mirrorsController.getAllMirrors,
 (req, res, next) => {
  console.log(req.data);
  res.send(req.data);
});



module.exports = router;
