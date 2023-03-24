import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { IContractorData, TAddContractor } from "../../types"
import {
  addContractorRequestApi,
  deleteContractorRequestApi,
  getContractorsRequestApi,
} from "../../api"
import { setError } from "./appSlice"
import { CODES } from "../../utils/errors"

export interface IContractorChart {
  name: string
  value: number
}

export type TContractorsInitialState = {
  colors: string[]
  currentContractor: IContractorData | null
  allContractors: IContractorData[]
  contractorsForChart: IContractorChart[]
  addNewContractorRequest: boolean
  addNewContractorFailed: boolean
  getAllContractorsRequest: boolean
  getAllContractorsFailed: boolean
  deleteContractorRequest: boolean
  deleteContractorFailed: boolean
}

export const initialState: TContractorsInitialState = {
  colors: ["#FED602", "#FF8863", "#4DC3F7", "#8DDA71", "#BD65A4", "#3682DB"],
  currentContractor: null,
  allContractors: [],
  contractorsForChart: [],
  addNewContractorRequest: false,
  addNewContractorFailed: false,
  getAllContractorsRequest: false,
  getAllContractorsFailed: false,
  deleteContractorRequest: false,
  deleteContractorFailed: false,
}

export const getAllContractors = createAsyncThunk(
  "contractors/getAllContractors",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const response = await getContractorsRequestApi()
      dispatch(getContractorsForChart(response))
      return response
    } catch (error) {
      dispatch(setError(CODES.SERVER_ERR))
      return rejectWithValue(error)
    }
  }
)

export const addNewContractor = createAsyncThunk(
  "contractors/addNewContractor",
  async (
    { name, email, phone }: TAddContractor,
    { dispatch, rejectWithValue }
  ) => {
    try {
      const response = await addContractorRequestApi({ name, email, phone })
      return response
    } catch (error) {
      dispatch(setError(CODES.SERVER_ERR))
      return rejectWithValue(error)
    }
  }
)

export const deleteContractor = createAsyncThunk(
  "contractors/deleteContractor",
  async (contractorId: number, { dispatch, rejectWithValue }) => {
    try {
      const response = await deleteContractorRequestApi(contractorId)
      return response
    } catch (error) {
      dispatch(setError(CODES.SERVER_ERR))
      return rejectWithValue(error)
    }
  }
)

export const contractorsSlice = createSlice({
  name: "contractors",
  initialState,
  reducers: {
    getContractorsForChart: (state, action) => {
      const contractorsForChart = []
      let index = 0
      for (let contractor of action.payload) {
        const chartWells = {
          name: "",
          value: 0,
          color: "",
        }
        chartWells["name"] = contractor["name"]
        chartWells["value"] = contractor["wells"]
        chartWells["color"] = state.colors[index]
        contractorsForChart.push(chartWells)
        index++
      }
      state.contractorsForChart = [...contractorsForChart]
    },
  },
  extraReducers(builder) {
    builder.addCase(getAllContractors.pending, (state) => {
      state.getAllContractorsRequest = true
      state.getAllContractorsFailed = false
    })
    builder.addCase(getAllContractors.fulfilled, (state, action) => {
      state.getAllContractorsRequest = false
      state.getAllContractorsFailed = false
      state.allContractors = [...action.payload]
    })
    builder.addCase(getAllContractors.rejected, (state) => {
      state.getAllContractorsRequest = false
      state.getAllContractorsFailed = true
    })
    builder.addCase(addNewContractor.pending, (state) => {
      state.addNewContractorRequest = true
      state.deleteContractorFailed = false
    })
    builder.addCase(addNewContractor.fulfilled, (state, action) => {
      state.addNewContractorRequest = false
      state.deleteContractorFailed = false
      state.allContractors = [...state.allContractors, action.payload]
    })
    builder.addCase(addNewContractor.rejected, (state) => {
      state.addNewContractorRequest = false
      state.deleteContractorFailed = true
    })
    builder.addCase(deleteContractor.pending, (state) => {
      state.deleteContractorRequest = true
      state.deleteContractorFailed = false
    })
    builder.addCase(deleteContractor.fulfilled, (state, action) => {
      state.deleteContractorRequest = false
      state.deleteContractorFailed = false
      state.allContractors = [
        ...state.allContractors.filter(
          (contractor) => contractor.id !== action.payload
        ),
      ]
    })
  },
})

export default contractorsSlice.reducer
export const { getContractorsForChart } = contractorsSlice.actions
