import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Services from "../../Services/productServices";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import bookImg from "../assests/Image11.png";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";

import "./cart.scss";

const services = new Services();

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
    width:"110px",
    padding:"0px"
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
      minHeight: "80px",
      minWidth: "200px",
    
  },
  radioGroup: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
}));

export default function Cart(props) {
  const classes = useStyles();
  const [detailForm, setDetailForm] = React.useState(false);
  const [summaryField, setSummaryField] = React.useState(false);
  const [value, setValue] = React.useState("Home");
  const [name, setName] = React.useState();
  const [nameFlag, setNameFlag] = React.useState(false);
  const [nameError, setNameError] = React.useState("");
  const [mobile, setMobile] = React.useState();
  const [mobileFlag, setMobileFlag] = React.useState(false);
  const [mobileError, setMobileError] = React.useState("");
  const [address, setAddress] = React.useState();
  const [addressFlag, setAddressFlag] = React.useState(false);
  const [addressError, setAddressError] = React.useState("");
  const [city, setCity] = React.useState();
  const [cityFlag, setCityFlag] = React.useState(false);
  const [cityError, setCityError] = React.useState("");
  const [state, setState] = React.useState();
  const [stateFlag, setStateFlag] = React.useState(false);
  const [stateError, setStateError] = React.useState("");
  const [count, setCount] = useState(1);
  
  const makeInitial = () => {
    setNameFlag(false);
    setNameError("");
    setAddressFlag(false);
    setAddressError("");
    setMobileFlag(false);
    setMobileError("");
    setCityFlag(false);
    setCityError("");
    setStateFlag(false);
    setStateError("");
  };

  const patternCheck = () => {
    makeInitial();
    const namePattern = /^[A-Z]{1}[a-z ]{3,}$/;
    const mobilePattern = /^[6-9]{1}[0-9]{9}$/;
    const addressPattern = /^[A-Za-z ]{5,}$/;
    const cityPattern = /^[A-Za-z ]{3,}$/;
    const statePattern = /^[A-Za-z ]{3,}$/;

    let isError = false;

    if (!namePattern.test(name)) {
      setNameFlag(true);
      setNameError("Name is Not Proper");
      isError = true;
    }
    if (!mobilePattern.test(mobile)) {
      setMobileFlag(true);
      setMobileError("Mobile Number is Not Proper");
      isError = true;
    }
    if (!addressPattern.test(address) || address === undefined) {
      setAddressFlag(true);
      setAddressError("Address is Not Proper");
      isError = true;
    }
    if (!cityPattern.test(city) || city === undefined) {
      setCityFlag(true);
      setCityError("Invalid City");
      isError = true;
    }
    if (!statePattern.test(state) || state === undefined) {
      setStateFlag(true);
      setStateError("Invalid state");
      isError = true;
    }
    console.log(
      "name " +
        name +
        "   mobile " +
        mobile +
        "   address " +
        address +
        "   state " +
        state +
        "   city " +
        city
    );
    return isError;
  };


  const Continue = () => {
    if (patternCheck()) {
      console.log("Error Occured");
    } else {
      console.log("Success");
      setSummaryField(true);
    }
  };

  const removeItem = (e,data) => {
     e.stopPropagation();
    services.deleteCartItem(data._id)
    .then((data)=> {
      console.log("Successfully deleted"+data);
      props.allCartItem();
    })
    .catch((err) => {
      console.log("Error while removing"+err)
    })
  }

  const AddCartQuantity = ( data) => {
    //  e.stopPropagation();
    console.log("ID", data._id)
    console.log("quantity", count)

    let quantityToBuy= {
      "quantityToBuy": count
  }
    services.addQuantity(quantityToBuy,data._id)
    .then((data)=> {  
      console.log(data)
      console.log("Successfully added quantity "+data);
    //  props.allCartItem();
    })
    .catch((err) => {
      console.log("Error while adding the quantity"+err)
    })
  }


  const handleChange = (event) => {
    setValue(event.target.value);
  };

  // Create handleIncrement event handler
  const handleIncrement = (data) => {
    setCount(prevCount => prevCount + 1);
    AddCartQuantity(data)

  };

  //Create handleDecrement event handler
  const handleDecrement = (data) => {
    setCount(prevCount => prevCount - 1);
    AddCartQuantity(data)
  };



  const CartBooks = () => {
    return (
      <div className="cartItem">
        {props.cartBooks.map((data) => (
          <div className="cartBookItem">
            <img className="cartBookImage" src={bookImg} alt="" />
            <div className="infoContainer">
              <Typography className={classes.bookName}>
                {data.product_id.bookName}
              </Typography>
              <Typography className={classes.bookAuthor}>
                {data.product_id.author}
              </Typography>
              <Typography className={classes.bookAuthor}>
                {data.product_id.price}
              </Typography>
              <Typography className={classes.bookPrize}>
              {data.product_id.quantity}
            </Typography>
              <div className="countItem">
                <IconButton onClick={(e)=>{handleDecrement(data)}} className={classes.countButton}>-</IconButton>
                <h4>{count}</h4>
                <IconButton onClick={(e)=>{handleIncrement(data)}} className={classes.countButton}>+</IconButton>
                <Button onClick={(e) => {removeItem(e,data)}}>Remove</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const CheckoutItem = () => {
    return (
      <div className="cartItem">
        {props.cartBooks.map((data) => (
          <div className="cartBookItem">
            <img className="cartBookImage" src={bookImg} alt="" />
            <div className="infoContainer">
              <Typography className={classes.bookName}>
                {data.product_id.bookName}
              </Typography>
              <Typography className={classes.bookAuthor}>
                {data.product_id.author}
              </Typography>
              <Typography className={classes.bookPrize}>
                Rs. {data.product_id.price * count}
              </Typography>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const checkout = (e) => {
    let order = [];
    props.cartBooks.map((data) => {
      let same = {
        product_id: data.product_id._id,
        product_name: data.product_id.bookName,
        product_quantity: data.quantityToBuy,
        product_price: data.product_id.price,
      };
      order.push(same);
    });
    let orderData = {
      orders: order,
    };
    console.log(orderData);
    services
      .addOrder(orderData)
      .then((data) => {
        console.log("Successfully order Placed" + JSON.stringify(data));
        props.setOrderPlaced(data);
        props.nextPath(e, "../dashboard/orderPlaced");
      })
      .catch((err) => {
        console.log("Error occured while placing order" + err);
      });
      props.cartBooks.map((book) => removeItem(e,book));
  };

  return (
    <div className="cartBody">
      <div className="cartContainer">
        My Cart ({props.cartBooks.length})
        <CartBooks />
        {detailForm ? (
          ""
        ) : (
          <div className="blockButton">
            <Button
              variant="contained"
              color="primary"
              
              className={classes.placeButton}
              onClick={() => setDetailForm(true)}
            >
              PLACE ORDER
            </Button>
          </div>
        )}
      </div>
      <div className="cartContainerone">
        Customer Details
        {detailForm ? (
          <>
            <span className="inlineField">
              <div className="inputField">
                Full Name
                <TextField
                  value={name}
                  variant="outlined"
                  onChange={(e) => setName(e.target.value)}
                  error={nameFlag}
                  helperText={nameError}
                  fullWidth
                  className={classes.input}
                  id="outlined-fullname-input"
                />
              </div>
              <div className="inputField">
                Mobile Number
                <TextField
                  value={mobile}
                  variant="outlined"
                  onChange={(e) => setMobile(e.target.value)}
                  error={mobileFlag}
                  helperText={mobileError}
                  fullWidth
                  className={classes.input}
                  type="number"
                  id="outlined-mobile-input"
                />
              </div>
            </span>
            <span className="inlineField">
              <div className="inputAdderssField">
                Address
                <TextField
                  value={address}
                  variant="outlined"
                  onChange={(e) => setAddress(e.target.value)}
                  error={addressFlag}
                  helperText={addressError}
                  fullWidth
                  multiline
                  className={classes.inputAddress}
                  id="outlined-address-input"
                />
              </div>
            </span>
            <span className="inlineField">
              <div className="inputField">
                City/Town
                <TextField
                  value={city}
                  variant="outlined"
                  onChange={(e) => setCity(e.target.value)}
                  error={cityFlag}
                  helperText={cityError}
                  fullWidth
                  className={classes.input}
                  id="outlined-city-input"
                />
              </div>
              <div className="inputField">
                State
                <TextField
                  value={state}
                  variant="outlined"
                  onChange={(e) => setState(e.target.value)}
                  error={stateFlag}
                  helperText={stateError}
                  fullWidth
                  className={classes.input}
                  id="outlined-state-input"
                />
              </div>
            </span>
            <span className="inlineField">
              <div className="inputField">
                Type
                <FormControl component="fieldset">
                  <RadioGroup
                    aria-label="gender"
                    name="gender1"
                    value={value}
                    onChange={handleChange}
                    className={classes.radioGroup}
                  >
                    <FormControlLabel
                      value="Home"
                      control={<Radio />}
                      label="Home"
                    />
                    <FormControlLabel
                      value="Work"
                      control={<Radio />}
                      label="Work"
                    />
                    <FormControlLabel
                      value="Other"
                      control={<Radio />}
                      label="Other"
                    />
                  </RadioGroup>
                </FormControl>
              </div>
            </span>
            {summaryField ? (
              ""
            ) : (
              <div className="blockButton">
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.placeButton}
                  onClick={Continue}
                >
                  CONTINUE
                </Button>
              </div>
            )}
          </>
        ) : (
          ""
        )}
      </div>

      <div className="cartContainer">
        Order Summary
        {summaryField ? (
          <>
            <CheckoutItem />
            <div className="blockButton">
              <Button
                variant="contained"
                color="primary"
                onClick={checkout}
                className={classes.placeButton}
              >
                CHECKOUT
              </Button>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
 }