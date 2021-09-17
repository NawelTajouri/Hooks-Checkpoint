import React from "react";
import StarRatings from "react-star-ratings";
import './Cards.css';

export const Cards = ({
  el: { title, description, rating, poster},
}) => {
  return (
    <div className="movie-card">
      <div className="movies">
      <div className="movie-card card">
        <img className="card-img-top" src={poster} alt="" />
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          {/* <h6 className="card-subtitle mb-2 text-muted">{props.movie.subtitle}</h6> */}
          <p className="text-justify" style={{ fontSize: "14px" }}>
            {description}
          </p>
        </div>
        <div className="card-footer">
          <div className="clearfix">
            <div className="float-left mt-1">
              <StarRatings
                rating={rating}
                starRatedColor="black"
                numberOfStars={5}
                name="rating"
                starDimension="20px"
                starSpacing="8px"
              />
            </div>
            <div className="card-foorter">
              {rating}
            </div>
          </div>
        </div>
      </div>
      </div>
     
    </div>
  );
};
