
import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Login from "./Components/LogIn/LogIn"
import Dashboard from "./Components/dashBoard/dashBoard"
import Cart from "./Components/cart/cart"
import AuthRoute from './Components/authroute/authroute';
import AuthAdminRoute from './Components/authroute/authadminroute';
import PrivateRoute from './Components/privateroute/privateroute';
import PrivateAdminRoute from './Components/privateroute/privateadminroute';
import AdminBooks from './Components/admin/getadminbooks'
import AdminLogin from './Components/admin/adminlogin'
import AdminSignUp from "./Components/admin/adminRegister"
import wishlist from "./Components/wishlist/wishlist"
import NotFound from "./Components/ErrorPage/error"
function App() {

  return (
    <div className="App">
    <BrowserRouter >
    <Switch>
     <PrivateRoute path="/dashboard" component={Dashboard} />
     <AuthRoute  path="/Login" component={Login} exact/>
     <PrivateRoute path="/wishlist" component={wishlist} exact/>
     <PrivateRoute path="/cart" component={Cart} exact/>
     <AuthAdminRoute path="/loginadmin" component={AdminLogin} exact/>
     <PrivateAdminRoute path="/adminbooks" component={AdminBooks} exact/>
     <AuthAdminRoute path="/adminsignup" component={AdminSignUp} exact/>
     <Route component={NotFound} />
   </Switch>
   </BrowserRouter >
  </div>
  );
}

export default App;
