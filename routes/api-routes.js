// Dependencies
const db = require("../models/workout.js");

module.exports = (app) => {

    // This will get the workouts
    app.get("/api/workouts", (req, res) => {
    db.find({})
        .then(data => {
        res.json(data);
        })
        .catch(err => {
        res.status(400).json(err);
        });
    });

    // This will create the workouts
    app.post("/api/workouts", ({ body }, res) => {
        console.log("post in here");
    db.create(body)
        .then(data => {
        res.json(data);
        })
        .catch(err => {
        res.status(400).json(err);
        });
    });

    // This will populate the workouts for the dashboard
    app.get("/api/workouts/range", ({ body }, res) => {
        console.log("post in here");
    db.find({})
        .then(data => {
        res.json(data);
        })
        .catch(err => {
        res.status(400).json(err);
        });
    });

    app.put("/api/workouts/:id", ({body,params}, res) => {
        db.findByIdAndUpdate(  
            params.id,
            {$push:{exercises:body} },
            {new: true,runValidators:true }
           )
            .then(data => {
            res.json(data);
            })
            .catch(err => {
            res.status(400).json(err);
            });
        });

};
