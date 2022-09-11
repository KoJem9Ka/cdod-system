import React, {
  FC,
  useEffect
}                             from 'react'
import preloaderWebp          from './Preloader.webp'
import styled                 from 'styled-components'
import {
  useAppDispatch,
  useAppSelector
}                             from '../../store/store'
import { actionSetPreloader } from '../../store/InsteadOfContext/reducer'
import { selectIsPreloader }  from '../../store/InsteadOfContext/selectors'



type PreloaderWrapperProps = {
  loading1: boolean
}
const PreloaderWrapper = styled.div<PreloaderWrapperProps>`
  position        : fixed;
  left            : -100%;
  right           : -100%;
  top             : -100%;
  bottom          : -100%;

  background      : rgba(87, 189, 219, 0.15);
  backdrop-filter : blur(.5rem) brightness(50%);

  display         : flex;
  justify-content : center;
  align-items     : center;

  z-index         : 10;

  animation       : loading-open 0.3s ease;

  * {
    pointer-events : none;
    user-select    : none;
  }

  ${( { loading1 } ) => (loading1 ? '' : 'display: none;')} @keyframes loading-open {
    from {
      opacity   : 0;
      transform : scale(.5);
    }
    to {
      opacity   : 1;
      transform : scale(1);
    }
  }
`

let timer: number | undefined

export const usePreloader = ( nextLoading: boolean ) => {
  const dispatch    = useAppDispatch()
  const isPreloader = useAppSelector( selectIsPreloader )
  const isDifferent = () => isPreloader !== nextLoading
  useEffect( () => {
    if ( nextLoading )
      !timer && (timer = setTimeout( () => isDifferent() && dispatch( actionSetPreloader( true ) ), 500 ) as unknown as number)
    else {
      clearTimeout( timer )
      timer = undefined
      isDifferent() && dispatch( actionSetPreloader( false ) )
    }
  }, [ nextLoading ] )
}

export const Preloader: FC = () => {
  const isPreloader = useAppSelector( selectIsPreloader )
  return (
    <PreloaderWrapper loading1={isPreloader}>
      <img alt='loading animation' src={preloaderWebp}/>
    </PreloaderWrapper>
  )
}