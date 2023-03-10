import { createSlice } from "@reduxjs/toolkit"

export type TGetUserInfo = {
  id: number
  firstName: string
  email: string
  lastName: string
  organization: string
}

interface IUserSliceState {
  isLoggedIn: boolean
  loginRequest: boolean
  loginFailed: boolean
  loginError: boolean
  firstName: string
  lastName: string
  email: string
  password: string
  organization: string
}

const initialState: IUserSliceState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  organization: "",
  loginRequest: false,
  loginFailed: false,
  isLoggedIn: false,
  loginError: false,
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      console.log(action)
      Object.assign(state, {
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        organization: action.payload.organization,
        isLoggedIn: true,
      })
    },
    logoutUser: (state) => {
      Object.assign(state, {
        loginRequest: false,
        loginFailed: false,
        isLoggedIn: false,
        loginError: false,
      })
    },
  },
})

export default userSlice.reducer
export const { setUserData, logoutUser } = userSlice.actions
