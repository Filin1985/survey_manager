import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { setCookie } from "../../utils"
import { setError } from "./appSlice"
import { CODES } from "../../utils/errors"
import { setUserData } from "./userSlice"
import { loginUserRequestApi } from "../../api"
import { TLoginProfile } from "../../types"

const initialState = {
  loginRequest: false,
  loginSuccess: false,
  loginError: false,
}

export const loginUser = createAsyncThunk(
  "login/user",
  async ({ email, password }: TLoginProfile, { dispatch, rejectWithValue }) => {
    try {
      const response = await loginUserRequestApi({ email, password })
      const authToken = response.access
      const refreshToken = response.refresh
      setCookie("Token", authToken)
      localStorage.setItem("refreshToken", refreshToken)
      dispatch(setUserData(response))
      return response
    } catch (error) {
      dispatch(setError(CODES.SERVER_ERR))
      return rejectWithValue(error)
    }
  }
)

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(loginUser.pending, (state) => {
      state.loginRequest = true
      state.loginSuccess = false
      state.loginError = false
    })
    builder.addCase(loginUser.fulfilled, (state) => {
      state.loginRequest = false
      state.loginSuccess = true
      state.loginError = false
    })
    builder.addCase(loginUser.rejected, (state) => {
      state.loginRequest = false
      state.loginSuccess = false
      state.loginError = true
    })
  },
})

export default loginSlice.reducer
