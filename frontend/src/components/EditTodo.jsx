import React from "react";

import EditNoteIcon from '@mui/icons-material/EditNote';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';

const EditTodo = ({ id, handleEditIconClick, isEditing, handleSubmit }) => {
  return (
    (isEditing) ?
      <EditNoteIcon onClick={handleEditIconClick} />
      :
      <KeyboardReturnIcon onClick={() => {
        handleEditIconClick();
        handleSubmit();
      }} />
  )
};

export default EditTodo;