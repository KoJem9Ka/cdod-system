import {
  TAppState,
  useAppDispatch,
  useAppSelector
}                            from '../store'
import { actionTogglePanel } from './reducer'
import { useCallback }       from 'react'



const selectIsOpened = ( state: TAppState ) => state.insteadOfContext.panelOpened

export const usePanelOpening = () => {
  const dispatch = useAppDispatch()
  const opened = useAppSelector( selectIsOpened )
  const toggleOpened = useCallback( () => dispatch( actionTogglePanel() ), [] )
  return { opened, toggleOpened }
}

