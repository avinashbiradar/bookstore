import React from "react";
import Button from "@material-ui/core/Button";
import Services from "../../Services/adminService";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "../admin/admindashboard.scss";

const services = new Services();

export default function AdminDashboard(props) {
  const [open, setOpen] = React.useState();
  const [bookName, setBookName] = React.useState("");
  const [author, setAuthor] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [quantity, setQuantity] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [discountPrice, setDiscountPrice] = React.useState("");
  
  
  const counter = useSelector(state => state);
  console.log("counter",counter.bookDetails)
 

//this is bookdata from redux store 
  React.useEffect(() => {
   setBookName(counter.bookDetails!==null?counter.bookDetails.bookName:"")
   setAuthor(counter.bookDetails!==null?counter.bookDetails.author:"")
   setDescription(counter.bookDetails!==null?counter.bookDetails.description:"")
   setQuantity(counter.bookDetails!==null?counter.bookDetails.quantity:"" )
   setPrice(counter.bookDetails!==null?counter.bookDetails.price:"")
   setDiscountPrice(counter.bookDetails!==null?counter.bookDetails.discountPrice:"")
  },[counter.bookDetails]);
  
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
    dispatch({
            type: "Open_Dialog",
            payload:null
          })
  };

  const handleClose = () => {
    setOpen(false);
    dispatch({
            type: "Close_Dialog",
            payload:null
          })
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

  const UpdateBook= () => {
    //  e.stopPropagation();
     console.log("ID",counter.bookDetails._id)

    let Details = {
      "bookName": bookName,
      "author": author,
      "description": description,
      "quantity": quantity,
      "price": price,
      "discountPrice": discountPrice,
    };
   console.log(" book details ", Details)
    services.UpdateBookInfo(Details,counter.bookDetails._id)
    .then((data)=> {  
      console.log("Successfully updated book "+data);
    })
    .catch((err) => {
      console.log("Error while updating the book "+err)
    })
  }

  return (
    <div>
      <div className="addbutton">
        <Button variant="contained" color="primary" onClick={handleClickOpen}>
          Add Book
        </Button>

        <Dialog
          open={counter.dialog}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
           {counter.bookDetails?<h3> update book to the Bookstore </h3>:<h3>Add a new book to the Bookstore</h3>}
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
            <Button onClick={handleClose} color="primary" >
              Cancel
            </Button>
            {counter.bookDetails?<Button onClick={UpdateBook} color="primary">save changes</Button>: <Button onClick={addNewBook} color="primary">Add Book</Button> }
          </DialogActions>
        </Dialog>
      </div>
      
    </div>
  );
}
