import React, { useState, useContext } from "react";

import { TodosContext } from "../contexts/TodosContext";
import SnackbarAlert from "./SnackbarAlert";

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
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const resetFormFields = () => {
    setTask('');
  }
  const handleInput = event => {
    setTask(event.target.value)
  }

  const handleErrorShow = () => {
    setError(prevState => !prevState);
  }

  const handleSuccessShow = () => {
    setSuccess(prevState => !prevState);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (task) {
      const newTodo = {
        "task": task
      }

      await addTodo(newTodo).then(() => {
        fetchAndUpdateTodos();
        resetFormFields();
        handleSuccessShow();
      }).catch(err => {
        console.log('handleSubmit -> addTodo err: ', err);
        handleErrorShow();
      });
    }
  }
  return (
    <>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}>
        <FormControl fullWidth>
          <TextField
            value={task}
            id="standard-basic"
            label="Add a task item"
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
      <SnackbarAlert error={error} success={success} errorHandler={handleErrorShow} successHandler={handleSuccessShow} />
    </>
  )
}

export default AddTodo;