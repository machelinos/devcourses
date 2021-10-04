const Pet = () => {
    return React.createElement(
        'div',
        {},
        [
            React.createElement('h2', {}, 'Gatis'),
            React.createElement('h3', {}, 'Cat'),
            React.createElement('h4', {}, 'Street'),
        ]
    );
}

const App = () => {
    return React.createElement(
        "div",
        { id: 'my-brand'},
        [
            React.createElement("h1", {}, "Adopt Me!"),
            React.createElement(Pet),
        ]
    );
};

ReactDOM.render(React.createElement(App), document.getElementById('root'));
