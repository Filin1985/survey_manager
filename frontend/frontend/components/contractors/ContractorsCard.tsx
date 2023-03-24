import React from "react"
import styles from "./contractors-card.module.scss"
import { IContractorData } from "../../types"
import { getLogo } from "../../utils/getLogo"
import { useSelector } from "../../services/hooks"
import WellItem from "./well-item/WellItem"

interface IWellsOnStatus {
  subsidiary: string
  bush: string
  well: string
}

export interface IWellData {
  name: string
  latest_activity?: string
  color?: string
  pending: IWellsOnStatus[]
  in_drilling: IWellsOnStatus[]
  drilled: IWellsOnStatus[]
}

export interface ICardProps {
  contractor: IContractorData
}

const ContractorsCard: React.FC<ICardProps> = ({ contractor }) => {
  const { allWells } = useSelector((store) => store.wells)
  const contractorWells = allWells.filter(
    (well) => well.contractor_id === contractor.id
  )

  const drillingWells = contractorWells.filter(
    (well) => well.status === "В бурении"
  )

  const pendingWells = contractorWells.filter(
    (well) => well.status === "В ожидании"
  )

  const completedWells = contractorWells.filter(
    (well) => well.status === "Добурена"
  )

  if (!contractor) {
    return <h1>Загрузка...</h1>
  }
  return (
    <section className={styles.contractors}>
      <div className={styles.contractors__header}>
        <div className={styles.contractors__title}>
          {getLogo(contractor.name)}
          <h2 className={styles.contractors__name}>{contractor.name}</h2>
        </div>
        <p className={styles.contractors__all}>
          Всего скважин{" "}
          <span className={styles.contractors__number}>
            {contractorWells.length}
          </span>
        </p>
      </div>
      <div className={styles.contractors__list}>
        <div className={styles.contractors__card}>
          <p className={styles.contractors__subtitle}>
            В бурении -{" "}
            <span className={styles.contractors__number}>
              {drillingWells.length}
            </span>
          </p>
          <ul className={styles.wells__list}>
            {drillingWells
              ? drillingWells.map((well) => (
                  <WellItem key={well.id} name={contractor.name} well={well} />
                ))
              : null}
          </ul>
        </div>
        <div className={styles.contractors__card}>
          <p className={styles.contractors__subtitle}>
            В ожидании -{" "}
            <span className={styles.contractors__number}>
              {pendingWells.length}
            </span>
          </p>
          <ul className={styles.wells__list}>
            {pendingWells
              ? pendingWells.map((well) => (
                  <WellItem key={well.id} name={contractor.name} well={well} />
                ))
              : null}
          </ul>
        </div>
        <div className={styles.contractors__card}>
          <p className={styles.contractors__subtitle}>
            Добурены -{" "}
            <span className={styles.contractors__number}>
              {completedWells.length}
            </span>
          </p>
          <ul className={styles.wells__list}>
            {completedWells
              ? completedWells.map((well) => (
                  <WellItem key={well.id} name={contractor.name} well={well} />
                ))
              : null}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default ContractorsCard
