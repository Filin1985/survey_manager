import styles from "./sort-header.module.scss"
import { useDispatch, useSelector } from "../../services/hooks"
import { sortByStatus, sortByWell } from "../../services/slices/wellsSlice"

function SortHeader() {
  const { isFilteredByWell, isFilteredByStatus } = useSelector(
    (store) => store.wells
  )
  const dispatch = useDispatch()

  const handleWellSort = () => {
    dispatch(sortByWell())
  }

  const handleStatusSort = () => {
    dispatch(sortByStatus())
  }

  return (
    <div className={styles.sort}>
      <p className={styles.sort__title}>Сортировка:</p>
      <button
        className={
          isFilteredByWell ? styles.sort__button_active : styles.sort__button
        }
        type="button"
        onClick={handleWellSort}
      >
        Номер скважин
      </button>
      <button
        className={
          isFilteredByStatus ? styles.sort__button_active : styles.sort__button
        }
        type="button"
        onClick={handleStatusSort}
      >
        Статус
      </button>
    </div>
  )
}

export default SortHeader
