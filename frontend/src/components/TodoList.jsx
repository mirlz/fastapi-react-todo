import React, { useContext } from "react";
import { TodosContext } from "../contexts/TodosContext";

const TodoList = () => {
  const { todos } = useContext(TodosContext);

  return (
    <div>
      {todos && (
        <ul>
          {todos.map(({ id, task }) => (
            <li key={id}>
              {task}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default TodoList;