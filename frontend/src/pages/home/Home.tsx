import React from "react"
import { Outlet } from "react-router-dom"
import styles from "./home.module.scss"

const Home = () => {
  return (
    <>
      <Outlet />
    </>
  )
}

export default Home
