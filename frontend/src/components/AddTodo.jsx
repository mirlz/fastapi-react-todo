import React, { useState, useContext } from "react";

import { TodosContext } from "../contexts/TodosContext";

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import IconButton from '@mui/material/IconButton';

import { addTodo } from "../api/todoApi";

const AddTodo = () => {
  const [task, setTask] = useState("");
  const { fetchAndUpdateTodos } = useContext(TodosContext);

  const resetFormFields = () => {
    setTask('');
  }
  const handleInput = event => {
    setTask(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newTodo = {
      "task": task
    }

    await addTodo(newTodo).then(() => {
      fetchAndUpdateTodos();
      resetFormFields();
    });
  }
  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}>
      <FormControl fullWidth>
        <TextField
          required
          value={task}
          id="standard-basic"
          label="Add a todo item"
          variant="outlined"
          onChange={handleInput}
          margin="normal"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton edge="end" onClick={handleSubmit}>
                  <KeyboardReturnIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </FormControl>
    </Box>
  )
}

export default AddTodo;