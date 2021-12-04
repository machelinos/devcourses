import React from "react";
import { TodoProvider } from "../TodoContext";
import { AppUI } from "./AppUI";

/* const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Intro a react', completed: true },
  { text: 'Whatever', completed: false },
];
 */

function App() {

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
