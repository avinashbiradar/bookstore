// import { Add_To_Cart } from "../constants/constants";

export const Add_Token = 'Add_Token';

export function addToken(id) {
  return { type: Add_Token, Id:id};
}

export default addToken;

// export const addToCart=(data)=>{
//   return{
//     type: Add_To_Cart,
//     data:data
//   }
// }
