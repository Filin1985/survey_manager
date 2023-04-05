import React from "react"
import styles from "./well-info-card.module.scss"
import { IWellData } from "../../../services/slices/wellsSlice"

const WellInfoCard: React.FC<IWellData> = ({
  start_date,
  start_depth,
  current_depth,
  plan_depth,
  contractor,
  telesystem,
  telesystem_number,
  sag,
  north,
  current_correction,
  correction_value,
}) => {
  return (
    <>
      <h2 className={styles.welldata__title}>Общая информация</h2>
      <ul className={styles.welldata__info}>
        <li className={styles.welldata__item}>
          <p className={styles.welldata__name}>Начало сопровождения</p>
          <p className={styles.welldata__data}>
            <span className={styles.welldata__data_bold}>{start_date}</span>
          </p>
        </li>
        <li className={styles.welldata__item}>
          <p className={styles.welldata__name}>Начальная глубина</p>
          <p className={styles.welldata__data}>
            <span className={styles.welldata__data_bold}>{start_depth} м.</span>
          </p>
        </li>
        <li className={styles.welldata__item}>
          <p className={styles.welldata__name}>Текущий забой</p>
          <p className={styles.welldata__data}>
            <span className={styles.welldata__data_bold}>
              {current_depth} м.
            </span>
          </p>
        </li>
        <li className={styles.welldata__item}>
          <p className={styles.welldata__name}>Плановая глубина</p>
          <p className={styles.welldata__data}>
            <span className={styles.welldata__data_bold}>{plan_depth} м.</span>
          </p>
        </li>
        <li className={styles.welldata__item}>
          <p className={styles.welldata__name}>Подрядчик</p>
          <p className={styles.welldata__data}>
            <span className={styles.welldata__data_bold}>{contractor}</span>
          </p>
        </li>
        <li className={styles.welldata__item}>
          <p className={styles.welldata__name}>ТС</p>
          <p className={styles.welldata__data}>
            <span className={styles.welldata__data_bold}>{telesystem}</span>
          </p>
        </li>
        <li className={styles.welldata__item}>
          <p className={styles.welldata__name}>Случайный номер ТС</p>
          <p className={styles.welldata__data}>
            <span className={styles.welldata__data_bold}>
              {telesystem_number}
            </span>
          </p>
        </li>
        <li className={styles.welldata__item}>
          <p className={styles.welldata__name}>SAG</p>
          <p className={styles.welldata__data}>
            <span className={styles.welldata__data_bold}>{sag}</span>
          </p>
        </li>
        <li className={styles.welldata__item}>
          <p className={styles.welldata__name}>Привязка к северу</p>
          <p className={styles.welldata__data}>
            <span className={styles.welldata__data_bold}>{north}</span>
          </p>
        </li>
        <li className={styles.welldata__item}>
          <p className={styles.welldata__name}>Текущая коррекция</p>
          <p className={styles.welldata__data}>
            <span className={styles.welldata__data_bold}>
              {current_correction}
            </span>
          </p>
        </li>
        <li className={styles.welldata__item}>
          <p className={styles.welldata__name}>Значение поправки</p>
          <p className={styles.welldata__data}>
            <span className={styles.welldata__data_bold}>
              {correction_value}
            </span>
          </p>
        </li>
      </ul>
    </>
  )
}

export default WellInfoCard
