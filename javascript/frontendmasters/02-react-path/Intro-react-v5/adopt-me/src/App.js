const Pet = ({name, animal, breed}) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, name),
        React.createElement("h2", {}, animal),
        React.createElement("h2", {}, breed),

    ]);
}

const App = () => {
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h1", {}, "Adopt Me!"),
            React.createElement(Pet, {name: "Nemo", breed: "Street", animal: "Cat"}),
            React.createElement(Pet, {name: "Gatis", animal: "Cat", breed: "White"}),
            React.createElement(Pet, {name: "Retweet", animal: "Cat", breed: "Black"}),
        ]
    );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
