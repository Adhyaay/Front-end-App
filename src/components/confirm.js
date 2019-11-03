import React from "react";
import Particles from "react-particles-js";
import history from "../components/history";
import { connect } from "react-redux";
import { clearAuthMessage } from "../actions/authActions";
import PropTypes from "prop-types";

class Confirm extends React.Component {
  static propTypes = {
    clearAuthMessage: PropTypes.func.isRequired
  };
  componentDidMount() {
    const { isAuthenticated, authMessage } = this.props;
    if (isAuthenticated || !authMessage) {
      this.props.clearAuthMessage();
      history.push("/");
    }
  }

  render() {
    return (
      <div className="body-wrapper">
        <section className="section-main">
          <div className="stars-wrapper">
            <div className="night">
              <div className="shooting_star"></div>
              <div className="shooting_star"></div>
              <div className="shooting_star"></div>
            </div>
          </div>
          <button className="back btn red" onClick={e => history.push("/")}>
            <i className="material-icons">arrow_back</i>
          </button>
          <div className="container">
            <h1>Email sent, please check your inbox to confirm!</h1>
          </div>
          <div className="particle-js-wrapper">
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
                    speed: 0.5
                  },
                  size: {
                    value: 1
                    // "random": true,
                  },
                  opacity: {
                    anim: {
                      enable: true,
                      speed: 1,
                      opacity_min: 0.5
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
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
  authMessage: state.auth.message
});

export default connect(
  mapStateToProps,
  { clearAuthMessage }
)(Confirm);
