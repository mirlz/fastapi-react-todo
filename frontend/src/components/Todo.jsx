import React, { useState, useContext } from "react";
import { TodosContext } from "../contexts/TodosContext";
import SnackbarAlert from "./SnackbarAlert";

import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';

import DeleteTodoIcon from "./DeleteTodoIcon";
import EditTodoIcon from "./EditTodoIcon";

import { editTodo, deleteTodo } from "../api/todoApi";

const Todo = ({ todo }) => {
  const { task, id, completed } = todo;

  const [editable, setEditable] = useState(false);
  const [currentTask, setCurrentTask] = useState(task);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const { fetchAndUpdateTodos } = useContext(TodosContext);

  const handleEditIconClick = (state) => {
    setEditable(editable => {
      editable = state;
      return editable;
    });
  }

  const handleInput = event => {
    setCurrentTask(event.target.value)
  }

  const handleErrorShow = () => {
    setError(prevState => !prevState)
  }

  const handleSuccessShow = () => {
    setSuccess(prevState => !prevState)
  }

  const submit = async () => {
    const updatedTask = {
      id,
      "task": currentTask,
      "completed": completed
    };
    await editTodo(updatedTask).then(() => {
      fetchAndUpdateTodos();
      handleSuccessShow();
      handleEditIconClick(false);
    }).catch(err => {
      console.log('submit -> editTodo err: ', err);
      handleErrorShow();
    });
  }

  const handleSubmitFromKb = async (event) => {
    event.preventDefault();
    submit();
  }

  const handleCheck = async (event) => {
    const updatedTask = {
      id,
      "task": currentTask,
      "completed": event.target.checked
    };
    await editTodo(updatedTask).then(() => {
      fetchAndUpdateTodos();
      handleSuccessShow();
    }).catch(err => {
      console.log('handleCheck -> editTodo err: ', err);
      handleErrorShow();
    });
  }

  const handleDelete = async () => {
    await deleteTodo({ id }).then(() => {
      fetchAndUpdateTodos();
      handleSuccessShow();
    }).catch(err => {
      console.log('handleDelete -> deleteTodo err: ', err);
      handleErrorShow();
    });
  }

  return (
    <>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmitFromKb}>
        <Stack direction="row" spacing={2}>
          <Box>
            <Checkbox
              sx={{
                mt: 1.5
              }}
              checked={completed}
              onClick={handleCheck}
            />
          </Box>
          <FormControl fullWidth key={`formControl-${id}`}>
            <TextField
              fullWidth
              value={currentTask}
              variant="outlined"
              key={`listItem-${id}`}
              disabled={!editable}
              margin="dense"
              onChange={handleInput}
              className={(completed) ? 'markDone' : ''}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end" key={`inputBtnGroup-${id}`}>
                    <Box mr={1.5}>
                      <IconButton disabled={(completed)} edge="end" aria-label="edit" key={`iconButton-${id}`}>
                        <EditTodoIcon
                          id={id}
                          key={`editIcon-${id}`}
                          handleEditIconClick={() => {
                            handleEditIconClick(true)
                          }}
                          handleSubmit={submit}
                          isEditing={!editable}
                        />
                      </IconButton>
                    </Box>
                    <IconButton edge="end" aria-label="delete" key={`iconButton-${id}`}>
                      <DeleteTodoIcon
                        id={id}
                        key={`deleteIcon-${id}`}
                        handleDeleteIconClick={handleDelete}
                      />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            >
            </TextField>
          </FormControl>
        </Stack>
      </Box>
      <SnackbarAlert error={error} success={success} errorHandler={handleErrorShow} successHandler={handleSuccessShow} />
    </>
  )
};

export default Todo;