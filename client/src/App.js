import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import "./App.css";

// Check localStorage for token to keep user logged in even after browser close or page refresh
// (e.g. until manually logging out or token expires -- 7 days); ref authActions

// Set token to authHeader
// Decode token for user data
// Set currentUser w/token so isAuth returns true

// Check for expired token
// Logout user
// Redirect to login

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          {/* Add Dashboard component & define as PrivateRoute */}
        </div>
      </Router>
    </Provider>
  );
}

export default App;
