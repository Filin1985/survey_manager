import React, { useState } from "react"
import Input from "../../ui-kit/input"
import { Form } from "../../ui-kit/form/Form"
import { toaster } from "evergreen-ui"
import { useDispatch } from "../../services/hooks"
import { addNewContractor } from "../../services/slices/contractorsSlice"
import { closeModal } from "../../services/slices/modalSlice"
import useForm from "../../hooks/useForm"
import styles from "./modal.module.scss"

type InputEvent = React.ChangeEvent<HTMLInputElement>

const ContractorAddModal: React.FC = () => {
  const { values, handleChange, setValues } = useForm({
    name: "",
  })
  const dispatch = useDispatch()

  const onSubmit = (e: React.FormEvent): void => {
    e.preventDefault()
    if (values.name) {
      dispatch(addNewContractor(values.name))
      dispatch(closeModal())
      toaster.notify("Новый подрядчик добавлен!")
    } else toaster.notify("Все поля должны быть заполнены!")
  }

  return (
    <div className={styles.contractors__input}>
      <Form onSubmit={onSubmit} buttonText="Добавить">
        <Input
          type="text"
          label="Подрядчик"
          placeholder="Введите наименование подрядичка"
          name="name"
          value={values.name}
          onChange={handleChange}
          blue={true}
        />
      </Form>
    </div>
  )
}

export default ContractorAddModal
