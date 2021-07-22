import {ADD_INCOME_SOURCE, BUY_UPGRADE, DECREASE_RESOURCES, INCREASE_RESOURCES} from "../actionTypes";

const initialState = {
  current: 0
};

export default function (state = initialState, action) {
  switch (action.type) {
    case INCREASE_RESOURCES: {
      return {
        ...state,
        current: state.current += action.payload
      };
    }
    case DECREASE_RESOURCES: {
      return {
        ...state,
        current: Math.max(state.current -= action.payload, 0)
      };
    }
    case ADD_INCOME_SOURCE:{
      return {
        current: Math.max(state.current -= action.payload.price, 0)
      }
    }
    case BUY_UPGRADE:{
      return {
        current: Math.max(state.current -= action.payload.price, 0)
      }
    }
    default:
      return state;
  }
}
