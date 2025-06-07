import type { ComponentProps, CSSProperties, ReactNode } from "react"

import type { ControlColorType, ControlStatusType } from "../controlGenericTypes"

type TextFieldCustomPropsType = {
  label?: string
  status?: ControlStatusType
  color?: ControlColorType
  EndIcon?: ReactNode
  containerClassName?: string
  containerStyle?: CSSProperties
}

export type TextFieldPropsType = Omit<ComponentProps<"input">, keyof TextFieldCustomPropsType> & TextFieldCustomPropsType