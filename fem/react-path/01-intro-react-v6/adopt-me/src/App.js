import ReactDOM from "react-dom";
import SearchParams from "./SearchParams";

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
      <h1 id="my-brand">Adopt Me!</h1>
      <SearchParams></SearchParams>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
