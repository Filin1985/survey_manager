import React, { useState, FormEvent } from "react"
import { useDispatch } from "../../services/hooks"
import { Link } from "react-router-dom"
import InputCustom from "../../components/input/InputCustom"
import useForm from "../../hooks/useForm"
import styles from "../register/register-page.module.css"
import { Button } from "react-bootstrap"

const ForgotPassword = () => {
  const { values, handleChange, setValues } = useForm({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    organization: "",
  })

  const dispatch = useDispatch()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // dispatch(forgotPassword(email, location.pathname, history))
  }

  return (
    <div className={styles.register}>
      <h1 className={styles.register__header}>Восстановление пароля</h1>
      <form className={styles.register__inputs} onSubmit={handleSubmit}>
        <InputCustom
          type="email"
          placeholder="Введите email"
          label="Email"
          value={values.email}
          onChange={handleChange}
        />
        <Button variant="yellow" style={{ width: "246px", float: "right" }}>
          Восстановить
        </Button>
      </form>
      <p className={styles.register__login}>
        Вспомнили пароль? <Link to="/login">Войти</Link>
      </p>
    </div>
  )
}

export default ForgotPassword
