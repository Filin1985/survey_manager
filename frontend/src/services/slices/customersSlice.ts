import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { ICustomerData } from "../../types"
import { getCustomersRequestApi } from "../../api"
import { setError } from "./appSlice"
import { CODES } from "../../utils/errors"

export interface ICustomerChart {
  name: string
  value: number
}

interface ICustomerSlice {
  colors: string[]
  getCustomerRequest: boolean
  getCustomerSuccess: boolean
  getCustomerFailed: boolean
  allCustomers: ICustomerData[]
  customersForCharts: ICustomerChart[]
}

const initialState: ICustomerSlice = {
  colors: ["#FED602", "#FF8863", "#4DC3F7", "#8DDA71", "#BD65A4", "#3682DB"],
  getCustomerRequest: false,
  getCustomerSuccess: false,
  getCustomerFailed: false,
  allCustomers: [],
  customersForCharts: [],
}

export const getAllCustomers = createAsyncThunk(
  "customers/getCustomers",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const response = await getCustomersRequestApi()
      dispatch(getCustomersForChart(response))
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
  reducers: {
    getCustomersForChart: (state, action) => {
      const customersForChart = []
      let index = 0
      for (let customer of action.payload) {
        const chartWells = {
          name: "",
          value: 0,
          color: "",
        }
        chartWells["name"] = customer["name"]
        chartWells["value"] = customer["wells"]
        chartWells["color"] = state.colors[index]
        customersForChart.push(chartWells)
        index++
      }
      state.customersForCharts = [...customersForChart]
    },
  },
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
    builder.addCase(getAllCustomers.rejected, (state) => {
      state.getCustomerRequest = false
      state.getCustomerSuccess = false
      state.getCustomerFailed = true
    })
  },
})

export default getCustomersSlice.reducer
export const { getCustomersForChart } = getCustomersSlice.actions
