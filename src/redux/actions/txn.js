import {
  SUBSCRIBE_FOR_TXNS,
  UNSUBSCRIBE_FOR_TXNS,
  UPDATE_DATA,
} from "../Constants";
import { subscribe } from "../../firebase/db";
export const subscribeForTxns = (user) => async (dispatch) => {
  var unsubscribe = subscribe(user);

  dispatch({ type: SUBSCRIBE_FOR_TXNS, payload: unsubscribe });
};
export const unsubscribeForTxns = () => async (dispatch) => {
  dispatch({ type: UNSUBSCRIBE_FOR_TXNS });
};

export const updateData = (data) => async (dispatch) => {
  dispatch({ type: UPDATE_DATA, payload: data });
};
