import React from "react";
import "./Movie.css";
import Movie from "./Movie";
import { Button, Typography, Box } from "@mui/material";
import { margin } from "@mui/system";

const URL = "http://localhost:5000/movies";

const Movies = (props) => {
  return (
    <div>
      <ul>
        {props.movies &&
          props.movies.map((movie, i) => (
            <li key={i}>
              <Movie movie={movie} handleCart={props.handleCart} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Movies;
