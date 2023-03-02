import { AppThunk } from "../hooks"
import { AppDispatch } from "../store"
import { TProfile, TRegisterUserResponse, TLoginProfile } from "./types"
import {
  getUserDataApi,
  loginUserRequestApi,
  registerUserRequestApi,
} from "../../api"

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
import { getCookie, setCookie } from "../../utils"

export interface IRegisterRequestAction {
  readonly type: typeof REGISTER_USER_REQUEST
}

export interface IRegisterSuccessAction {
  readonly type: typeof REGISTER_USER_SUCCESS
  readonly user: TProfile
}

export interface IRegisterFailedAction {
  readonly type: typeof REGISTER_USER_FAILED
}

export interface ILoginRequestAction {
  readonly type: typeof LOGIN_USER_REQUEST
}

export interface ILoginSuccessAction {
  readonly type: typeof LOGIN_USER_SUCCESS
  readonly user: TProfile
}

export interface ILoginFailedAction {
  readonly type: typeof LOGIN_USER_FAILED
}

export interface IAuthUserRequestAction {
  readonly type: typeof AUTH_USER_REQUEST
}

export interface IAuthUserSuccessAction {
  readonly type: typeof AUTH_USER_SUCCESS
  readonly user: TProfile
}

export interface IAuthUserFailedAction {
  readonly type: typeof AUTH_USER_FAILED
}

export interface IAuthCheckAction {
  readonly type: typeof AUTH_CHECKED
}

export type TUserAuthActions =
  | IRegisterRequestAction
  | IRegisterSuccessAction
  | IRegisterFailedAction
  | ILoginRequestAction
  | ILoginSuccessAction
  | ILoginFailedAction
  | IAuthUserRequestAction
  | IAuthUserSuccessAction
  | IAuthUserFailedAction
  | IAuthCheckAction

export const registerRequestAction = () => ({
  type: REGISTER_USER_REQUEST,
})

export const registerSuccessAction = (user: TProfile) => ({
  type: REGISTER_USER_SUCCESS,
  user,
})

export const registerFailedAction = () => ({
  type: REGISTER_USER_FAILED,
})

export const loginRequestAction = () => ({
  type: LOGIN_USER_REQUEST,
})

export const loginSuccessAction = (user: TProfile) => ({
  type: LOGIN_USER_SUCCESS,
  user,
})

export const loginFailedAction = () => ({
  type: LOGIN_USER_FAILED,
})

export const authRequestAction = () => ({
  type: AUTH_USER_REQUEST,
})

export const authSuccessAction = (user: TProfile) => ({
  type: AUTH_USER_SUCCESS,
  user,
})

export const authFailedAction = () => ({
  type: AUTH_USER_FAILED,
})

export const authCheckAction = () => ({
  type: AUTH_CHECKED,
})

export const registerUser: AppThunk =
  ({ email, password, firstName, lastName, organization }: TProfile) =>
  (dispatch: AppDispatch) => {
    dispatch({
      type: REGISTER_USER_REQUEST,
    })
    registerUserRequestApi({
      email,
      password,
      firstName,
      lastName,
      organization,
    })
      .then((res) => {
        if (res) {
          const authToken = res.access
          const refreshToken = res.refresh
          setCookie("Token", authToken)
          localStorage.setItem("refreshToken", refreshToken)
          dispatch({
            type: REGISTER_USER_SUCCESS,
            user: res,
          })
        }
      })
      .catch((error) => {
        dispatch({
          type: REGISTER_USER_FAILED,
        })
        console.log(error)
      })
  }

export const loginUser: AppThunk =
  ({ email, password }: TLoginProfile) =>
  (dispatch: AppDispatch) => {
    dispatch({
      type: LOGIN_USER_REQUEST,
    })
    loginUserRequestApi({ email, password })
      .then((res) => {
        if (res) {
          const authToken = res.access
          const refreshToken = res.refresh
          setCookie("Token", authToken)
          localStorage.setItem("refreshToken", refreshToken)
          dispatch({
            type: LOGIN_USER_SUCCESS,
            user: res,
          })
        }
      })
      .catch((error) => {
        dispatch({
          type: LOGIN_USER_FAILED,
        })
        console.log(error)
      })
  }

export const authUser: AppThunk = () => (dispatch: AppDispatch) => {
  dispatch({
    type: AUTH_USER_REQUEST,
  })
  getUserDataApi()
    .then((res) => {
      if (res) {
        dispatch({
          type: AUTH_USER_SUCCESS,
          user: res,
        })
      }
    })
    .catch((error) => {
      dispatch({
        type: AUTH_USER_FAILED,
      })
      console.log(error)
    })
}

export const checkUserAuth: AppThunk = () => async (dispatch) => {
  if (getCookie("Token")) {
    try {
      await dispatch(authUser())
    } catch (error) {
      console.log(error)
    }
  }
  await dispatch({ type: AUTH_CHECKED })
}
