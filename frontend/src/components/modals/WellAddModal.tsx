import React from "react"
import { Form } from "../../ui-kit/form/Form"
import Input from "../../ui-kit/input"
import { toaster } from "evergreen-ui"
import { useDispatch } from "../../services/hooks"
import { closeModal } from "../../services/slices/modalSlice"
import useForm from "../../hooks/useForm"
import styles from "./modal.module.scss"

const WellAddModal: React.FC = () => {
  const { values, handleChange, setValues } = useForm({
    well_name: "",
    pad_name: "",
  })
  const dispatch = useDispatch()

  const onSubmit = (e: React.FormEvent): void => {
    e.preventDefault()
    if (values.well_name && values.pad_name) {
      //@ts-ignore
      dispatch(addNewWell({ ...values }))
      dispatch(closeModal())
      toaster.notify("Новая скважина создана!")
    } else toaster.notify("Все поля должны быть заполнены!")
  }

  return (
    <div className={styles.contractors__input}>
      <Form onSubmit={onSubmit} buttonText="Добавить">
        <Input
          type="text"
          label="Номер куста"
          placeholder="Введите номер куста"
          name="pad_name"
          value={values.pad_name}
          onChange={handleChange}
          blue={true}
        />
        <Input
          type="text"
          label="Номер скважины"
          placeholder="Введите номер скважины"
          name="well_name"
          value={values.well_name}
          onChange={handleChange}
          blue={true}
        />
      </Form>
    </div>
  )
}

export default WellAddModal
