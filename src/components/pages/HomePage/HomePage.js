import React, { Component } from "react";
import Sidebar from "../../layout/Sidebar";

class HomePage extends Component {
  render() {
    return (
      <div className="d-flex">
        <Sidebar />

        <div className="content p-4">
          <h2 className="mb-4">Home</h2>

          <div className="card mb-4">
            <div className="card-body">
              This is a blank page you can use as a starting point.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
