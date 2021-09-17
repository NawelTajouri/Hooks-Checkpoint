import React from "react";
import "./Search.css";

const Search = ({ search }) => {
  const callSearchFunction = (e) => {
    e.preventDefault();
    search(e.target.value);
  };

  return (
    // <form className="search">
    //   <input
    //     placeholder="enter value ..." onChange={callSearchFunction}

    //     type="text"
    //   />
    // </form>

    <>
      <div class="search__container">
        <p class="search__title">Go ahead, hover over search</p>
        <input
          
          class="search__input"
          onChange={callSearchFunction}
          type="text"
          placeholder="Search"
        />
      </div>

      
    </>
  );
};

export default Search;
