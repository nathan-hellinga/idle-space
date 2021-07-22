import {BUY_UPGRADE} from "../actionTypes";

const initialState = []

export default function (state = initialState, action) {
  switch (action.type) {
    case BUY_UPGRADE: {
      return [...new Set([...state, action.payload.id])];
    }
    default:
      return state;
  }
}
