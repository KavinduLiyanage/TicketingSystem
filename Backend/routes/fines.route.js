const router = require("express").Router();
let Fine = require("../models/fines.model");

//@route POST
//@desc Add New Fine
router.route("/add").post((req, res) => {
  const userID = req.body.userID;
  const userName = req.body.userName;
  const tripID = req.body.tripID;
  const Location = req.body.Location;
  const fine = req.body.fine;
  const paidOrNot = req.body.paidOrNot;

  const newFine = new Fine({
    userID,
    userName,
    tripID,
    Location,
    fine,
    paidOrNot
  });

  newFine
    .save()
    .then(() => res.json("Fine added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

//@route GET
//@desc Get All Fine
router.route("/").get((req, res) => {
  Fine.find()
    .then((Fine) => res.json(Fine))
    .catch((err) => res.status(400).json("Error: " + err));
});

//@route GET
//@desc Get Specific Fine Using ID
router.route("/:id").get((req, res) => {
  Fine.findById(req.params.id)
    .then((Fine) => res.json(Fine))
    .catch((err) => res.status(400).json("Error: " + err));
});

//@route DELETE
//@desc Delete Specific Fine Using ID
router.route("/:id").delete((req, res) => {
  Fine.findByIdAndDelete(req.params.id)
    .then(() => res.json("Fine deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

//@route POST
//@desc Edit paidOrNot specific User using ID
router.route("/editFine/:id").post((req, res) => {
  Fine.findById(req.params.id).then((fines) => {
    if (!fines) res.status(404).send("data is not found");
    else {
      fines.paidOrNot = req.body.paidOrNot;

      fines
          .save()
          .then((product) => {
            res.json("Fine Paid Successfully!");
          })
          .catch((err) => {
            res.status(400).send("unable to update database");
          });
    }

  });
});

//Export User Route
module.exports = router;