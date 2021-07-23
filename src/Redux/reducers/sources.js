import {ADD_INCOME_SOURCE, PRESTIGE} from "../actionTypes";
import {fabObjects} from "../../GameData/FabObjects";


const initialState = Object.keys(fabObjects).reduce((a, r) => {
  a[r] = 0;
  return a;
}, {})

export default function (state = initialState, action) {

  switch (action.type) {
    case ADD_INCOME_SOURCE: {
      return {
        ...state,
        [action.payload.type]: state[action.payload.type] += 1
      };
    }
    case PRESTIGE:{
      return initialState;
    }
    default:
      return state;
  }
}
