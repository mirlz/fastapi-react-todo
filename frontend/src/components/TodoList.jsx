import React, { useState, useContext } from "react";
import Box from '@mui/material/Box';

import Todo from "./Todo";
import AddTodo from './AddTodo';
import Error from "./Error";
import { TodosContext } from "../contexts/TodosContext";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const TodoList = () => {
  const { todos, isLoading, hasErr } = useContext(TodosContext);

  return (
    <div>
      {(isLoading) && (
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={isLoading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}

      {(hasErr) ? (
        <Error error="Our database is down at the moment. Please check back later!" />
      ) : (todos) && (
        <>
          <AddTodo />
          <Box>
            {todos.map((todo) => (
              <Todo todo={todo} key={todo.id} />
            ))}
          </Box>
        </>
      )}
    </div>
  )
}

export default TodoList;