export type Debug1<T> = {
  [key in keyof T]: T[key]
}
export type Debug2<T> = T extends object ? { [K in keyof T]: Debug2<T[K]> } : T

export type AllOrNone<T> = T | { [K in keyof T]?: never }
export type AtLeastOne<T, Keys extends keyof T = keyof T> = Partial<T> & { readonly [K in Keys]: Required<Pick<T, K>> }[Keys]

export type RequiredFields<T, RequiredKeys extends keyof T> = T & {
  [Key in RequiredKeys]: NonNullable<T[Key]>
}