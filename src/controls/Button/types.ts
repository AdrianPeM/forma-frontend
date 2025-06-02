import type { ComponentProps, ReactNode } from "react"

import type { ControlColorType, ControlStatusType } from "../controlGenericTypes"

export type ButtonPropsType = ComponentProps<"button"> &
{
  children: ReactNode
  className?: string
  variant?: "filled" | "outlined"
  color?: ControlColorType
  status?: ControlStatusType
}