import React, { useEffect, useState } from "react";
import { uuid } from "uuidv4";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Description = (props) => {
  const [movieDes, setMovieDes] = useState(null);
  useEffect(() => {
    setMovieDes(
      props.movies.filter((el) => el.id === props.match.params.id)[0]
    );
  });
  return (
    <div className="Description">
      {movieDes && (
        <div>
          <h4> Description : </h4>
          <p>{movieDes.description}</p>
          <iframe
            width="420"
            height="315"
            src={movieDes.trailer}
            frameBorder="0"
          ></iframe>
        </div>
      )}
      <div style={{ textAlign: "center" }}>
        <Link to="/">
          <Button variant="secondary" size="lg">
            Close Trailer Page
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Description;
