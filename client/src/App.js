import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import Collection from "./components/collection/Collection";
import ChatStore from "./components/chat/ChatStore";
import Chat from "./components/chat/Chat";
import "./App.css";

// Check localStorage for token to keep user logged in even after browser close or page refresh
// (e.g. until manually logging out or token expires -- 7 days); ref authActions
if (localStorage.jwtToken) {
  // Set token to authHeader
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token for user data
  const decoded = jwt_decode(token);
  // Set currentUser w/token so isAuth returns true
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Switch>
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/collection" component={Collection} />
            <ChatStore>
              <PrivateRoute exact path="/chat" component={Chat}></PrivateRoute>
            </ChatStore>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
