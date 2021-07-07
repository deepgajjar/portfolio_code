import rootReducer from "./reducers";
import { createStore } from "redux";

var store = createStore(rootReducer);

export default store;
