import React, { Component, useState, useEffect } from "react";
import "./cart.css";
import { Button, Box, Typography } from "@mui/material";

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    console.log("handleremove()", id);
    const arr = cart.filter((movie) => {
      return movie._id !== id;
    });
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((movie) => {
      return (ans += movie.price * movie.amount);
    });
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <article>
      {cart.map((movie) => (
        <div className="cart_box">
          <div className="cart_img">
            <img src={movie.image}></img>
            <Typography
              variant="button"
              display="block"
              gutterBottom
              style={{
                padding: "10px 20px",
              }}
            >
              {movie.name}
            </Typography>
          </div>

          <div>
            <Button
              style={{
                borderRadius: 5,
                backgroundColor: "#9FEF9E ",
                padding: "2px 2px",
                fontSize: "18px",
              }}
              onClick={() => handleChange(movie, 1)}
              variant="outlined"
              color="success"
            >
              +
            </Button>

            <Button variant="outlined">{movie.amount}</Button>

            <Button
              style={{
                borderRadius: 5,
                backgroundColor: "#9FEF9E ",
                padding: "2px 2px",
                fontSize: "18px",
              }}
              onClick={() => handleChange(movie, -1)}
              variant="outlined"
              color="success"
            >
              -
            </Button>
          </div>

          <Typography
            variant="button"
            display="block"
            gutterBottom
            style={{
              padding: "10px 20px",
            }}
          >
            LKR {movie.price}
          </Typography>
          <Button
            onClick={() => handleRemove(movie._id)}
            variant="outlined"
            color="error"
          >
            Remove
          </Button>
        </div>
      ))}
      <div className="total">
        <Typography
          variant="button"
          display="block"
          gutterBottom
          style={{
            padding: "10px 0px",
            color: "#F88B1F",
            marginLeft: "auto",
          }}
        >
          Total price LKR : {price}
        </Typography>
      </div>
    </article>
  );
};

export default Cart;
