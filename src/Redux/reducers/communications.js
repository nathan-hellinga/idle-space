import {ADD_INCOME_SOURCE, ADD_MESSAGE, RECEIVE_MESSAGE} from "../actionTypes";

const initialState = [
  {
    message: "Wakey wakey, logs indicate you've been asleep for 93 years. We have arrived at the destination, " +
      " asteroid designation 'AX62'. <br/><br/> <strong>Trip Debrief:</strong> We are aproximatly 57,000AU from earth making light speed " +
      "communication delay 329 days or just over 2 years round trip. During transit we encounted 33 micrometeorite collisions resulting " +
      "in damage to our long range communication equipment. All other systems are above 95% active health. <br/><br/>" +
      "I am <strong>IAN</strong> and will be your insanity avoidance AI for the remainder of your time in the Oort Cloud.",
    received: false,
    delay: 1,
    index: 0,
  },
];

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_MESSAGE: {
      return [...state, {...action.payload, received: false, index: state.length}];
    }
    default:
      return state;
  }
}
