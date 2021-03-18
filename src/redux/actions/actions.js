// import { Add_To_Cart } from "../constants/constants";

export const Add_Token = 'Add_Token';
export const Open_Dialog ='Open_Dialog'
export function addToken(id) {
  console.log(" in the actions ",id)
  return { type: Add_Token, Id:id};
}


export default addToken;

// export const addToCart=(data)=>{
//   return{
//     type: Add_To_Cart,
//     data:data
//   }
// }
