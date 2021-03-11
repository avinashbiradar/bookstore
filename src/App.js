
import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Login from "./Components/LogIn/LogIn"
import Dashboard from "./Components/dashBoard/dashBoard"
import Cart from "./Components/cart/cart"
function App() {
  return (
    <div className="App">
    <BrowserRouter >
    <Switch>
    <Route path="/dashboard" component={Dashboard} ></Route>
     <Route path="/Login" component={Login} exact/>
     <Route path="/cart" component={Cart} exact/>
   </Switch>
   </BrowserRouter >
  </div>
  );
}

export default App;
