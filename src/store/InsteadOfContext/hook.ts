import {
  store,
  TAppState,
  useAppSelector
}                            from '../store'
import { actionTogglePanel } from './reducer'



export const selectIsPanelOpened = ( state: TAppState ) => state.insteadOfContext.panelOpened
const toggleOpened               = () => store.dispatch( actionTogglePanel() )
export const usePanelOpening     = () => {
  const opened = useAppSelector( selectIsPanelOpened )
  return { opened, toggleOpened }
}

