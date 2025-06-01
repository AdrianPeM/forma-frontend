import type { ComponentPropsWithRef, ForwardedRef, ReactNode } from "react"
import { ControlColorType, ControlStatusType } from "../controlGenericTypes"

export type ButtonPropsType = ComponentPropsWithRef<"button"> &
{
    children: ReactNode
    className?: string
    variant?: "filled" | "outlined"
    color?: ControlColorType
    status?: ControlStatusType
}

export type ButtonRef = ForwardedRef<HTMLButtonElement>
