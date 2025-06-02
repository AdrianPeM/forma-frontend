
import clsx from "clsx"

import type { ButtonPropsType } from "./types"

import css from "./_Button.module.scss"

function Button(props: ButtonPropsType) {
  const {
    children,
    className,
    color = "primary",
    status,
    variant = "filled",
    ...restProps
  } = props

  const resultClassName = clsx(
    className, css.button, css[variant], css[status || color]
  )

  return (
    <button className={resultClassName} {...restProps}>
      {children}
    </button>
  )
}

export default Button