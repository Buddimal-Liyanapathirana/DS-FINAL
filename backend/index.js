require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const movieRoutes = require("./routes/movie-routes");

// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/users", userRoutes);
app.use("/movies", movieRoutes);
app.use("/auth", authRoutes);

const port = process.env.PORT || 5000;
app.listen(port, console.log(`Listening on port ${port}...`));
