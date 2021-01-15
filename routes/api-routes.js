const router = require("express").Router();
const Workout = require ("../models/workout.js");

router.get("/api/workouts", (req, res) => {

});

router.put("/api/workouts/:id", (req, res) => {

});

router.post("/api/workouts", (req, res) => {
    Workout.create({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {

});



module.exports = router;