import {
  ADD_NEW_WELL_REQUEST,
  ADD_NEW_WELL_SUCCESS,
  ADD_NEW_WELL_FAILED,
  GET_ALL_WELLS_REQUEST,
  GET_ALL_WELLS_SUCCESS,
  GET_ALL_WELLS_FAILED,
} from "../constants/wells"
import { TWellsActions } from "../actions/wells"
import { TWellsInitialState } from "./types/index"

export const initialState: TWellsInitialState = {
  currentWell: null,
  allWells: [],
  addNewWellRequest: false,
  addNewWellFailed: false,
  getAllWellsRequest: false,
  getAllWellsFailed: false,
}

export const wellsReducer = (state = initialState, action: TWellsActions) => {
  switch (action.type) {
    case GET_ALL_WELLS_REQUEST: {
      return {
        ...state,
        getAllWellsRequest: true,
        getAllWellsFailed: false,
      }
    }
    case GET_ALL_WELLS_SUCCESS: {
      return {
        ...state,
        getAllWellsRequest: false,
        getAllWellsFailed: false,
        allWells: action.wells,
      }
    }
    case GET_ALL_WELLS_FAILED: {
      return {
        ...state,
        getAllWellsRequest: false,
        getAllWellsFailed: true,
      }
    }
    case ADD_NEW_WELL_REQUEST: {
      return {
        ...state,
        addNewWellRequest: true,
        addNewWellFailed: false,
      }
    }
    case ADD_NEW_WELL_SUCCESS: {
      return {
        ...state,
        addNewWellRequest: false,
        addNewWellFailed: false,
      }
    }
    case ADD_NEW_WELL_FAILED: {
      return {
        ...state,
        addNewWellRequest: false,
        addNewWellFailed: true,
      }
    }
    default:
      return state
  }
}
