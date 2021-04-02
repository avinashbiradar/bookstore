import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import CssBaseline from "@material-ui/core/CssBaseline";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import SearchIcon from "@material-ui/icons/SearchOutlined";
import IconButton from "@material-ui/core/IconButton";
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
    width: "50%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  rightOptions: {
    display: "flex",
    alignItems: "center",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#ffff",
    display: "flex",
    justifyContent: "flex-start",
    color: "gray",
    height: "40px",
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "70%",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
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
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    color: "gray",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  buttonSearch: {
    display: "none",
    [theme.breakpoints.down("xs")]: {
      display: "block",
      marginRight: "20px",
    },
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },

  cartButton: {
    fontSize: "14px",
    color: "white",
  },
  profileButton: {
    fontSize: "35px",
    color: "white",
  },
  SearchMenu: {
    width: "500px",
    height: "200px",
    top: "20%",
  },
}));

export default function Appbar(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorE2, setAnchorE2] = React.useState(null);

  const open = Boolean(anchorEl);
  const openAdmin = Boolean(anchorE2);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClickAdmin = (event) => {
    setAnchorE2(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCloseAdmin = () => {
    setAnchorE2(null);
  };

  const HandleLogout = () => {
    localStorage.clear();
    props.nextPath("../login");
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
                onClick={(e) => props.nextPath(e, "../dashboard")}
              />
              <Typography
                className={classes.titleName}
                variant="h6"
                onClick={(e) => props.nextPath(e, "../dashboard")}
              >
                Bookstore
              </Typography>
            </div>
            {props.user ? (
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  search={props.search}
                  // onClick={SearchBooks}
                  onChange={(e) => props.issearch(e.target.value)}
                  placeholder="Search…"
                  classes={{ input: classes.inputInput }}
                />
              </div>
            ) : (
              ""
            )}
          </div>
          {props.user ? (
            <div className={classes.rightOptions}>
              <SearchIcon className={classes.buttonSearch} />
              <PermIdentityIcon
                className={classes.profileButton}
                aria-controls="fade-menu"
                aria-haspopup="true"
                onClick={handleClick}
              ></PermIdentityIcon>
              <Menu
                id="fade-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
              >
                <MenuItem>Hey Avinash!!!</MenuItem>

                <MenuItem
                  onClick={(e) => props.nextPath(e, "../dashboard/wishlist")}
                >
                  {" "}
                  WishList{" "}
                </MenuItem>
                <MenuItem onClick={(e) => props.nextPath(e, "../loginadmin")}>
                  {" "}
                  Admin Login{" "}
                </MenuItem>
                <MenuItem onClick={HandleLogout}>Logout</MenuItem>
              </Menu>

              <IconButton
                className={classes.cartButton}
                onClick={(e) => props.nextPath(e, "../dashboard/cart")}
              >
                <StyledBadge
                  badgeContent={props.totalCartItem}
                  className={classes.badge}
                >
                  <ShoppingCartOutlinedIcon />
                </StyledBadge>
              </IconButton>
            </div>
          ) : (
            <div className={classes.rightOptions}>
              <SearchIcon className={classes.buttonSearch} />
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
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
