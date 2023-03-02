import {
  TypedUseSelectorHook,
  useSelector as selectorHook,
  useDispatch as dispatchHook,
} from "react-redux"
import { RootState } from "./reducers/root-reducer"

import { ActionCreator } from "redux"
import { ThunkAction } from "redux-thunk"
import { TUserAuthActions } from "./actions/auth"
import { TContractorsActions } from "./DELETE/contractors"
import { TModalActions } from "./actions/modal"
import { TWellsActions, IGetAllWellsActionRequest } from "./actions/wells"
import { AppDispatch } from "./store"
import type {} from "redux-thunk/extend-redux"

type TUnionActions =
  | TContractorsActions
  | TModalActions
  | TWellsActions
  | TUserAuthActions

type AppActions = TUnionActions

export type AppThunk<ReturnType = void> = ActionCreator<
  ThunkAction<ReturnType, RootState, unknown, AppActions>
>

type DispatchFunc = () => AppDispatch
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook
export const useDispatch: DispatchFunc = dispatchHook
