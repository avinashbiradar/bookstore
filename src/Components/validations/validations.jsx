// import React from "react";

// export default function Login(props) {
//     const [nameFlag, setNameFlag] = React.useState();
//     const [nameError, setNameError] = React.useState("");
//     const [passwordFlag, setPasswordFlag] = React.useState(false);
//     const [passwordError, setPasswordError] = React.useState("");

//     const makeInitial = () => {
//         setEmailFlag(false);
//         setEmailError("");
//         setPasswordFlag(false);
//         setPasswordError("");
//         setNameFlag(false);
//         setNameError("");
//         setMobileFlag(false);
//         setMobileError("");
        
//       };

//       const patternCheck = (name) => {
//         makeInitial();
//         const namePattern = /^[A-Z]{1}[a-z ]{3,}$/;
//         const emailPattern = /[a-zA-Z0-9._]+[@]{1}[a-zA-Z120-9]*[.]{1}[a-zA-Z]*$/;
//         const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*$/;
//         const mobilePattern = /^[6-9]{1}[0-9]{9}$/;
//         let isError = false;
//         if (!namePattern.test()) {
//           setNameFlag(true);
//           setNameError("Name is Not Proper");
//           isError = true;
//         }
//         if (!emailPattern.test()) {
//           setEmailFlag(true);
//           setEmailError("Email is Not Proper");
//           isError = true;
//         }
//         if (!passwordPattern.test()) {
//           setPasswordFlag(true);
//           setPasswordError("Please Enter Valid Password");
//           isError = true;
//         }
//         if (!mobilePattern.test()) {
//           setMobileFlag(true);
//           setMobileError("Mobile Number is Not Proper");
//           isError = true;
//         }
//         return isError;
//       };

// }