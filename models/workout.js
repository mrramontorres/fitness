const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
        day: {
            type: Date,
            default: Date.now
        },
        exercise: [
            {
                type: String,
                trim: true,
                required: "Enter an exercise type"
            },
        ]

    })