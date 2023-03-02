import { createSlice } from "@reduxjs/toolkit"
import { AppThunk } from "../hooks"
import { AppDispatch } from "../store"
import { registerUserRequestApi } from "../../api"
import { setCookie } from "../../utils"
import { setError } from "./appSlice"
import { CODES } from "../../utils/errors"
import { setUserData } from "./userSlice"

export type TRegisterState = {
  registerRequest: boolean
  registerSuccess: boolean
  registerFailed: boolean
}

export const initialState: TRegisterState = {
  registerRequest: false,
  registerFailed: false,
  registerSuccess: false,
}

export const registerSlice = createSlice({
  name: "registration",
  initialState,
  reducers: {
    registerUserRequest: (state) => {
      Object.assign(state, {
        registerRequest: true,
        registerFailed: false,
        registerSuccess: false,
      })
    },
    registerUserSuccess: (state) => {
      Object.assign(state, {
        registerRequest: false,
        registerFailed: false,
        registerSuccess: true,
      })
    },
    registerUserFailed: (state) => {
      Object.assign(state, {
        registerRequest: false,
        registerFailed: true,
        registerSuccess: false,
      })
    },
  },
})

export default registerSlice.reducer
export const { registerUserRequest, registerUserSuccess, registerUserFailed } =
  registerSlice.actions

export const registerUser: AppThunk =
  ({ firstName, lastName, email, password, organization }) =>
  (dispatch: AppDispatch) => {
    dispatch(registerUserRequest())
    registerUserRequestApi({
      firstName,
      lastName,
      email,
      password,
      organization,
    })
      .then((res) => {
        setCookie("Token", res.access)
        localStorage.setItem("accessToken", res.refresh)
        dispatch(registerUserSuccess())
        dispatch(setUserData(res))
      })
      .catch((error) => {
        dispatch(registerUserFailed())
        dispatch(setError(CODES.SERVER_ERR))
        console.log(error)
      })
  }
