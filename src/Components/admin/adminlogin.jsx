import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import SnackbarComponent from "../snackbarComponent/snackbar";
import Services from "../../Services/userServices";
import { isemailValid, ispasswordValid } from "../validations/validations";

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
      width: "100%",
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
    height: "373px",
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
  const [email2, setEmail2] = React.useState("");
  const [emailFlag2, setEmailFlag2] = React.useState(false);
  const [emailError2, setEmailError2] = React.useState("");
  const [password2, setPassword2] = React.useState("");
  const [passwordFlag2, setPasswordFlag2] = React.useState(false);
  const [passwordError2, setPasswordError2] = React.useState("");
  const [snackbaropen, setSnackbaropen] = React.useState(false);
  const [snackbarmsg, setSnackbarmsg] = React.useState("");
 const [test,setTest]=React.useState("");
 
  const nextPath = (path) => {
    props.history.push(path);
  };

  const snackbarClose = () => {
    setSnackbaropen(false);
  };


  const EmailCheck = () => {
    let isError = false;

    if (isemailValid(email2)) {
      setEmailError2("");
      return false;
    } else {
      setEmailError2("Email is Not Proper");
      isError = true;
      return true;
    }
  };
  const PasswordCheck = () => {
    let isError = false;
    if (ispasswordValid(password2)) {
      setPasswordError2("");
      return false;
    } else {
      setPasswordError2("Please Enter Valid Password");
      isError = true;
      return true;
    }
  };

  const submit = () => {
    EmailCheck();
    PasswordCheck();
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
  };
  const updatestate = (e) => {
    console.log("email setup",e.target.value)
    setEmail2(e.target.value);
  };
  const updatestateone = (e) => {
    setPassword2(e.target.value);
  };
  const LoginBody = () => {
    return (
      <div className={classes.loginMain}>
        <div className={classes.Title}>Book Store Admin </div>
        <div className={classes.SignUpBody}>
          <div className={classes.header}>
            Login
            <Button onClick={() => nextPath("../adminsignup")}>
              {" "}
              Sign Up{" "}
            </Button>
          </div>
          <TextField
                value={email2}
                onChange={updatestate}
                error={emailError2}
                helperText={emailError2}
                fullWidth
                className={classes.input}
                label="Email"
                id="outlined-email"
              />
          
          <div className={classes.inputField}>
            <TextField
              value={password2}
              onChange={updatestateone}
              error={passwordError2}
              helperText={passwordError2}
              fullWidth
              className={classes.input}
              label="Password"
              type="password"
              name="password"
              id="outlined-pass"
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
          <SnackbarComponent open={snackbaropen} message={snackbarmsg} />
        </div>
      </div>
    );
  };

  return (
    <>
      {dialogControl ? (
        <Dialog open={true}>
          {LoginBody()}
        </Dialog>
      ) : (
        ""
      )}
    </>
  );
}
