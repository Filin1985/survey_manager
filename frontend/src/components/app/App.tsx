import React, { useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import { useDispatch } from "../../services/hooks"
import { checkUserAuth } from "../../services/slices/getUserDataSlice"
import { getAllContractors } from "../../services/slices/contractorsSlice"
import { getAllWells } from "../../services/slices/wellsSlice"
import { getAllCustomers } from "../../services/slices/customersSlice"
import { getAllRigs } from "../../services/slices/rigSlice"
import "./app.module.scss"
import ErrorPage from "../../pages/error/ErrorPage"
import RegisterUser from "../../pages/register/RegisterUser"
import Login from "../../pages/login/Login"
import Header from "../header/Header"
import Home from "../../pages/home/Home"
import Contractors from "../../pages/contractors/Contractors"
import Wells from "../../pages/wells/Wells"
import ProtectedRoute from "../protected-route/ProtectedRoute"
import Customers from "../../pages/customers/Customers"
import WellsTable from "../wells-table/WellsTable"
import WellData from "../../pages/well-info/WellData"
import {
  WellDynamic,
  WellInfo,
  WellRun,
  WellProjection,
  WellQuality,
  WellSurvey,
  WellTune,
} from "../well"

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkUserAuth())
    dispatch(getAllCustomers())
    dispatch(getAllContractors())
    dispatch(getAllRigs())
    dispatch(getAllWells())
  }, [dispatch])
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="services"
          element={
            <ProtectedRoute>
              <Contractors />
            </ProtectedRoute>
          }
        />
        <Route
          path="customers"
          element={
            <ProtectedRoute>
              <Customers />
            </ProtectedRoute>
          }
        />
        <Route
          path="wells"
          element={
            <ProtectedRoute>
              <Wells />
            </ProtectedRoute>
          }
        />
        <Route
          path="wells/:id"
          element={
            <ProtectedRoute>
              <WellData />
            </ProtectedRoute>
          }
        >
          <Route
            path="info"
            element={
              <ProtectedRoute>
                <WellInfo />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="run"
            element={
              <ProtectedRoute>
                <WellRun />
              </ProtectedRoute>
            }
          />
          <Route
            path="survey"
            element={
              <ProtectedRoute>
                <WellSurvey />
              </ProtectedRoute>
            }
          />
          <Route
            path="dynamic"
            element={
              <ProtectedRoute>
                <WellDynamic />
              </ProtectedRoute>
            }
          />
          <Route
            path="projection"
            element={
              <ProtectedRoute>
                <WellProjection />
              </ProtectedRoute>
            }
          />
          <Route
            path="quality"
            element={
              <ProtectedRoute>
                <WellQuality />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route
          path="/wells-table"
          element={
            <ProtectedRoute>
              <WellsTable />
            </ProtectedRoute>
          }
        />
        <Route
          path="/register"
          element={
            <ProtectedRoute onlyUnAuth={true}>
              <RegisterUser />
            </ProtectedRoute>
          }
        />
        <Route
          path="/login"
          element={
            <ProtectedRoute onlyUnAuth={true}>
              <Login />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  )
}

export default App
