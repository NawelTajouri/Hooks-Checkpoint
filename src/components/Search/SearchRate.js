import React from 'react';

import StarRatingComponent from 'react-star-rating-component';

function SearchRate({searchByRate}) {
    
    const handelrate=(newrate) => {
        searchByRate(newrate)
    }
    
      return (
        
          <form className="search">
            <h3>Search By Rate</h3>

          <StarRatingComponent
        count={5}
        name="rating"
       
        onStarClick={handelrate}
    
        size={100}
        activeColor="#ffd700"
        emptyStarColor= 'white'
      />
          </form>
        );
    }

export default SearchRate
