import React from "react"

const movieDisplay = ({movie}) => {

    const loaded = () => {
        return (
            <>
                <h1>{movie.Title}</h1>
                <h4>{movie.Genre}</h4>
                <img src={movie.Poster} alt={movie.Title} />
                <h3>{movie.Year}</h3>
                <div className="detailContainer">
                    <h2>{movie.Actors}</h2>
                    <p>{movie.Plot}</p>
                    <h4>Productions brought to you by: {movie.Production}</h4>
                </div>
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