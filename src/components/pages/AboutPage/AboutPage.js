import React, { Component } from "react";
import Sidebar from "../../layout/Sidebar";

class AboutPage extends Component {
  render() {
    return (
      <div className="d-flex">
        <Sidebar />

        <div className="content p-4">
          <h2 className="mb-4">About Us</h2>

          <div className="card mb-4">
            <div className="card-body">About Saya Development</div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutPage;
