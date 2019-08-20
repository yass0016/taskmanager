import React, { Component } from "react";
import { connect } from "react-redux";

import { register } from "../../../redux/actions/auth";

import Sidebar from "../../layout/Sidebar";

class RegisterPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: null,
      lastname: null,
      email: null,
      password: null
    };
  }

  onFirstNameChange(e) {
    this.setState({
      firstname: e.target.value
    });
  }

  onLastNameChange(e) {
    this.setState({
      lastname: e.target.value
    });
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

  register(e) {
    e.preventDefault();

    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
      this.state.firstname.length > 1 &&
      this.state.lastname.length > 1 &&
      this.state.email.length > 0 &&
      this.state.password.length >= 6 &&
      re.test(String(this.state.email).toLowerCase())
    )
      this.props.register(
        this.state.firstname,
        this.state.lastname,
        this.state.email,
        this.state.password
      );
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
                <form onSubmit={this.register.bind(this)}>
                  <div className="form-group">
                    <label htmlFor="firstname">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstname"
                      placeholder="First Name"
                      required
                      onChange={this.onFirstNameChange.bind(this)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastname">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastname"
                      placeholder="Last Name"
                      required
                      onChange={this.onLastNameChange.bind(this)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Email"
                      required
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
                      required
                      onChange={this.onPasswordChange.bind(this)}
                    />
                  </div>

                  <div>
                    <button className="btn btn-primary">Register</button>
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
    register
  }
)(RegisterPage);
