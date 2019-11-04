import React, { Component } from "react";
import { Alert } from "reactstrap";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/authActions";
import { clearErrors } from "../../actions/errorActions.js";
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
    const options = {
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: false,
      startingTop: "4%",
      endingTop: "10%"
    };
    M.Modal.init(this.Modal, options);
    const { isAuthenticated } = this.props;
    if (isAuthenticated) {
      history.push("/");
    }
  }

  onCancelClick = () => {
    this.setState({
      message: ""
    });
  };

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
      <div className="test1">
        <button className="back btn red" onClick={e => history.push("/")}>
          <i className="material-icons">arrow_back</i>
        </button>
        <div
          ref={Modal => {
            this.Modal = Modal;
          }}
          id="modal1"
          className="modal"
        >
          <div className="modal-content" style={{ background: "black" }}>
            {this.state.message ? (
              <p style={{ color: "red" }}>{this.state.message}</p>
            ) : (
              <p style={{ color: "red" }}>Please Wait</p>
            )}
            <br />
            <div className="row">
              <div className="col s6 btn-1">
                <button
                  href="#"
                  className="modal-close waves-effect waves-red btn-flat red btn-small"
                  onClick={this.onCancelClick}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container login">
          <div className="row valign-wrapper">
            <div className="col s7 offset-s3 valign">
              <div className="card ">
                <div className="card-action red white-text">
                  <h4>Login Form</h4>
                  {/* {this.state.message ? (
                    <Alert color="danger">{this.state.message}</Alert>
                  ) : null} */}
                </div>
                <div className="card-content">
                  <div className="form-field">
                    <label forhtml="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      onChange={this.onChange}
                    />
                  </div>
                  <br />
                  <div className="form-field">
                    <label forhtml="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      onChange={this.onChange}
                    />
                  </div>
                  <br />
                  <div className="form-field center-align">
                    <button
                      className="btn red modal-trigger"
                      data-target="modal1"
                      onClick={this.onSubmit}
                    >
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
