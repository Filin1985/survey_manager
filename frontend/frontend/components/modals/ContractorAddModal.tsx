import React, { useState } from "react"
import InputCustom from "../input/InputCustom"
import ModalButton from "../../ui-kit/buttons/ModalButton"
import { toaster } from "evergreen-ui"
import { useDispatch } from "../../services/hooks"
import { addNewContractor } from "../../services/slices/contractorsSlice"
import { closeModal } from "../../services/slices/modalSlice"
import styles from "./modal.module.scss"

type InputEvent = React.ChangeEvent<HTMLInputElement>

const ContractorAddModal: React.FC = () => {
  const [email, setEmail] = useState<string>("")
  const [name, setName] = useState<string>("")
  const [phone, setPhone] = useState<string>("")
  const dispatch = useDispatch()

  const onSubmit = (e: React.FormEvent): void => {
    e.preventDefault()
    if (name && phone && email) {
      dispatch(addNewContractor({ name, email, phone }))
      dispatch(closeModal())
      toaster.notify("Новый подрядчик добавлен!")
    } else toaster.notify("Все поля должны быть заполнены!")
  }

  return (
    <form className={styles.contractors}>
      <div className={styles.contractors__input}>
        <InputCustom
          type="text"
          blue={true}
          placeholder="Введите название подрядчика"
          label="Название"
          value={name}
          onChange={(e: InputEvent) => setName(e.target.value)}
        />
        <InputCustom
          type="email"
          blue={true}
          placeholder="Введите email подрядчика"
          label="Email"
          value={email}
          onChange={(e: InputEvent) => setEmail(e.target.value)}
        />
        <InputCustom
          type="text"
          blue={true}
          placeholder="Введите телефон подрядчика"
          label="Телефон"
          value={phone}
          onChange={(e: InputEvent) => setPhone(e.target.value)}
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

export default ContractorAddModal
