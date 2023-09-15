import { createStore } from "redux";
import { reducer } from "../product-reducers/combineReducers";

export const store = createStore(reducer);