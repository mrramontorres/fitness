const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercise: [
        {
            type:{
                type: String,
                trim: true,
                required: "Enter an exercise type"
            },
            name:{
                type: String,
                trim: true,
                required: "Enter an exercise name"
            },
            duration:{
                type: String,
                trim: true,
                required: "Enter an exercise duration"
            },
            weight:{
                type: Number
                default: 0
            },
            reps:{
                type: Number
                default: 0
            },
            sets:{
                type: Number
                default: 0
            }
        }
    ]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;