import React               from 'react'
import style               from './PanelHeader.module.scss'
import { AbsolutePath }   from '../../../other/PathConfig'
import { useNavigate }     from 'react-router-dom'
import { usePanelOpening } from '../../../store/InsteadOfContext/hook'
import IconMenu            from '../../../assets/icons/IconMenu'
import IconLogo            from '../../../assets/icons/IconLogo'
import { SVGMotionProps }  from 'framer-motion'



const IconLogoProps: SVGMotionProps<SVGSVGElement> = {
  variants: {
    show: {
      x:          0,
      opacity:    1,
      transition: { delay: .05, duration: 1, type: 'spring' },
    },
    hide: {
      x:       -50,
      opacity: 0,
    },
  },
  initial:  'hide',
  animate:  'show',
  layout:   true,
}

export const PanelHeader: React.FC = () => {
  const navigate = useNavigate()
  const { opened, toggleOpened } = usePanelOpening()

  return (
    <div className={ [ style.PanelHeader, !opened && style.hidden ].join( ' ' ) }>
      { opened && <IconLogo { ...IconLogoProps } onClick={ () => navigate( AbsolutePath.Default ) }/> }
      <IconMenu layout onClick={ toggleOpened }/>
    </div>
  )
}
