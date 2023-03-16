import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { ICustomerData } from "../../types"
import { getCustomersRequestApi } from "../../api"
import { setError } from "./appSlice"
import { CODES } from "../../utils/errors"

interface ICustomerSlice {
  getCustomerRequest: boolean
  getCustomerSuccess: boolean
  getCustomerFailed: boolean
  allCustomers: ICustomerData[]
}

const initialState: ICustomerSlice = {
  getCustomerRequest: false,
  getCustomerSuccess: false,
  getCustomerFailed: false,
  allCustomers: [],
}

export const getAllCustomers = createAsyncThunk(
  "customers/getCustomers",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const response = await getCustomersRequestApi()
      console.log(response)
      return response
    } catch (error) {
      dispatch(setError(CODES.SERVER_ERR))
      return rejectWithValue(error)
    }
  }
)

export const getCustomersSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getAllCustomers.pending, (state) => {
      state.getCustomerRequest = true
      state.getCustomerSuccess = false
      state.getCustomerFailed = false
    })
    builder.addCase(getAllCustomers.fulfilled, (state, action) => {
      state.getCustomerRequest = false
      state.getCustomerSuccess = true
      state.getCustomerFailed = false
      state.allCustomers = [...action.payload]
    })
  },
})

export default getCustomersSlice.reducer
