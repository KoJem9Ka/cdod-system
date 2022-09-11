import React, { FC }                 from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import RootPortal                    from './RootPortal'



const CSSModalCentered = createGlobalStyle<{ id: string }>`
  #${( { id } ) => id} {
    background : red;
  }
`

const Modal = styled.div`
  z-index    : 100;
  position   : fixed;
  left       : 10rem;
  top        : 10rem;
  bottom     : 10rem;
  right      : 10rem;
  background : red;
`


const ModalStudentCourse: FC = () => (
  <RootPortal>
    <Modal>
        модальное окно
    </Modal>
  </RootPortal>
)


export default ModalStudentCourse