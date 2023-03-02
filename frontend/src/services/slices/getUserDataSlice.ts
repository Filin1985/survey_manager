import { createSlice } from "@reduxjs/toolkit"
import { AppDispatch } from "../store"
import { AppThunk } from "../hooks"
import { getCookie, setCookie } from "../../utils"

interface IUserDataSlice {
  getUserDataRequest: boolean
  getUserDataSuccess: boolean
  getUserDataError: boolean
}

const initialState: IUserDataSlice = {
  getUserDataRequest: false,
  getUserDataSuccess: false,
  getUserDataError: false,
}

export const getUserInfoSlice = createSlice({
  name: "getUserInfo",
  initialState,
  reducers: {
    getUserDataRequest: (state) => {
      Object.assign(state, {
        getUserDataRequest: true,
        getUserDataSuccess: false,
        getUserDataError: false,
      })
    },
    getUserDataSuccess: (state) => {
      Object.assign(state, {
        getUserDataRequest: false,
        getUserDataSuccess: true,
        getUserDataError: false,
      })
    },
    getUserDataError: (state) => {
      Object.assign(state, {
        getUserDataRequest: false,
        getUserDataSuccess: false,
        getUserDataError: true,
      })
    },
  },
})
