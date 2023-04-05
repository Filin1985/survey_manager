import React, { PropsWithChildren, SyntheticEvent } from "react"
import styles from "./buttons.module.scss"

interface IButtonProps {
  onClick?: (e: SyntheticEvent) => void
  text: string
}

export type Ref = HTMLButtonElement

const SquareButton: React.FC<PropsWithChildren<IButtonProps>> = ({
  children,
  onClick,
  text,
}) => {
  return (
    <button className={styles.button_type_square} onClick={onClick}>
      {children}
      <p className={styles.text}>{text}</p>
    </button>
  )
}

export default React.memo(SquareButton)
