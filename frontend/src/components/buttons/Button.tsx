import React, { SyntheticEvent, FormEvent } from "react"
import styles from "./buttons.module.scss"

interface IButtonProps {
  type?: "submit" | "reset" | "button"
  text: string
}

const Button: React.FC<IButtonProps> = ({ type, text }) => {
  return (
    <button className={styles.button_type_submit} type={type}>
      {text}
    </button>
  )
}

export default Button
