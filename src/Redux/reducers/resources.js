import {
  ADD_BUILDING,
  ADD_INCOME_SOURCE,
  BUY_UPGRADE,
  DECREASE_RESOURCES,
  INCREASE_RESOURCES,
  PRESTIGE
} from "../actionTypes";

const initialState = {
  current: 0,
  colonyResources: 0
};

export default function resources(state = initialState, action) {
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
    case ADD_INCOME_SOURCE: {
      return {
        ...state,
        current: Math.max(state.current -= action.payload.price, 0)
      }
    }
    case BUY_UPGRADE: {
      return {
        ...state,
        current: Math.max(state.current -= action.payload.price, 0)
      }
    }
    case ADD_BUILDING:{
      return {
        ...state,
        colonyResources: state.colonyResources - action.payload.price
      }
    }
    case PRESTIGE: {
      const keepPercent = action.payload.keepPercent;
      const keepAmount = Math.ceil(state.current * keepPercent);
      return {
        ...state,
        current: 0,
        colonyResources: state.colonyResources + keepAmount
      }
    }
    default:
      return state;
  }
}
