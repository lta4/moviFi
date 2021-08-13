import React from "react"


const movieDisplay = ({movie}) => {

    // const handleClick = (event, data) => {
    //     event.preventDefault()
    //     props.removeFav(data);
    // };

    // const handleClick2 = (event, data) => {
    //     event.preventDefault()
    //     props.setFavObj(data)
    // }
    // const { movies } = props;
    const loaded = () => {
        return (
            <>
                <h1 className="movieTitle">{movie.Title}</h1>
                <h4>{movie.Genre}</h4>
                <img src={movie.Poster} alt={movie.Title} />
                <h3>{movie.Year}</h3>
                <div className="detailContainer">
                    {/* <button
                        onClick={() => {
                            props.selectMovie(props.movie);
                            props.history.push("/");
                        }}
                    >
                        Edit Movie
                    </button>
                    <button
                        onClick={() => {
                            props.deleteMovie(props.movie);
                        }}
                    >
                        Delete Movie
                    </button> */}
                    {/* <button onClick={(e) => handleClick2(e, props.movie)}>Add Movie to Favorites</button> */}
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