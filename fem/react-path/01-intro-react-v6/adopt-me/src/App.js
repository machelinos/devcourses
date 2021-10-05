import React from 'react';
import ReactDOM from 'react-dom';
import Pet from './Pet';

const App = () => {
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
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
