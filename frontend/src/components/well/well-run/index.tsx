import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Document, Envelop, AddRun, DeleteRun } from "../../../ui-kit/svg/icons"
import { useSelector } from "../../../services/hooks"
import { ArrowLeftIcon, ArrowRightIcon } from "../../../ui-kit/svg/icons"
import styles from "./well-run.module.scss"

export const WellRun = () => {
  const [run, setRun] = useState<number>(1)
  const { activeDataWell } = useSelector((store) => store.wells)

  const handleNextRun = () => {
    setRun((prevValue) => {
      return prevValue + 1
    })
  }

  const handlePrevRun = () => {
    setRun((prevValue) => {
      if (prevValue > 1) {
        return prevValue - 1
      }
      return 1
    })
  }

  return (
    <>
      <div className={styles.wellact__box}>
        <div className={styles.wellact__info}>
          <p className={styles.wellact__field}>
            {activeDataWell?.customer} - {activeDataWell?.field} месторождение
          </p>
          <p className={styles.wellact__number}>
            Куст {activeDataWell?.rig}, Скважина {activeDataWell?.well_number},
            Транспортная секция
          </p>
          <p className={styles.wellact__status}>{activeDataWell?.status}</p>
        </div>
        <div className={styles.wellact__insert}>
          <p className={styles.wellact__title}>Дата внесения данных</p>
          <p className={styles.wellact__date}>29.03.2023</p>
        </div>
      </div>
      <div className={styles.wellact__run}>
        <ArrowLeftIcon onClick={handlePrevRun} />
        <p className={styles.wellact__runnumber}>Рейс {run}</p>
        <ArrowRightIcon onClick={handleNextRun} />
      </div>
      <div className={styles.wellact__acts}>
        <p className={styles.wellact__title}>Действия</p>
        <div className={styles.wellact__report}>
          <div className={styles.wellact__stat}>
            <Link to="#">
              <AddRun />
            </Link>
            <p className={styles.wellact__text}>Добавить рейс</p>
          </div>
          <div className={styles.wellact__stat}>
            <Link to="#">
              <Document />
            </Link>
            <p className={styles.wellact__text}>Экспорт отчета</p>
          </div>
        </div>
        <div className={styles.wellact__letter}>
          <div className={styles.wellact__stat}>
            <Link to="#">
              <DeleteRun />
            </Link>
            <p className={styles.wellact__text}>Удалить рейс</p>
          </div>
          <div className={styles.wellact__stat}>
            <Link
              to="#"
              onClick={(e) => {
                e.preventDefault()
              }}
            >
              <Envelop />
            </Link>
            <p className={styles.wellact__text}>Сформировать письмо</p>
          </div>
        </div>
      </div>
    </>
  )
}
