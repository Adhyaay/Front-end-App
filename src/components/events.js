import React from "react";

import AdhyaayEvents from "./adhyaayEvents";
import HobbyEvents from "./hobbyEvents";
import LitEvents from "./litEvents";

import { connect } from "react-redux";
import axios from "axios";
import history from "./history";

//images
import arrowImage from "../images/arrow.png";
import eventsAdhyaayImage from "../images/eventsAdhyaay.jpg";
import eventsHobbyImage from "../images/eventsHobby.jpg";
import eventsLitImage from "../images/eventsLit.jpg";

class Events extends React.Component {
  state = {
    className: null,
    timeOut: false,
    buttonDisplay: true
  };

  onClickFirstDiv = () => {
    this.setState({ className: "first" });
    this.timeOut();
  };

  onClickSecondDiv = () => {
    this.setState({ className: "second" });
    this.timeOut();
  };

  onClickThirdDiv = () => {
    this.setState({ className: "third" });
    this.timeOut();
  };

  buttonClick = () => {
    this.setState({ className: null, timeOut: false });
  };

  timeOut = () => {
    setTimeout(() => {
      this.setState({ timeOut: true });
    }, 1000);
  };

  buttonDisplay = () => {
    this.setState({ buttonDisplay: true });
  };

  buttonHide = () => {
    this.setState({ buttonDisplay: false });
  };

  render() {
    return (
      <div className="events-page">
        <div
          className={`councils ${this.state.className}`}
          onClick={this.state.className === null ? this.onClickFirstDiv : null}
        >
          <div
            className="content-wrapper"
            style={{ backgroundImage: `url(${eventsAdhyaayImage})` }}
          >
            <div className="content-wrapper--title">
              ANDAAZ
              <span className="content-wrapper--title-secondary">
                View Events &rarr;
              </span>
            </div>
            {this.state.className && (
              <button className="back-button" onClick={this.buttonClick}>
                {" "}
                <img src={arrowImage} alt="back" />{" "}
              </button>
            )}
            {this.state.className === "first" && this.state.timeOut && (
              <AdhyaayEvents />
            )}
          </div>
        </div>
        <div
          className={`councils ${this.state.className}`}
          onClick={this.state.className === null ? this.onClickSecondDiv : null}
        >
          <div
            className="content-wrapper"
            style={{ backgroundImage: `url(${eventsHobbyImage})` }}
          >
            <div className="content-wrapper--title">
              AAGAZ
              <span className="content-wrapper--title-secondary">
                View Events &rarr;
              </span>
            </div>
            {this.state.className && this.state.buttonDisplay && (
              <button className="back-button" onClick={this.buttonClick}>
                {" "}
                <img src={arrowImage} alt="back" />{" "}
              </button>
            )}
            {this.state.className === "second" && this.state.timeOut && (
              <HobbyEvents
                buttonDisplay={this.buttonDisplay}
                buttonHide={this.buttonHide}
              />
            )}
          </div>
        </div>
        <div
          className={`councils ${this.state.className}`}
          onClick={this.state.className === null ? this.onClickThirdDiv : null}
        >
          <div
            className="content-wrapper"
            style={{ backgroundImage: `url(${eventsLitImage})` }}
          >
            <div className="content-wrapper--title">
              ALFAAZ
              <span className="content-wrapper--title-secondary">
                View Events &rarr;
              </span>
            </div>
            {this.state.className && this.state.buttonDisplay && (
              <button className="back-button" onClick={this.buttonClick}>
                {" "}
                <img src={arrowImage} alt="back" />{" "}
              </button>
            )}
            {this.state.className === "third" && this.state.timeOut && (
              <LitEvents
                buttonDisplay={this.buttonDisplay}
                buttonHide={this.buttonHide}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Events;
