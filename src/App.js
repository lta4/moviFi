import './App.css';
import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Nav from "./components/nav.js";
import Form from "./components/form.js";
import MovieDisplay from "./components/movieDisplay.js";
import Footer from "./pages/footer.js"

function App() {

  const apiKey = "d0021166"
  const [movie, setMovie] = React.useState(null)
  const getMovie = async (searchTerm) => {
    const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`)
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
    <div className="App">
      <Nav />
      <Form movieSearch={getMovie} />
      <MovieDisplay movie={movie} />
      <Footer />
    </div>
  );
}

export default App;
