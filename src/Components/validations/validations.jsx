// import React from "react";

// export default function Validations() {
//     const [bookFlag, setBookFlag] = React.useState(false);
//     const [bookError, setBookError] = React.useState(" ");
    
//     const makeInitial = () => {
//         setBookFlag(false)
//         setBookError("")
//       };

//       const patternCheck = (bookName) => {
//         makeInitial();
//         const BooknamePattern = /^[A-Z]{1}[a-z ]{3,}$/;
//         let isError = false;
//         if (!BooknamePattern.test(bookName)) {
//             setBookFlag(true);
//             setBookError("Bookname is Not Proper");
//             isError = true;
//           }
//           return isError;
//       };

// }

const emailPattern = /[a-zA-Z0-9._]+[@]{1}[a-zA-Z120-9]*[.]{1}[a-zA-Z]*$/;
 const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*$/;
const BooknamePattern = /^[A-Z]{1}[a-z ]{3,}$/;

module.exports={
  isStringValid(bookName){
      if(bookName.trim().length===0){
          return false;
      }
      let regex =new RegExp(BooknamePattern);
      return regex.test(bookName)
  },
   isemailValid(email){
    if(email.trim().length===0){
        return false;
    }
    let regex =new RegExp(emailPattern);
    return regex.test(email)
   },
   ispasswordValid(password){
    if(password.trim().length===0){
        return false;
    }
    let regex =new RegExp(passwordPattern);
    return regex.test(password)
   }
}