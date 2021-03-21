import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarComponent from "../snackbarComponent/snackbar"
import Services from "../../Services/userServices";
const services = new Services();
let dialogControl = true;

const useStyles = makeStyles((theme) => ({
  loginMain: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    borderRadius: "10px",
    width: "350px",
    [theme.breakpoints.down("xs")]: {
      width: '100%'
    },
  },
  Title: {
    width: "100%",
    height: "10%",
    backgroundColor: "#A03037",
    color: "white",
    textAlign: "center",
    fontSize: "25px",
    fontWeight: "bold",
  },
  SignUpBody: {
    padding: "30px",
   
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    width: "90%",
    fontSize: "1.2em",
    fontFamily: "roboto,'Noto Sans Myanmar UI',arial,sans-serif",
    color: "#A03037",
  },
  inputField: {
    margin: "5px 0 5px 0",
    width: "100%",
  },
  input: {
    color: "#A03037",
  },
  signUpButton: {
    marginTop: "10px",
    display: "flex",
    justifyContent: "space-between",
  },
  regButton: {
    marginTop: "20px",
    background: "#A03037",
    width: "100%",
  },
}));

export default function Login(props) {
  const classes = useStyles();
  const [email2, setEmail2] = React.useState(" ");
  const [emailFlag2, setEmailFlag2] = React.useState(false);
  const [emailError2, setEmailError2] = React.useState("");
  const [password2, setPassword2] = React.useState(" ");
  const [passwordFlag2, setPasswordFlag2] = React.useState(false);
  const [passwordError2, setPasswordError2] = React.useState("");
  const [snackbaropen, setSnackbaropen] = React.useState(false);
  const [snackbarmsg, setSnackbarmsg] = React.useState(""); 

  const nextPath = (path) => {
    props.history.push(path);
  };

  const snackbarClose = () => {
    setSnackbaropen(false);
  };

  const makeInitial = () => {
    setEmailFlag2(false);
    setEmailError2("");
    setPasswordFlag2(false);
    setPasswordError2("");
  };

  const patternCheck = () => {
    makeInitial();
    const emailPattern = /[a-zA-Z0-9._]+[@]{1}[a-zA-Z120-9]*[.]{1}[a-zA-Z]*$/;
    const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*$/;
    let isError = false;
    if (!emailPattern.test(email2)) {
      setEmailFlag2(true);
      setEmailError2("Email is Not Proper");
      isError = true;
    }
    if (!passwordPattern.test(password2)) {
      setPasswordFlag2(true);
      setPasswordError2("Please Enter Valid Password");
      isError = true;
    }
    return isError;
  };

  const submit = () => {
    if (patternCheck()) {
      console.log("Error Occured");
    } else {
      console.log("Success");
      const data = {
        email: email2,
        password: password2,
      };
      services
        .SignIn(data)
        .then((data) => {
          console.log(
            "Login successful" + JSON.stringify(data.data.result.accessToken)
          );
          localStorage.setItem("StoreToken", data.data.result.accessToken);
          nextPath("../adminbooks");
          setSnackbaropen(true);
          setSnackbarmsg("Logged In");
        })
        .catch((err) => {
          console.log("Login Error" + err);
          setSnackbaropen(true);
          setSnackbarmsg("Error");
        });
    }
  };

  const LoginBody = () => {
    return (
      <div className={classes.loginMain}>
        <div className={classes.Title}>Book Store Admin </div>
        <div className={classes.SignUpBody}>
          <div className={classes.header}>
            Login
            <Button onClick={() => nextPath("../adminsignup")}> Sign Up </Button>
          </div>
          <div className={classes.inputField}>
            <TextField
              value={email2}
               onChange={(e) => setEmail2(e.target.value)}
              error={emailFlag2}
              helperText={emailError2}
              fullWidth
              className={classes.input}
              label="Email"
              name="email"
            />
          </div>
          <div className={classes.inputField}>
            <TextField
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              error={passwordFlag2}
              helperText={passwordError2}
              fullWidth
              className={classes.input} 
              label="Password"
              type="password"
              name="password"
            />
          </div>
          <Button
            fullWidth
            className={classes.regButton}
            onClick={submit}
            variant="contained"
          >
           Admin Login
          </Button>
          <Button
          fullWidth
          className={classes.regButton}
          onClick={() => nextPath("../login")}
          variant="contained"
        >
         Bookstore Login
        </Button>
          <SnackbarComponent
          open={snackbaropen}
          message={snackbarmsg}
          />
         
        </div>
      </div>
    );
  };

  return (
    <>
     {dialogControl ? <Dialog open={true}>
        <LoginBody />
      </Dialog> : ''}
    </>
  );
}