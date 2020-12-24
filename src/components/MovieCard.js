import React from "react";
import StarRatingComponent from "react-star-rating-component";
import { Link } from "react-router-dom";

const MovieCard = (props) => {
  const { img, title, auther, rating, id } = props.movies;
  return (
    <div className="MovieCard ">
      <Link to={`/description/${id}`}>
        <img src={img} alt="" className="center" />
      </Link>

      <div className="Movie-Info">
        <h2>{title}</h2>
        <h4>{auther}</h4>
        <span>
          <StarRatingComponent
            name="rate1"
            starCount={5}
            value={rating}
            className="starSearch"
          />
        </span>
      </div>
    </div>
  );
};

export default MovieCard;
