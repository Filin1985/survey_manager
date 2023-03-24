import { combineReducers } from "redux"
import modalSlice from "../slices/modalSlice"
import getUserDataSlice from "../slices/getUserDataSlice"
import registerSlice from "../slices/registerSlice"
import userSlice from "../slices/userSlice"
import loginSlice from "../slices/loginSlice"
import wellsSlice from "../slices/wellsSlice"
import contractorsSlice from "../slices/contractorsSlice"
import customersSlice from "../slices/customersSlice"

export const rootReducer = combineReducers({
  userData: userSlice,
  auth: getUserDataSlice,
  register: registerSlice,
  login: loginSlice,
  modal: modalSlice,
  wells: wellsSlice,
  contractors: contractorsSlice,
  customers: customersSlice,
})

export type RootState = ReturnType<typeof rootReducer>
