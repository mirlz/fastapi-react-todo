import React, { useState, useContext } from "react";
import { TodosContext } from "../contexts/TodosContext";

import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';

import DeleteTodoIcon from "./DeleteTodoIcon";
import EditTodo from "./EditTodo";

import { editTodo } from "../api/todoApi";

const Todo = ({ todo }) => {
  const { task, id, completed } = todo;

  const [editable, setEditable] = useState(false);
  const [currentTask, setCurrentTask] = useState(task);

  const { fetchAndUpdateTodos } = useContext(TodosContext);

  const handleEditIconClick = () => {
    setEditable(editable => !editable);
  }

  const handleInput = event => {
    setCurrentTask(event.target.value)
  }

  const submit = async () => {
    const updatedTask = {
      id,
      "task": currentTask,
      "completed": completed
    };
    await editTodo(updatedTask).then(() => {
      fetchAndUpdateTodos();
    });
  }

  const handleSubmitFromKb = async (event) => {
    event.preventDefault();
    handleEditIconClick();
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
    });
  }

  return (
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
            InputProps={{
              endAdornment: (
                <InputAdornment position="end" key={`inputBtnGroup-${id}`}>
                  <Box mr={1.5}>
                    <IconButton edge="end" aria-label="edit" key={`iconButton-${id}`}>
                      <EditTodo
                        id={id}
                        key={`editIcon-${id}`}
                        handleEditIconClick={handleEditIconClick}
                        handleSubmit={submit}
                        isEditing={!editable}
                      />
                    </IconButton>
                  </Box>
                  <IconButton edge="end" aria-label="delete" key={`iconButton-${id}`}>
                    <DeleteTodoIcon id={id} key={`deleteIcon-${id}`} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          >
          </TextField>
        </FormControl>
      </Stack>
    </Box>
  )
};

export default Todo;