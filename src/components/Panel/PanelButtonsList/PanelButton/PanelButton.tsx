import React               from 'react'
import style               from './PanelButton.module.scss'
import {
  NavLinkProps,
  useMatch
}                          from 'react-router-dom'
import { usePanelOpening } from '../../../../store/InsteadOfContext/hook'
import IconsPanel          from '../../../../assets/icons/IconsPanel'
import { TCRoutes }        from '../../PanelConfig'
import {
  AnimationProps,
  motion,
  MotionProps
}                          from 'framer-motion'
import { NavLinkMotioned } from '../../../UnstyledSkeletons/motionedComponents'
// import { AnimationProps }  from 'framer-motion/types/motion/types'


const NavLinkMotionedProps: ( i: number )=> AnimationProps = index => ({
  animate: {
    transition: { delay: index * .1 },
    x:          0,
    opacity:    1,
  },
  initial: {
    x:       -50,
    opacity: 0,
  },
})

const activeDivProps: MotionProps = {
  transition: { ease: [ .87, .08, .08, .89 ] },
}

type TPanelButtonProps = {
  title: string
  route: TCRoutes
  index: number
}

export const PanelButton: React.FC<TPanelButtonProps> = ( { title, route, index } ) => {
  const match = useMatch( route )
  const { opened } = usePanelOpening()

  const activeClassHandler: NavLinkProps['className'] = ( { isActive } ) => [
    style.PanelButton,
    isActive && style.active,
    !opened && style.collapsed
  ].join( ' ' )

  //TODO: Баг: При клике на нижнюю кнопку панели, предудыщая моргает
  return (
    <NavLinkMotioned
      className={ activeClassHandler }
      to={ `/${ route }` }
      layout
      { ...NavLinkMotionedProps( index ) }
    >
      { match && <motion.div { ...activeDivProps } className={ style.backgrd } layoutId='bg'/> }
      {/*<motion.span {...wrapperProps( index )}>*/ }
      <IconsPanel ico={ route } layout/>
      { opened && <span>{ title }</span> }
      {/*</motion.span>*/ }
    </NavLinkMotioned>
  )
}
