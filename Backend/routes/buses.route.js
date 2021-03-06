const router = require("express").Router();
let Bus = require("../models/buses.model");

//@route POST
//@desc Add New Bus
router.route("/add").post((req, res) => {
  const regNo = req.body.regNo;
  const driverName = req.body.driverName;
  const capacity = req.body.capacity;

  const newBus = new Bus({
    regNo,
    driverName,
    capacity
  });

  newBus
    .save()
    .then(() => res.json("Bus added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

//@route GET
//@desc Get All Bus
router.route("/").get((req, res) => {
  Bus.find()
    .then((Bus) => res.json(Bus))
    .catch((err) => res.status(400).json("Error: " + err));
});

//@route GET
//@desc Get Specific Fine Using ID
router.route("/:id").get((req, res) => {
  Bus.findById(req.params.id)
    .then((Bus) => res.json(Bus))
    .catch((err) => res.status(400).json("Error: " + err));
});

//@route DELETE
//@desc Delete Specific Fine Using ID
router.route("/:id").delete((req, res) => {
  Bus.findByIdAndDelete(req.params.id)
    .then(() => res.json("Bus deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

//Export User Route
module.exports = router;