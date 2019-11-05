import React from "react";
import Particles from "react-particles-js";

//images
import DhruvImage from "../images/dhruv.jpg";
import YashiImage from "../images/yashi.jpg";
import VishalImage from "../images/vishal.jpeg";
import swarnImage from "../images/swarn.jpg";
// import prateekImage from "../images/prateek.jpg";
import LalitImage from "../images/lalit.png";
import lanternImage1 from "../images/lantern1.png";
import lanternImage2 from "../images/lantern2.png";
import lanternImage3 from "../images/lantern3.png";
import lanternImage4 from "../images/lantern4.png";
import glowImage from "../images/glow.png";

class Council extends React.Component {
  state = {
    position: 0
  };

  componentDidMount() {
    this.myInterval = setInterval(() => {
      if (this.state.position < 300) {
        this.setState({ position: this.state.position + 100 });
      } else {
        this.setState({ position: 0 });
      }
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.myInterval);
  }

  render() {
    return (
      <>
        <div className="animation-wrapper">
          <div className="particle-js-wrapper">
            <Particles
              params={{
                particles: {
                  number: {
                    value: 360,
                    density: {
                      enable: false
                    }
                  },
                  color: {
                    value: "#D4AF37"
                  },
                  size: {
                    value: 3,
                    random: true,
                    anim: {
                      speed: 4,
                      size_min: 0.3
                    }
                  },
                  line_linked: {
                    enable: false
                  },
                  move: {
                    random: true,
                    speed: 1,
                    direction: "top",
                    out_mode: "out"
                  }
                },
                interactivity: {
                  events: {
                    onhover: {
                      enable: true,
                      mode: "bubble"
                    },
                    onclick: {
                      enable: true,
                      mode: "repulse"
                    }
                  },
                  modes: {
                    bubble: {
                      distance: 250,
                      duration: 2,
                      size: 0,
                      opacity: 0
                    },
                    repulse: {
                      distance: 400,
                      duration: 4
                    }
                  }
                }
              }}
            />
          </div>
          <div className="image">
            <img src={lanternImage1} alt="lantern" />
            <img src={glowImage} alt="glow" />
          </div>
          <div className="image">
            <img src={lanternImage2} alt="lantern" />
            <img src={glowImage} alt="glow" />
          </div>
          <div className="image">
            <img src={lanternImage3} alt="lantern" />
            <img src={glowImage} alt="glow" />
          </div>
          <div className="image">
            <img src={lanternImage4} alt="lantern" />
            <img src={glowImage} alt="glow" />
          </div>
        </div>
        <div className="section-heading">Council</div>
        <div className="council-wrapper">
          <div className="council-convenor">
            <div className="council-convenor--heading">
              Cultural Sub-Council Convenor
            </div>
            <img src={LalitImage} alt="Lalit Sir" />
            <span className="council-convenor--name">Dr. Lalit Kumar</span>
            <span></span>
          </div>
          <div className="council-secretaries">
            <div className="council-secretaries--heading">SECRETARIES</div>
            <div
              className="council-secretaries--wrapper"
              style={{ left: `-${this.state.position}%` }}
            >
              <div className="council-secretary">
                <img src={DhruvImage} alt="Dhruv" />
                <span className="council-secretary--name">Dhruv Kaul</span>
                <span className="council-secretary--title">
                  Cultural Secretary
                </span>
                <span className="council-secretary--contact">
                  <a href="tel:7704901919">+91 7704901919</a>
                </span>
              </div>
              <div className="council-secretary">
                <img src={VishalImage} alt="Vishal" />
                <span className="council-secretary--name">Vishal Singh</span>
                <span className="council-secretary--title">
                  Literery Secretary
                </span>
                <span className="council-secretary--contact">
                  <a href="tel:7704901919">+91 8115376687</a>
                </span>
              </div>
              {/* <div className='council-secretary'>
                            <img src={prateekImage} alt='prateek'/>
                            <span className='council-secretary--name'>Prateek Singh</span>
                            <span className='council-secretary--title'>Technical Secretary</span>
                            <span className='council-secretary--contact'><a href='tel:7704901919'>+91 8542977811</a></span>
                        </div> */}
              <div className="council-secretary">
                <img src={YashiImage} alt="Yashi" />
                <span className="council-secretary--name">Yashi Rai</span>
                <span className="council-secretary--title">
                  Hobby Secretary
                </span>
                <span className="council-secretary--contact">
                  <a href="tel:8009048668">+91 8009048668</a>
                </span>
              </div>
              <div className="council-secretary">
                <img src={swarnImage} alt="Yashi" />
                <span className="council-secretary--name">
                  Swarn Srivastava
                </span>
                <span className="council-secretary--title">
                  Photography Secretary
                </span>
                <span className="council-secretary--contact">
                  <a href="tel:8009048668">+91 8601296688</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Council;
