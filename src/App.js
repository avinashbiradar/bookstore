
import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Login from "./Components/LogIn/LogIn"
import SignUp from "./Components/SignUp/signUp"
import Dashboard from "./Components/dashBoard/dashBoard"
import Footer from "../src/Components/Footer/footer"
function App() {
  return (
    <div className="App">
    <BrowserRouter >
    <Switch>
    <Route path="/dashboard" component={Dashboard} ></Route>
    <Route path="/SignUp" component={SignUp} exact/>
     <Route path="/Login" component={Login} exact/>
     <Route path="/footer" component={Footer} exact/>
   </Switch>
   </BrowserRouter >
  </div>
  );
}

export default App;
