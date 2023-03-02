import { IContractorData, IWellData } from "../../../types"

export type TContractorsInitialState = {
  currentContractor: IContractorData | null
  allContractors: IContractorData[]
  addNewContractorRequest: boolean
  addNewContractorFailed: boolean
  getAllContractorsRequest: boolean
  getAllContractorsFailed: boolean
  deleteContractorRequest: boolean
  deleteContractorFailed: boolean
}

export type TWellsInitialState = {
  currentWell: IWellData | null
  allWells: IWellData[]
  addNewWellRequest: boolean
  addNewWellFailed: boolean
  getAllWellsRequest: boolean
  getAllWellsFailed: boolean
}

export type TAuthInitialState = {
  firstName: string
  lastName: string
  email: string
  password: string
  organization: string
  registerRequest: boolean
  registerFailed: boolean
  loginRequest: boolean
  loginFailed: boolean
  logoutRequest: boolean
  logoutFailed: boolean
  tokenRequest: boolean
  tokenFailed: boolean
  forgotPasswordRequest: boolean
  forgotPasswordFailed: boolean
  resetPasswordRequest: boolean
  resetPasswordFailed: boolean
  visitedPath: string
  authChecked: boolean
}

export type TRegisterState = {
  registerRequest: boolean
  registerSuccess: boolean
  registerFailed: boolean
}
