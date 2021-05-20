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
                <h1 className="movieTitle">{props.movie.Title}</h1>
                <h4>{props.movie.Genre}</h4>
                <img src={props.movie.Poster} alt={props.movie.Title} />
                <h3>{props.movie.Year}</h3>
                <div className="detailContainer">
                    <button
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
                    </button>
                    <button onClick={(e) => handleClick2(e, props.movie)}>Add Movie to Favorites</button>
                    <h2>{props.movie.Actors}</h2>
                    <p>{props.movie.Plot}</p>
                    <h4>Productions brought to you by: {props.movie.Production}</h4>
                <h2>Favorites List</h2>
                {props.favoritesArr.map((movie, index) => {
                    return (
                        <article>
                            <h4>{props.movie.Genre}</h4>
                            <img src={props.movie.Poster} alt={props.movie.Title} />
                            <h3>{props.movie.Year}</h3>
                            <button onClick={(e) => handleClick(e, props.movie)}>Remove from Favorites</button>
                        </article>
                    )
                })}
                </div>
            </>
        )
    }

    const loading = () => {
        return <h1>No Movie to Display! Please Try Again.</h1>
    }

    if (props.movie){
        return loaded()
    } else{
        return loading()
    } 
};

export default movieDisplay