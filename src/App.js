import "./App.css";
import "./Login.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "./pages/main"
import Nav from "./components/nav";
import Footer from "./pages/footer";
import Fav from "./pages/fav";
import Dashboard from "./components/dashboard";
import Preferences from "./components/preferences";
import Login from "./components/login";
import useToken from "./useToken";

function App() {

  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
    <div className="wrapper">
      <div className="App">
        <Nav />
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
        <Footer />
      </div>
    </div>
  );
};

export default App;
