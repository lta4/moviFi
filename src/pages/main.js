import { Route, Link, Switch } from "react-router-dom";
import React, { useEffect } from "react";
import Form from "../components/form";
import MovieDisplay from "../components/movieDisplay";
import ContactForm from "../components/contactForm";

const Main = () => {

    const apiKey = "d0021166"
    const [movies, setMovies] = React.useState([]);
    const emptyMovie = {
      title: "",
      poster: "",
      year: "",
    };

    const [selectedMovie, setSelectedMovie] = React.useState(emptyMovie);
    const [favObj, setFavObj] = React.useState(null)
    const [favoritesArr, setFavoritesArr] = React.useState([])
    const getMovies = async (searchTerm) => {
      const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`)
      console.log("response:" , response)
      const data = await response.json()
      console.log("data:" , data)
      setMovies(data)
    };

    const addMovie = () => {
      if(favObj !== null) {
        changeFav(favObj)
      }
    }

    const changeFav = (newFav) => {
      if (favoritesArr === null) {
        setFavoritesArr((newFav))
      } else if (
        !favoritesArr.some((fav) => { return fav.title === newFav.title})
      ){
        let newArray = [...favoritesArr]
        newArray.push(newFav)
        setFavoritesArr(newArray)
      }
    }

    const removeFav = (selectFav) => {
      favoritesArr.splice(favoritesArr.indexOf(selectFav), 1)
      setFavoritesArr([...favoritesArr])
    }

    const selectMovie = (movies) => {
      setSelectedMovie(movies);
    };
    React.useEffect(() => getMovies(), []);
    React.useEffect(() => addMovie(), [favObj])
    
    useEffect(() => {
      const randMovies = [
        "The Fifth Element",
        "Mad Max: Fury Road",
        "Inglorious Bastards",
        "Avatar",
        "Rush Hour",
        "Rush Hour 2",
        "Rush Hour 3",
        "Jaws",
        "Jaws 2",
        "Jaws 3",
        "Twilight",
        "Broke Back Mountain",
        "Divergent",
        "The Avengers",
      ]
  
      const randomIndex = Math.floor(Math.random() * randMovies.length)
      getMovies(randMovies[randomIndex])
    }, [])
  
  return (
      <div className="main">
        <Switch> 
        <Route exact path = "/main/" render = {(rp) => (
          <Form movieSearch={getMovies}{...rp} />
        )}
        />
        <Route exact path="/" render={(rp) =>
          <MovieDisplay changeFav = {changeFav} removeFav = {removeFav} favoritesArr = {favoritesArr} favObj = {favObj} setFavObj = {setFavObj} selectMovie = {selectMovie}{...rp} movies = {movies} />}
        />
          <ContactForm />
        </Switch>
      </div>
    );
  }
  
  export default Main;