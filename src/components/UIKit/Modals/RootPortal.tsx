import React, {
  FC,
  PropsWithChildren
}                       from 'react'
import { createPortal } from 'react-dom'



const RootPortal: FC<PropsWithChildren> = ( { children } ) => createPortal( children, document.body )

export default RootPortal