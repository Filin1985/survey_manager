import React, { useState } from "react"
import { NavLink, Outlet, useParams } from "react-router-dom"
import styles from "./navbar.module.scss"

type TData = {}

type TCompaniesArray = {}

const WellNavbar: React.FC<TCompaniesArray> = ({}) => {
  const params = useParams()

  return (
    <>
      <div className={styles.navbar}>
        <ul className={styles.navbar__items}>
          <NavLink
            to={`../wells/${params.id}/info`}
            replace={true}
            className={({ isActive }) =>
              isActive ? styles.navbar__item_active : styles.navbar__item
            }
          >
            Скважина
          </NavLink>
          <NavLink
            to={`../wells/${params.id}/run`}
            replace={true}
            className={({ isActive }) =>
              isActive ? styles.navbar__item_active : styles.navbar__item
            }
          >
            Рейсы
          </NavLink>
          <NavLink
            to={`../wells/${params.id}/survey`}
            replace={true}
            className={({ isActive }) =>
              isActive ? styles.navbar__item_active : styles.navbar__item
            }
          >
            Замеры
          </NavLink>
          <NavLink
            to={`../wells/${params.id}/quality`}
            replace={true}
            className={({ isActive }) =>
              isActive ? styles.navbar__item_active : styles.navbar__item
            }
          >
            Контроль качества
          </NavLink>
          <NavLink
            to={`../wells/${params.id}/projection`}
            replace={true}
            className={({ isActive }) =>
              isActive ? styles.navbar__item_active : styles.navbar__item
            }
          >
            Проекция
          </NavLink>
          <NavLink
            to={`../wells/${params.id}/dynamic`}
            replace={true}
            className={({ isActive }) =>
              isActive ? styles.navbar__item_active : styles.navbar__item
            }
          >
            Динамические замеры
          </NavLink>
        </ul>
      </div>
    </>
  )
}

export default WellNavbar
