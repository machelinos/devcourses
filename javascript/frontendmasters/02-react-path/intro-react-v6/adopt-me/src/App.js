import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import SearchParams from "./SearchParams";
import Details from "./Details";
/* 
const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, { name: "Gatis", animal: "Cat", breed: "Street" }),
    React.createElement(Pet, {
      name: "Nemo",
      animal: "Cat",
      breed: "Movie teather cat",
    }),
  ]);
}; */

const App = () => {
  return (
    <div>

      <Router>
        <header>
          <Link to="/">
            <h1>Adopt Me!</h1>
          </Link>
        </header>
        <Switch>
          <Route path="/details/:id">
            <Details></Details>
          </Route>
          <Route path="/">
            <SearchParams></SearchParams>
          </Route>

        </Switch>
      </Router>
    </div>
  );
};

ReactDOM.render(<StrictMode><App /></StrictMode>, document.getElementById("root"));
