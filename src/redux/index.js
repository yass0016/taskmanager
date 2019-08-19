import { createBrowserHistory } from "history";
import { applyMiddleware, compose, createStore } from "redux";
import { routerMiddleware } from "connected-react-router";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web and AsyncStorage for react-native

import thunk from "redux-thunk";

import createRootReducer from "./reducers";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["router"]
};

export const history = createBrowserHistory();

const persistedReducer = persistReducer(
  persistConfig,
  createRootReducer(history)
);

export default function configureStore(preloadedState) {
  const composeEnhancer =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    persistedReducer,
    preloadedState,
    composeEnhancer(applyMiddleware(thunk, routerMiddleware(history)))
  );

  return store;
}
