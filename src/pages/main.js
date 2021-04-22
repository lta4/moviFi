import React, { useEffect } from "react";
import Form from "../components/form";
import MovieDisplay from "../components/movieDisplay";
import ContactForm from "../components/contactForm";

const Main = (props) => {

    const apiKey = "d0021166"
    const [movie, setMovie] = React.useState(null)
    const getMovie = async (searchTerm) => {
      const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`)
      console.log("response:" , response)
      const data = await response.json()
      console.log("data:" , data)
      setMovie(data)
    }
  
    useEffect(() => {
      const randMovies = [
        "The Fifth Element",
        "Mad Max: Fury Road",
        "Inglorious Bastards",
        "Avatar"
      ]
  
      const randomIndex = Math.floor(Math.random() * randMovies.length)
      getMovie(randMovies[randomIndex])
    }, [])
  
  return (
      <div className="main">
        <Form movieSearch={getMovie} />
        <MovieDisplay movie={movie} />
        <ContactForm />
      </div>
    );
  }
  
  export default Main;