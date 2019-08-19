import { push } from "connected-react-router";
import { LOGIN, LOGIN_SUCCESS, LOGOUT } from "../types/auth";

export const login = (email, password) => {
  return dispatch => {
    dispatch({
      type: LOGIN
    });

    dispatch({
      type: LOGIN_SUCCESS,
      user: {
        firstname: "Saleh",
        lastname: "Yassin"
      }
    });

    dispatch(push("/"));
  };
};

export const logout = () => {
  return dispatch => {
    dispatch({
      type: LOGOUT
    });
  };
};
