import React from 'react';
import MovieCard from './MovieCard.component';

function MovieAdd({movies, handleFunction}) {
    return (
            <div >

            {movies.map(el=> <MovieCard movie={el}/>)}  
             <div className="addmovie">
            <p>Add  movie</p>  
            <button className="button" onClick={handleFunction}>Add </button>
            </div>
        </div> 

    )
}
export default MovieAdd;