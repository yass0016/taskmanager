import React, { Component } from "react";
import { Link } from "react-router-dom";

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar sidebar-dark bg-dark">
        <ul className="list-unstyled">
          <li>
            <Link to="/">
              <i className="fa fa-fw fa-home" /> Home
            </Link>
          </li>
          <li>
            <a href="#projects" data-toggle="collapse">
              <i className="fa fa-fw fa-project-diagram" /> Projects
            </a>
            <ul id="projects" className="list-unstyled collapse">
              <li>
                <Link to="/add-project">Add Project</Link>
              </li>
              <li>
                <Link to="/list-projects">List Projects</Link>
              </li>
            </ul>
          </li>
          <li>
            <a href="#about" data-toggle="collapse">
              <i className="fa fa-fw fa-at" /> About
            </a>
            <ul id="about" className="list-unstyled collapse">
              <li>
                <Link to="/about">About Saya Development</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
