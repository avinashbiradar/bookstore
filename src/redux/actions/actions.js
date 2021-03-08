export const Add_Token = 'Add_Token';

export function addToken(id) {
  return { type: Add_Token, Id:id};
}

export default addToken;