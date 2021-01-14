const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
      {
        type: {
            type: String,
            trim: true,
            required: "Enter an exercise type"
        },
        name: {
            type: String,
            trim: true,
            required: "Enter an exercise name"
        },
        duration: {
            type: Number,
            trim: true,
            required: "Enter the duration of the exercise"
        },
        weight: {
            type: Number,
            trim: true,
            required: "Enter the weight you used"
        },
        reps: {
            type: Number,
            trim: true,
            required: "Enter the number of reps"
        },
        sets: {
            type: Number,
            trim: true,
            required: "Enter the number of sets you did"
        },
        distance: {
            type: Number,
            trim: true,
            required: "Enter the distance you accomplished"
        }
      }
    ]
})

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;