// Import error action from types.js
import { GET_ERRORS } from "../actions/types";

// Set initialState
const initialState = {};

// Define state change with switch statement
// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case GET_ERRORS:
      return action.payload;
    default:
      return state;
  }
}
