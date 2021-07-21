import { combineReducers } from "redux";
import resources from "./resources";
import sources from "./sources";
import upgrades from "./upgrades";
import communications from "./communications";

export default combineReducers({ resources, sources, upgrades, communications});
