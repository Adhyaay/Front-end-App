import React, { Component } from "react";
import { Alert } from "reactstrap";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/authActions";
import { clearErrors } from "../../actions/errorActions";
import history from "../history";
import M from "materialize-css";

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
    M.AutoInit();
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
      <div class="test">
        <button className="back btn red" onClick={e => history.push("/")}>
          <i className="material-icons">arrow_back</i>
        </button>
        <div class="container login">
          <div class="row valign-wrapper">
            <div class="col s7 offset-s3 valign">
              <div class="card ">
                <div class="card-action red white-text">
                  <h4>Login Form</h4>
                  {this.state.message ? (
                    <Alert color="danger">{this.state.message}</Alert>
                  ) : null}
                </div>
                <div class="card-content">
                  <div className="form-field">
                    <label for="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      onChange={this.onChange}
                    />
                  </div>
                  <br />
                  <div className="form-field">
                    <label for="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      onChange={this.onChange}
                    />
                  </div>
                  <br />
                  <div className="form-field center-align">
                    <button className="btn red" onClick={this.onSubmit}>
                      Login
                    </button>
                  </div>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
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
