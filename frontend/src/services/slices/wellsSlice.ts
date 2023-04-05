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
  north: string
  plan_depth: number
  start_date: string
  sag: number
  start_depth: number
  telesystem: string
  telesystem_number: string
  current_correction: string
  current_depth: number
  correction_value: number
  amplitude: number
  latitude: string
  longtitude: string
  NY: string
  EX: string
  geomagnetic_model: string
  geomagnetic_date: string
  north_direction: string
  btotal: number
  gtotal: number
  dip: number
  magn: number
  meridian: number
  critical_azimuth: boolean
}

export interface IWellChart {
  name: string
  value: number
}

export type TWellsInitialState = {
  colors: string[]
  currentWell: IWellData
  activeDataWell: IWellData | null
  allWells: IWellData[]
  wellsForChart: IWellChart[]
  addNewWellRequest: boolean
  addNewWellFailed: boolean
  getAllWellsRequest: boolean
  getAllWellsSuccess: boolean
  getAllWellsFailed: boolean
  isFilteredByWell: boolean
  isFilteredByStatus: boolean
  numberFilteredWell: IWellData[]
  statusFilteredWell: IWellData[]
  filteredWells: IWellData[]
  appliedFilters: string[]
}

const initialState: TWellsInitialState = {
  colors: ["#FED602", "#FF8863", "#4DC3F7", "#8DDA71", "#BD65A4", "#3682DB"],
  currentWell: {} as IWellData,
  activeDataWell: {} as IWellData,
  allWells: [],
  wellsForChart: [],
  addNewWellRequest: false,
  addNewWellFailed: false,
  getAllWellsRequest: false,
  getAllWellsSuccess: false,
  getAllWellsFailed: false,
  isFilteredByWell: false,
  isFilteredByStatus: false,
  numberFilteredWell: [],
  statusFilteredWell: [],
  filteredWells: [],
  appliedFilters: [],
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
    sortByWell: (state) => {
      state.isFilteredByWell = true
      state.isFilteredByStatus = false
    },
    selectActiveWell: (state, action) => {
      state.currentWell = [
        ...action.payload.filter(
          (well: IWellData) => well.status === "В бурении"
        ),
      ][0]
    },
    selectActiveDataWell: (state, action) => {
      state.activeDataWell = action.payload
    },
    sortByStatus: (state) => {
      state.isFilteredByWell = false
      state.isFilteredByStatus = true
    },
    clearSortAndFilter: (state) => {
      state.isFilteredByStatus = false
      state.isFilteredByWell = false
    },
    searchByValue: (state, action) => {
      let value: string = action.payload.value
      let filteredValues = state.allWells.filter((well) =>
        well.well_number.toLowerCase().includes(value.toLowerCase())
      )
      let appliedFilters = state.appliedFilters

      if (value) {
        appliedFilters = addFilterIfNotExists("search", appliedFilters)
        state.filteredWells = filteredValues
      } else {
        appliedFilters = removeFilter("search", appliedFilters)
        if (appliedFilters.length === 0) {
          state.filteredWells = state.allWells
        }
      }
    },
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
      state.currentWell = [
        ...action.payload.filter((well) => well.status === "В бурении"),
      ][0]
      state.filteredWells = [...action.payload]
      state.numberFilteredWell = [
        ...action.payload.sort(sortWells("well_number")),
      ]
      state.statusFilteredWell = [...action.payload.sort(sortWells("status"))]
    })
    builder.addCase(getAllWells.rejected, (state) => {
      state.getAllWellsRequest = false
      state.getAllWellsSuccess = false
      state.getAllWellsFailed = true
    })
  },
})

export default wellsSlice.reducer
export const {
  getWellsForChart,
  sortByWell,
  sortByStatus,
  clearSortAndFilter,
  searchByValue,
  selectActiveWell,
  selectActiveDataWell,
} = wellsSlice.actions

function addFilterIfNotExists(filter: string, appliedFilters: string[]) {
  let index = appliedFilters.indexOf(filter)
  if (index === -1) appliedFilters.push(filter)

  return appliedFilters
}

function removeFilter(filter: string, appliedFilters: string[]) {
  let index = appliedFilters.indexOf(filter)
  appliedFilters.splice(index, 1)
  return appliedFilters
}

function sortWells(field: keyof IWellData) {
  return (a: IWellData, b: IWellData) => (a[field] > b[field] ? 1 : -1)
}
