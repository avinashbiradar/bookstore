// import { Add_To_Cart } from "../constants/constants";

import Add_Token from '../actions/actions';

function rootReducer(state="", action) {
    switch (action.type) {
     case Add_Token:
      return {
        state:{token:action.Id},
      }
      default:
      return state;
    }

}

export default rootReducer;

// const initialState={
//   cardData:[]
// }
// export default function cartItems(state=initialState,action){
//   switch (action.type) {
//          case "Add_To_Cart":
//           return {
//             ...state,
//               cardData:action.data
//             }
//           break;
//    default:
//      return state;
//  }
// }