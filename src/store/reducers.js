import { combineReducers } from "redux";
import animal from "../screens/DataManagementWithRedux/AnimalLog/reducers";
import story from "../screens/DataManagementWithRedux/AgileManifesto/reducers";

const rootReducer = combineReducers({
  animal,
  story,
});

export default rootReducer;
