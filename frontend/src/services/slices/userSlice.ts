import { createSlice } from "@reduxjs/toolkit"

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
      Object.assign(state, {
        firstName: action.payload,
        lastName: action.payload,
        email: action.payload,
        password: action.payload,
        organization: action.payload,
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
