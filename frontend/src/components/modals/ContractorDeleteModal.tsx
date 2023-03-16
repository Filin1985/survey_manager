import React, { useState } from "react"
import InputCustom from "../input/InputCustom"
import ModalButton from "../buttons/ModalButton"
import { toaster } from "evergreen-ui"
import { useDispatch, useSelector } from "../../services/hooks"
import { deleteContractor } from "../../services/slices/contractors"
import { closeModal } from "../../services/slices/modalSlice"
import styles from "./modal.module.scss"

type InputEvent = React.ChangeEvent<HTMLInputElement>

const ContractorDeleteModal: React.FC = () => {
  const { allContractors } = useSelector((store) => store.contractors)
  const [email, setEmail] = useState<string>("")
  const dispatch = useDispatch()

  const onSubmit = (e: React.FormEvent): void => {
    e.preventDefault()
    if (email) {
      const contractorToDelete = allContractors.find(
        (contractor) => contractor.email === email
      )
      if (contractorToDelete) {
        dispatch(deleteContractor(contractorToDelete.id))
        toaster.notify("Подрядчик удален!")
      }
      dispatch(closeModal())
    } else toaster.notify("Нужно выбрать подрядчика!")
  }

  return (
    <form className={styles.contractors}>
      <div className={styles.contractors__input}>
        <InputCustom
          type="email"
          blue={true}
          placeholder="Введите email подрядчика"
          label="Email"
          value={email}
          onChange={(e: InputEvent) => setEmail(e.target.value)}
        />
      </div>
      <div className={styles.contractors__button}>
        <ModalButton
          type="submit"
          onClick={(e): void => onSubmit(e)}
          text="Добавить"
        />
      </div>
    </form>
  )
}

export default ContractorDeleteModal
