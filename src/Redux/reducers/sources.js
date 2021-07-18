import {ADD_INCOME_SOURCE} from "../actionTypes";
import {initialState} from "../../GameData/FabObjects";

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_INCOME_SOURCE: {
      return {
        ...state,
        [action.payload.type]: state[action.payload.type] += 1
      };
    }
    default:
      return state;
  }
}
