import React, { Component } from "react";
import { connect } from "react-redux";

import { login } from "../../../redux/actions/auth";

import Sidebar from "../../layout/Sidebar";

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: null,
      password: null
    };
  }

  onEmailChange(e) {
    this.setState({
      email: e.target.value
    });
  }

  onPasswordChange(e) {
    this.setState({
      password: e.target.value
    });
  }

  login(e) {
    e.preventDefault();

    this.props.login(this.state.email, this.state.password);
  }

  componentDidMount() {
    if (this.props.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  render() {
    return (
      <div className="d-flex">
        <Sidebar />

        <div className="content p-4">
          <h2 className="mb-4">Home</h2>

          <div className="card mb-4">
            <div className="card-body">
              <div className="">
                <form onSubmit={this.login.bind(this)}>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Email"
                      onChange={this.onEmailChange.bind(this)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Password"
                      onChange={this.onPasswordChange.bind(this)}
                    />
                  </div>

                  <div>
                    <button className="btn btn-primary">Login</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.authState.isAuthenticated
  };
};

export default connect(
  mapStateToProps,
  {
    login
  }
)(LoginPage);
