import * as actionTypes from "../action";

const initialState = {
  result: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT: {
      return {
        ...state,
        result: state.result.concat({ id: new Date(), value: action.result }), //cpunter.js
      };
    }
    case actionTypes.DELETE_RESULT: {
      // const id = 2;
      // const newArray = [...state.result];
      // newArray.splice(id, 1);
      const updatedArray = state.result.filter(
        (rslt) => rslt.id !== action.resultElId
      );
      return {
        ...state,
        result: updatedArray,
      };
    }
  }
  return state;
};

export default reducer;
