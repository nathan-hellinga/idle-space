import { combineReducers } from "redux";
import resources from "./resources";
import sources from "./sources";
import upgrades from "./upgrades";
import communications from "./communications";
import game from "./game";
import {RESET} from "../actionTypes";
import storage from 'redux-persist/lib/storage';

const appReducer = combineReducers({ resources, sources, upgrades, communications, game});





export const rootReducer = (state, action) => {
  if(action.type === RESET){
    storage.removeItem('persist:root');
    return appReducer(undefined, action);
  }else{
    return appReducer(state, action);
  }
}
