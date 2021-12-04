import React, { useContext } from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../Todoitem";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoContext } from "../TodoContext";


const AppUI = () => {

  const { error, loading, searchValue, searchedTodos, completeTodo, deleteTodo } = useContext(TodoContext);

  return (
      <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
      {error && <p>Hubo un error con los todos</p>}
      {loading && <p>Cargando todos!</p>}
      {(!loading && !searchedTodos.length && !searchValue) && <p>Crea tu primer TO DO!</p> }
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

export { AppUI };