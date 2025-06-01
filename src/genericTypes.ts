import type { CSSProperties } from "react"

export type CSSPropertiesWithVariables = CSSProperties & {
	[key: `--${string}`]: string
}

export type GenericPrimitiveValue = null | undefined | number | string | boolean | Date
export type GenericValue = GenericPrimitiveValue | GenericObject | Array<GenericValue>

export type GenericObject = {
	[key: string]: GenericValue
}

export type Unpacked<T> = T extends (infer U)[] ? U : never

export type Nullable<T> = { [K in keyof T]: T[K] | null }

export type UnpackKeyOfArray<T, K extends keyof T> = T[K]

export type UnderscoredString<T extends string, C extends string = ""> = T extends `${infer F} ${infer R}`
	? UnderscoredString<R, C extends "" ? F : `${C}_${F}`>
	: C extends ""
		? T
		: `${C}_${T}`

export type UppercaseUnderscoredString<K extends string> = Uppercase<UnderscoredString<K>>