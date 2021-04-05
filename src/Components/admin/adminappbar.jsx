import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import { withStyles } from "@material-ui/core/styles";
import logo from "../assests/education.svg";
import Badge from "@material-ui/core/Badge";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import { Link } from "@material-ui/core";
import { createHashHistory } from "history";

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);

const useStyles = makeStyles((theme) => ({
  AppBar: {
    backgroundColor: "#A03037",
  },
  toolBar: {
    display: "flex",
    justifyContent: "space-around",
  },
  leftOptions: {
    display: "flex",
    width: "90%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  rightOptions: {
    display: "flex",
    alignItems: "center",
  },

  title: {
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("xs")]: {
      justifyContent: "flex-start",
    },
  },
  titleLogo: {
    marginRight: "10px",
  },
  titleName: {
    marginRight: "20px",
    cursor: "pointer",
  },
  profileButton: {
    fontSize: "35px",
    color: "white",
    
  },
}));

export default function Appbar(props) {
  const classes = useStyles();
  const [anchorE2, setAnchorE2] = React.useState(null);

  const openAdmin = Boolean(anchorE2);

  const handleClickAdmin = (event) => {
    setAnchorE2(event.currentTarget);
  };

  const handleCloseAdmin = () => {
    setAnchorE2(null);
  };

  const history = createHashHistory();
  const HandleLogoutAdmin = () => {
    localStorage.clear();
    history.go("/loginadmin");
  };

  console.log("props", props.search);
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar className={classes.AppBar}>
        <Toolbar className={classes.toolBar}>
          <div className={classes.leftOptions}>
            <div className={classes.title}>
              <img
                className={classes.titleLogo}
                src={logo}
              />
              <Typography
                className={classes.titleName}
                variant="h6"
              >
                Bookstore
              </Typography>
            </div>
          </div>
            <div className={classes.rightOptions}>
              <PermIdentityIcon
                className={classes.profileButton}
                aria-controls="fade-menu"
                aria-haspopup="true"
                onClick={handleClickAdmin}
              ></PermIdentityIcon>
              <Menu
                id="fade-menu"
                anchorEl={anchorE2}
                keepMounted
                open={openAdmin}
                onClose={handleCloseAdmin}
                TransitionComponent={Fade}
              >
                <MenuItem>Hey Admin!!!</MenuItem>
                <MenuItem onClick={HandleLogoutAdmin}>Logout</MenuItem>
              </Menu>
            </div>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
