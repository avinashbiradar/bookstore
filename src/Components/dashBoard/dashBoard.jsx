import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "../AppBar/AppBar";
import Footer from '../Footer/footer';
import Books from "../displayBooks/displayBooks";
import Cart from "../cart/cart";
import Services from "../../Services/productServices";
import { Switch, Route } from "react-router-dom";
import ProtectedRoutes from "../../protectedRoutes.js";
import Typography from "@material-ui/core/Typography";
import PlacedOrder from "../orderPlaced/orderPlaced";
import Wishlist from "../wishlist/wishlist"
import Loader from "../loader/loader"
const services = new Services();
const useStyles = makeStyles((theme) => ({
  dashboardMain: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
  },
  AppbarAdmin:{
  },

}));

export default function Dashboard(props) {
  const classes = useStyles();
  const [ setShow] = React.useState(false);
  const [cartBooks, setCartBooks] = React.useState([]);
  const [orderPlaced, setOrderPlaced] = React.useState([]);
  const [isuser , setisuser] = React.useState(true);
  const [search , issearch]=React.useState(" ");
  const [searchClicked, setSearchClicked] = React.useState(false);
  const [books , setBooks] =React.useState("");
  const[searchBook , setsearchBook]=React.useState(null)
  const [loading , setLoading]=React.useState(false)
  React.useEffect(() => {
    allCartItem();
  }, []); 

  const nextPath = (e, path) => {
      // e.stopPropagation();
    props.history.push(path);
  };

  const allCartItem = () => {
    services
      .getCartItem()
      .then((data) => {
        console.log("get cart items working ")
        console.log(data.data.result);
        const dataArray = data.data.result;
        const datashow = [];
        dataArray.map((data) => {
          if (data.product_id !== null) {
            datashow.push(data);
          }
        });
        console.log(datashow);
        setCartBooks(datashow);
        setLoading(true)
      })
      .catch((err) => {
        console.log(err);
        setLoading(true)
      });
  };
 
  const searchBookByName=(searchdata)=>{
    const bookSearchArray=[]
        issearch(searchdata)
        books.map((data) =>{
          if(data.bookName.includes(searchdata)){
          console.log("recieves bookName" , data.bookName)
          bookSearchArray.push(data)
        }
        })
        setsearchBook(bookSearchArray)
        console.log("Map",bookSearchArray)
  }
  

  return (

    <div className={classes.dashboardMain}>
    <div className={classes.AppbarAdmin}>
    <AppBar
     totalCartItem={cartBooks.length}
     setSearchClicked={setSearchClicked}
      nextPath={nextPath}
      setShow={setShow}
      user={isuser}
      issearch={searchBookByName}
      search={search}
      searchedArray={searchBook}

    />
    </div>
  
      <Route path="/dashboard" exact>
        <Books  search={search} searchedArray={searchBook}  cartBooks={cartBooks} allCartItem={allCartItem}  setBooks={setBooks} />
      </Route>
       <ProtectedRoutes path="/dashboard/cart" exact>
       {loading?
        <Cart
          allCartItem={allCartItem}
          nextPath={nextPath}
          cartBooks={cartBooks}
          setOrderPlaced={setOrderPlaced}
         
        />
        :
      <Loader/>}
      </ProtectedRoutes>
        <ProtectedRoutes path="/dashboard/orderPlaced" exact>
          <PlacedOrder orderPlaced={orderPlaced} nextPath={nextPath} />
        </ProtectedRoutes>

        <ProtectedRoutes path="/dashboard/wishlist" exact>
          <Wishlist  nextPath={nextPath} />
        </ProtectedRoutes>


    <Footer/>
  </div>
  );
}


