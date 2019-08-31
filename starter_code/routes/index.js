const express = require("express");
const router = express.Router();
const movies = require("../models/Movie.js");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/movies", (req, res) => {
  movies
    .find({})
    .then(listOfMovies => {
      console.log(listOfMovies);
      res.render("movies", { listOfMovies });
    })
    .catch(err => console.log("Error :", err));
});

router.get("/movies/:id", (req, res) => {
  const foundMovie = movies.filter(movie => movie.id === req.params.id)[0];
  console.log(foundMovie[0]);
  res.render("movie", { movie: foundMovie });
});

module.exports = router;
