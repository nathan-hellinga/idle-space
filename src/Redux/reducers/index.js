import { combineReducers } from "redux";
import resources from "./resources";
import sources from "./sources";
import upgrades from "./upgrades";

export default combineReducers({ resources, sources, upgrades});
