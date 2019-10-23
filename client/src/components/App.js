import React from "react";
import { Router, Route } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "../actions/authActions";

import Loader from "./loader";
import Home from "./home";
import Events from "./events";
// import Music from "./music";
import RegsterModal from "./auth/RegisterModal";
import LoginModal from "./auth/LoginModal";
import history from "./history";

class App extends React.Component {
  state = { loading: true };

  sleep = milliseconds => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  };

  wait = async (milliseconds = 2000) => {
    await this.sleep(milliseconds);
    this.setState({
      loading: false
    });
  };

  // 4 sec for loading screen
  componentDidMount() {
    store.dispatch(loadUser());
    this.wait(2000);
  }

  render() {
    if (this.state.loading) return <Loader />;
    return (
      <Provider store={store}>
        {/* <Music /> */}
        <Router history={history}>
          <Route path="/" exact component={Home} />
          <Route path="/events" exact component={Events} />
          <Route path="/register" exact component={RegsterModal} />
          <Route path="/login" exact component={LoginModal} />
        </Router>
      </Provider>
    );
  }
}

export default App;
