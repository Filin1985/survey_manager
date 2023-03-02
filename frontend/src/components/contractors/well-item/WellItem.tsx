import React from "react"
import styles from "../contractors-card.module.scss"
import { getLogo } from "../../../utils/getLogo"
import { IWellData } from "../../../types"

type TWellItem = {
  name: string
  well: IWellData
}

const WellItem: React.FC<TWellItem> = ({ name, well }) => {
  return (
    <div className={styles.contractors__well}>
      {getLogo(name)}
      <div className={styles.contractors__field}>
        <p className={styles.contractors__paragraph}>{well.field}</p>
        <p className={styles.contractors__paragraph}>
          Куст {well.rig}, Скважина {well.well_number}
        </p>
      </div>
    </div>
  )
}

export default WellItem
