import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { connect } from "react-redux";

import { set_active_menu_item } from "../../redux/actions/common";

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

        <div className="navbar-collapse collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown">
              <a
                href="#/"
                id="dd_user"
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
              >
                <i className="fa fa-user" /> Saleh Yassin
              </a>
              <div
                className="dropdown-menu dropdown-menu-right"
                aria-labelledby="dd_user"
              >
                <a href="#/" className="dropdown-item">
                  Profile
                </a>
                <a href="#/" className="dropdown-item">
                  Logout
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default withRouter(
  connect(
    mapStateToProps,
    {
      set_active_menu_item
    }
  )(Header)
);
