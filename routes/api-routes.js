// Dependencies
const router = require("express").Router();
const db = require("../models/workout.js");

// This will get the workouts
router.get("/api/workouts", (req, res) => {
  db.find({})
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// This will create the workouts
router.post("/api/workouts", ({ body }, res) => {
  db.create(body)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/workouts/bulk", ({ body }, res) => {
  db.insertMany(body)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
