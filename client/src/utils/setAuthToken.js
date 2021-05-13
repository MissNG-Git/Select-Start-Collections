import axios from "axios";

// Set & delete Auth headers
const setAuthToken = (token) => {
  if (token) {
    // Apply auth token header to each request if logged in
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    // Delete auth header
    delete axios.defaults.headers.common["Authorization"];
  }
};

export default setAuthToken;
