import {BUY_UPGRADE, PRESTIGE} from "../actionTypes";

const initialState = []

export default function upgrades(state = initialState, action) {
  switch (action.type) {
    case BUY_UPGRADE: {
      return [...new Set([...state, action.payload.id])];
    }
    case PRESTIGE:{
      return initialState;
    }
    default:
      return state;
  }
}
