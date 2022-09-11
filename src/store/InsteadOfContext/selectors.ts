import { TAppState } from '../store'



export const selectIsPreloader = ( state: TAppState ) => state.insteadOfContext.isPreloader

