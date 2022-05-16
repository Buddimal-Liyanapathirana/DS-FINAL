const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/movie-routes");
const cors = require("cors");
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/movies", router); // localhost:5000/movies

mongoose
  .connect(
    "mongodb+srv://Buddimal:supercars99@cluster0.m8nxf.mongodb.net/moviesDb?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));
