import { push } from "connected-react-router";
import { usersService, app } from "../../utils/feathers";

import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT,
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_FAILED
} from "../types/auth";

export const register = (firstname, lastname, email, password) => {
  return dispatch => {
    dispatch({
      type: REGISTER
    });

    usersService
      .create({ firstname, lastname, email, password })
      .then(response => {
        app
          .authenticate({
            strategy: "local",
            email,
            password
          })
          .then(response => {
            return app.passport.verifyJWT(response.accessToken);
          })
          .then(payload => {
            usersService
              .get(payload.userId)
              .then(user => {
                dispatch({
                  type: REGISTER_SUCCESS,
                  user
                });
                dispatch(push("/"));
              })
              .catch(error => {
                dispatch({
                  type: REGISTER_FAILED,
                  error: error.message
                });
              });
          })
          .catch(e => Promise.reject(e));
      })
      .catch(error => {
        dispatch({
          type: REGISTER_FAILED,
          error: error.message
        });
      });
  };
};

export const login = (email, password) => {
  return dispatch => {
    dispatch({
      type: LOGIN
    });

    app
      .authenticate({
        strategy: "local",
        email,
        password
      })
      .then(response => {
        return app.passport.verifyJWT(response.accessToken);
      })
      .then(payload => {
        usersService
          .get(payload.userId)
          .then(user => {
            dispatch({
              type: LOGIN_SUCCESS,
              user
            });

            dispatch(push("/"));
          })
          .catch(error => {
            dispatch({
              type: LOGIN_FAILED,
              error: error.message
            });
          });
      })
      .catch(e => Promise.reject(e));
  };
};

export const logout = () => {
  return dispatch => {
    app.logout().then(result => {
      dispatch({
        type: LOGOUT
      });
    });
  };
};
