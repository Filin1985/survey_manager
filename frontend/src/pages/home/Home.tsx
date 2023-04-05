import React from "react"
import { Outlet } from "react-router-dom"
import styles from "./home.module.scss"

const Home = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__image}></div>
      <h1 className={styles.header__title}>Добро пожаловать</h1>
      <div className={styles.header__cards}>
        <p className={styles.header__link}>
          веб-портал по контролю качества инклинометрических измерений АО
          "ИГиРГИ"
        </p>
      </div>
      <div className={styles.header__image_bottom}></div>
    </div>
  )
}

export default Home
