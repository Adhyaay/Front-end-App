import axios from "axios";
import { returnErrors } from "./errorActions.js";

import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_FAIL,
  MAIL_CONFIRM
} from "./types";

//   Check token and load user
export const loadUser = () => (dispatch, getState) => {
  // user loading
  console.log("hii");
  dispatch({ type: USER_LOADING });

  axios
    .get(
      "https://gentle-dusk-33875.herokuapp.com/api/auth/user",
      tokenConfig(getState)
    )
    .then(res =>
      dispatch({
        type: USER_LOADED,
        payload: res.data
      })
    )
    .catch(err => {
      if (err.response && err.response.data)
        dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR
      });
    });
};

export const clearAuthMessage = () => {
  return {
    type: "CLEAR_AUTH_MESSAGE"
  };
};

//  Regsiter User
export const register = ({
  email,
  password,
  name,
  college,
  branch,
  year,
  phone
}) => dispatch => {
  // Header
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  // Request Body
  const body = JSON.stringify({
    email,
    password,
    name,
    college,
    branch,
    year,
    phone
  });
  axios
    .post("https://gentle-dusk-33875.herokuapp.com/api/register", body, config)
    .then(res =>
      dispatch({
        type: MAIL_CONFIRM,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "REGISTER_FAIL")
      );
      dispatch({
        type: REGISTER_FAIL
      });
    });
};

//  Login User

export const login = ({ email, password }) => dispatch => {
  // Header
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  // Request Body
  const body = JSON.stringify({
    email,
    password
  });
  axios
    .post("https://gentle-dusk-33875.herokuapp.com/api/auth", body, config)
    .then(res =>
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "LOGIN_FAIL")
      );
      dispatch({
        type: LOGIN_FAIL
      });
    });
};

//  Logout User
export const logout = () => {
  return {
    type: LOGOUT_SUCCESS
  };
};

// setup config/Headers and token
export const tokenConfig = getState => {
  // Get token from localStroage
  const token = getState().auth.token;

  //  Header
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };

  // if Token, add to headers
  if (token) {
    config.headers["x-auth-token"] = token;
  }

  return config;
};
