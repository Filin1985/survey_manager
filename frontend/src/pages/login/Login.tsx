import React, { useEffect, useState, FormEvent } from "react"
import "./styles.scss"
import { Link } from "react-router-dom"
import { useDispatch } from "../../services/hooks"
import InputCustom from "../../components/input/InputCustom"
import Button from "../../components/buttons/Button"
import { useNavigate } from "react-router-dom"
import { toaster } from "evergreen-ui"
import useForm from "../../hooks/useForm"
import { loginUser } from "../../services/actions/auth"

interface IOrg {
  id: number
  name: string
}

function Login() {
  const { values, handleChange, setValues } = useForm({
    email: "",
    password: "",
  })
  const dispatch = useDispatch()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(loginUser(values))
  }

  return (
    <div>
      <form
        className="loginForm"
        data-testid="login-form"
        onSubmit={(e) => handleSubmit(e)}
      >
        <p className="main-span">Добро пожаловать!</p>
        <p className="extra-span">Пожалуйста, введите свои данные</p>
        <InputCustom
          type="email"
          placeholder="Введите email"
          label="Email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        <InputCustom
          type="password"
          placeholder="Введите пароль"
          label="Пароль"
          extraLabel="Забыли пароль?"
          name="password"
          value={values.password}
          style={{ marginBottom: "40px" }}
          onChange={handleChange}
        />
        <Button type="submit" text="Войти" />
        <div className="end-group">
          <span className="enter-span">Впервые здесь? </span>
          <Link
            to="/register"
            className="yellow-span"
            style={{ fontSize: "14px" }}
          >
            Зарегистрируйтесь
          </Link>
        </div>
      </form>
    </div>
  )
}

export default Login
