import React from 'react';


import MechMarvelEvents from './mechMarvelEvents';
import ElectromaniaEvents from './electromaniaEvents';
import GameOfCodesEvents from './gameOfCodes';
import DiversosEvents from './diversosEvents';
import DesignEvents from './designEvents';
import CentralStageEvents from './centralStageEvents';

import history from "../history";

//images
import arrowImage from "../../images/arrow.png";
import mechMarvelImage from "../../images/events-mech-marvel.jpg";
import electromaniaImage from '../../images/events-electromania.jpg';
import gameOfCodesImage from '../../images/events-game-of-codes.png';
import diversosImage from '../../images/events-diversos.jpg';
import designImage from '../../images/events-design.jpeg';
import centralStageImage from '../../images/events-central-stage.jpg';


class TechnicalEvents extends React.Component {
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
  onClickForthDiv = () => {
    this.setState({ className: "forth" });
    this.timeOut();
  };
  onClickFifthDiv = () => {
    this.setState({ className: "fifth" });
    this.timeOut();
  };
  onClickSixthDiv = () => {
    this.setState({ className: "sixth" });
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
      <>
      <button className="back-button" onClick={e => history.goBack()}>
          <i className="material-icons">arrow_back</i>
        </button>
      <div className="technical-events-page">
          <div className={`top-wrapper ${this.state.className}`}>
        <div
          className={`councils ${this.state.className}`}
          onClick={this.state.className === null ? this.onClickFirstDiv : null}
        >
          <div
            className="content-wrapper"
            style={{ backgroundImage: `url(${mechMarvelImage})` }}
          >
            <div className="content-wrapper--title">
              MECH MARVEL
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
              <MechMarvelEvents />
            )}
          </div>
        </div>
        <div
          className={`councils ${this.state.className}`}
          onClick={this.state.className === null ? this.onClickSecondDiv : null}
        >
          <div
            className="content-wrapper"
            style={{ backgroundImage: `url(${electromaniaImage})` }}
          >
            <div className="content-wrapper--title">
              ELECTRO MANIA
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
            {this.state.className === "second" && this.state.timeOut && (
              <ElectromaniaEvents 
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
            style={{ backgroundImage: `url(${gameOfCodesImage})` }}
          >
            <div className="content-wrapper--title">
              GAME OF CODES
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
              <GameOfCodesEvents
                buttonDisplay={this.buttonDisplay}
                buttonHide={this.buttonHide}
              />
            )}
          </div>
        </div>
        </div>

        <div className={`bottom-wrapper ${this.state.className}`}>
        <div
          className={`councils ${this.state.className}`}
          onClick={this.state.className === null ? this.onClickForthDiv : null}
        >
          <div
            className="content-wrapper"
            style={{ backgroundImage: `url(${diversosImage})` }}
          >
            <div className="content-wrapper--title">
              DIVERSOS
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
            {this.state.className === "forth" && this.state.timeOut && (
              <DiversosEvents
                buttonDisplay={this.buttonDisplay}
                buttonHide={this.buttonHide}
              />
            )}
          </div>
        </div>
        <div
          className={`councils ${this.state.className}`}
          onClick={this.state.className === null ? this.onClickFifthDiv : null}
        >
          <div
            className="content-wrapper"
            style={{ backgroundImage: `url(${designImage})` }}
          >
            <div className="content-wrapper--title">
              DESIGN
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
            {this.state.className === "fifth" && this.state.timeOut && (
              <DesignEvents
                buttonDisplay={this.buttonDisplay}
                buttonHide={this.buttonHide}
              />
            )}
          </div>
        </div>
        <div
          className={`councils ${this.state.className}`}
          onClick={this.state.className === null ? this.onClickSixthDiv : null}
        >
          <div
            className="content-wrapper"
            style={{ backgroundImage: `url(${centralStageImage})` }}
          >
            <div className="content-wrapper--title">
              CENTRAL STAGE
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
            {this.state.className === "sixth" && this.state.timeOut && (
              <CentralStageEvents
                buttonDisplay={this.buttonDisplay}
                buttonHide={this.buttonHide}
              />
            )}
          </div>
        </div>
        </div>
      </div>
      </>
    );
  }
}

export default TechnicalEvents;
