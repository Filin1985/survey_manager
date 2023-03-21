import React, { useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import { useDispatch } from "../../services/hooks"
import { checkUserAuth } from "../../services/slices/getUserDataSlice"
import { getAllContractors } from "../../services/slices/contractorsSlice"
import { getAllWells } from "../../services/slices/wellsSlice"
import { getAllCustomers } from "../../services/slices/customersSlice"
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

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkUserAuth())
    dispatch(getAllCustomers())
    dispatch(getAllContractors())
    dispatch(getAllWells())
  }, [dispatch])
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/services"
          element={
            <ProtectedRoute>
              <Contractors />
            </ProtectedRoute>
          }
        />
        <Route
          path="/customers"
          element={
            <ProtectedRoute>
              <Customers />
            </ProtectedRoute>
          }
        />
        <Route
          path="/wells"
          element={
            <ProtectedRoute>
              <Wells />
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
