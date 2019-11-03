import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Logout from "./auth/Logout";

class Navbar extends React.Component {
  static propTypes = {
    auth: PropTypes.object.isRequired
  };
  state = {
    navClassName: null
  };

  onClickNavButton = () => {
    if (this.state.navClassName === null) {
      this.setState({ navClassName: "change" });
    } else {
      this.setState({ navClassName: null });
    }
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <Fragment>
        <li>
          <span className="navbar-text mr-3">
            <strong>{user ? `Welcome ${user.name}` : ""}</strong>
          </span>
        </li>
        <li>
          <Logout />
        </li>
      </Fragment>
    );

    const guestLinks = (
      <Fragment>
        <Link to="/register" className="link left">
          <li>Register</li>
        </Link>
        <Link to="/login" className="link left">
          <li>Login</li>
        </Link>
      </Fragment>
    );

    return (
      <div className="navbar">
        <div
          className={`nav-button ${this.state.navClassName}`}
          onClick={this.onClickNavButton}
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
        <div className={`navbar-wrapper ${this.state.navClassName}`}>
          <div className={`nav-button`} onClick={this.onClickNavButton}>
            <div className="bar1"></div>
            <div className="bar2"></div>
          </div>
          <ul>
            {isAuthenticated ? authLinks : guestLinks}
            <Link to="/" className="link">
              <li>Home</li>
            </Link>
            <Link to="/events" className="link">
              <li>Events</li>
            </Link>
            <Link to="/" className="link">
              <li>Sponsers</li>
            </Link>
            <Link to="/" className="link">
              <li>Team</li>
            </Link>
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  null
)(Navbar);
