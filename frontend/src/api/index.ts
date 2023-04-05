import { TRegisterUserResponse } from "../services/slices/registerSlice"
import { TGetUserInfo } from "../services/slices/userSlice"
import { IRigData } from "../services/slices/rigSlice"
import {
  IContractorsResponse,
  TAddContractor,
  IWellsResponse,
  ICustomerData,
} from "../types"
import { TLoginProfile } from "../types"
import { fetchWithRefresh, getCookie } from "../utils"
import { TUserRegister } from "../types"

export const API_URL: string = `http://localhost:8000/api`

const HEADERS: HeadersInit = {
  "Content-Type": "application/json",
}
type HeadersInit = Headers | string[][] | { [key: string]: string }

export const checkResponse = <T>(res: Response): Promise<T> => {
  return res.ok ? res.json() : res.json().then(() => Promise.reject(res.status))
}

export const apiRequest = <T>(
  url: string,
  options: RequestInit
): Promise<T> => {
  return fetch(url, options).then((res) => checkResponse<T>(res))
}

export const registerUserRequestApi = ({
  email,
  password,
  firstName,
  lastName,
  organization,
}: TUserRegister) => {
  return apiRequest<TRegisterUserResponse>(`${API_URL}/register/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charger=utf-8",
    },
    body: JSON.stringify({
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
      organization: organization,
    }),
  })
}

export const loginUserRequestApi = ({ email, password }: TLoginProfile) => {
  return apiRequest<TRegisterUserResponse>(`${API_URL}/user/login/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charger=utf-8",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  })
}

export const logoutUserRequesrApi = () => {
  return apiRequest(`${API_URL}/logout/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charger=utf-8",
      Authorization: "Bearer " + getCookie("Token"),
    },
    body: JSON.stringify({
      refreshToken: localStorage.getItem("refreshToken"),
    }),
  })
}

export const getUserDataApi = () => {
  return fetchWithRefresh<TGetUserInfo>(`${API_URL}/users/profile/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json;charger=utf-8",
      Authorization: "Bearer " + getCookie("Token"),
    },
  })
}

export const getContractorsRequestApi = () => {
  return apiRequest<IContractorsResponse[]>(`${API_URL}/services/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
}

export const addContractorRequestApi = ({ name }: TAddContractor) => {
  return apiRequest<IContractorsResponse>(`${API_URL}/services/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charger=utf-8",
      Authorization: "Bearer " + getCookie("Token"),
    },
    body: JSON.stringify({
      name,
    }),
  })
}

export const deleteContractorRequestApi = (contractorId: number) => {
  return apiRequest(`${API_URL}/services/`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json;charger=utf-8",
      Authorization: "Bearer " + getCookie("Token"),
    },
    body: JSON.stringify({
      contractorId,
    }),
  })
}

export const getRigsRequestApi = () => {
  return apiRequest<IRigData[]>(
    "http://10.23.125.230:9613/main_data/api/pad/",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charger=utf-8",
      },
    }
  )
}

export const getWellsRequestApi = () => {
  return apiRequest<IWellsResponse[]>(`${API_URL}/wells/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json;charger=utf-8",
    },
  })
}

export const getCustomersRequestApi = () => {
  return apiRequest<ICustomerData[]>(`${API_URL}/customers/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json;charger=utf-8",
    },
  })
}
