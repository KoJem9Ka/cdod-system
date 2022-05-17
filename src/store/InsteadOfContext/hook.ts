import { useAppDispatch, useAppSelector } from '../store'
import { actionTogglePanel } from './reducer'

export const usePanelOpening = () => {
  const dispatch = useAppDispatch()
  const opened = useAppSelector( state => state.insteadOfContext.panelOpened )
  const toggleOpened = () => dispatch( actionTogglePanel() )
  return { opened, toggleOpened }
}
