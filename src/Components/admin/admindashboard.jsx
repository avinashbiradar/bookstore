import React from 'react';
import Button from '@material-ui/core/Button';
import Services from "../../Services/userServices";
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import "../admin/admindashboard.scss"
import AppBar from "../AppBar/AppBar"
const services = new Services();




export default function AdminDashboard(props) {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    return (
        <div>
        <AppBar/>
        <div className="addbutton" >
        <Button variant="contained" color="secondary" onClick={handleClickOpen}>
        Add Book
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add a new book to the Bookstore</DialogTitle>
        <DialogContent>
        <div className="inputs">
          <DialogContentText>
         
          <div> <TextField id="standard-basic" fullWidth label="bookName" /></div>
          <div> <TextField id="standard-basic" fullWidth label="author" /></div>
          <div> <TextField id="standard-basic" fullWidth label="description" /></div>
          <div> <TextField id="standard-basic" fullWidth label="quantity" /></div>
          <div> <TextField id="standard-basic" fullWidth  label="price" /></div>
          <div> <TextField id="standard-basic" fullWidth label="discountPrice" /></div>
         
          </DialogContentText>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Add Book
          </Button>
        </DialogActions>
      </Dialog>
      </div>
      </div>
    )
}