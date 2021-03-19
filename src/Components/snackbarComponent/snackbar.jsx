import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
export default function SnackBar(props) {
    const [snackbaropen, setSnackbaropen] = React.useState(false);
  

  const snackbarClose = () => {
    setSnackbaropen(false);
  };

  return (
    
      <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      open={props.open}
      autoHideDuration={3000}
      onClose={snackbarClose}
      message={props.message}
      />

  )
}