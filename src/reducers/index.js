import { combineReducers } from "redux";
import customerReducer from "./customer";
import responseReducer from "./response";

const rootReducer = combineReducers({
  customer: customerReducer,
  response: responseReducer,
});

export default rootReducer;
