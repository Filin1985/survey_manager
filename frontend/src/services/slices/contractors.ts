import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { IContractorData, TAddContractor } from "../../types"
import { AppThunk } from "../hooks"
import { AppDispatch } from "../store"
import {
  addContractorRequestApi,
  deleteContractorRequestApi,
  getContractorsRequestApi,
} from "../../api"
import { setError } from "./appSlice"
import { CODES } from "../../utils/errors"

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

export const initialState: TContractorsInitialState = {
  currentContractor: null,
  allContractors: [],
  addNewContractorRequest: false,
  addNewContractorFailed: false,
  getAllContractorsRequest: false,
  getAllContractorsFailed: false,
  deleteContractorRequest: false,
  deleteContractorFailed: false,
}

export const getAllContractors = createAsyncThunk(
  "contractors/getAllContractors",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getContractorsRequestApi()
      return response
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const addNewContractor = createAsyncThunk(
  "contractors/addNewContractor",
  async ({ name, email, phone }: TAddContractor, { rejectWithValue }) => {
    try {
      const response = await addContractorRequestApi({ name, email, phone })
      return response
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const deleteContractor = createAsyncThunk(
  "contractors/deleteContractor",
  async (contractorId: number, { rejectWithValue }) => {
    try {
      const response = await deleteContractorRequestApi(contractorId)
      return response
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const contractorsSlice = createSlice({
  name: "contractors",
  initialState,
  reducers: {},
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

// export const getAllContractors: AppThunk = () => (dispatch: AppDispatch) => {
//   dispatch(getAllContractorsRequest())
//   getContractorsRequestApi()
//     .then((res) => {
//       if (res) {
//         dispatch(getAllContractorsSuccess(res))
//       }
//     })
//     .catch((error) => {
//       dispatch(getAllContractorsFailed())
//       dispatch(setError(CODES.SERVER_ERR))
//       console.log(error)
//     })
// }

// export const addNewContractor: AppThunk =
//   (name, email, phone) => (dispatch: AppDispatch) => {
//     dispatch(addNewContractorRequest())
//     addContractorRequestApi()
//       .then((res) => {
//         if (res) {
//           dispatch(addNewContractorSuccess({ name, email, phone }))
//         }
//       })
//       .catch((error) => {
//         dispatch(addNewContractorFailed())
//         console.log(error)
//       })
//   }

// export const deleteContractor: AppThunk =
//   (contractorId: number) => (dispatch: AppDispatch) => {
//     dispatch(deleteContractorRequest())
//     deleteContractorRequestApi()
//       .then((res) => {
//         if (res) {
//           dispatch(deleteContractorSuccess(contractorId))
//         }
//       })
//       .catch((error) => {
//         dispatch(deleteContractorFailed())
//         dispatch(setError(CODES.SERVER_ERR))
//         console.log(error)
//       })
//   }
