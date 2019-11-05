import React, { Component } from "react";
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
  onClickLink = () => {
    this.setState({ navClassName: null });
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLink1 = (
      <>
        <li className='special3' >
          <span className="navbar-text mr-3">
            <strong>{user ? `Welcome ${user.name.split(' ')[0]}` : ""}</strong>
          </span>
        </li>
      </>
    );

    const authLink2 = (
      <>
        <li onClick={this.onClickLink} className='special2'>
          <Logout />
        </li>
      </>
    );

    const guestLink1 = (
      <>
        <Link to="/register" className="link">
          <li onClick={this.onClickLink} className='special'>Register</li>
        </Link>
      </>
    );

    const guestLink2 = (
      <>
        <Link to="/login" className="link">
          <li onClick={this.onClickLink} className='special2'>Login</li>
        </Link>
      </>
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
            {isAuthenticated ? authLink1 : guestLink1}
            <Link to="/" className="link">
              <li onClick={this.onClickLink}>Home</li>
            </Link>
            <Link to="/events" className="link">
              <li onClick={this.onClickLink}>Events</li>
            </Link>
            <Link to="/" className="link">
              <li onClick={this.onClickLink}>Sponsors</li>
            </Link>
            <Link to="/" className="link">
              <li onClick={this.onClickLink}>Team</li>
            </Link>
            {isAuthenticated ? authLink2 : guestLink2}
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
