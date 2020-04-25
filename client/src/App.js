import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Books} />
          <Route exact path="/books" component={Books} />
          <Route exact path="/favorites" component={Favorites} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
