import Snackbar from "@material-ui/core/Snackbar";
import Services from "../../Services/userServices";
import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import TextField from "@material-ui/core/TextField";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import SnackbarComponent from "../snackbarComponent/snackbar";
import IconButton from "@material-ui/core/IconButton";
import {
  isemailValid,
  ispasswordValid,
  isNameValid,
  isMobileValid,
} from "../validations/validations";
import "../LogIn/login.scss";
import { makeStyles } from '@material-ui/core/styles';

const services = new Services();

export default function Login(props) {
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
    password: "",
    showPassword: false,
  });
  // const counter = useSelector((state) => state);
  // const dispatch = useDispatch();

  const nextPath = (path) => {
    props.history.push(path);
  };

  const toggle = (index) => {
    console.log(index);
    setToggleState(index);
  };

   
  const opensnackbar=()=>{
    setSnackbaropen(true);
    setTimeout(() => {
      setSnackbaropen(false)

    }, 6000);
  }



  const EmailCheck = () => {
    let isError = false;

    if (isemailValid(email)) {
      setEmailError("");
      return false;
    } else {
      setEmailError("Email is Not Proper");
      isError = true;
      return true;
    }
  };
  const EmailCheckLogin = () => {
    let isError = false;

    if (isemailValid(email1)) {
      setEmailError1("");

      return false;
    } else {
      setEmailError1("Email is Not Proper");
      isError = true;
      return true;
    }
  };
  const PasswordCheck = () => {
    let isError = false;
    if (ispasswordValid(password)) {
      setPasswordError("");
      return false;
    } else {
      setPasswordError("Please Enter Valid Password");
      isError = true;
      return true;
    }
  };
  const PasswordCheckLogin = () => {
    let isError = false;
    if (ispasswordValid(password1)) {
      setPasswordError1("");
      return false;
    } else {
      setPasswordError1("Please Enter Valid Password");
      isError = true;
      return true;
    }
  };
  const patternCheckName = () => {
    let isError = false;

    if (isNameValid(name)) {
      setNameError("");
      return false;
    } else {
      setNameError("Name is Not Proper");
      isError = true;
      return true;
    }
  };
  const patternCheckMobileNumber = () => {
    let isError = false;

    if (isMobileValid(mobile)) {
      setMobileError("");
      return false;
    } else {
      setMobileError("Mobile Number is Not Proper");
      isError = true;
      return true;
    }
  };

  const handleSignup = () => {
    EmailCheck();
    patternCheckName();
    PasswordCheck();
    patternCheckMobileNumber();
    const data = {
      fullName: name,
      email: email,
      password: password,
      phone: mobile,
    };
    services
      .SignUp(data)
      .then((data) => {
        opensnackbar()
        setSnackbarmsg("Registration successfull");
        console.log("registration successful" + data);
        nextPath("../Login");
        console.log(
          "Login successful" + JSON.stringify(data.data.result.accessToken)
        );
        localStorage.setItem("bookStoreToken", data.data.result.accessToken);
        // dispatch({
        //   type: "Add_Token",
        //   token: localStorage.getItem("bookStoreToken"),
        // });
      })
      .catch((err) => {
        console.log("Registration Error" + err);
        opensnackbar()
        setSnackbarmsg("Error");
      });
  };

  const Adminlogin = () => {
    nextPath("../loginadmin");
  };

 
  const handleLogin = () => {
    EmailCheckLogin();
    PasswordCheckLogin();
    let data = {
      email: email1,
      password: password1,
    };
    services
      .SignIn(data)
      .then((data) => {
        console.log(data);
        opensnackbar()
        setSnackbarmsg("Logged In");
        console.log(
          "Login successful" + JSON.stringify(data.data.result.accessToken)
        );
        localStorage.setItem("bookStoreToken", data.data.result.accessToken);
        nextPath("../dashboard");
      })
      .catch((err) => {
        console.log("Error", err);
        opensnackbar()
        setSnackbarmsg("Error");
      });
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
        <img className="image" alt="image" />
        <span className="text">ONLINE BOOK SHOPPING</span>
      </div>
      <div className="login">
        <button className="lgn" text="Test" onClick={() => toggle(1)}>
          LOGIN
        </button>
        <button className="sgn" text="Test" onClick={() => toggle(2)}>
          SIGN UP
        </button>

        <div className={toggleState === 1 ? "active-content" : "content"}>
          <br />
          <div>
            <div>
              <div className="email">
                <TextField
                  id="outlined-email-input"
                  variant="outlined"
                  name="email"
                  value={email1}
                  onChange={(e) => setEmail1(e.target.value)}
                  error={emailError1}
                  helperText={emailError1}
                  label="Email"
                  fullWidth
                  placeholder="Email-input "
                />
              </div>
              <br />
              <div className="password">
                <TextField
                  id="outlined-pass-input"
                  name="password"
                  variant="outlined"
                  label="Password"
                  type={values.showPassword ? "text" : "password"}
                  value={password1}
                  fullWidth
                  onChange={(e) => setPassword1(e.target.value)}
                  error={passwordError1}
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
              <Button className="btn" text="test" onClick={handleLogin}>
                Login
              </Button>
            </div>
          </div>
          <br />
          <div className="buttons">
            <Button className="btn" onClick={Adminlogin}>
              Login as Admin
            </Button>
          </div>
        </div>

        <div className={toggleState === 2 ? "active-content" : "content"}>
          <TextField
            id="outlined-secondary-name"
            variant="outlined"
            color="secondary"
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={nameError}
            helperText={nameError}
            label="Full Name"
          />
          <br />
          <TextField
            id="outlined-secondary-email"
            variant="outlined"
            color="secondary"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={emailError}
            helperText={emailError}
            label="Email"
          />
          <br />
          <TextField
            id="outlined-secondary-password"
            variant="outlined"
            color="secondary"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={passwordError}
            helperText={passwordError}
            label="Password"
            type="password"
          />
          <br />
          <TextField
            id="outlined-secondary-mobile"
            variant="outlined"
            color="secondary"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            error={mobileError}
            helperText={mobileError}
            label="Mobile"
            type="number"
          />
          <Button className="btn" onClick={handleSignup}>
            Signup
          </Button>
        </div>
        <SnackbarComponent open={snackbaropen} message={snackbarmsg} />
      </div>
    </div>
  );
}
