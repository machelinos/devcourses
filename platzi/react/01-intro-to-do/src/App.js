import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./Todoitem";
import { CreateTodoButton } from "./CreateTodoButton";
//import './App.css';

function App() {
  const todos = [
    { text: 'Cortar cebolla', completed: false },
    { text: 'Intro a react', completed: false },
    { text: 'Whatever', completed: false },
  ];
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} />
        ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
