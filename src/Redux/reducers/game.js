import {CLOSE_STORY, PRESTIGE, TOGGLE_PAUSE} from "../actionTypes";

const initialState = {
  paused: false,
  prestige: 0,
  storyShow: {
    meetColony: false,
  }
};

export default function game(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_PAUSE: {
      return {
        ...state,
        paused: !state.paused
      };
    }
    case PRESTIGE: {
      let newState = {...state, prestige: state.prestige + 1}
      if (newState.prestige === 1) {
        // if it is the first prestige, trigger the story event to meet the colony
        newState.storyShow.meetColony = true;
        newState.paused = true;
      }
      return newState
    }
    case CLOSE_STORY: {
      return {
        ...state,
        paused: false,
        storyShow: {
          ...state.storyShow,
          [action.payload.type]: false
        }
      }
    }
    default:
      return state;
  }
}
