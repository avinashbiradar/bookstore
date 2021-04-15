import React from "react";
import Button from "@material-ui/core/Button";
import Services from "../../Services/adminService";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import SnackbarComponent from "../snackbarComponent/snackbar";
import {
  isStringValid,
  isAuthorValid,
  isDiscountedPriceValid,
  isPriceValid,
  isQuantityValid,
  isDescriptionValid,
} from "../validations/validations";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "../admin/admindashboard.scss";
const services = new Services();

const useStyles = makeStyles((theme) => ({
  input: {
    color: "#A03037",
    inputField: {
      margin: "5px 0 5px 0",
      width: "100%",
    },
  },
  placeButton: {
    height: "40px",
    position: "relative",
    width: "110px",
    padding: "0px",
  },
}));

export default function AdminDashboard(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState();
  const [bookName, setBookName] = React.useState("");
  const [author, setAuthor] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [quantity, setQuantity] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [discountPrice, setDiscountPrice] = React.useState("");
  const [snackbaropen, setSnackbaropen] = React.useState(false);
  const [snackbarmsg, setSnackbarmsg] = React.useState("");
  const [bookFlag, setBookFlag] = React.useState(false);
  const [bookError, setBookError] = React.useState("");
  const [authorError, setAuthorError] = React.useState("");
  const [priceError, setPriceError] = React.useState("");
  const [descriptionError, setdescriptionError] = React.useState("");
  const [quantityError, setquantityError] = React.useState("");
  const [discountPriceError, setdiscountPriceError] = React.useState("");
  const counter = useSelector((state) => state);
  console.log("counter", counter.bookDetails);
  //this is bookdata from redux store
  React.useEffect(() => {
    setBookName(
      counter.bookDetails !== null ? counter.bookDetails.bookName : ""
    );
    setAuthor(counter.bookDetails !== null ? counter.bookDetails.author : "");
    setDescription(
      counter.bookDetails !== null ? counter.bookDetails.description : ""
    );
    setQuantity(
      counter.bookDetails !== null ? counter.bookDetails.quantity : ""
    );
    setPrice(counter.bookDetails !== null ? counter.bookDetails.price : "");
    setDiscountPrice(
      counter.bookDetails !== null ? counter.bookDetails.discountPrice : ""
    );
  }, [counter.bookDetails]);

  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
    dispatch({
      type: "Open_Dialog",
      payload: null,
    });
  };

  const handleClose = () => {
    setOpen(false);
    dispatch({
      type: "Close_Dialog",
      payload: null,
    });
  };

 

  const patternCheckBookName = () => {
    let isError = false;

    if (isStringValid(bookName)) {
      setBookError("");
      return false;
    } else {
      setBookError("Bookname is Not Proper Ex:Tenet");
      isError = true;
      return true;
    }
  };
  const patternCheckAuthor = () => {
    let isError = false;
    if (isAuthorValid(author)) {
      setAuthorError("");
      return false;
    } else {
      setAuthorError("Starts with a capital letter Ex:Anne");
      isError = true;
      return true;
    }
  };
  const patternCheckDiscountPrice = () => {
    let isError = false;
    if (isDiscountedPriceValid(discountPrice)) {
      setdiscountPriceError("");
      return false;
    } else {
      setdiscountPriceError(" discounted price should be 2 or 3 digits ");
      isError = true;
      return true;
    }
  };
  const patternCheckPrice = () => {
    let isError = false;
    if (isPriceValid(price)) {
      setPriceError("");
      return false;
    } else {
      setPriceError(" Price should be numeric");
      isError = true;
      return true;
    }
  };
  const patternCheckQuantity = () => {
    let isError = false;
    if (isQuantityValid(quantity)) {
      setquantityError("");
      return false;
    } else {
      setquantityError("Quantity should be numeric between 1 to 10 ");
      isError = true;
      return true;
    }
  };
  const patternCheckDescription = () => {
    let isError = false;
    if (isDescriptionValid(description)) {
      setdescriptionError("");
      return false;
    } else {
      setdescriptionError(
        "Description should be proper and conatains book info."
      );
      isError = true;
      return true;
    }
  };

  const opensnackbar=()=>{
    setSnackbaropen(true);
    setTimeout(() => {
      setSnackbaropen(false)

    }, 6000);
  }

  const addNewBook = () => {
    patternCheckBookName();
    patternCheckAuthor();
    patternCheckDescription();
    patternCheckQuantity();
    patternCheckPrice();
    patternCheckDiscountPrice();

    let Details = {
      bookName: bookName,
      author: author,
      description: description,
      quantity: quantity,
      price: price,
      discountPrice: discountPrice,
    };
    
    services
      .addNewBookToSystem(Details)
      .then((data) => {
        console.log(Details);
        console.log(data);
        console.log("Successfully added book " + data);
        opensnackbar()
        setSnackbarmsg("Book Added Successfully");
        console.log(
          "Login successful" + JSON.stringify(data.data.result.accessToken)
        );
        localStorage.setItem("StoreToken", data.data.result.accessToken);
      })
      .catch((err) => {
        console.log("Error while adding the book" + err);
        opensnackbar()
        setSnackbarmsg("Error");
      });
  };

  const UpdateBook = () => {
    //  e.stopPropagation();
    console.log("ID", counter.bookDetails._id);

    let Details = {
      bookName: bookName,
      author: author,
      description: description,
      quantity: quantity,
      price: price,
      discountPrice: discountPrice,
    };
    console.log(" book details ", Details);
    services
      .UpdateBookInfo(Details, counter.bookDetails._id)
      .then((data) => {
        console.log("Successfully updated book " + data);
        opensnackbar()
        setSnackbarmsg("Book updated Successfully");
      })
      .catch((err) => {
        console.log("Error while updating the book " + err);
        opensnackbar()
        setSnackbarmsg("Error");
      });
  };

  return (
    <div>
      <div className="addbutton">
        <div className="addbuttonone">
          <Button
            variant="contained"
            color="primary"
            className={classes.placeButton}
            onClick={handleClickOpen}
          >
            Add Book
          </Button>
        </div>
       
        <Dialog
          open={counter.dialog}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
       
          <DialogTitle id="form-dialog-title">
            {counter.bookDetails ? (
              <h3> update book to the Bookstore </h3>
            ) : (
              <h3>Add a new book to the Bookstore</h3>
            )}
          </DialogTitle>
          <DialogContent>
            <div className="inputs">
              <DialogContentText>
                <div className={classes.inputField}>
                <div>
                  <TextField
                  id="outlined-bookname-input"
                    fullWidth
                    label="bookName"
                    value={bookName}
                    onChange={(e) => setBookName(e.target.value)}
                    error={bookError}
                    helperText={bookError}
                  />
                </div>
                <div>
                  <TextField
                  id="outlined-author-input"
                    fullWidth
                    label="author"
                    value={author}
                    error={authorError}
                    helperText={authorError}
                    onChange={(e) => setAuthor(e.target.value)}
                  />
                </div>
                <div>
                  <TextField
                  id="outlined-description-input"
                    fullWidth
                    label="description"
                    value={description}
                    error={descriptionError}
                    helperText={descriptionError}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <div>
                  <TextField
                  id="outlined-quantity-input"
                    fullWidth
                    label="quantity"
                    value={quantity}
                    error={quantityError}
                    helperText={quantityError}
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                </div>
                <div>
                  <TextField
                  id="outlined-price-input"
                    fullWidth
                    label="price"
                    value={price}
                    error={priceError}
                    helperText={priceError}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
                <div>
                  <TextField
                    id="outlined-discount-input"
                    fullWidth
                    label="discountPrice"
                    value={discountPrice}
                    error={discountPriceError}
                    helperText={discountPriceError}
                    onChange={(e) => setDiscountPrice(e.target.value)}
                  />
                </div>
                </div>
              </DialogContentText>
            </div>
          </DialogContent>
         
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            {counter.bookDetails ? (
              <Button onClick={UpdateBook} color="primary">
                save changes
              </Button>
            ) : (
              <Button onClick={addNewBook} color="primary">
                Add Book
              </Button>
            )}
          </DialogActions>
        </Dialog>
      </div>
      <SnackbarComponent
        // autoHideDuration={3000}
        open={snackbaropen}
        message={snackbarmsg}
      />
    </div>
  );
}
