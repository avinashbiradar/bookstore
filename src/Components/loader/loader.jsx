import React from "react";
import CircularProgress from '@material-ui/core/CircularProgress';
import Backdrop from '@material-ui/core/Backdrop';
import "../loader/loader.scss"
export default function Loader() {

  return (
    <div className="loader">
   
    <CircularProgress color="secondary"  />
   
    </div>
  )
}