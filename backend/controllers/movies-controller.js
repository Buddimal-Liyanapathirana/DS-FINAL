const Movie = require("../model/Movie");

const getAllMovies = async (req, res, next) => {
  let movies;
  try {
    movies = await Movie.find();
  } catch (err) {
    console.log(err);
  }

  if (!movies) {
    return res.status(404).json({ message: "Not found" });
  }
  return res.status(200).json({ movies });
};

const getById = async (req, res, next) => {
  const id = req.params.id;
  let movie;
  try {
    movie = await Movie.findById(id);
  } catch (err) {
    console.log(err);
  }
  if (!movie) {
    return res.status(404).json({ message: "Resource not found" });
  }
  return res.status(200).json({ movie });
};

const addMovie = async (req, res, next) => {
  const { name, director, description, price, available, image, amount } =
    req.body;
  let movie;
  try {
    movie = new Movie({
      name,
      director,
      description,
      price,
      available,
      image,
      amount,
    });
    await movie.save();
  } catch (err) {
    console.log(err);
  }

  if (!movie) {
    return res.status(500).json({ message: "Failed to Add" });
  }
  return res.status(201).json({ movie });
};

const updateMovie = async (req, res, next) => {
  const id = req.params.id;
  const { name, director, description, price, available, image, amount } =
    req.body;
  let movie;
  try {
    movie = await Movie.findByIdAndUpdate(id, {
      name,
      director,
      description,
      price,
      available,
      image,
      amount,
    });
    movie = await movie.save();
  } catch (err) {
    console.log(err);
  }
  if (!movie) {
    return res.status(404).json({ message: "Failed to update " });
  }
  return res.status(200).json({ movie });
};

const deleteMovie = async (req, res, next) => {
  const id = req.params.id;
  let movie;
  try {
    movie = await Movie.findByIdAndRemove(id);
  } catch (err) {
    console.log(err);
  }
  if (!movie) {
    return res.status(404).json({ message: "Failed To Delete" });
  }
  return res.status(200).json({ message: "Success" });
};

exports.getAllMovies = getAllMovies;
exports.addMovie = addMovie;
exports.getById = getById;
exports.updateMovie = updateMovie;
exports.deleteMovie = deleteMovie;
