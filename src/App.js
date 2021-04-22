import './App.css';
import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "./pages/main.js"
import Nav from "./components/nav.js";
import Footer from "./pages/footer.js";
import Fav from "./pages/fav.js";

function App() {

  return (
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/fav">
            <Fav className="favRoute" />
          </Route>
          <Route path="/">
            <Main className="mainRoute" />
          </Route>
        </Switch>
        {/* <Form movieSearch={getMovie} /> */}
        {/* <MovieDisplay movie={movie} /> */}
        {/* <ContactForm /> */}
        <Footer />
      </div>
  );
};

export default App;
