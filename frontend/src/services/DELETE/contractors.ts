import { AppThunk } from "../hooks"
import { AppDispatch } from "../store"
import { apiRequest, API_URL } from "../../api"

import {
  ADD_NEW_CONTRACTOR_REQUEST,
  ADD_NEW_CONTRACTOR_SUCCESS,
  ADD_NEW_CONTRACTOR_FAILED,
  GET_ALL_CONTRACTORS_REQUEST,
  GET_ALL_CONTRACTORS_SUCCESS,
  GET_ALL_CONTRACTORS_FAILED,
  DELETE_CONTRACTOR_REQUEST,
  DELETE_CONTRACTOR_SUCCESS,
  DELETE_CONTRACTOR_FAILED,
} from "../constants/contractors"
import {
  IContractorData,
  IContractorsResponse,
  TAddContractor,
} from "../../types"

export interface IAddNewContractorActionRequest {
  readonly type: typeof ADD_NEW_CONTRACTOR_REQUEST
}

export interface IAddNewContractorActionSuccess {
  readonly type: typeof ADD_NEW_CONTRACTOR_SUCCESS
}

export interface IAddNewContractorActionFailed {
  readonly type: typeof ADD_NEW_CONTRACTOR_FAILED
}

export interface IDeleteContractorActionRequest {
  readonly type: typeof DELETE_CONTRACTOR_REQUEST
}

export interface IDeleteContractorActionSuccess {
  readonly type: typeof DELETE_CONTRACTOR_SUCCESS
  readonly id: number
}

export interface IDeleteContractorActionFailed {
  readonly type: typeof DELETE_CONTRACTOR_FAILED
}

export interface IGetAllContractorsActionRequest {
  readonly type: typeof GET_ALL_CONTRACTORS_REQUEST
}

export interface IGetAllContractorsActionSuccess {
  readonly type: typeof GET_ALL_CONTRACTORS_SUCCESS
  readonly contractors: Array<IContractorData>
}

export interface IGetAllContractorsActionFailed {
  readonly type: typeof GET_ALL_CONTRACTORS_FAILED
}

export type TContractorsActions =
  | IAddNewContractorActionRequest
  | IAddNewContractorActionSuccess
  | IAddNewContractorActionFailed
  | IGetAllContractorsActionRequest
  | IGetAllContractorsActionSuccess
  | IGetAllContractorsActionFailed
  | IDeleteContractorActionRequest
  | IDeleteContractorActionSuccess
  | IDeleteContractorActionFailed

export const getContractorsActionRequest =
  (): IAddNewContractorActionRequest => ({
    type: ADD_NEW_CONTRACTOR_REQUEST,
  })

export const getContractorsActionSuccess =
  (): IAddNewContractorActionSuccess => ({
    type: ADD_NEW_CONTRACTOR_SUCCESS,
  })

export const getContractorsActionFailed =
  (): IAddNewContractorActionFailed => ({
    type: ADD_NEW_CONTRACTOR_FAILED,
  })

export const deleteContractorsActionRequest =
  (): IDeleteContractorActionRequest => ({
    type: DELETE_CONTRACTOR_REQUEST,
  })

export const deleteContractorsActionSuccess = (
  id: number
): IDeleteContractorActionSuccess => ({
  type: DELETE_CONTRACTOR_SUCCESS,
  id,
})

export const deleteContractorsActionFailed =
  (): IDeleteContractorActionFailed => ({
    type: DELETE_CONTRACTOR_FAILED,
  })

export const getAllContractorsActionRequest =
  (): IGetAllContractorsActionRequest => ({
    type: GET_ALL_CONTRACTORS_REQUEST,
  })

export const getAllContractorsActionSuccess = (
  contractors: Array<IContractorData>
): IGetAllContractorsActionSuccess => ({
  type: GET_ALL_CONTRACTORS_SUCCESS,
  contractors,
})

export const getAllContractorsActionFailed =
  (): IGetAllContractorsActionFailed => ({
    type: GET_ALL_CONTRACTORS_FAILED,
  })

export const addNewContractor: AppThunk =
  (name, email, phone) => (dispatch: AppDispatch) => {
    dispatch({
      type: ADD_NEW_CONTRACTOR_REQUEST,
    })
    apiRequest<IContractorsResponse>(`${API_URL}/services/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        phone: phone,
      }),
    })
      .then((res) => {
        if (res) {
          dispatch({
            type: ADD_NEW_CONTRACTOR_SUCCESS,
          })
        }
      })
      .catch((error) => {
        dispatch({
          type: ADD_NEW_CONTRACTOR_FAILED,
        })
        console.log(error)
      })
  }

export const getAllContractors: AppThunk = () => (dispatch: AppDispatch) => {
  dispatch({
    type: GET_ALL_CONTRACTORS_REQUEST,
  })
  apiRequest<IContractorsResponse[]>(`${API_URL}/services/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (res) {
        dispatch({
          type: GET_ALL_CONTRACTORS_SUCCESS,
          contractors: res,
        })
      }
    })
    .catch((error) => {
      dispatch({
        type: GET_ALL_CONTRACTORS_FAILED,
      })
      console.log(error)
    })
}

export const deleteContractor: AppThunk =
  (contractorId: number) => (dispatch: AppDispatch) => {
    dispatch({
      type: DELETE_CONTRACTOR_REQUEST,
    })
    apiRequest(`${API_URL}/services/${contractorId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res) {
          dispatch({
            type: DELETE_CONTRACTOR_SUCCESS,
            id: contractorId,
          })
        }
      })
      .catch((err) => {
        dispatch({
          type: DELETE_CONTRACTOR_FAILED,
        })
      })
  }
