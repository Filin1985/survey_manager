import React, { useState } from "react"
import Input from "../../ui-kit/input"
import { Form } from "../../ui-kit/form/Form"
import { toaster } from "evergreen-ui"
import { useDispatch, useSelector } from "../../services/hooks"
import { deleteContractor } from "../../services/slices/contractorsSlice"
import { closeModal } from "../../services/slices/modalSlice"
import useForm from "../../hooks/useForm"
import styles from "./modal.module.scss"

type InputEvent = React.ChangeEvent<HTMLInputElement>

const ContractorDeleteModal: React.FC = () => {
  const { allContractors } = useSelector((store) => store.contractors)
  const { values, handleChange, setValues } = useForm({
    name: "",
  })
  const dispatch = useDispatch()

  const onSubmit = (e: React.FormEvent): void => {
    e.preventDefault()
    if (values.name) {
      const contractorToDelete = allContractors.find(
        (contractor) => contractor.name === values.name
      )
      if (contractorToDelete) {
        dispatch(deleteContractor(contractorToDelete.id))
        toaster.notify("Подрядчик удален!")
      }
      dispatch(closeModal())
    } else toaster.notify("Нужно выбрать подрядчика!")
  }

  return (
    <div className={styles.contractors__input}>
      <Form onSubmit={onSubmit} buttonText="Удалить">
        <Input
          type="text"
          label="Подрядчик"
          placeholder="Введите наименование подрядичка"
          value={values.name}
          onChange={handleChange}
          blue={true}
        />
      </Form>
    </div>
  )
}

export default ContractorDeleteModal
