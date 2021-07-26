import {
  ADD_BUILDING, ADD_COLONIST,
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
    case ADD_COLONIST:{
      return {
        ...state,
        population: Math.max(state.population + action.payload.count, 1)
      }
    }
    case INCREASE_COLONY_RESOURCE: {
      let resourcesCopy = {...state.resources};
      for (const [key, value] of Object.entries(action.payload.increases)) {
        resourcesCopy[key] = (state.resources[key] ?? 0) + value;
      }
      return {
        ...state,
        resources: resourcesCopy
      };
    }
    case DECREASE_COLONY_RESOURCE: {
      let resourcesCopy = {...state.resources};
      for (const [key, value] of Object.entries(action.payload.decreases)) {
        if(!resourcesCopy[key]) continue;
        resourcesCopy[key] = Math.max((resourcesCopy[key] ?? 0) - value, 0);
      }
      // if(Object.keys(resourcesCopy).length === 0) return state;
      return {
        ...state,
        resources: resourcesCopy
      }
    }
    case ADD_BUILDING: {
      const type = action.payload.type;
      const details = colonyObjects[type];

      //initialize new resources if there are any
      let newResources = {};
      for (const output of details.outputs) {
        newResources[output.name] = state.resources[output.name] ?? 0
      }
      for (const input of details.inputs) {
        newResources[input.name] = state.resources[input.name] ?? 0
      }

      return {
        ...state,
        buildings: {
          ...state.buildings,
          [type]: (state.buildings[type] ?? 0) + 1
        },
        resources: {
          ...state.resources,
          ...newResources
        },
        assignments: {
          ...state.assignments,
          [type]: state.assignments[type] ?? 0
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
      for (let i = 0; i < diff; i++) {
        // find the first property with > 0 assigned colonists
        for (const [key, value] of Object.entries(assignmentCopy)) {
          if (value > 0 && key !== type){
            assignmentCopy[key] -= 1;
            diff -= 1;
            break;
          }
        }
      }
      assignmentCopy[type] = Math.min((assignmentCopy[type] ?? 0) + 1, maxAssigned, state.population);
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