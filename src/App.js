
import './App.css';
import {BrowserRouter,Switch} from 'react-router-dom'
import Login from "./Components/LogIn/LogIn"
import Dashboard from "./Components/dashBoard/dashBoard"
import Cart from "./Components/cart/cart"
import AuthRoute from './Components/authroute/authroute';
import PrivateRoute from './Components/privateroute/privateroute';
function App() {
  return (
    <div className="App">
    <BrowserRouter >
    <Switch>
     <PrivateRoute path="/dashboard" component={Dashboard} />
     <AuthRoute  path="/Login" component={Login} exact/>
     <PrivateRoute path="/cart" component={Cart} exact/>
   </Switch>
   </BrowserRouter >
  </div>
  );
}

export default App;
