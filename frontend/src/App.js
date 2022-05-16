import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AddMovie from "./components/AddMovie";
import Movies from "./components/Movie/Movies";
import About from "./components/About";
import MovieDetail from "./components/Movie/MovieDetail";
import Cart from "./components/cart";

import React, { useEffect, useState } from "react";
import axios from "axios";

// function App() {

const URL = "http://localhost:5000/movies";

const App = () => {
  const [cart, setCart] = useState([]);
  const [movies, setMovies] = useState();

  useEffect(() => {
    fetchHandler().then((data) => setMovies(data.movies));
  }, []); //add movies inside dependancy array to render movie updates in real time

  const fetchHandler = async () => {
    return await axios.get(URL).then((res) => res.data);
  };

  const handleCart = (movie) => {
    //adds movies to cart  after clicking Book button
    console.log(cart.indexOf(movie));
    if (cart.indexOf(movie) !== -1) return;
    setCart([...cart, movie]);

    console.log("added ", movie.name, " to cart");
  };

  const handleChange = (movie, d) => {
    //updates amount variable in cart objects
    const ind = cart.indexOf(movie);
    const arr = cart;
    arr[ind].amount += d;
    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  const filterContent = (movies, searchKey) => {
    // checks if an item name includes the value search field , then pass the matched items to the state
    console.log("filtercontent", movies, " and ", searchKey);
    const result = movies.filter(
      (movie) =>
        movie.name.toLowerCase().includes(searchKey) ||
        movie.name.includes(searchKey)
    );
    console.log("result", result);
    setMovies(result);
  };

  const handleSearch = (e) => {
    // executes when the value in search field is changed
    const searchKey = e.target.value;
    axios.get(URL).then((res) => filterContent(res.data.movies, searchKey));
  };

  // if (movies.length === 0)
  //   return <React.Fragment>No movies available</React.Fragment>;

  return (
    <React.Fragment>
      <header>
        <Header movies={movies} handleSearch={handleSearch} />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/add" element={<AddMovie />} exact />
          <Route
            path="/movies"
            element={<Movies movies={movies} handleCart={handleCart} />}
            exact
          />
          <Route path="/about" element={<About />} exact />
          <Route path="/movies/:id" element={<MovieDetail />} exact />
          <Route
            path="/cart"
            element={
              <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
            }
            exact
          />
        </Routes>
      </main>
    </React.Fragment>
  );
};

export default App;
