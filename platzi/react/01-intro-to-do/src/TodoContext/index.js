import { createContext, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = createContext();    

function TodoProvider(props) {
    const {items: todos, saveItems: saveTodos, loading, error} = useLocalStorage('TODOS_V1', []);
    const [searchValue, setSearchValue] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
  
    const completedTodos = todos.filter( todo=>!!todo.completed ).length;
    const totalTodos = todos.length;
  
    let searchedTodos = [];
  
    if( searchValue.length > 0 ) {
      searchedTodos = todos.filter( todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()) );
    } else {
      searchedTodos = todos;
    }

    const addTodo = (text) => {
      const todosCopy = [...todos];
      todosCopy.push({
        text: text,
        completed: false
      })
      saveTodos(todosCopy);
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
        <TodoContext.Provider value={
            {
                loading,
                error,
                totalTodos,
                completedTodos,
                searchValue,
                setSearchValue,
                searchedTodos,
                addTodo,
                completeTodo,
                deleteTodo,
                modalOpen,
                setModalOpen
            }
        }>
            {props.children}
        </TodoContext.Provider>
    )
  
}

export { TodoProvider, TodoContext };