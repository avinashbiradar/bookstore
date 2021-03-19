import React from "react";
import bookImg from "../assests/Image11.png";
// import Services from "../../Services/BookService";
// const services = new Services();
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import AppBar from "../AppBar/AppBar";
import Services from "../../Services/productServices";
import Button from "@material-ui/core/Button";
import "../wishlist/wishlist.scss";
const services = new Services();
const useStyles = makeStyles((theme) => ({
  bookName: {
    fontSize: "20px",
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
export default function CartBooks() {
    const [books, setBooks] = React.useState([]);
    const [open, setOpen] = React.useState(false);
    const [data, setData] = React.useState(0);
    const [postsPerPage] = React.useState(11);
    const [currentPage, setCurrentPage] = React.useState(1);
     const classes = useStyles();
     React.useEffect(() => {
        getWishList();
      },[]);


  const getWishList= () => { 
    services
      .getWishListBooks()
      .then((data) => {
        console.log("get wishlist ",data.data.result)
        setBooks(data.data.result);
        setData(data.data.result);
        books.map((data) => (data.isCart = false));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const indexOfLastBook = currentPage * postsPerPage;
  const indexOfFirstBook = indexOfLastBook - postsPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  return (
    <div className="wishBody">
      <AppBar />
      <div>
      WishList Books <font className="bookSize"> ({books.length} items) </font>{" "}
      </div>
      <div className="wishContainer">
      {currentBooks.map((data) => (
        <div className="wishItem">
      
          <div className="wishBookItem">
            <img className="wishBookImage" src={bookImg} alt="" />
            <div className="wishinfoContainer">
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
              Rs.{data.product_id.price}
              </Typography>
            </div>
            <div className="deleteicon"> 
            <DeleteIcon />
            </div>
          </div>
        </div>
        ))}
      </div>
     
    </div>
  );
}

// //  {this.state.wishlistBooks.map(book => (