import StarRatings from "react-star-ratings";
// import './Cards.css';
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const MovieDescription = ({ movies }) => {
  const { title } = useParams();
  const [movie, setMovies] = useState("");
  useEffect(() => {
    const newMovie = movies.find((movie) => movie.title === title);
    setMovies(newMovie);
  }, []);
  return (
      <div className="movie-card" style={{marginTop:"50px"}}>
        <div className="movies">
          <div className="movie-card card">
            <iframe
              width="560"
              height="315"
              src={movie.trailerURL}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            {/* <img className="card-img-top" src={movie.poster} alt="" /> */}
            <div className="card-body">
              <h4 className="card-title">{movie.title}</h4>
              {/* <h6 className="card-subtitle mb-2 text-muted">{props.movie.subtitle}</h6> */}
              <p className="text-justify" style={{ fontSize: "14px" }}>
                {movie.description}
              </p>
            </div>
            <div className="card-footer">
              <div className="clearfix">
                <div className="float-left mt-1">
                  <StarRatings
                    rating={movie.rating}
                    starRatedColor="black"
                    numberOfStars={5}
                    name="rating"
                    starDimension="20px"
                    starSpacing="8px"
                  />
                </div>
                <div className="card-foorter">{movie.rating}</div>
                <button variant="primary">
                  {/* <Link to={`/details/${el.id}`}>Go somewhere</Link> */}
                  <Link to={"/"}>Back</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

  );
};

export default MovieDescription;
