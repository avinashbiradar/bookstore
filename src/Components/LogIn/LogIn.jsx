import Snackbar from "@material-ui/core/Snackbar";
import Services from "../../Services/userServices";
import React from "react";
import Button from "react-bootstrap/Button";
import TextField from "@material-ui/core/TextField";
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";


import "../LogIn/login.scss";
const services = new Services();

export default function Login(props) {
  const counter = useSelector(state => state);
  const dispatch = useDispatch();
  const [toggleState, setToggleState] = React.useState(1);
  const [name, setName] = React.useState();
  const [nameFlag, setNameFlag] = React.useState();
  const [nameError, setNameError] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [emailFlag, setEmailFlag] = React.useState(false);
  const [emailError, setEmailError] = React.useState("");
  const [email1, setEmail1] = React.useState("");
  const [emailFlag1, setEmailFlag1] = React.useState(false);
  const [emailError1, setEmailError1] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordFlag, setPasswordFlag] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState("");
  const [password1, setPassword1] = React.useState("");
  const [passwordFlag1, setPasswordFlag1] = React.useState(false);
  const [passwordError1, setPasswordError1] = React.useState("");
  const [mobile, setMobile] = React.useState();
  const [mobileFlag, setMobileFlag] = React.useState(false);
  const [mobileError, setMobileError] = React.useState("");
  const [snackbaropen, setSnackbaropen] = React.useState(false);
  const [snackbarmsg, setSnackbarmsg] = React.useState(""); 
  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
  });

  const snackbarClose = () => {
    setSnackbaropen(false);
  };
  const nextPath = (path) => {
    props.history.push(path);
  };
  const makeInitial = () => {
    setEmailFlag(false);
    setEmailError("");
    setPasswordFlag(false);
    setPasswordError("");
    setNameFlag(false);
    setNameError("");
    setMobileFlag(false);
    setMobileError("");
    
  };
  const makeInitialone = () => {
    setEmailFlag1(false);
    setEmailError1("");
    setPasswordFlag1(false);
    setPasswordError1("");
  }

  const patternCheckone = () => {
    makeInitialone();
    const emailPatternone = /[a-zA-Z0-9._]+[@]{1}[a-zA-Z120-9]*[.]{1}[a-zA-Z]*$/;
    const passwordPatternone = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*$/;
    let isErrorone = false;
    if (!emailPatternone.test(email1)) {
      setEmailFlag1(true);
      setEmailError1("Email is Not Proper");
      isErrorone = true;
    }
    if (!passwordPatternone.test(password1)) {
      setPasswordFlag1(true);
      setPasswordError1("Please Enter Valid Password");
      isErrorone = true;
    }
   
    return isErrorone;
  };
  const patternCheck = () => {
    makeInitial();
    const namePattern = /^[A-Z]{1}[a-z ]{3,}$/;
    const emailPattern = /[a-zA-Z0-9._]+[@]{1}[a-zA-Z120-9]*[.]{1}[a-zA-Z]*$/;
    const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*$/;
    const mobilePattern = /^[6-9]{1}[0-9]{9}$/;
    let isError = false;
    if (!namePattern.test(name)) {
      setNameFlag(true);
      setNameError("Name is Not Proper");
      isError = true;
    }
    if (!emailPattern.test(email)) {
      setEmailFlag(true);
      setEmailError("Email is Not Proper");
      isError = true;
    }
    if (!passwordPattern.test(password)) {
      setPasswordFlag(true);
      setPasswordError("Please Enter Valid Password");
      isError = true;
    }
    if (!mobilePattern.test(mobile)) {
      setMobileFlag(true);
      setMobileError("Mobile Number is Not Proper");
      isError = true;
    }
    return isError;
  };

  const toggle = (index) => {
    console.log(index);
    setToggleState(index);
  };


  const handleSignup = () => {
    if (patternCheck()) {
      console.log("Error Occured");
    } else {
      console.log("Success");
      const data = {
        fullName: name,
        email: email,
        password: password,
        phone: mobile,
      };
      services
        .SignUp(data)
        .then((data) => {
          console.log("registration successful" + data);
          nextPath("../Login");
          console.log(
            "Login successful" + JSON.stringify(data.data.result.accessToken)
          );
          localStorage.setItem("bookStoreToken", data.data.result.accessToken);
          
        })
        .catch((err) => {
          console.log("Registration Error" + err);
        });
    }
  };
  
 
  const handleLogin = () => {
    if (patternCheckone()) {
      console.log("Error Occured");
    } else {
      let data = {
        email: email1,
        password: password1,
      };
      services
        .SignIn(data)
        .then((data) => {
          console.log(data);
          setSnackbaropen(true);
          setSnackbarmsg("Logged In");
          console.log(
            "Login successful" + JSON.stringify(data.data.result.accessToken)
          );
          localStorage.setItem("bookStoreToken", data.data.result.accessToken);
           nextPath("../dashboard");
        })
        .catch((err) => {
          console.log("Error", err);
          setSnackbaropen(true);
          setSnackbarmsg("Error");
        });
    }
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

 
  return (
    <div className="container-login">
      <div className="img-holder">
        <img className="image" alt="image"/>
        <span className="text">ONLINE BOOK SHOPPING</span>
      </div>
      <div className="login">
        <button className="lgn" onClick={() => toggle(1)}>
          LOGIN
        </button>
        <button className="sgn" onClick={() => toggle(2)}>
          SIGN UP
        </button>

        <div className={toggleState === 1 ? "active-content" : "content"}>
        <br/>
        <div>
        <div>
                <div className="email">
        <TextField
            id="outlined-email-input"
            variant="outlined"
            name="email"
            value={email1}
            onChange={(e) => setEmail1(e.target.value)}
            error={emailFlag1}
            helperText={emailError1}
              
            label="Email"
            fullWidth
          />
          </div>
          <br/>
          <div className="password">
          <TextField
          id="outlined-pass-input"
          name="password"
          variant="outlined"
          label="Password"
          type={values.showPassword ? 'text' : 'password'}
          value={password1}
          fullWidth
          onChange={(e) => setPassword1(e.target.value)}
          error={passwordFlag1}
          helperText={passwordError1}
          endAdornment={
              <IconButton
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {values.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
          }
         
        />
        </div>
          <Button className="btn" onClick={handleLogin}>
            Login
          </Button>
        </div>
        </div>
        <div className="buttons">
        </div>
        </div>

        <div className={toggleState === 2 ? "active-content" : "content"}>
          <TextField
            id="outlined-secondary"
            variant="outlined"
            color="secondary"
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={nameFlag}
            helperText={nameError}
            
            label="Full Name"
          />
          <br/>
          <TextField
            id="outlined-secondary"
      
            variant="outlined"
            color="secondary"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={emailFlag}
            helperText={emailError}
            
            label="Email"
          />
          <br/>
          <TextField
            id="outlined-secondary"
          
            variant="outlined"
            color="secondary"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={passwordFlag}
            helperText={passwordError}
          
            label="Password"
            type="password"
          />
          <br/>
          <TextField
            id="outlined-secondary"
      
            variant="outlined"
            color="secondary"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            error={mobileFlag}
            helperText={mobileError}
           
            label="Mobile"
            type="number"
          />
          <Button className="btn" onClick={handleSignup}>
            Signup
          </Button>
        </div>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          open={snackbaropen}
          autoHideDuration={6000}
          onClose={snackbarClose}
          message={<span id="message-id">{snackbarmsg}</span>}
        />
      </div>
    </div>
  );
}

