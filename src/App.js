import './App.css';
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./pages/main"
import Nav from "./components/nav";
import Footer from "./pages/footer";
import Fav from "./pages/fav";
import Dashboard from "./components/dashboard";
import Preferences from "./components/preferences";

function App() {

  return (
      <div className="App">
        <Nav />
        <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Dashboard className="dashboardRoute"/>
          </Route>
          <Route path="/preferences">
            <Preferences className="preferencesRoute"/>
          </Route>
          <Route path="/fav">
            <Fav className="favRoute" />
          </Route>
          <Route path="/">
            <Main className="mainRoute" />
          </Route>
        </Switch>
        </BrowserRouter>
        <Footer />
      </div>
  );
};

export default App;
