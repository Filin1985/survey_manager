import { ChangeEvent, useState, useEffect } from "react"
import cn from "classnames"
import { SearchIcon } from "../../ui-kit/icons"
import { ResetIcon } from "evergreen-ui"
import { useSelector, useDispatch } from "../../services/hooks"
import {
  clearSortAndFilter,
  searchByValue,
} from "../../services/slices/wellsSlice"
import styles from "./search.module.scss"

function Search() {
  const [searchValue, setSearchValue] = useState("")
  const dispatch = useDispatch()
  const { isFilteredByStatus, isFilteredByWell } = useSelector(
    (store) => store.wells
  )
  const handleClearFilter = () => {
    dispatch(clearSortAndFilter())
  }

  const filterByInput = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    setSearchValue(e.target.value)
  }

  useEffect(() => {
    dispatch(searchByValue({ value: searchValue }))
  }, [searchValue, setSearchValue])

  return (
    <div className={styles.search}>
      <div className={styles.search__input}>
        <SearchIcon type="interface-primary" />
        <input
          value={searchValue}
          className={styles.search__text}
          onChange={filterByInput}
          type="text"
          placeholder="Поиск по номеру скважины или статусу"
        />
      </div>
      <div
        className={cn(
          styles.search__reset,
          isFilteredByStatus || isFilteredByWell
            ? styles.search__reset_visible
            : null
        )}
      >
        <>
          <ResetIcon type="interface-primary" />
          <button
            className={styles.search__button}
            type="button"
            onClick={handleClearFilter}
          >
            Очистить фильтр
          </button>
        </>
      </div>
    </div>
  )
}

export default Search
