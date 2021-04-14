import React from "react"

const movieDisplay = ({movie}) => {

    const loaded = () => {
        return (
            <>
                <h1>{movie.Title}</h1>
                <h1>{movie.Genre}</h1>
                <img src={movie.Poster} alt={movie.Title} />
                <h2>{movie.Year}</h2>
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