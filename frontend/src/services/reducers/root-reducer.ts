import { combineReducers } from "redux"
import modalSlice from "../slices/modalSlice"
import getUserDataSlice from "../slices/getUserDataSlice"
import registerSlice from "../slices/registerSlice"
import userSlice from "../slices/userSlice"
import loginSlice from "../slices/loginSlice"
import logoutSlice from "../slices/logoutSlice"
import wellsSlice from "../slices/wellsSlice"
import contractorsSlice from "../slices/contractorsSlice"
import customersSlice from "../slices/customersSlice"
import rigSlice from "../slices/rigSlice"

export const rootReducer = combineReducers({
  userData: userSlice,
  auth: getUserDataSlice,
  register: registerSlice,
  login: loginSlice,
  logout: logoutSlice,
  modal: modalSlice,
  wells: wellsSlice,
  contractors: contractorsSlice,
  customers: customersSlice,
  rigs: rigSlice,
})

export type RootState = ReturnType<typeof rootReducer>
