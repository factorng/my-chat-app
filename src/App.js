import { React, Component } from "react";
import UserProfile from "./UserProfile";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import { connect } from "react-redux";
import ProtectedRoute from "./ProtectedRoute";
import Chat from "./Chat";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Home from "./Home";
import Header from "./Header";
import "./fonts/fonts.css";
import "./App.css";
import ErrorPopup from "./ErrorPopup";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <ErrorPopup />
        <div className="wrapper">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <ProtectedRoute path="/chat">
              <UserProfile />
              <Chat />
            </ProtectedRoute>
            <Route path="/signin">
              <SignIn />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
          </Switch>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.user.authenticated,
    error: state.app.error,
  };
};

export default connect(mapStateToProps, null)(App);
