import {
  ADD_BUILDING,
  ASSIGN_COLONIST,
  DECREASE_COLONY_RESOURCE,
  INCREASE_COLONY_RESOURCE,
  UN_ASSIGN_COLONIST
} from "../actionTypes";
import {colonyObjects} from "../../GameData/colonyObjects";

const initialState = {
  population: 5,
  buildings: {},
  assignments: {},
  resources: {}
}


export default function colony(state = initialState, action) {
  switch (action.type) {
    case INCREASE_COLONY_RESOURCE: {
      let resourcesCopy = {...state.resources};
      for (const [key, value] of Object.entries(action.payload.increases)) {
        resourcesCopy[key] = (resourcesCopy[key] ?? 0) + value;
      }
      return {
        ...state,
        resources: resourcesCopy
      }
    }
    case DECREASE_COLONY_RESOURCE: {
      let resourcesCopy = {...state.resources};
      for (const [key, value] of Object.entries(action.payload.increases)) {
        resourcesCopy[key] = Math.max((resourcesCopy[key] ?? 0) - value, 0);
      }
      return {
        ...state,
        resources: resourcesCopy
      }
    }
    case ADD_BUILDING: {
      const type = action.payload.type;
      const details = colonyObjects[type];
      return {
        ...state,
        buildings: {
          ...state.buildings,
          [type]: (state.buildings[type] ?? 0) + 1
        },
        resources: {
          ...state.resources,
          [details.output]: state.resources[details.output] ?? 0 // if it is undefined, initialize it to 0
        }
      }
    }
    case ASSIGN_COLONIST: {
      const type = action.payload.type;
      let assignmentCopy = {...state.assignments}
      // check that we are not at out max assigned
      const details = colonyObjects[action.payload.type]
      const maxAssigned = details.workers * state.buildings[action.payload.type];
      if(state.assignments[action.payload.type] >= maxAssigned) return state;
      // figure out if we already have assigned all available colonists -> remove one at random
      const totalAssigned = Object.values(state.assignments).reduce((a, r) => a + r, 0);
      let diff = totalAssigned + 1 - state.population;
      while (diff > 0) {
        // find teh first property with > 0 assigned colonists
        for (const [key, value] of Object.entries(assignmentCopy)) {
          if (value > 0){
            assignmentCopy[key] -= 1;
            diff -= 1;
            break;
          }
        }
      }
      assignmentCopy[type] = (assignmentCopy[type] ?? 0) + 1;
      return {
        ...state,
        assignments: assignmentCopy
      }
    }
    case UN_ASSIGN_COLONIST: {
      const type = action.payload.type;
      let assignmentCopy = {...state.assignments}
      assignmentCopy[type] = Math.max((assignmentCopy[type] ?? 0) - 1, 0);
      return {
        ...state,
        assignments: assignmentCopy
      }
    }
    default:
      return state;
  }
}