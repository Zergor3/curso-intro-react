import { useContext } from "react";
import { TodoContext } from "../TodoContext";
import "./TodoCounter.css";

// const estilos = { color: "red", backgroundColor: "yellow" };

function TodoCounter() {
  const { totalTodos, completedTodos } = useContext(TodoContext);
  return (
    <h2 className="TodoCounter">
      Has completado {completedTodos} de {totalTodos} TODOs
    </h2>
  );
}

export { TodoCounter };
