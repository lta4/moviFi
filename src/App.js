import './App.css';
import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "./pages/main"
import Nav from "./components/nav";
import Footer from "./pages/footer";
import Fav from "./pages/fav";

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
        <Footer />
      </div>
  );
};

export default App;
