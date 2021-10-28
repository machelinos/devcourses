import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import SearchParams from "./SearchParams";
import Details from "./Details";

/* const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { id: "my-brand" }, "Adopt Me!"),
    React.createElement(Pet, { name: "Gatis", animal: "Cat", breed: "Street" }),
    React.createElement(Pet, {
      name: "Garrapo",
      animal: "Dog",
      breed: "Street",
    }),
    React.createElement(Pet, { name: "Perris", animal: "Dog", breed: "Husky" }),
  ]);
}; */

const App = () => {
  return (
    <div>
      <Router>
        <header>
          <Link to="/">
            <h1 id="my-brand">Adopt Me!</h1>
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

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
