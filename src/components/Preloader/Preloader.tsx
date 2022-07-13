import React, {
  FC,
  useState
}                    from 'react'
import preloaderWebp from './Preloader.webp'
import styled        from 'styled-components'



type PreloaderWrapperProps = {
  loading: boolean
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

  ${ ( { loading } ) => (loading ? '' : 'display: none;') } @keyframes loading-open {
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

let setLoading: React.Dispatch<React.SetStateAction<boolean>>
let timers: ReturnType<typeof setTimeout>[] = []

const usePreloader = ( loading: boolean ) => {
  if ( loading )
    timers.push( setTimeout( () => setLoading( true ), 500 ) )
  else {
    timers.forEach( timer => clearTimeout( timer ) )
    timers = []
    setLoading( false )
  }
}

export const Preloader: FC = () => {
  const [ isLoading, setIsLoading ] = useState<boolean>( false )
  setLoading = setIsLoading

  return (
    <PreloaderWrapper loading={ isLoading }>
      <img alt='loading animation' src={ preloaderWebp }/>
    </PreloaderWrapper>
  )
}

export default usePreloader