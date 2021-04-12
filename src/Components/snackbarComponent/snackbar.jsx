import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import Button from '@material-ui/core/Button';

export default function SnackBar(props) {
  return (
    
      <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      open={props.open}
      autoHideDuration={3000}
      message={props.message}
      action={
        <Button  onClose={props.close} color="inherit" size="small">
          close
        </Button>
      }
      />

  )
}