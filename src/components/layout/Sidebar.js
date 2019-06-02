import React, { Component } from "react";

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar sidebar-dark bg-dark">
        <ul className="list-unstyled">
          <li>
            <a href="#/">
              <i className="fa fa-fw fa-link" /> Home
            </a>
          </li>
          <li>
            <a href="#projects" data-toggle="collapse">
              <i className="fa fa-fw fa-link" /> Projects
            </a>
            <ul id="projects" className="list-unstyled collapse">
              <li>
                <a href="#/">Add Project</a>
              </li>
              <li>
                <a href="#/">List Projects</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
