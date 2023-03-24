import React from "react"
import { Link } from "react-router-dom"
import WellItem from "../contractors/well-item/WellItem"
import styles from "./wells-card.module.scss"
import { useSelector } from "../../services/hooks"
import { IWellData } from "../../types"

const WellsCard: React.FC<IWellData> = ({
  customer,
  contractor,
  field,
  rig,
  well_number,
  status,
}) => {
  const { allWells } = useSelector((store) => store.wells)

  const pendingWells = allWells.filter((well) => well.status === "В ожидании")

  const completedWells = allWells.filter((well) => well.status === "Добурена")

  if (!allWells) {
    return <h1>Загрузка...</h1>
  }
  return (
    <div className={styles.wells}>
      <div className={styles.wells__drilling}>
        <div className={styles.wells__header}>
          <h2 className={styles.wells__type}>В бурении</h2>
          <Link to="/wells-table" className={styles.wells__button_all}>
            Смотреть все
          </Link>
        </div>
        <div className={styles.wells__field}>
          <p className={styles.wells__text}>{customer}</p>
          <p className={styles.wells__text}>{field} месторождение</p>
          <p className={styles.wells__text}>
            Куст {rig}, Скважина {well_number}
          </p>
        </div>
        <div className={styles.wells__date}>
          <p className={styles.wells__text}>Начало бурения</p>
          <p className={styles.wells__text}>25.02.2023</p>
        </div>
        <div className={styles.wells__depth}>
          <p className={styles.wells__text}>Плановая глубина</p>
          <p className={styles.wells__text}>3152 м.</p>
        </div>
        <div className={styles.wells__wellbores}>
          <p className={styles.wells__text}>Стволы</p>
          <button className={styles.wells__button_wellbore}>Ствол 1</button>
          <button className={styles.wells__button_wellbore}>Ствол 2</button>
          <button className={styles.wells__button_add}>+</button>
        </div>
        <div className={styles.wells__contractor}>
          <p className={styles.wells__text}>Подрядчик</p>
          <p className={styles.wells__text}>{contractor}</p>
        </div>
      </div>
      <div className={styles.wells__pending}>
        <h2 className={styles.wells__type}>В ожидании</h2>
        <ul className={styles.wells__list}>
          {pendingWells.length > 0
            ? pendingWells.map((well) => (
                <WellItem key={well.id} name={well.contractor} well={well} />
              ))
            : null}
        </ul>
      </div>
      <div className={styles.wells__completed}>
        <h2 className={styles.wells__type}>Добурены</h2>
        <ul className={styles.wells__list}>
          {completedWells.length > 0
            ? completedWells.map((well) => (
                <WellItem key={well.id} name={well.contractor} well={well} />
              ))
            : null}
        </ul>
      </div>
    </div>
  )
}

export default WellsCard
