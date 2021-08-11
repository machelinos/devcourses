import React from 'react';
import ReactDOM from 'react-dom';
import Pet from './Pet';
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
      <h1>Adopt Me!</h1>
      <Pet name="Luna" animal="dog" breed="Havanese"></Pet>
      <Pet name="Gatis" animal="Cat" breed="Street"></Pet>
      <Pet name="Nemo" animal="Cat" breed="Movie teather cat"></Pet>

    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));
