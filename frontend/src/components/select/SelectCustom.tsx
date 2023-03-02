import React from "react"
import "./styles.scss"

import { ICustomInputProps } from "../../types/index"

//option сложно стилизовать, надо подумать над этой проблемой
const SelectCustom: React.FC<ICustomInputProps<HTMLSelectElement>> = (
  props
) => {
  return (
    <div className="select-group" style={props.style}>
      <div className="label-group">
        {!!props.label && (
          <label htmlFor={props.label} className="select-label">
            {props.label}
          </label>
        )}
        {!!props.extraLabel && (
          <span
            onClick={() => {
              props.setShowLogin?.(false)
              props.setShowResetPass?.(true)
            }}
            className="select-extra-label"
          >
            {props.extraLabel}
          </span>
        )}
      </div>
      <select
        className={!!props.blue ? "select-blue" : "select-yellow"}
        id={props.label}
        required
        value={props.value}
        onChange={props.onChange}
      >
        <option value="" disabled selected>
          {props.placeholder}
        </option>
        {!!props.data &&
          props.data.map((item) => (
            <option key={item} value={item} style={{ fontSize: "16px" }}>
              {item}
            </option>
          ))}
      </select>
    </div>
  )
}

export default SelectCustom
