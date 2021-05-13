// Import dependencies
import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

// Import actions from types.js
import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from "./types";

// Use axios to make HTTPRequests within certain action
// Register User
export const registerUser = (userData, history) => (dispatch) => {
  axios
    .post("/api/users/register", userData)
    .then((res) => history.push("/login")) // Re-direct on successful register
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

// Login & get user token
export const loginUser = (userData) => (dispatch) => {
  axios
    .post("/api/users/login", userData)
    .then((res) => {
      // Set token to localStorage
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      // Set token to authHeader
      setAuthToken(token);
      // Decode token for user data
      const decoded = jwt_decode(token);
      // Use dispatch to send action to reducer
      // Set currentUser w/token so isAuth returns true
      dispatch(setCurrentUser(decoded));
    })
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

// Set logged in user, pass in token
export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};

// User loading
export const setUserLoading = () => {
  return {
    type: USER_LOADING,
  };
};

// Log user out
export const logoutUser = () => (dispatch) => {
  // Remove token from localStorage
  localStorage.removeItem("jwtToken");
  // Remove authHeader for future reqs
  setAuthToken(false);
  // Use dispatch to send action to reducer
  // Set user to empty{} so isAuth returns false
  dispatch(setCurrentUser({}));
};
