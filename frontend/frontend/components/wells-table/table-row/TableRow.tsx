import React from "react"
import { DeleteIcon } from "../../../ui-kit/svg/icons"
import styles from "../wells-table.module.scss"
import { IWellData } from "../../../types"
import { useDispatch } from "../../../services/hooks"
import Button from "../../../ui-kit/buttons/Button"

export interface IWell {
  well: IWellData
}

const TableRow: React.FC<IWellData> = ({
  id,
  customer,
  contractor,
  field,
  rig,
  well_number,
  status,
}) => {
  const dispatch = useDispatch()

  //   const handleDelete = (id: string) => {
  //     dispatch(deleteUser(id))
  //   }

  return (
    <tr>
      <td className={styles.table__row}>{customer}</td>
      <td className={styles.table__row}>{contractor}</td>
      <td className={styles.table__row}>{field}</td>
      <td className={styles.table__row}>{rig}</td>
      <td className={styles.table__row}>{well_number}</td>
      <td className={styles.table__row}>{status}</td>
      <td>
        <Button
          htmlType="button"
          size="small"
          extClassName={styles.shiftForm__button}
        >
          Выбрать
        </Button>
      </td>
    </tr>
  )
}

export default TableRow
