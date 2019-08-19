import React, { Component } from "react";
import { connect } from "react-redux";

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
              {"Welcome " +
                this.props.user.firstname +
                " " +
                this.props.user.lastname}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.authState.user
  };
};

export default connect(
  mapStateToProps,
  {}
)(HomePage);
