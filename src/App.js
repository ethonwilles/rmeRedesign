import React from "react";
import { BrowserRouter as BR, Switch, Route } from "react-router-dom";

import HeaderImage from "./components/HeaderImage";
import NavBar from "./components/NavBar";

import "./styles/main.scss";

import Homepage from "./pages/home";
function App() {
  return (
    <div className="App">
      <BR>
        <Switch>
          <Route exact path="/" component={Homepage} />
        </Switch>
      </BR>
    </div>
  );
}

export default App;
