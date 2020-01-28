import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { teamReducer } from "./teamReducer";
import dataReducer from "./dataReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["team"]
};
const rootReducer = combineReducers({
  team: teamReducer,
  data: dataReducer
});

export default persistReducer(persistConfig, rootReducer);
