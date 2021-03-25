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

  React.useEffect(() => {
    allCartItem();
  }, []); 

  const nextPath = (e, path) => {
    //  e.stopPropagation();
    props.history.push(path);
  };

  const allCartItem = () => {
    services
      .getCartItem()
      .then((data) => {
        console.log("get cart items working ")
        console.log(data.data.result);
        setCartBooks(data.data.result);

      })
      .catch((err) => {
        console.log(err);
      });
  };

//   const SearchBooks= () => {
//     return(
//        <div className='BookSearchMenu'>
//      {  props.books.filter((data)=> data.bookName.includes(search)).map((data) => (
//           <div className="cartBookItem">
//             <div className="infoContainer">
//               <Typography className={classes.bookName}>
//                 {data.product_id.bookName}
//               </Typography>
//               <Typography className={classes.bookAuthor}>
//                 {data.product_id.author}
//               </Typography>
//               <Typography className={classes.bookPrize}>
//               {data.product_id.quantity}
//             </Typography>
//             </div>
//           </div>
//         ))}
//        </div>
//     )
//  }

  return (
    <div className={classes.dashboardMain}>
    <AppBar
     totalCartItem={cartBooks.length}
     setSearchClicked={setSearchClicked}
      nextPath={nextPath}
      setShow={setShow}
      user={isuser}
      issearch={issearch}
      search={search}

    />
    <Switch>
      <Route path="/dashboard" exact>
        <Books cartBooks={cartBooks} allCartItem={allCartItem}  setBooks={setBooks} />
      </Route>
      <ProtectedRoutes path="/dashboard/cart" exact>
        <Cart
          allCartItem={allCartItem}
          nextPath={nextPath}
          cartBooks={cartBooks}
          setOrderPlaced={setOrderPlaced}
         
        />
      </ProtectedRoutes>
        <ProtectedRoutes path="/dashboard/orderPlaced" exact>
          <PlacedOrder orderPlaced={orderPlaced} nextPath={nextPath} />
        </ProtectedRoutes>
    </Switch>
    <Footer/>
  </div>
  );
}


// {
//   books.filter((data)=> data.bookName.includes(search)).map((data) => (
//     <div className="cartBookItem">
//       <div className="infoContainer">
//         <Typography className={classes.bookName}>
//           {data.product_id.bookName}
//         </Typography>
//         <Typography className={classes.bookAuthor}>
//           {data.product_id.author}
//         </Typography>
//         <Typography className={classes.bookPrize}>
//         {data.product_id.quantity}
//       </Typography>
//       </div>
//     </div>
//   ))}