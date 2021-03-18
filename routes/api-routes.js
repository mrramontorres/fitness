// Dependencies
const db = require("../models/workout.js");

module.exports = (app) => {

    // This will find the workouts
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
    db.create({})
        .then(data => {
        res.json(data);
        })
        .catch(err => {
        res.status(400).json(err);
        });
    });

    // This will find the workouts for the dashboard
    app.get("/api/workouts/range", ({ body }, res) => {
    db.find({})
        .then(data => {
        res.json(data);
        })
        .catch(err => {
        res.status(400).json(err);
        });
    });

    // This will find the workouts for the dashboard
    app.post("/api/workouts/range", (req, res) => {
        db.find({})
            .then(data => {
            res.json(data);
            })
            .catch(err => {
            res.status(400).json(err);
            });
        });

    app.put("/api/workouts/:id", ({body,params}, res) => {
        console.log(body);
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
