import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { Route, Switch} from "react-router";
import data from "./components/MovieData/movies.json";
import MovieList from "./components/Movies/MovieList";
import Search from "./components/Search/Search";
import SearchRate from "./components/Search/SearchRate";
import Add from "./components/Add/Add";
import FooterPage from "./components/Footer/Footer";
import MovieDescription from "./components/Movies/MovieDescription";


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
      <Switch>
        <Route path="/add" render={()=><Add submitMovies={addMovies} />} />
      <Route
	exact path="/">

      <div className="Search-Add">
        <div className="To-search">
          <Search search={search} />
          <SearchRate searchByRate={searchByRate} />
        </div>
      </div>
      <div>
      
        
      </div>
      <div className="My-Movies">
        <MovieList
          movies={movie.filter(
            (movie) =>
              movie.title.toLocaleLowerCase().includes(searchValue.trim()) &&
              movie.rating >= searchRateValue
          )}
        />
      </div>
      </Route>
      
      <Route
          exact
          path="/movie/:title"
          render={(props) => <MovieDescription movies={movie} {...props} />}
          
        />
     <div>
     <FooterPage/>
       </div> 
       </Switch>
    </div>
  );
}

export default App;
