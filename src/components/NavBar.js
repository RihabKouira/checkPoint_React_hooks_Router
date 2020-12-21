import React from "react";
import AddMovie from "./AddMovie";
import { Form,  FormControl } from "react-bootstrap";
import StarRatingComponent from "react-star-rating-component";

const NavBar = ({ handleChange, Updatemovie , RateSearch, setRateSearch}) => {
  const onStarClick = (nextValue) => {
   setRateSearch(nextValue );
  };
  return (
    <div className="nav">
      <Form inline>
        <h1>Movie Cards</h1>
      </Form>

      <Form inline>
        <div className="search">
          <FormControl
            type="text"
            placeholder="Search ..."
            className="mr-sm-2"
            onChange={handleChange}
          />
          <StarRatingComponent
            name="rate1"
            starCount={5}
            value={RateSearch}
            onStarClick={onStarClick}
            className="starSearch"
          />
        </div>
      </Form>

      <Form inline>
        <AddMovie Updatemovie={Updatemovie} />
      </Form>
    </div>
  );
};

export default NavBar;
