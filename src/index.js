import React from "react";
import ReactDOM from "react-dom";

import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

import { Provider } from "react-redux";

import App from "./components/App";
import configureStore, { history } from "./redux";

const store = configureStore();
const persistedStore = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<p>loading...</p>} persistor={persistedStore}>
      <App history={history} />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
