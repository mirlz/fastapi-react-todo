import React from "react";

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SnackbarAlert = (({ error, success, errorHandler, successHandler }) => {
  return (
    <>
      <Snackbar open={error} autoHideDuration={5000} onClose={errorHandler}>
        <Alert onClose={errorHandler} severity="error" sx={{ width: '100%' }}>
          An error occurred, please try again later!
        </Alert>
      </Snackbar>
      <Snackbar open={success} autoHideDuration={5000} onClose={successHandler}>
        <Alert onClose={successHandler} severity="success" sx={{ width: '100%' }}>
          Operation successfully saved!
        </Alert>
      </Snackbar>
    </>
  )
});

export default SnackbarAlert;