import { createStore } from "redux";
import pageReducer from "../reducer/reducer";

const store = createStore(pageReducer);

export default store;
