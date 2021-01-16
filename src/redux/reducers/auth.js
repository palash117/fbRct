import { LOG_IN, LOG_OUT, HIDE_LOGIN_ALERT } from "../Constants";

var initialState = {
  userData: null,
  loggedIn: false,
  loading: false,
  showLoginModal: false,
};
export default function auth(state = initialState, action) {
  console.log(" authing reducer with state, action", state, action);
  switch (action.type) {
    case LOG_IN:
      return { userData: action.payload, loggedIn: true, showLoginModal: true };
    case LOG_OUT:
      return { loggedIn: false, loading: false, showLoginModal: false };
    case HIDE_LOGIN_ALERT:
      return { ...state, showLoginModal: false };
    default:
      return state;
  }
}
