import {React, Component} from 'react';
import UserProfile from './UserProfile';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";
import { connect } from 'react-redux';
import ProtectedRoute from './ProtectedRoute';
import Chat from './Chat';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Home from './Home';
import Header from './Header';
import './fonts/fonts.css';
import './App.css';
import ErrorPopup from './ErrorPopup';


class App extends Component {

  render() {
    return (
      <>
      <Header/>
      <ErrorPopup/>
      <div className="wrapper">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <ProtectedRoute
              path="/chat"
            >
              <UserProfile/>
              <Chat/>
            </ProtectedRoute>
            <Route exact path="/signin">
              <SignIn/>
            </Route>
            <Route exact path="/signup">
              <SignUp/>
            </Route>
            <Route>
            {this.props.authenticated ? <Redirect to="/chat" /> : <Redirect to="/signin" />}
          </Route>
          </Switch>
        </Router>
      </div>
      </>
    );
  }
  
}

const mapStateToProps = state => {
  return {
    authenticated: state.user.authenticated,
    error: state.app.error
  }
};

export default connect(mapStateToProps, null)(App);