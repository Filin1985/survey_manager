import React, { useEffect, FC, ReactNode } from 'react'
import styles from './modal.module.scss'
import ReactDOM from 'react-dom'
import ModalOverlay from '../modal-overlay/ModalOverlay'
import { TfiClose } from 'react-icons/tfi'

interface IModalProps {
  closeModal: () => void
  children: ReactNode
  withTitle?: boolean
}

const ESC_KEYCODE = 27
const modalSelector = document.querySelector('#react-modals') as HTMLElement

const Modal: FC<IModalProps> = ({ children, closeModal }) => {
  const closeByEsc = (e: KeyboardEvent) => {
    if (e.keyCode === ESC_KEYCODE) {
      closeModal()
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', closeByEsc)
    return () => {
      window.removeEventListener('keydown', closeByEsc)
    }
  }, [])

  return ReactDOM.createPortal(
    <>
      <div className={styles.order__container} data-test='modal'>
        <span className={styles.modal__close} onClick={closeModal}>
          <TfiClose size={24} />
        </span>
        {children}
      </div>
      <ModalOverlay onClick={closeModal} />
    </>,
    modalSelector
  )
}

export default Modal
