import React, { Component } from "react";
import { Alert } from "reactstrap";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { register } from "../../actions/authActions";
import { clearErrors } from "../../actions/errorActions";
import history from "../history";

class registerModal extends Component {
  state = {
    modal: false,
    name: "",
    email: "",
    password: "",
    message: null
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    register: PropTypes.func.isRequired,
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
      if (error.id === "REGISTER_FAIL") {
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
    const { email, password, name, college, branch, year, phone } = this.state;

    // Create user Object
    const newUser = {
      email,
      password,
      name,
      college,
      branch,
      year,
      phone
    };

    // Attempt to register
    this.props.register(newUser);
  };

  render() {
    return (
      <div className="box">
        <h2>Register</h2>
        {this.state.message ? (
          <Alert color="danger">{this.state.message}</Alert>
        ) : null}
        <form onSubmit={this.onSubmit}>
          <div className="inputbox">
            <input
              type="text"
              name="email"
              id="email"
              onChange={this.onChange}
            />
            <label>Email</label>
          </div>

          <div className="inputbox">
            <input
              type="text"
              name="password"
              id="password"
              onChange={this.onChange}
            />
            <label>Password</label>
          </div>

          <div className="inputbox">
            <input type="name" name="name" id="name" onChange={this.onChange} />
            <label>Name</label>
          </div>

          <div className="inputbox">
            <input
              type="text"
              name="college"
              id="college"
              onChange={this.onChange}
            />
            <label>college</label>
          </div>

          <div className="inputbox">
            <input
              type="text"
              name="branch"
              id="branch"
              onChange={this.onChange}
            />
            <label>branch</label>
          </div>

          <div className="inputbox">
            <input
              type="Number"
              name="year"
              id="year"
              onChange={this.onChange}
            />
            <label>year</label>
          </div>

          <div className="inputbox">
            <input
              type="number"
              name="phone"
              id="phone"
              onChange={this.onChange}
            />
            <label>phone</label>
          </div>

          <button type="submit">Register</button>
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
  { register, clearErrors }
)(registerModal);
