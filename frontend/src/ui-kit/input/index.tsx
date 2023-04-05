import React, { useEffect, useState } from "react"
import styles from "./styles.module.scss"
import { EyeIcon, ClosedEyeIcon } from "../../ui-kit/svg/icons"
import { ICustomInputProps } from "../../types"

const Input: React.FC<ICustomInputProps<HTMLInputElement>> = (props) => {
  const [closeEye, setCloseEye] = useState<boolean>(false)
  const [type, setType] = useState<string>("password")
  const [isPassword, setIsPassword] = useState<boolean>(false)

  useEffect(() => {
    setIsPassword(props.type === "password")
  }, [props])

  return (
    <div className={styles.input_group} style={props.style}>
      <div className={styles.input_label_group}>
        {props.label && (
          <label htmlFor={props.label} className={styles.input_label}>
            {props.label}
          </label>
        )}
        {props.extraLabel && (
          <span
            onClick={() => {
              props.setShowLogin?.(false)
              props.setShowResetPass?.(true)
            }}
            className={styles.input_extra_label}
          >
            {props.extraLabel}
          </span>
        )}
      </div>
      <input
        type={isPassword ? type : props.type}
        placeholder={props.placeholder}
        className={styles.input}
        required
        id={props.label}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      />
      {props.type === "password" && (
        <div className={styles.password_viewer}>
          {!closeEye ? (
            <EyeIcon
              onClick={() => {
                setCloseEye(true)
                setType("text")
              }}
            />
          ) : (
            <ClosedEyeIcon
              style={{ marginTop: "-3px" }}
              onClick={() => {
                setCloseEye(false)
                setType("password")
              }}
            />
          )}
        </div>
      )}
    </div>
  )
}

export default Input
