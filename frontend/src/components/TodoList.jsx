import React, { useState, useContext } from "react";
import Box from '@mui/material/Box';

import Todo from "./Todo";
import AddTodo from './AddTodo';
import Error from "./Error";
import { TodosContext } from "../contexts/TodosContext";

const TodoList = () => {
  const { todos } = useContext(TodosContext);

  return (
    <div>
      {(todos) ? (
        <>
          <AddTodo />
          <Box>
            {todos.map((todo) => (
              <Todo todo={todo} key={todo.id} />
            ))}
          </Box>
        </>
      ) :
        <Error error="Our database is down at the moment. Please check back later!" />}
    </div>
  )
}

export default TodoList;