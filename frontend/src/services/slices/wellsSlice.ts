import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getWellsRequestApi } from "../../api"
import { setError } from "./appSlice"
import { CODES } from "../../utils/errors"

export interface IWellData {
  id: number
  author: number
  customer: number
  contractor: number
  field: string
  rig: string
  well_number: string
  status: string
}

export type TWellsInitialState = {
  currentWell: IWellData | null
  allWells: IWellData[]
  addNewWellRequest: boolean
  addNewWellFailed: boolean
  getAllWellsRequest: boolean
  getAllWellsSuccess: boolean
  getAllWellsFailed: boolean
}

const initialState: TWellsInitialState = {
  currentWell: null,
  allWells: [],
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
  reducers: {},
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
