import { Button } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Movie.css";
// import { useCart } from "react-use-cart";

const Movie = (props) => {
  const history = useNavigate();
  const { _id, name, director, description, price, image } = props.movie;
  const handleCart = props.handleCart;

  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:5000/movies/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/movies"));
  };

  return (
    <div className="card">
      <img src={image} alt={name} />
      <article>By {director}</article>
      <h3>{name}</h3>
      <p>{description}</p>
      <h3>Rs {price}</h3>
      <Button LinkComponent={Link} to={`/movies/${_id}`} sx={{ mt: "auto" }}>
        Update
      </Button>
      <Button color="error" onClick={deleteHandler} sx={{ mt: "auto" }}>
        Delete
      </Button>
      <Button
        color="error"
        onClick={() => handleCart(props.movie)}
        sx={{ mt: "auto" }}
      >
        Book Tickets
      </Button>
    </div>
  );
};

export default Movie;
