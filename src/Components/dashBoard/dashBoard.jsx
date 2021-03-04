import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "../AppBar/AppBar";
import Footer from '../Footer/footer';
const useStyles = makeStyles((theme) => ({
  dashboardMain: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
  },

}));

export default function Dashboard(props) {
  const classes = useStyles();
  return (
    <div className={classes.dashboardMain}>
      <AppBar/>
     <Footer />
    </div>
  );
}