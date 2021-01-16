import {
  UPDATE_DATA,
  SUBSCRIBE_FOR_TXNS,
  UNSUBSCRIBE_FOR_TXNS,
} from "../Constants";
var initialState = {
  subscribed: false,
  unsubscribe: null,
  data: null,
};

export default function txnReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SUBSCRIBE_FOR_TXNS:
      return { ...state, subscribed: true, unsubscribe: payload };
    case UNSUBSCRIBE_FOR_TXNS:
      state.unsubscribe();
      return { ...state, subscribed: false, unsubscribe: null };
    case UPDATE_DATA:
      return { ...state, data: payload };
    default:
      return state;
  }
}
