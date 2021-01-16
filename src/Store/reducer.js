import * as actionTypes from "./actions";
const initialState = {
  term: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_TERM:
      return {
        ...state,
        term: action.term,
      };
    default:
      return state;
  }
};

export default reducer;
