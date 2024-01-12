import React from "react";

import DeleteIcon from '@mui/icons-material/Delete';

const DeleteTodoIcon = ({ id, handleDeleteIconClick }) => {

  return (
    <DeleteIcon onClick={handleDeleteIconClick} />
  )
}

export default DeleteTodoIcon;