import React from "react"
import styles from "./pagination.module.scss"
import { ChevronRightIcon, ChevronLeftIcon } from "../../ui-kit/icons"

interface IPagintor {
  wellsPerPage: number
  totalWells: number
  paginate: (number: number) => void
  previousPage: () => void
  nextPage: () => void
  active: number
}

const Pagination = ({
  wellsPerPage,
  totalWells,
  paginate,
  previousPage,
  nextPage,
  active,
}: IPagintor) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalWells / wellsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <ul className={styles.pagination_container}>
      <li onClick={previousPage} className={styles.pagination_item}>
        <ChevronLeftIcon type="interface-primary" />
      </li>
      {pageNumbers.map((number) => (
        <li
          key={number}
          onClick={() => paginate(number)}
          className={
            active === number
              ? styles.pagination_item_active
              : styles.pagination_item
          }
        >
          {number}
        </li>
      ))}
      <li onClick={nextPage} className={styles.pagination_item}>
        <ChevronRightIcon type="interface-primary" />
      </li>
    </ul>
  )
}

export default Pagination
