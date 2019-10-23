import React, { Component, Fragment } from "react";
import Particles from "react-particles-js";
import { Link } from "react-router-dom";
import MainLogo from "./mainLogo";

import { connect } from "react-redux";
import PropTypes from "prop-types";

import Logout from "./auth/Logout";

import About from "./about";

//images
import lightRaysImage from "../images/lightRays.png";

class Home extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired
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
        <Link to="/register" className="link">
          <li>Register</li>
        </Link>
        <Link to="/login" className="link">
          <li>Login</li>
        </Link>
      </Fragment>
    );

    return (
      <div className="body-wrapper">
        <div className="section-main">
          <div className="stars-wrapper">
            <div className="night">
              <div className="shooting_star"></div>
              <div className="shooting_star"></div>
              <div className="shooting_star"></div>
            </div>
          </div>
          <div className="particle-js-wrapper">
            <MainLogo />
            <Particles
              params={{
                particles: {
                  number: {
                    value: 250,
                    density: {
                      enable: true,
                      value_area: 1500
                    }
                  },
                  line_linked: {
                    enable: false,
                    opacity: 0.02
                  },
                  move: {
                    direction: "right",
                    speed: 0.05
                  },
                  size: {
                    value: 1
                    // "random": true,
                  },
                  opacity: {
                    anim: {
                      enable: true,
                      speed: 1,
                      opacity_min: 0.05
                    }
                  }
                },
                interactivity: {
                  events: {
                    onclick: {
                      enable: true,
                      mode: "push"
                    }
                  },
                  modes: {
                    push: {
                      particles_nb: 1
                    }
                  }
                },
                retina_detect: true
              }}
            />
          </div>
          <div className="section-main--logo"></div>
          <div className="section-main--nav laptop">
            <ul>
              <Link to="/events" className="link">
                <li>Events</li>
              </Link>
              <li>Sponsors</li>
              <li>Contact Us</li>
              {isAuthenticated ? authLinks : guestLinks}
            </ul>
          </div>
          <div className="section-main--title">
            <div className="section-main--title_letter">
              <span className="main">A</span>
              <span className="shadow">A</span>
            </div>
            <div className="section-main--title_letter">
              <span className="main">D</span>
              <span className="shadow">D</span>
            </div>
            <div className="section-main--title_letter">
              <span className="main">H</span>
              <span className="shadow">H</span>
            </div>
            <div className="section-main--title_letter">
              <span className="main">Y</span>
              <span className="shadow">Y</span>
            </div>
            <div className="section-main--title_letter">
              <span className="main">A</span>
              <span className="shadow">A</span>
            </div>
            <div className="section-main--title_letter">
              <span className="main">A</span>
              <span className="shadow">A</span>
            </div>
            <div className="section-main--title_letter">
              <span className="main">Y</span>
              <span className="shadow">Y</span>
            </div>
          </div>
          <div className="rays-wrapper">
            <img src={lightRaysImage} alt="emiting rays" />
          </div>
          <div className="mountains">
            <div className="mountains-one"></div>
            <div className="mountains-two"></div>
            <div className="mountains-three"></div>
          </div>
        </div>
        <div className="section-about">
          <About />
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
)(Home);
