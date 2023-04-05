import React, { ChangeEvent, useState } from "react"
import { TUserRegister, TWell, TCustomer } from "../types"

export type TInputValues = TUserRegister & TWell & TCustomer

const useForm = (inputValues: TInputValues) => {
  const [values, setValues] = useState(inputValues)

  const handleChange = (
    event: ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { value, name } = event.target
    setValues({ ...values, [name]: value })
  }

  return { values, handleChange, setValues }
}

export default useForm
