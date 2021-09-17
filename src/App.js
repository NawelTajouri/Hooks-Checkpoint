import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";

import data from "./components/MovieData/movies.json";
import MovieList from "./components/Movies/MovieList";
import Search from "./components/Search/Search";
import SearchRate from "./components/Search/SearchRate";
import Add from "./components/Add/Add";
import FooterPage from "./components/Footer/Footer";

function App() {
  const [movie, setMovie] = useState(data);
  const [searchValue, setSearchValue] = useState("");
  const [searchRateValue, setSearchRate] = useState("");

  const search = (title) => {
    setSearchValue(title);
  };
  const searchByRate = (rating) => {
    setSearchRate(rating);
  };
  const addMovies = (x) => {
    setMovie([...movie, x]);
  };

  return (
    <div className="App">
      <Header />
      {/* <TCarousel />
      <ControlledCarousel/> */}
      <div className="Search-Add">
        <div className="To-search">
          <Search search={search} />
          <SearchRate searchByRate={searchByRate} />
        </div>
      </div>
      <div>
        <Add submitMovies={addMovies} />
      </div>
      <div className="My-Movies">
        <MovieList
          movies={movie.filter(
            (movie) =>
              movie.title.toLocaleLowerCase().includes(searchValue) &&
              movie.rating >= searchRateValue
          )}
        />
      </div>
     <div>
     <FooterPage/>
       </div> 
      
    </div>
  );
}

export default App;
