import React, { FormEvent } from "react"
import { Link } from "react-router-dom"
import { useDispatch } from "../../services/hooks"
import styles from "./register-user.module.scss"
import useForm from "../../hooks/useForm"
import InputCustom from "../../components/input/InputCustom"
import Button from "../../ui-kit/buttons/Button"
import { useNavigate } from "react-router-dom"
import { toaster } from "evergreen-ui"
import { registerUser } from "../../services/slices/registerSlice"

const RegisterUser = () => {
  const { values, handleChange, setValues } = useForm({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    organization: "",
  })
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const checkSignUpValidity = (): boolean => {
    return (
      !!values.email &&
      !!values.password &&
      !!values.firstName &&
      !!values.lastName &&
      !!values.organization
    )
  }
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (checkSignUpValidity()) {
      dispatch(registerUser(values))
      navigate("/login")
    } else {
      toaster.notify("Нужно заполнить все данные")
    }
  }

  return (
    <form className={styles.signUpForm} onSubmit={(e): void => handleSubmit(e)}>
      <p className={styles.main_span}>Создать учетную запись</p>
      <p className={styles.extra_span}>
        У вас уже есть учетная запись?
        <Link
          className={styles.yellow_span}
          to="/login"
          style={{ fontSize: "20px" }}
        >
          {" "}
          Войти
        </Link>
      </p>
      <InputCustom
        type="email"
        placeholder="Введите email"
        label="Email"
        name="email"
        value={values.email}
        onChange={handleChange}
      />
      <InputCustom
        type="text"
        placeholder="Введите имя"
        label="Имя"
        style={{
          display: "inline-block",
          width: "132px",
          marginRight: "30px",
        }}
        name="firstName"
        value={values.firstName}
        onChange={handleChange}
      />
      <InputCustom
        type="text"
        placeholder="Введите фамилию"
        label="Фамилия"
        style={{
          display: "inline-block",
          width: "254px",
          align: "right",
        }}
        name="lastName"
        value={values.lastName}
        onChange={handleChange}
      />
      <InputCustom
        type="text"
        placeholder="Введите название организации"
        label="Организация"
        name="organization"
        value={values.organization}
        onChange={handleChange}
      />
      <InputCustom
        type="password"
        placeholder="Введите пароль"
        label="Пароль"
        style={{ marginBottom: "40px" }}
        name="password"
        value={values.password}
        onChange={handleChange}
      />
      <Button htmlType="submit" size="small">
        Создать учетную запись
      </Button>
    </form>
  )
}

export default RegisterUser
