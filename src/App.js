
import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Login from "./Components/LogIn/LogIn"
import Dashboard from "./Components/dashBoard/dashBoard"
import Cart from "./Components/cart/cart"
import AuthRoute from './Components/authroute/authroute';
import PrivateRoute from './Components/privateroute/privateroute';
import AdminBooks from './Components/admin/getadminbooks'
import AdminLogin from './Components/admin/adminlogin'
import AdminSignUp from "./Components/admin/adminRegister"
import wishlist from "./Components/wishlist/wishlist"
function App() {
  return (
    <div className="App">
    <BrowserRouter >
    <Switch>
     <PrivateRoute path="/dashboard" component={Dashboard} />
     <AuthRoute  path="/Login" component={Login} exact/>
     <PrivateRoute path="/cart" component={Cart} exact/>
     <Route path="/loginadmin" component={AdminLogin} exact/>
     <Route path="/adminbooks" component={AdminBooks} exact/>
     <Route path="/adminsign" component={AdminSignUp} exact/>
     <Route path="/wishlist" component={wishlist} exact/>
   </Switch>
   </BrowserRouter >
  </div>
  );
}

export default App;
