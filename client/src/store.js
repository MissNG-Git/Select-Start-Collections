// Use createStore() to hold state of app tree; use to send app state to components
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

// Set initialState
const initialState = {};
// Set thunk middleware to return a function instead of action object
const middleware = [thunk];

// Pass empty rootReducer as 1st param, TBDefined later
const store = createStore(
  () => [],
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
