import {ADD_INCOME_SOURCE, ADD_MESSAGE, BUY_UPGRADE, CLEAR_MESSAGES, PRESTIGE, RECEIVE_MESSAGE} from "../actionTypes";
import {fabObjects} from "../../GameData/FabObjects";
import {ResearchObjects} from "../../GameData/ResearchObjects";

const initialState = [
  {
    message: "Wakey wakey, logs indicate you've been asleep for 93 years. We have arrived at the destination, " +
      " asteroid designation 'AX62'. <br/><br/> <strong>Trip Debrief:</strong> We are aproximatly 57,000AU from earth making light speed " +
      "communication delay 329 days or just over 2 years round trip. During transit we encounted 33 micrometeorite collisions resulting " +
      "in damage to our long range communication equipment. All other systems are above 95% active health. <br/><br/>" +
      "I am <strong>IAN</strong> and will be your insanity avoidance AI for the remainder of your time in the Oort Cloud.",
    received: true,
    delay: 1,
    index: 0,
  },
];

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_MESSAGE: {
      return [...state, {...action.payload, received: false, index: state.length}];
    }
    case RECEIVE_MESSAGE:{
      let copy = [...state];
      let msg = copy.find(x => x.index === action.payload.index);
      if(msg){
        msg.received = true;
      }
      return copy;
    }
    case CLEAR_MESSAGES:{
      return [];
    }
    case PRESTIGE:{
      return [];
    }
    case ADD_INCOME_SOURCE: {
      const {type, count, price} = action.payload;
      if(count === 0 && fabObjects[type].message){
        return [...state, {message: fabObjects[type].message, delay:3, received: false, index: state.length}];
      }else{
        return state;
      }
    }
    case BUY_UPGRADE:{
      const {id, price} = action.payload;
      const research = ResearchObjects.find(x => x.id === id);
      if(research?.message){
        return [...state, {message: research.message, delay:3, received: false, index: state.length}];
      }else{
        return state;
      }
    }
    default:
      return state;
  }
}
