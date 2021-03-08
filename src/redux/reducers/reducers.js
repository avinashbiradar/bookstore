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