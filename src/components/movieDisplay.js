import React from "react"

const movieDisplay = (props) => {

    const handleClick = (event, data) => {
        event.preventDefault()
        props.removeFav(data);
    };

    const handleClick2 = (event, data) => {
        event.preventDefault()
        props.setFavObj(data)
    }
    const { movies } = props;
    const loaded = () => {
        return (
            <>
                <h1 className="movieTitle">{movies.Title}</h1>
                <h4>{movies.Genre}</h4>
                <img src={movies.Poster} alt={movies.Title} />
                <h3>{movies.Year}</h3>
                <div className="detailContainer">
                    <button
                        onClick={() => {
                            props.selectMovie(movies);
                            props.history.push("/edit");
                        }}
                    >
                        Edit Movie
                    </button>
                    <button
                        onClick={() => {
                            props.deleteMovie(movies);
                        }}
                    >
                        Delete Movie
                    </button>
                    <button onClick={(e) => handleClick2(e, movies)}>Add Movie to Favorites</button>
                    <h2>{movies.Actors}</h2>
                    <p>{movies.Plot}</p>
                    <h4>Productions brought to you by: {movies.Production}</h4>
                </div>
            </>
        )
    }

    const loading = () => {
        return <h1>No Movie to Display! Please Try Again.</h1>
    }

    if (movies){
        return loaded()
    } else{
        return loading()
    } 
};

export default movieDisplay