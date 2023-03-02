import { AppThunk } from "../hooks"
import { AppDispatch } from "../store"
import { apiRequest, API_URL } from "../../api"

import {
  ADD_NEW_WELL_REQUEST,
  ADD_NEW_WELL_SUCCESS,
  ADD_NEW_WELL_FAILED,
  GET_ALL_WELLS_REQUEST,
  GET_ALL_WELLS_SUCCESS,
  GET_ALL_WELLS_FAILED,
} from "../constants/wells"

import { IWellsResponse, IWellData } from "../../types"

export interface IGetAllWellsActionRequest {
  readonly type: typeof GET_ALL_WELLS_REQUEST
}

export interface IGetAllWellsActionSuccess {
  readonly type: typeof GET_ALL_WELLS_SUCCESS
  readonly wells: Array<IWellData>
}

export interface IGetAllWellsActionFailed {
  readonly type: typeof GET_ALL_WELLS_FAILED
}

export interface IAddNewWellActionRequest {
  readonly type: typeof ADD_NEW_WELL_REQUEST
}
export interface IAddNewWellActionSuccess {
  readonly type: typeof ADD_NEW_WELL_SUCCESS
}

export interface IAddNewWellActionFailed {
  readonly type: typeof ADD_NEW_WELL_FAILED
}

export type TWellsActions =
  | IGetAllWellsActionRequest
  | IGetAllWellsActionSuccess
  | IGetAllWellsActionFailed
  | IAddNewWellActionRequest
  | IAddNewWellActionSuccess
  | IAddNewWellActionFailed

export const getAllWellsActionRequest = (): IGetAllWellsActionRequest => ({
  type: GET_ALL_WELLS_REQUEST,
})

export const getAllContractorsActionSuccess = (
  wells: Array<IWellData>
): IGetAllWellsActionSuccess => ({
  type: GET_ALL_WELLS_SUCCESS,
  wells,
})

export const getAllContractorsActionFailed = (): IGetAllWellsActionFailed => ({
  type: GET_ALL_WELLS_FAILED,
})

export const addNewWellActionRequest = (): IAddNewWellActionRequest => ({
  type: ADD_NEW_WELL_REQUEST,
})

export const addNewWellActionSuccess = (): IAddNewWellActionSuccess => ({
  type: ADD_NEW_WELL_SUCCESS,
})

export const addNewWellActionFailed = (): IAddNewWellActionFailed => ({
  type: ADD_NEW_WELL_FAILED,
})

export const getAllWells: AppThunk = () => (dispatch: AppDispatch) => {
  dispatch({
    type: GET_ALL_WELLS_REQUEST,
  })
  apiRequest<IWellsResponse[]>(`${API_URL}/wells/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/jsson",
    },
  })
    .then((res) => {
      if (res) {
        dispatch({
          type: GET_ALL_WELLS_SUCCESS,
          wells: res,
        })
      }
    })
    .catch((error) => {
      dispatch({
        type: GET_ALL_WELLS_FAILED,
      })
      console.log(error)
    })
}

export const addNewWell =
  (
    customer: string,
    contractor: string,
    field: string,
    rig: string,
    well_number: string,
    status: string
  ) =>
  (dispatch: AppDispatch) => {
    dispatch({
      type: ADD_NEW_WELL_REQUEST,
    })
    apiRequest<IWellsResponse>(`${API_URL}/wells/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        customer: customer,
        contractor: contractor,
        field: field,
        rig: rig,
        well_number: well_number,
        status: status,
      }),
    })
      .then((res) => {
        if (res) {
          dispatch({
            type: ADD_NEW_WELL_SUCCESS,
          })
        }
      })
      .catch((error) => {
        dispatch({
          type: ADD_NEW_WELL_FAILED,
        })
        console.log(error)
      })
  }
