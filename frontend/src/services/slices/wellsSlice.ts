import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getWellsRequestApi } from "../../api"
import { setError } from "./appSlice"
import { CODES } from "../../utils/errors"

export interface IWellData {
  id: number
  author: number
  customer: number
  contractor: string
  field: string
  rig: string
  well_number: string
  status: string
  contractor_id: number
  customer_id: number
}

export interface IWellChart {
  name: string
  value: number
}

export type TWellsInitialState = {
  colors: string[]
  currentWell: IWellData | null
  allWells: IWellData[]
  wellsForChart: IWellChart[]
  addNewWellRequest: boolean
  addNewWellFailed: boolean
  getAllWellsRequest: boolean
  getAllWellsSuccess: boolean
  getAllWellsFailed: boolean
}

const initialState: TWellsInitialState = {
  colors: ["#FED602", "#FF8863", "#4DC3F7", "#8DDA71", "#BD65A4", "#3682DB"],
  currentWell: null,
  allWells: [],
  wellsForChart: [],
  addNewWellRequest: false,
  addNewWellFailed: false,
  getAllWellsRequest: false,
  getAllWellsSuccess: false,
  getAllWellsFailed: false,
}

export const getAllWells = createAsyncThunk(
  "wells/getAllWells",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const response = await getWellsRequestApi()
      dispatch(getWellsForChart(response))
      return response
    } catch (error) {
      dispatch(setError(CODES.SERVER_ERR))
      return rejectWithValue(error)
    }
  }
)

export const wellsSlice = createSlice({
  name: "wells",
  initialState,
  reducers: {
    getWellsForChart: (state, action) => {
      let numbers = action.payload.reduce(
        (
          acc: {
            [key: string]: number
          },
          child: IWellData
        ) => {
          if (!acc[child.contractor]) {
            acc[child.contractor] = 0
          }
          acc[child.contractor]++
          return acc
        },
        {}
      )
      const wellsForChart = []
      let index = 0
      for (let [key, value] of Object.entries(numbers)) {
        const chartWells = {
          name: "",
          value: 0,
          color: "",
        }
        chartWells["name"] = key
        if (typeof value === "number") {
          chartWells["value"] = value
        }
        chartWells["color"] = state.colors[index]
        wellsForChart.push(chartWells)
        index++
      }
      state.wellsForChart = [...wellsForChart]
    },
  },
  extraReducers(builder) {
    builder.addCase(getAllWells.pending, (state) => {
      state.getAllWellsRequest = true
      state.getAllWellsSuccess = false
      state.getAllWellsFailed = false
    })
    builder.addCase(getAllWells.fulfilled, (state, action) => {
      state.getAllWellsRequest = false
      state.getAllWellsSuccess = true
      state.getAllWellsFailed = false
      state.allWells = [...action.payload]
    })
    builder.addCase(getAllWells.rejected, (state) => {
      state.getAllWellsRequest = false
      state.getAllWellsSuccess = false
      state.getAllWellsFailed = true
    })
  },
})

export default wellsSlice.reducer
export const { getWellsForChart } = wellsSlice.actions
