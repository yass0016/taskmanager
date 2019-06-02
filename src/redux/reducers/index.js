import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import common from "./common";

const rootReducer = history =>
  combineReducers({
    commonState: common,
    router: connectRouter(history)
  });

export default rootReducer;
