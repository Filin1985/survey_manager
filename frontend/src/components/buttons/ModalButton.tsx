import React, { SyntheticEvent } from 'react'
import styles from './buttons.module.scss'

interface IButtonProps {
  type?: 'submit' | 'reset' | 'button'
  text: string
  onClick: (e: SyntheticEvent) => void
}

const ModalButton: React.FC<IButtonProps> = ({ type, onClick, text }) => {
  return (
    <button className={styles.button_type_modal} type={type} onClick={onClick}>
      {text}
    </button>
  )
}

export default ModalButton
