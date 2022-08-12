/* eslint-disable @typescript-eslint/consistent-type-definitions */
import { InvertObject } from '../typing'



export declare module 'lodash' {
  interface LoDashStatic {
    invert<T extends Record<PropertyKey, PropertyKey>>( obj: T ): InvertObject<T>

    toPairs<T extends Record<any, any>>( object?: T ): [ keyof T, T[keyof T] ][]

    // toPairs<T>(object?: Dictionary<T> | NumericDictionary<T>): Array<[string, T]>;
    // toPairs(object?: object): Array<[string, any]>;
  }
}

