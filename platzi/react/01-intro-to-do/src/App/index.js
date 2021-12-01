import React, { useState } from "react";
import { AppUI } from "./AppUI";

/* const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Intro a react', completed: true },
  { text: 'Whatever', completed: false },
];
 */

function useLocalStorage(item, initialValue) {
  let localStorageItems = localStorage.getItem(item);

  if(!localStorageItems) {
    localStorage.setItem(item,JSON.stringify(initialValue));
  }

  let parsedItems = JSON.parse(localStorageItems);

  const [items, setItems] = useState(parsedItems);

  const saveItems = (items) => {
    const stringifiedItems = JSON.stringify(items);
    localStorage.setItem(item, stringifiedItems);
    setItems(items);
  }

  return [items, saveItems];

}

function App() {
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = useState('');

  const completedTodos = todos.filter( todo=>!!todo.completed ).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if( searchValue.length > 0 ) {
    searchedTodos = todos.filter( todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()) );
  } else {
    searchedTodos = todos;
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
