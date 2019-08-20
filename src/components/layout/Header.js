import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { connect } from "react-redux";

import { login, logout } from "../../redux/actions/auth";

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand navbar-dark bg-primary">
        <a className="sidebar-toggle mr-3" href="#/">
          <i className="fa fa-bars" />
        </a>

        <a className="navbar-brand" href="#/">
          Task Manager
        </a>

        {this.props.isAuthenticated ? (
          <div className="navbar-collapse collapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item dropdown">
                <a
                  href="#/"
                  id="dd_user"
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                >
                  <i className="fa fa-user" />{" "}
                  {this.props.user.firstname + " " + this.props.user.lastname}
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right"
                  aria-labelledby="dd_user"
                >
                  <a href="#/" className="dropdown-item">
                    Profile
                  </a>
                  <a
                    href="#/"
                    onClick={() => {
                      this.props.logout();
                    }}
                    className="dropdown-item"
                  >
                    Logout
                  </a>
                </div>
              </li>
            </ul>
          </div>
        ) : (
          <div className="navbar-nav ml-auto">
            <button
              onClick={() => {
                this.props.history.push("/login");
              }}
              className="btn btn-primary"
            >
              Login
            </button>
            <button
              onClick={() => {
                this.props.history.push("/register");
              }}
              className="btn btn-primary"
            >
              Register
            </button>
          </div>
        )}
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.authState.isAuthenticated,
    user: state.authState.user
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    {
      login,
      logout
    }
  )(Header)
);
