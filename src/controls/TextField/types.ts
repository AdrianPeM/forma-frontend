import type { ComponentProps, CSSProperties } from "react"

import type { ControlColorType, ControlStatusType } from "../controlGenericTypes"

type TextFieldCustomPropsType = {
  containerClassName?: string
  label?: string
  status?: ControlStatusType
  color?: ControlColorType
  containerStyle?: CSSProperties
}

export type TextFieldPropsType = Omit<ComponentProps<"input">, keyof TextFieldCustomPropsType> & TextFieldCustomPropsType