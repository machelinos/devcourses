import React from 'react';
import ReactDOM from 'react-dom';
import Pet from './Pet';

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
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
