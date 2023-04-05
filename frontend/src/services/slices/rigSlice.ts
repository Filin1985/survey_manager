import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getRigsRequestApi } from "../../api"
import { setError } from "./appSlice"
import { CODES } from "../../utils/errors"

export interface IWellData {
  id: number
  pad_name: string
  well_name: string
  active_from: number
  status: "PLAN" | "NOTA" | "ACTV" | "FINI"
  in_statistics: boolean
  well_type: "VNS0" | "NNS0" | "ZBS0" | "BGS0"
  RKB: number
  coordinate_system: string
  latitud: number
  longtitude: number
  NY: number
  EX: number
  north_direction: "GRID" | "TRUE" | "MAGN"
  geomagnetic_model: string
  geomagnetic_date: Date
  btotal: number
  dip: number
  dec: number
  grid_convergence: number
  total_correction: number
  gtotal: number
  T1_start: Date
  T1_end: Date
  T3_start: Date
  T3_end: Date
  critical_azimuth: boolean
  comment: string
}

export interface IRigData {
  id: number
  field_name: number
  pad_name: number
  wells: IWellData[]
}

interface IRigInitialState {
  getRigsRequest: boolean
  getRigsSuccess: boolean
  getRigsFailed: boolean
  allRigs: IRigData[]
}

const initialState: IRigInitialState = {
  getRigsRequest: false,
  getRigsSuccess: false,
  getRigsFailed: false,
  allRigs: [],
}

export const getAllRigs = createAsyncThunk(
  "rigs/allRigs",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const response = await getRigsRequestApi()
      return response
    } catch (error) {
      dispatch(setError(CODES.SERVER_ERR))
      return rejectWithValue(error)
    }
  }
)

export const rigsSlice = createSlice({
  name: "rigs",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getAllRigs.pending, (state) => {
      state.getRigsRequest = true
      state.getRigsSuccess = false
      state.getRigsFailed = false
    })
    builder.addCase(getAllRigs.fulfilled, (state, action) => {
      state.getRigsRequest = false
      state.getRigsSuccess = true
      state.getRigsFailed = false
      state.allRigs = [...action.payload]
    })
    builder.addCase(getAllRigs.rejected, (state) => {
      state.getRigsRequest = false
      state.getRigsSuccess = false
      state.getRigsFailed = true
    })
  },
})

export default rigsSlice.reducer
