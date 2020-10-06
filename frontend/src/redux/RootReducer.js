import { AcronymReducer } from "./AcronymReducer";
import { AuthReducer } from "./AuthReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  acronyms: AcronymReducer,
  users: AuthReducer
});
