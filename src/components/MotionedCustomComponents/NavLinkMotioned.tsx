import React, { forwardRef } from 'react'
import {
  motion,
  MotionProps
}                            from 'framer-motion'
import {
  NavLink,
  NavLinkProps
}                            from 'react-router-dom'

//React.FC<{ to: To } & NavLinkProps>
const NavLinkMotioned = forwardRef<HTMLAnchorElement, NavLinkProps>( ( props, ref ) => (
  <NavLink ref={ ref } { ...props }>
    { props.children }
  </NavLink>
) )

export default motion( NavLinkMotioned )
