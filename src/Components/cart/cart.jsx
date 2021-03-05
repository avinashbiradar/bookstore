import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import bookImg from "../assests/Image11.png";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import "../cart/cart.scss";

const useStyles = makeStyles((theme) => ({
  bookName: {
    fontSize: "13px",
    fontWeight: "bold",
  },
  bookAuthor: {
    fontSize: "12px",
  },
  bookPrize: {
    fontSize: "13px",
    fontWeight: "bold",
  },
  countInput: {
    border: "1px lightgray solid",
    width: "15%",
    height: "30px",
  },
  countButton: {
    height: "5px",
    margin: "5px",
    border: "1px solid lightgray",
    width: "5px",
  },
  placeButton: {
    height: "40px",
    position: "relative",
  },
  inputField: {
    border: "1px solid lightgray",
    borderRadius: "5px",
    padding: "5px",
  },
  inputAdderss: {
    border: "1px solid lightgray",
    borderRadius: "5px",
    padding: "5px",
    minHeight: "43px",
  },
  radioGroup: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
}));

export default function Cart(props) {
  const classes = useStyles();
  const CartBooks = () => {
    return (
      <div className="cartItem">
          <div className="cartBookItem">
            <img className="cartBookImage" src={bookImg} alt="" />
            <div className="infoContainer">
              <Typography className={classes.bookName}>
              </Typography>
              <Typography className={classes.bookAuthor}>
              </Typography>
              <Typography className={classes.bookPrize}>
                
              </Typography>
              <div className="countItem">
                <IconButton className={classes.countButton}>-</IconButton>
                <Button>Remove</Button>
                <InputBase
                  className={classes.countInput}
                />
                <IconButton className={classes.countButton}>+</IconButton>
                <Button>add</Button>
              </div>
            </div>
          </div>
      </div>
    );
  };


  return (
    <div className="cartBody">
      <div className="cartContainer">
        My Cart
        <CartBooks />
      <div className="blockButton">
            <Button
              variant="contained"
              color="primary"
              className={classes.placeButton}
            >
              PLACE ORDER
            </Button>
          </div>
      </div>
    
      </div>
  );
}