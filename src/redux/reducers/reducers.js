// import { Add_To_Cart } from "../constants/constants";

import Add_Token from '../actions/actions';
import Open_Dialog from '../actions/actions'
export default  (state={dialog:false,bookDetails:null}, action) => {
  console.log(" in the reducers ",action)
    switch (action.type) {
     case 'Add_Token':
      return {
        state:{token:"token here"},
      }
      case 'Open_Dialog':{
        console.log("Inside open dialog")
        return{
          dialog:true,
          bookDetails:action.payload,
        //  ...state,dialog:true
        }
      }
      case 'Close_Dialog':{
        console.log("Inside close dialog")
        return{
          dialog:false,
        //  ...state,dialog:true
        }
      }
      default:
      return state;
    }

}



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