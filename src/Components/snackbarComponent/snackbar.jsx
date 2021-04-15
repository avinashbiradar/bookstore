import React from "react";
import Snackbar from "@material-ui/core/Snackbar";


export default function SnackBar(props) {

  return (
    
      <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      open={props.open}
      message={props.message}
      />

  )
}