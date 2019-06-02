import React from "react";
import ReactDOM from "react-dom";

import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

import App from "./components/App";
import { store, persistor, history } from "./redux";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App history={history} />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
