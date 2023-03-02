import React, { FormEvent, useState, ChangeEvent } from "react"
import { useDispatch, useSelector } from "../../services/hooks"
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"
import styles from "../register/register-page.module.css"
import InputCustom from "../../components/input/InputCustom"

const ResetPassword = () => {
  const [token, setToken] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement
    setPassword(target.value)
  }
  //   const { visitedPath } = useSelector((store) => store.user)
  //   const user = useSelector((store) => store.user.email)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // dispatch(resetPassword(password, token, history))
  }

  //   if (!visitedPath) {
  //     return <Redirect to='/login' />
  //   } else if (user) {
  //     return <Redirect to='/' />
  //   }

  return (
    <div className={styles.register}>
      <h1 className={styles.register__header}>Вход</h1>
      <form className={styles.register__inputs} onSubmit={handleSubmit}>
        <InputCustom
          type="password"
          placeholder="Введите пароль"
          label="Пароль"
          style={{ marginBottom: "40px" }}
          value={password}
          onChange={onChange}
        />
        <InputCustom
          type="text"
          placeholder="Введите код из письма"
          onChange={(e) => setToken(e.target.value)}
          value={token}
          label="token"
        />

        <Button variant="yellow" type="submit">
          Создать учетную запись
        </Button>
      </form>
      <p className={styles.register__login}>
        Вспомнили пароль? <Link to="/login">Войти</Link>
      </p>
    </div>
  )
}

export default ResetPassword
