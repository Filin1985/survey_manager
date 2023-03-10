import { combineReducers } from "redux"
import modalSlice from "../slices/modalSlice"
import getUserDataSlice from "../slices/getUserDataSlice"
import registerSlice from "../slices/registerSlice"
import userSlice from "../slices/userSlice"
import loginSlice from "../slices/loginSlice"
import wellsSlice from "../slices/wellsSlice"
import contractorsSlice from "../slices/contractors"

export const rootReducer = combineReducers({
  userData: userSlice,
  auth: getUserDataSlice,
  register: registerSlice,
  login: loginSlice,
  modal: modalSlice,
  wells: wellsSlice,
  contractors: contractorsSlice,
})

export type RootState = ReturnType<typeof rootReducer>
