import React from "react"
import styles from "./customer-card.module.scss"
import { useSelector } from "../../services/hooks"
import { ICustomerData } from "../../types"
import { LogoIcon } from "../../ui-kit/svg/icons"
import WellItem from "../contractors/well-item/WellItem"

export interface ICustomerChartData {
  customer: ICustomerData
}

const CustomerCard: React.FC<ICustomerChartData> = ({ customer }) => {
  const { allWells } = useSelector((store) => store.wells)
  const customerWells = allWells.filter(
    (well) => well.customer_id === customer.id
  )

  console.log(customerWells)

  const drillingWells = customerWells.filter(
    (well) => well.status === "В бурении"
  )

  const pendingWells = customerWells.filter(
    (well) => well.status === "В ожидании"
  )

  const completedWells = customerWells.filter(
    (well) => well.status === "Добурена"
  )

  return (
    <section className={styles.contractors}>
      <div className={styles.contractors__header}>
        <div className={styles.contractors__title}>
          <LogoIcon />
          <h2 className={styles.contractors__name}>{customer.name}</h2>
        </div>
        <p className={styles.contractors__all}>
          Всего скважин{" "}
          <span className={styles.contractors__number}>
            {customerWells.length}
          </span>
        </p>
      </div>
      <ul className={styles.contractors__list}>
        <li className={styles.contractors__card}>
          <p className={styles.contractors__subtitle}>
            В бурении -{" "}
            <span className={styles.contractors__number}>
              {drillingWells.length}
            </span>
          </p>
          <ul className={styles.wells__list}>
            {drillingWells.length > 0 &&
              drillingWells.map((well) => (
                <WellItem key={well.id} name={well.contractor} well={well} />
              ))}
          </ul>
        </li>
        <li className={styles.contractors__card}>
          <p className={styles.contractors__subtitle}>
            В ожидании -{" "}
            <span className={styles.contractors__number}>
              {pendingWells.length}
            </span>
          </p>
          <ul className={styles.wells__list}>
            {pendingWells.length > 0 &&
              pendingWells.map((well) => (
                <WellItem key={well.id} name={well.contractor} well={well} />
              ))}
          </ul>
        </li>
        <li className={styles.contractors__card}>
          <p className={styles.contractors__subtitle}>
            Добурены -{" "}
            <span className={styles.contractors__number}>
              {completedWells.length}
            </span>
          </p>
          <ul className={styles.wells__list}>
            {completedWells.length > 0 &&
              completedWells.map((well) => (
                <WellItem key={well.id} name={well.contractor} well={well} />
              ))}
          </ul>
        </li>
      </ul>
    </section>
  )
}

export default CustomerCard
