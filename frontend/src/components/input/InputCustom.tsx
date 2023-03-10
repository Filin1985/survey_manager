import React, { useEffect, useState } from "react"
import "./styles.scss"
import { EyeIcon, ClosedEyeIcon } from "../../svg/icons"
import { ICustomInputProps } from "../../types"

const InputCustom: React.FC<ICustomInputProps<HTMLInputElement>> = (props) => {
  const [closeEye, setCloseEye] = useState<boolean>(false)
  const [type, setType] = useState<string>("password")
  const [isPassword, setIsPassword] = useState<boolean>(false)

  useEffect(() => {
    setIsPassword(props.type === "password")
  }, [props])

  return (
    <div className="input-group" style={props.style}>
      <div className="input-label-group">
        {props.label && (
          <label htmlFor={props.label} className="input-label">
            {props.label}
          </label>
        )}
        {props.extraLabel && (
          <span
            onClick={() => {
              props.setShowLogin?.(false)
              props.setShowResetPass?.(true)
            }}
            className="input-extra-label"
          >
            {props.extraLabel}
          </span>
        )}
      </div>
      <input
        type={isPassword ? type : props.type}
        placeholder={props.placeholder}
        className={props.blue ? "input-blue" : "input-yellow"}
        required
        id={props.label}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      />
      {props.type === "password" && (
        <div className="password-viewer">
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

export default InputCustom
