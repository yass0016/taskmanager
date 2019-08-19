import React, { Component } from "react";
import Sidebar from "../../layout/Sidebar";

class NoMatchPage extends Component {
  render() {
    return (
      <div className="d-flex">
        <Sidebar />

        <div className="content p-4">
          <h2 className="mb-4">Error 404: Page Not Found</h2>
        </div>
      </div>
    );
  }
}

export default NoMatchPage;
