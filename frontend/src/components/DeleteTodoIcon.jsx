import React, { useState, useContext } from "react";

import { TodosContext } from "../contexts/TodosContext";

import { deleteTodo } from "../api/todoApi";

import DeleteIcon from '@mui/icons-material/Delete';

const DeleteTodoIcon = ({ id }) => {
  const { fetchAndUpdateTodos } = useContext(TodosContext);

  const handleDelete = async () => {
    await deleteTodo({ id }).then(fetchAndUpdateTodos);
  }

  return (
    <DeleteIcon onClick={handleDelete} />
  )
}

export default DeleteTodoIcon;