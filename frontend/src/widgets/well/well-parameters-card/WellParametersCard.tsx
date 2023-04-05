import React from "react"
import { useNavigate } from "react-router-dom"
import styles from "./well-parameters.module.scss"
import Button from "../../../ui-kit/buttons/Button"
import { IWellData } from "../../../services/slices/wellsSlice"

const WellParametersCard: React.FC<IWellData> = ({
  customer,
  field,
  rig,
  well_number,
  amplitude,
  latitude,
  longtitude,
  NY,
  EX,
  start_date,
  geomagnetic_model,
  geomagnetic_date,
  north_direction,
  btotal,
  gtotal,
  dip,
  magn,
  meridian,
  critical_azimuth,
}) => {
  return (
    <>
      <div className={styles.parameters__table}>
        <ul className={styles.parameters__column}>
          <li className={styles.parameters__row}>
            <p className={styles.parameters__parameter}>Дочернее общесто</p>
            <p className={styles.parameters__data}>{customer}</p>
          </li>
          <li className={styles.parameters__row}>
            <p className={styles.parameters__parameter}>Месторождение</p>
            <p className={styles.parameters__data}>{field}</p>
          </li>
          <li className={styles.parameters__row}>
            <p className={styles.parameters__parameter}>Куст</p>
            <p className={styles.parameters__data}>{rig}</p>
          </li>
          <li className={styles.parameters__row}>
            <p className={styles.parameters__parameter}>Скважина</p>
            <p className={styles.parameters__data}>{well_number}</p>
          </li>
          <li className={styles.parameters__row}>
            <p className={styles.parameters__parameter}>
              Амплитуда точки отсчета
            </p>
            <p className={styles.parameters__data}>
              {amplitude ? amplitude : "Нет данных"}
            </p>
          </li>
          <li className={styles.parameters__row}>
            <p className={styles.parameters__parameter}>Система координат</p>
            <p className={styles.parameters__data}>Gauss-Kruger 14N</p>
          </li>
          <li className={styles.parameters__row}>
            <p className={styles.parameters__parameter}>Широта</p>
            <p className={styles.parameters__data}>
              {latitude ? latitude : "Нет данных"}
            </p>
          </li>
          <li className={styles.parameters__row}>
            <p className={styles.parameters__parameter}>Долгота</p>
            <p className={styles.parameters__data}>
              {longtitude ? longtitude : "Нет данных"}
            </p>
          </li>
          <li className={styles.parameters__row}>
            <p className={styles.parameters__parameter}>N/Y, м</p>
            <p className={styles.parameters__data}>{NY ? NY : "Нет данных"}</p>
          </li>
          <li className={styles.parameters__row}>
            <p className={styles.parameters__parameter}>E/X, м</p>
            <p className={styles.parameters__data}>{EX ? EX : "Нет данных"}</p>
          </li>
        </ul>
        <ul className={styles.parameters__column}>
          <li className={styles.parameters__row}>
            <p className={styles.parameters__parameter}>Начало сопровождения</p>
            <p className={styles.parameters__data}>
              {start_date ? start_date : "Нет данных"}
            </p>
          </li>
          <li className={styles.parameters__row}>
            <p className={styles.parameters__parameter}>Геомагнитная модель</p>
            <p className={styles.parameters__data}>
              {geomagnetic_model ? geomagnetic_model : "Нет данных"}
            </p>
          </li>
          <li className={styles.parameters__row}>
            <p className={styles.parameters__parameter}>
              Дата геомагнитных данных
            </p>
            <p className={styles.parameters__data}>
              {geomagnetic_date ? geomagnetic_date : "Нет данных"}
            </p>
          </li>
          <li className={styles.parameters__row}>
            <p className={styles.parameters__parameter}>Направление на север</p>
            <p className={styles.parameters__data}>
              {north_direction ? north_direction : "Нет данных"}
            </p>
          </li>
          <li className={styles.parameters__row}>
            <p className={styles.parameters__parameter}>Btotal, нТл</p>
            <p className={styles.parameters__data}>
              {btotal ? btotal : "Нет данных"}
            </p>
          </li>
          <li className={styles.parameters__row}>
            <p className={styles.parameters__parameter}>Gtotal, нТл</p>
            <p className={styles.parameters__data}>
              {gtotal ? gtotal : "Нет данных"}
            </p>
          </li>
          <li className={styles.parameters__row}>
            <p className={styles.parameters__parameter}>Dip, &#176;</p>
            <p className={styles.parameters__data}>
              {dip ? dip : "Нет данных"}
            </p>
          </li>
          <li className={styles.parameters__row}>
            <p className={styles.parameters__parameter}>
              Магнитное склонение, &#176;
            </p>
            <p className={styles.parameters__data}>
              {magn ? magn : "Нет данных"}
            </p>
          </li>
          <li className={styles.parameters__row}>
            <p className={styles.parameters__parameter}>
              Угол схождения меридианов, &#176;
            </p>
            <p className={styles.parameters__data}>
              {meridian ? meridian : "Нет данных"}
            </p>
          </li>
          <li className={styles.parameters__row}>
            <p className={styles.parameters__parameter}>Критический азимут</p>
            <p className={styles.parameters__data}>
              {critical_azimuth ? "Да" : "Нет"}
            </p>
          </li>
        </ul>
      </div>
    </>
  )
}

export default WellParametersCard
