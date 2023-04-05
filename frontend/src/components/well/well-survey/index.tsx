import React from "react"
import Button from "../../../ui-kit/buttons/Button"
import styles from "./well-survey.module.scss"
import { useSelector, useDispatch } from "../../../services/hooks"
import { useTable } from "react-table"

export const WellSurvey = () => {
  const { activeDataWell } = useSelector((store) => store.wells)

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
      <div className={styles.buttons}>
        <Button
          className={styles.buttons__load}
          htmlType="button"
          size="small"
          onClick={() => {}}
        >
          Загрузить
        </Button>
        <div className={styles.buttons__container}>
          <Button
            className={styles.buttons__button}
            htmlType="button"
            size="small"
            onClick={() => {}}
          >
            Добавить оси
          </Button>
          <Button
            className={styles.buttons__button}
            htmlType="button"
            size="small"
            onClick={() => {}}
          >
            Увеличить
          </Button>
        </div>
      </div>
    </>
  )
}
