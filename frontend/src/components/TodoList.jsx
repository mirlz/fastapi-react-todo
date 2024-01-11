import React, { useContext } from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteTodoIcon from "./DeleteTodoIcon";

import { TodosContext } from "../contexts/TodosContext";

const TodoList = () => {
  const { todos } = useContext(TodosContext);

  return (
    <div>
      {todos && (
        <List>
          {todos.map(({ id, task }) => (
            <ListItem id={`listItem-${id}`}
              secondaryAction={
                <IconButton edge="end" aria-label="delete">
                  <DeleteTodoIcon id={id} />
                </IconButton>
              }
            >
              <ListItemText
                primary={task}
              />
            </ListItem>
          ))}
        </List>
      )}
    </div>
  )
}

export default TodoList;