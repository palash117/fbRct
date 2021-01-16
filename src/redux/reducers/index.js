import { combineReducers } from "redux";
import auth from "./auth";
import txns from "./txn";
export default combineReducers({ auth, txns });
