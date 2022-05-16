const express = require("express");
const router = express.Router();
const Movie = require("../model/Movie");
const moviesController = require("../controllers/movies-controller");

router.get("/", moviesController.getAllMovies);
router.post("/", moviesController.addMovie);
router.get("/:id", moviesController.getById);
router.put("/:id", moviesController.updateMovie);
router.delete("/:id", moviesController.deleteMovie);

module.exports = router;
