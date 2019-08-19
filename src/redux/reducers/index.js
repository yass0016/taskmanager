import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import common from "./common";
import auth from "./auth";

const rootReducer = history =>
  combineReducers({
    commonState: common,
    authState: auth,
    router: connectRouter(history)
  });

export default rootReducer;
