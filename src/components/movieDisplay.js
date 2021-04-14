import React from "react"

const movieDisplay = ({movie}) => {

    const loaded = () => {
        return (
            <>
                <h1>{movie.Title}</h1>
                <h3>{movie.Genre}</h3>
                <img src={movie.Poster} alt={movie.Title} />
                <h3>{movie.Year}</h3>
                <h2>{movie.Actors}</h2>
                <h3>{movie.Plot}</h3>
            </>
        )
    }

    const loading = () => {
        return <h1>No Movie to Display! Please Try Again.</h1>
    }

    if (movie){
        return loaded()
    } else{
        return loading()
    }
};

export default movieDisplay