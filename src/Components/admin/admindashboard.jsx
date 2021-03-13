import React from "react";
import Button from "@material-ui/core/Button";
import Services from "../../Services/adminService";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import "../admin/admindashboard.scss";
import AppBar from "../AppBar/AppBar";
const services = new Services();

export default function AdminDashboard(props) {
  const [open, setOpen] = React.useState(false);
  const [bookName, setBookName] = React.useState("");
  const [author, setAuthor] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [quantity, setQuantity] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [discountPrice, setDiscountPrice] = React.useState("");
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const addNewBook = () => {
    //  e.stopPropagation();
    let Details = {
      "bookName": bookName,
      "author": author,
      "description": description,
      "quantity": quantity,
      "price": price,
      "discountPrice": discountPrice,
    };
    
    services
      .addNewBookToSystem(Details)
      .then((data) => {
        console.log(Details)
        console.log(data);
        console.log("Successfully added book " + data);
        console.log(
          "Login successful" + JSON.stringify(data.data.result.accessToken)
        );
        localStorage.setItem("StoreToken", data.data.result.accessToken);
      })
      .catch((err) => {
        console.log("Error while adding the book" + err);
      });
  };

  return (
    <div>
      <AppBar />
      <div className="addbutton">
        <Button variant="contained" color="primary" onClick={handleClickOpen}>
          Add Book
        </Button>

        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            <h3>Add a new book to the Bookstore</h3>
          </DialogTitle>
          <DialogContent>
            <div className="inputs">
              <DialogContentText>
                <div>
                  {" "}
                  <TextField
                    id="standard-basic"
                    fullWidth
                    label="bookName"
                    value={bookName}
                    onChange={(e) => setBookName(e.target.value)}
                  />
                </div>
                <div>
                  <TextField
                    id="standard-basic"
                    fullWidth
                    label="author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                  />
                </div>
                <div>
                  <TextField
                    id="standard-basic"
                    fullWidth
                    label="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <div>
                  {" "}
                  <TextField 
                  id="standard-basic"
                   fullWidth label="quantity"
                   value={quantity}
                   onChange={(e) => setQuantity(e.target.value)}
                   />
                </div>
                <div>
                  {" "}
                  <TextField
                   id="standard-basic" 
                   fullWidth 
                   label="price"
                   value={price}
                   onChange={(e) => setPrice(e.target.value)}
                   />
                </div>
                <div>
                  {" "}
                  <TextField
                    id="standard-basic"
                    fullWidth
                    label="discountPrice"
                    value={discountPrice}
                   onChange={(e) => setDiscountPrice(e.target.value)}
                  />
                </div>
              </DialogContentText>
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={addNewBook} color="primary">
              Add Book
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}
