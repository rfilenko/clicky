import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

import "./index.css";
import App from "./App";
import Home from "./components/Home";
import CurrentTeam from "./components/CurrentTeam";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <App>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/:id" component={CurrentTeam} />
          </Switch>
        </App>
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
