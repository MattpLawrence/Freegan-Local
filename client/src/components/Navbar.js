import React from "react";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";

function navbar() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <div className="nav-wrapper">
          <Link to={{ pathname: `/signupPage` }} className="brand-logo">
            SignUp
          </Link>

          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li className="mx-1">
              <a to="/">Freegan</a>
            </li>
            <li className="mx-1">
              <a to="/dashboard">Dashboard</a>
            </li>
            <li className="mx-1">
              <a to="/profile">Profile</a>
            </li>
            <li className="mx-1">
              <a href="/" onClick={() => Auth.logout()}>
                Logout
              </a>
            </li>
          </ul>
        </div>
      );
    } else {
      return (
        <div className="nav-wrapper leftAlign">
          <Link to={{ pathname: `/` }} className="brand-logo">
            &nbsp;&nbsp;Freegan
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li className="mx-1">
              <Link to={{ pathname: `/signupPage` }}>SignUp</Link>
            </li>
            <li className="mx-1">
              <Link to={{ pathname: `/loginPage` }}>LogIn</Link>
            </li>
          </ul>
        </div>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <nav>{showNavigation()}</nav>
    </header>
  );
}

export default navbar;