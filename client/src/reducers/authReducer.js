// Import actions from types.js
import { SET_CURRENT_USER, USER_LOADING } from "../actions/types";
const isEmpty = require("is-empty");

// Set initialState
const initialState = {
  isAuthenticated: false,
  user: {},
  loading: false,
};

// Define state changes with switch statement
// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        // "Copy" existing state
        ...state,
        // Rewrite object keys w/value from action.payload
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
      };
    case USER_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      // Default to existing state
      return state;
  }
}
