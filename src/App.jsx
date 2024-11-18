import { useState } from "react";
import "./App.css";
import TodoList from "./componentes/TodoList.jsx";


function App() {
  const [count, setCount] = useState(0);

  return (

    <div className="aplicacion-tareas">
      <div className="todo-contenedor">
        <h1 className="todo-list">Todo-List</h1>
      </div>
      <div className="tareas-lista-principal">
        <h2>Mis Tareas</h2>
        <TodoList/>
      </div>
    </div>
  );
  }

export default App;
