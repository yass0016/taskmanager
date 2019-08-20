import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  LOGOUT,
  REGISTER
} from "../types/auth";

const defaultState = {
  isAuthenticated: false,
  user: {},
  loading: false,
  error: null
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loading: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.user,
        error: null
      };
    case LOGIN_FAILED:
      return {
        ...state,
        error: action.error,
        user: {},
        loading: false,
        isAuthenticated: false
      };
    case REGISTER:
      return {
        ...state,
        loading: true
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.user,
        error: null
      };
    case REGISTER_FAILED:
      return {
        ...state,
        error: action.error,
        user: {},
        loading: false,
        isAuthenticated: false
      };
    case LOGOUT:
      return {
        ...state,
        error: null,
        user: {},
        loading: false,
        isAuthenticated: false
      };
    default:
      return state;
  }
}
