import React from 'react'
import { Cards } from '../Cards/Cards'
import './MovieList.css';

function MovieList({movies}) {
    return (
        <div className="row">
            {movies.map( (el) => (
                <Cards el={el}/>
            )
            )}
        </div>
    )
}

export default MovieList
