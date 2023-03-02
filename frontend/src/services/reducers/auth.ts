import { TAuthInitialState } from "./types"

import {
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILED,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
  AUTH_USER_REQUEST,
  AUTH_USER_SUCCESS,
  AUTH_USER_FAILED,
  AUTH_CHECKED,
} from "../constants/auth"
import { TUserAuthActions } from "../actions/auth"

export const initialState: TAuthInitialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  organization: "",
  registerRequest: false,
  registerFailed: false,
  loginRequest: false,
  loginFailed: false,
  logoutRequest: false,
  logoutFailed: false,
  tokenRequest: false,
  tokenFailed: false,
  forgotPasswordRequest: false,
  forgotPasswordFailed: false,
  resetPasswordRequest: false,
  resetPasswordFailed: false,
  visitedPath: "",
  authChecked: false,
}

export const userAuthReducer = (
  state = initialState,
  action: TUserAuthActions
) => {
  switch (action.type) {
    case REGISTER_USER_REQUEST: {
      return {
        ...state,
        registerRequest: true,
        registerFailed: false,
      }
    }
    case REGISTER_USER_SUCCESS: {
      return {
        ...state,
        firstName: action.user.firstName,
        lastName: action.user.lastName,
        email: action.user.email,
        password: action.user.password,
        organization: action.user.organization,
        registerRequest: false,
        registerFailed: false,
      }
    }
    case REGISTER_USER_FAILED: {
      return {
        ...state,
        registerRequest: false,
        registerFailed: true,
      }
    }
    case AUTH_USER_REQUEST:
    case LOGIN_USER_REQUEST: {
      return {
        ...state,
        loginRequest: true,
        loginFailed: false,
      }
    }
    case LOGIN_USER_SUCCESS: {
      return {
        ...state,
        loginRequest: false,
        loginFailed: false,
        firstName: action.user.firstName,
        lastName: action.user.lastName,
        email: action.user.email,
        password: action.user.password,
        organization: action.user.organization,
      }
    }
    case AUTH_USER_FAILED:
    case LOGIN_USER_FAILED: {
      return {
        ...state,
        loginRequest: false,
        loginFailed: true,
      }
    }
    case AUTH_USER_SUCCESS: {
      return {
        ...state,
        loginRequest: false,
        loginFailed: false,
        firstName: action.user.firstName,
        lastName: action.user.lastName,
        email: action.user.email,
        organization: action.user.organization,
      }
    }
    case AUTH_CHECKED: {
      return {
        ...state,
        authChecked: true,
      }
    }
    default:
      return state
  }
}
