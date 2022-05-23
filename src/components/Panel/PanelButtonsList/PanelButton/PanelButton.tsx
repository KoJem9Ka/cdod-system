import React from 'react'
import style from './PanelButton.module.scss'
import { NavLinkProps, useMatch } from 'react-router-dom'
import { usePanelOpening } from '../../../../store/InsteadOfContext/hook'
import NavLinkMotioned from '../../../MotionedCustomComponents/NavLinkMotioned'
import IconsPanel from '../../../../assets/icons/IconsPanel'
import { TCRoutes } from '../../PanelConfig'
import { motion, MotionProps } from 'framer-motion'

const wrapperProps: (i: number) => MotionProps = index => ({
  animate: {
    transition: { delay: index * .02 },
    x         : 0,
    opacity   : 1,
  },
  initial: {
    x      : -50,
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

export const PanelButton: React.FC<TPanelButtonProps> = ({ title, route, index }) => {
  const match = useMatch( route )
  const { opened } = usePanelOpening()

  const activeClassHandler: NavLinkProps['className'] = ({ isActive }) => [
    style.PanelButton,
    isActive && style.active,
    !opened && style.collapsed
  ].join( ' ' )
  //TODO: Иконки располагаются не ровно
  return (
    <NavLinkMotioned className={activeClassHandler} to={`/${route}`} layout>
      {match && <motion.div {...activeDivProps} className={style.backgrd} layoutId='bg'/>}
      <motion.span {...wrapperProps( index )}>
        <IconsPanel ico={route} layout/>
        {opened && <span>{title}</span>}
      </motion.span>
    </NavLinkMotioned>
  )
}
