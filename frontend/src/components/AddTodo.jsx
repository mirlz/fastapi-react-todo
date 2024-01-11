
import React, { useState, useContext } from "react";

import { TodosContext } from "../contexts/TodosContext";

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import IconButton from '@mui/material/IconButton';

const AddTodo = () => {
  const [task, setTask] = useState("");
  const { fetchTodos } = useContext(TodosContext);

  const resetFormFields = () => {
    setTask('');
  }
  const handleInput = event => {
    setTask(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTodo = {
      "task": task
    }

    fetch("http://localhost:8000/todo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTodo)
    }).then(() => {
      fetchTodos();
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