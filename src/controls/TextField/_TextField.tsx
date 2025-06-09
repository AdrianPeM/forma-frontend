import clsx from "clsx"

import type { TextFieldPropsType } from "./types"

import css from "./_TextField.module.scss"

function TextField(props: TextFieldPropsType) {
  const {
    label,
    status,
    color = "primary",
    EndIcon,
    containerClassName,
    containerStyle = {},
    ...restProps
  } = props

  const resultContainerClassName = clsx(
    containerClassName, css.container, css[status || color],
    {
      [css.no_label]: label === undefined,
    })

  const inputClassName = clsx(css.input, restProps?.className)

  return (
    <div className={resultContainerClassName} style={containerStyle}>
      {label && <label className={css.label}>{label}</label>}
      <div className={css.wrapper}>
        <input
          {...restProps}
          className={inputClassName}
          placeholder={label}
        />
        {EndIcon && (
          <div className={css.end_icon}>{EndIcon}</div>
        )}
        <fieldset className={css.fieldset}>
          <legend className={css.legend}>{label}</legend>
        </fieldset>
      </div>
    </div>
  )
}

export default TextField