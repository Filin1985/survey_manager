import { combineReducers } from "redux"
import { modalReducer } from "./modal"
import { userAuthReducer } from "./auth"
import { wellsReducer } from "./wells"
import contractorsSlice from "../slices/contractors"

export const rootReducer = combineReducers({
  auth: userAuthReducer,
  modal: modalReducer,
  wells: wellsReducer,
  contractors: contractorsSlice,
})

export type RootState = ReturnType<typeof rootReducer>
