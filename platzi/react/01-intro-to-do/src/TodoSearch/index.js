import "./TodoSearch.css";

function TodoSearch({ searchValue, setSearchValue }) {
    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    }

    return [
        <input
            className="TodoSearch"
            key="input"
            placeholder="Cebolla"
            value={searchValue}
            onChange={onSearchValueChange}
        />,
        <p key="paragraph">{ searchValue }</p>
    ]
}

export { TodoSearch };