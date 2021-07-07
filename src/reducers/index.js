import { combineReducers } from "redux";
import CounterVal from "./reducers";

var rootReducer = combineReducers({
    CounterVal,
});

export default rootReducer;