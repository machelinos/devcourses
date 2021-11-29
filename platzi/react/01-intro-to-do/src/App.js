import React, { useState } from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./Todoitem";
import { CreateTodoButton } from "./CreateTodoButton";

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Intro a react', completed: true },
  { text: 'Whatever', completed: false },
];

function App() {
  const [todos, setTodos] = useState(defaultTodos);
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
    setTodos(todosCopy);
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex( todo=> todo.text === text);
    const todosCopy = [...todos];
    todosCopy.splice(todoIndex, 1);
    setTodos(todosCopy);
  }


  return (
    <React.Fragment>
      <TodoCounter
        total = {totalTodos}
        completed = {completedTodos}
      />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem 
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={()=>{completeTodo(todo.text)}}
            onDelete={()=>{deleteTodo(todo.text)}}
            />
        ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
