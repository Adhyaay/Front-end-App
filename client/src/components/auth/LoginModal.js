import React, { Component } from "react";
import { Alert } from "reactstrap";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/authActions";
import { clearErrors } from "../../actions/errorActions";
import history from "../history";

class LoginModal extends Component {
  state = {
    modal: false,
    email: "",
    password: "",
    message: null
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { isAuthenticated } = this.props;
    if (isAuthenticated) {
      history.push("/");
    }
  }

  componentDidUpdate(prevprops) {
    const { error, isAuthenticated } = this.props;
    if (error !== prevprops.error) {
      // check for register error
      if (error.id === "LOGIN_FAIL") {
        this.setState({ message: error.message.message });
      } else {
        this.setState({ message: null });
      }
    }

    // if authenticated close model
    if (isAuthenticated) {
      this.props.clearErrors();
      history.push("/");
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const { email, password } = this.state;
    const user = {
      email: email,
      password: password
    };

    // attempt to login
    this.props.login(user);
  };

  render() {
    return (
      <div className="box">
        <h2>Login</h2>
        {this.state.message ? (
          <Alert color="danger">{this.state.message}</Alert>
        ) : null}
        <form onSubmit={this.onSubmit}>
          <div className="inputbox">
            <input
              type="email"
              name="email"
              id="email"
              onChange={this.onChange}
            />
            <label>Email</label>
          </div>

          <div className="inputbox">
            <input
              type="password"
              name="password"
              id="password"
              onChange={this.onChange}
            />
            <label>Password</label>
          </div>

          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
});

export default connect(
  mapStateToProps,
  { login, clearErrors }
)(LoginModal);
