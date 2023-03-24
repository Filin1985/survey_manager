import React, { useState } from "react"
import styles from "./navbar.module.scss"

type TData = {
  id: number
  name?: string
  email?: string
  phone?: string
  author?: number
  customer?: number
  contractor?: string
  field?: string
  rig?: string
  well_number?: string
  status?: string
}

type TCompaniesArray = {
  data: Array<TData>
  handleClick: (id: number) => void
  activeWell: number
}

const Navbar: React.FC<TCompaniesArray> = ({
  data,
  handleClick,
  activeWell,
}) => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__items}>
        {data.map((item) => (
          <div
            key={item.id}
            className={
              item.id === activeWell
                ? styles.navbar__item_active
                : styles.navbar__item
            }
            onClick={() => handleClick(item.id)}
          >
            {item.name ? item.name : item.well_number}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Navbar
