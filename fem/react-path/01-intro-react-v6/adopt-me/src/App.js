const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("h3", {}, props.animal),
    React.createElement("h4", {}, props.breed),
  ]);
};

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
