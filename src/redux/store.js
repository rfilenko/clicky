import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import reduxThunk from "redux-thunk";
import { persistStore } from "redux-persist";
import rootReducer from "./reducers/rootReducer";

const middlewares = [logger, reduxThunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

export const persistor = persistStore(store);
export default { store, persistor };
