import React, { useState } from "react";
import { AppUI } from "./AppUI";

/* const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Intro a react', completed: true },
  { text: 'Whatever', completed: false },
];
 */
function App() {
  let localStorageTodos = localStorage.getItem('TODOS_V1');

  if(!localStorageTodos) {
    localStorage.setItem('TODOS_V1',JSON.stringify([]));
  }

  let parsedTodos = JSON.parse(localStorageTodos);

  const [todos, setTodos] = useState(parsedTodos);
  const [searchValue, setSearchValue] = useState('');

  const completedTodos = todos.filter( todo=>!!todo.completed ).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if( searchValue.length > 0 ) {
    searchedTodos = todos.filter( todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()) );
  } else {
    searchedTodos = todos;
  }

  const saveTodos = (todos) => {
    const stringifiedTodos = JSON.stringify(todos);
    localStorage.setItem('TODOS_V1', stringifiedTodos);
    setTodos(todos);
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex( todo => todo.text === text );
    const todosCopy = [...todos];
    todosCopy[todoIndex].completed = true;
    saveTodos(todosCopy);
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex( todo=> todo.text === text);
    const todosCopy = [...todos];
    todosCopy.splice(todoIndex, 1);
    saveTodos(todosCopy);
  }


  return (
    <AppUI
      totalTodos = {totalTodos}
      completedTodos = {completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
