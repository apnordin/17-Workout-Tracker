const router = require("express").Router();
const Workout = require ("../models/workout.js");

// Get the last workout
router.get("/api/workouts", (req, res) => {
    Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

// Add an exercise
router.put("/api/workouts/:id", (req, res) => {
    Workout.updateOne(
        {
            _id: req.params.id
        },
        {
            $push: {exercises: req.body},
        },
        { new: true }
    ).then (dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    })
});

// Create new workouts
router.post("/api/workouts", (req, res) => {
    Workout.create({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

// Get workouts in range (?)
router.get("/api/workouts/range", (req, res) => {
    Workout.aggregate([
        {$addFields: {
            totalDuration: {$sum: "$exercises.duration"}
            }
        },
        {$limit: 7}
    ])
    .then(dbworkout => {
        res.json(dbworkout);
    })
    .catch (err => {
        res.status(400).json(err);
    });
});



module.exports = router;