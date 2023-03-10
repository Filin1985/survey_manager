import React from "react"
import { Route, Routes } from "react-router-dom"
import Contractors from "../../pages/contractors/Contractors"
import Wells from "../../pages/wells/Wells"
import { useSelector } from "../../services/hooks"
import ErrorPage from "../../pages/error/ErrorPage"

const Layout = () => {
  const { allContractors } = useSelector((store) => store.contractors)
  const { allWells } = useSelector((store) => store.wells)
  return (
    <>
      <Routes>
        {allContractors.length > 0 && (
          <Route path="/services" element={<Contractors />} />
        )}
        {allWells.length > 0 && <Route path="/wells" element={<Wells />} />}

        {/*  */}
      </Routes>
    </>
  )
}

export default Layout
