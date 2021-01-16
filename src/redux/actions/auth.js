import { LOG_IN, LOG_OUT, HIDE_LOGIN_ALERT } from "../Constants";
import { subscribeForTxns } from "./txn";
export const login = (user) => async (dispatch) => {
  dispatch({
    type: LOG_IN,
    payload: { uid: user.uid, name: user.displayName },
  });

  dispatch(subscribeForTxns(user));
  setTimeout(() => {
    dispatch({ type: HIDE_LOGIN_ALERT });
  }, 3000);
};
export const logOut = (user) => async (dispatch) => {
  dispatch({
    type: LOG_OUT,
  });
};
