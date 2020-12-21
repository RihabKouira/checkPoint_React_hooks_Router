import React from "react";
import StarRatingComponent from "react-star-rating-component";

const MovieCard = (props) => {
  const { img, title, auther, rating } = props.movies;
  return (
    <div className="MovieCard ">
      <img src={img} alt="" className="center" />
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
