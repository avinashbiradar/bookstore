import React ,{Suspense,lazy} from "react";
import { makeStyles } from "@material-ui/core/styles";
import bookImg from "../assests/Image11.png";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Pagination from "../Pagination/Pagination";
import Services from "../../Services/productServices";
import "./displayBooks.scss";
const ImageLoading = lazy(()=>import('../assests/Image11.png'))
const services = new Services();



const useStyles = makeStyles((theme) => ({
  bookName: {
    fontSize: "13px",
    fontWeight: "bold",
  },
  bookAuthor: {
    fontSize: "12px",
  },
  bookQuantity: {
    fontSize: "12px",
  },
  bookPrize: {
    fontSize: "13px",
    fontWeight: "bold",
  },
  addToBagButton: {
    padding: "3px 4px 3px 4px",
    margin: "5px",
    width: "85px",
    fontSize: "11px",
    backgroundColor: "#A03037",
    color: "#ffff",
    borderRadius: "2px",
  },
  addedBagButton: {
    backgroundColor: "#1976D2",
    width: "170px",
    margin: "5px",
    color: "#ffff",
    borderRadius: "2px",
    fontSize: "11px",
  },
  wishListButton: {
    padding: "3px 4px 3px 4px",
    margin: "5px",
    width: "80px",
    fontSize: "13px",
    borderRadius: "2px",
    fontWeight: "bold",
  },

  optionSelect: {
    padding: "5px 5px",
  },
}));

export default function DisplayNotes(props) {
  const classes = useStyles();
  const [books, setBooks] = React.useState([]);
  const [sort, setSort] = React.useState({ type: "" });
  const [data, setData] = React.useState(0);
  const [postsPerPage] = React.useState(4);
  const [currentPage, setCurrentPage] = React.useState(1);
 

  React.useEffect(() => {
    getAllBooks();
  }, []);

  const getAllBooks = () => {
    services
      .getBooks()
      .then((data) => {
        console.log("in the get all books ",data)
        const dataArray = data.data.result;
        const datashow = [];
        dataArray.map((data) => {
          if (data.product_id!== null) {
            datashow.push(data);
          }
        });
        console.log(datashow);
        setBooks(datashow);
        props.setBooks(data.data.result)
        setData(data.data.result);
        books.map((data) => (data.isCart = false));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (event) => {
    const name = event.target.name;
    setSort({
      ...sort,
      [name]: event.target.value,
    });
    console.log(sort.type);
    switch (sort.type) {
      case "0":
        setBooks(data);
        break;
      case "2":
        setBooks(data);
        setBooks(books.sort((a, b) => (a.price > b.price ? 1 : -1)));
        break;
      case "1":
        setBooks(data);
        setBooks(books.sort((a, b) => (a.price > b.price ? -1 : 1)));
        break;
      case "3":
        setBooks(data);
        setBooks(books.reverse());
        break;
      default:
          break;
    }
  };

  const addedToBag = (e, data) => {
    e.stopPropagation();
    const id = data._id;
    data.isCart = true;
    services
      .addToCart(id)
      .then((data) => {
        console.log("add to cart function working ");
        console.log(data);
         getAllBooks();
        props.allCartItem();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addedToWishList = (e, data) => {
    e.stopPropagation();
    console.log(data)
    const id = data._id;
    data.isCart = true;
    services
      .addToWishList(id)
      .then((data) => {
        console.log("add to wishlist function working ");
        console.log(data);
         getAllBooks();
        props.allCartItem();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };  

  const ImageLoad =()=>{
    return(
      <img className="bookImage" src={bookImg} alt="" />
    
    )
  }

  const indexOfLastBook = currentPage * postsPerPage;
  const indexOfFirstBook = indexOfLastBook - postsPerPage;
  const currentBooks = props.searchedArray!==null?props.searchedArray:books.slice(indexOfFirstBook, indexOfLastBook);
  return (
    <div className="displayBook">
      <span className="topContent">
        <div >
          Books <font className="bookSize"> ({books.length} items) </font>{" "}
        </div>
        <div>
          <FormControl variant="outlined" className={classes.formControl}>
            <Select
              className={classes.optionSelect}
              value={sort.type}
              onChange={handleChange}
              native 
              inputProps={{
                name: "type",
              }}
            >
              <option value={0}>Sort by relevance</option>
              <option value={1}>Price: low to high</option>
              <option value={2}>Price: high to low</option>
              <option value={3}>Newest Arrival</option>
            </Select>
          </FormControl>
        </div>
      </span>

      <div className="allBooks">
        {currentBooks.map((data) => (
          <div className="bookContainer">
            {props.cartBooks.map((cart) => {
              if (cart.product_id._id=== data._id) {
                 data.isCart = true;
              }
            })}
            <Suspense fallback={<div>loading....</div>}>
            <div className="imageContainer">
            <img className="bookImage" src={bookImg} alt="" />
            </div>
            </Suspense>
            <div className="infoContainer">
              <Typography className={classes.bookName}>
                {data.bookName}
              </Typography>
              <Typography className={classes.bookAuthor}>
                {data.author}
              </Typography>
              <Typography className={classes.bookQuantity}>
                {data.quantity}
              </Typography>
              <Typography className={classes.bookPrize}>
                Rs. {data.price}
              </Typography>
            </div>

            {data.isCart? (
              <Button variant="contained" className={classes.addedBagButton}>
                Added To Bag
              </Button>
            ) : (
              <div className="buttonContainer">
                <Button
                  variant="contained"
                  onClick={(e) => addedToBag(e, data)}
                  className={classes.addToBagButton}
                >
                  Add To Bag
                </Button>
                <Button variant="outlined" className={classes.wishListButton} onClick={(e) => addedToWishList(e, data)}>
                  WishList
                </Button>
            </div>
            )}
          </div>
        ))}
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={books.length}
          paginate={paginate}
        ></Pagination>
      </div>
    </div>
  );
}
