import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { setCookie } from "../../utils"
import { logoutUserRequesrApi } from "../../api"
import { setUserData } from "./userSlice"

const initialState = {
  logoutRequest: false,
  logoutSuccess: false,
  logoutError: false,
}

export const logoutUser = createAsyncThunk(
  "logout/user",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const response = await logoutUserRequesrApi()
      localStorage.clear()
      setCookie("Token", "")
      dispatch(setUserData({}))
      return response
    } catch (error) {
      console.log(error)
      return rejectWithValue(error)
    }
  }
)

export const logoutSlice = createSlice({
  name: "logout",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(logoutUser.pending, (state) => {
      state.logoutRequest = true
      state.logoutSuccess = false
      state.logoutError = false
    })
    builder.addCase(logoutUser.fulfilled, (state) => {
      state.logoutRequest = false
      state.logoutSuccess = true
      state.logoutError = false
    })
    builder.addCase(logoutUser.rejected, (state) => {
      state.logoutRequest = false
      state.logoutSuccess = false
      state.logoutError = true
    })
  },
})

export default logoutSlice.reducer
