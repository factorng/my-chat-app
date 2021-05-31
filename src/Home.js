import { React, Component } from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="home center-element">
        <h3 className="home__title">Welcome to My Chat App </h3>
        <p className="home__text">
          To begin, please, &nbsp;
          <NavLink to="/signup" className="home__link">
            register
          </NavLink>
        </p>
        <p className="home__text">
          or&nbsp;
          <NavLink to="/signin" className="home__link">
            log in
          </NavLink>
          &nbsp;if you already have an account
        </p>
      </div>
    );
  }
}
